import assert from 'node:assert/strict';
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import * as icons from 'lucide-react';
import nextConfig from '../next.config.mjs';

const root = path.resolve('content/docs');
const parser = remark().use(remarkGfm);
const versions = ['astro', 'hugo', 'hexo'];
const sections = ['getting-started', 'configuration', 'content-writing', 'features', 'integrations', 'deployment', 'migration', 'faq', 'reference'];
const failures = [];
const pages = new Map();
const metadata = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  }));
  return nested.flat();
}

function nodeText(node) {
  return node.value ?? node.children?.map(nodeText).join('') ?? '';
}

for (const file of await walk(root)) {
  if (file.endsWith('.json')) {
    metadata.push({ file, data: JSON.parse(await readFile(file, 'utf8')) });
    continue;
  }
  if (!file.endsWith('.mdx')) continue;
  const relative = path.relative(root, file);
  const cn = relative.endsWith('.cn.mdx');
  const slug = relative.replace(/(?:\.cn)?\.mdx$/, '').split(path.sep).join('/');
  const url = `${cn ? '/cn' : ''}/docs/${slug}`;
  const raw = await readFile(file, 'utf8');
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const tree = parser.parse(body);
  const anchors = new Set();
  const counts = new Map();
  const links = [];
  visit(tree, (node) => {
    if (node.type === 'heading') {
      const base = nodeText(node).toLowerCase().replace(/[^\p{L}\p{M}\p{N}_\- ]/gu, '').replace(/ /g, '-');
      const count = counts.get(base) ?? 0;
      anchors.add(count ? `${base}-${count}` : base);
      counts.set(base, count + 1);
    }
    if (node.type === 'link' || node.type === 'image') links.push(node.url);
    if (node.type === 'html') {
      for (const match of node.value.matchAll(/(?:href|to|src)=["']([^"']+)["']/g)) links.push(match[1]);
    }
  });
  pages.set(url, { file, cn, slug, links, anchors });
  if (!/^title:\s*\S/m.test(raw) || !/^description:\s*\S/m.test(raw)) failures.push(`${relative}: missing title or description`);
}
const redirects = new Map((await nextConfig.redirects()).map(({ source, destination }) => [source, destination]));
function resolveRedirect(url) {
  const seen = new Set();
  while (redirects.has(url)) {
    if (seen.has(url)) throw new Error(`Redirect cycle: ${url}`);
    seen.add(url);
    url = redirects.get(url);
  }
  return url;
}
let checkedLinks = 0;
async function checkLink(href, origin, file) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) return;
  const url = new URL(href, `https://docs.example${origin}`);
  let pathname = decodeURIComponent(url.pathname).replace(/\/$/, '');
  try { pathname = resolveRedirect(pathname); } catch (error) { failures.push(error.message); return; }
  const target = pages.get(pathname);
  if (pathname.startsWith('/docs/') || pathname.startsWith('/cn/docs/')) {
    if (!target) failures.push(`${path.relative(root, file)}: missing page ${href}`);
    else if (url.hash && !target.anchors.has(decodeURIComponent(url.hash.slice(1)))) failures.push(`${path.relative(root, file)}: missing anchor ${href}`);
  } else if (pathname && pathname !== '/cn') {
    try { await access(path.resolve('public', `.${pathname}`)); }
    catch { failures.push(`${path.relative(root, file)}: missing local asset ${href}`); }
  }
  checkedLinks++;
}
for (const [url, page] of pages) {
  const counterpart = `${page.cn ? '' : '/cn'}/docs/${page.slug}`;
  if (!pages.has(counterpart)) failures.push(`${page.slug}: missing translation`);
  for (const href of page.links) await checkLink(href, url, page.file);
}
for (const { file, data } of metadata) {
  if (!file.endsWith('meta.json') && !file.endsWith('meta.cn.json')) continue;
  const cn = file.endsWith('.cn.json');
  if (data.icon && !(data.icon in icons)) failures.push(`${file}: unknown icon ${data.icon}`);
  const counterpart = file.replace(/meta(?:\.cn)?\.json$/, cn ? 'meta.json' : 'meta.cn.json');
  try { await access(counterpart); } catch { failures.push(`${file}: missing translated navigation`); }
  const folder = path.dirname(file);
  for (const item of data.pages ?? []) {
    const link = item.match(/^\[(.*?)\]\((.*?)\)$/);
    if (link) {
      await checkLink(link[2], `${cn ? '/cn' : ''}/docs/`, file);
      continue;
    }
    if (/^(?:\.\.\.|!|---)/.test(item)) continue;
    const node = path.join(folder, item);
    try { await access(node); }
    catch {
      try { await access(`${node}${cn ? '.cn' : ''}.mdx`); }
      catch { failures.push(`${path.relative(root, file)}: missing navigation item ${item}`); }
    }
  }
}
for (const version of versions) {
  const data = JSON.parse(await readFile(path.join(root, version, 'meta.json'), 'utf8'));
  assert.deepEqual(data.pages, sections, `${version}: section order`);
  assert.equal(data.root, true);
}
for (const lang of ['', '/cn']) {
  assert.equal(resolveRedirect(`${lang}/docs`), `${lang}/docs/astro/getting-started/introduction`);
}
assert.deepEqual(JSON.parse(await readFile(path.join(root, 'meta.json'), 'utf8')).pages, versions);
for (const [from] of redirects) {
  const target = resolveRedirect(from);
  if (!pages.has(target)) failures.push(`Redirect ${from}: missing destination ${target}`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.size} bilingual pages, ${checkedLinks} links/anchors, ${redirects.size} redirects, and navigation for all editions.`);
}
