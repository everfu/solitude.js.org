import fs from 'node:fs/promises';
import path from 'node:path';

const oldRoot = '/Users/everfu/Projects/solitude.js.org';
const newRoot = '/Users/everfu/Projects/solitude-docs';
const outRoot = path.join(newRoot, 'content/docs');

const sections = [
  '1.getting-started',
  '2.configuration',
  '3.faq',
];

const slugName = (name) => name.replace(/^\d+\./, '').replace(/\.md$/, '');
const outName = (file, locale) => `${slugName(path.basename(file))}${locale === 'cn' ? '.cn' : ''}.mdx`;

function parseSimpleYaml(text) {
  const data = {};
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([^:#]+):\s*(.*)$/);
    if (!match) continue;
    data[match[1].trim()] = match[2].trim();
  }
  return data;
}

function extractFrontmatter(raw) {
  if (!raw.startsWith('---')) return [{}, raw];
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return [{}, raw];
  return [parseSimpleYaml(raw.slice(3, end)), raw.slice(end + 4).replace(/^\r?\n/, '')];
}

function normalizeFrontmatter(meta) {
  const icon = normalizeIcon(meta.icon);
  const keep = {
    title: meta.title || 'Untitled',
    description: meta.description || '',
    icon,
  };
  let yaml = '---\n';
  for (const [key, value] of Object.entries(keep)) {
    if (!value) continue;
    yaml += `${key}: ${JSON.stringify(value)}\n`;
  }
  return `${yaml}---\n\n`;
}

function normalizeIcon(icon) {
  if (!icon) return undefined;
  if (icon.startsWith('/')) return undefined;
  const name = icon.replace(/^lucide:/, '');
  const normalized = name
    .split('-')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
  return (
    {
      MessageCircleQuestion: 'MessageCircleQuestionMark',
      LetterText: 'FileText',
      Edit: 'Pencil',
    }[normalized] ?? normalized
  );
}

function attrsToProps(attrs = '') {
  const props = [];
  attrs.replace(/([A-Za-z0-9_-]+)=("([^"]*)"|'([^']*)'|\{([^}]*)\}|([^\s}]+))/g, (_, key, _full, dbl, sgl, braced, bare) => {
    const value = dbl ?? sgl ?? braced ?? bare ?? '';
    if (value === 'true' || value === 'false') props.push(`${key}={${value}}`);
    else props.push(`${key}=${JSON.stringify(value)}`);
    return '';
  });
  return props.length > 0 ? ` ${props.join(' ')}` : '';
}

function convertShortcodes(md) {
  return md
    .replace(/:badge\[([^\]]+)\]\{([^}]*)\}/g, (_, text, attrs) => `<Badge${attrsToProps(attrs)}>${text}</Badge>`)
    .replace(/:pm-install\{name="([^"]+)"\}/g, (_, name) => `<PmInstall name=${JSON.stringify(name)} />`)
    .replace(/:read-more\{([^}]*)\}/g, (_, attrs) => `<ReadMore${attrsToProps(attrs)} />`)
    .replace(/\{:(zoom)="false"\}/g, '');
}

function convertFileTrees(md) {
  return md.replace(/::file-tree\s*\n---\s*\ntree:\s*\n([\s\S]*?)\n---\s*\n::/g, (_, tree) => {
    const lines = tree
      .split(/\r?\n/)
      .map((line) => line.replace(/^\s*-\s*/, '').replace(/:$/, '').trim())
      .filter(Boolean);
    return `<Files>\n${lines.map((name) => `  <File name=${JSON.stringify(name)} />`).join('\n')}\n</Files>`;
  });
}

function convertCodeGroups(md) {
  return md.replace(/::code-group\s*\n([\s\S]*?)\n::/g, (_, body) => {
    const blocks = [...body.matchAll(/```([^\n\[]+)?(?:\s*\[([^\]]+)\])?\n([\s\S]*?)```/g)];
    if (blocks.length === 0) return body;
    const items = blocks.map((b, i) => b[2] || `Option ${i + 1}`);
    const tabs = blocks
      .map((b) => `<Tab>\n\n\`\`\`${(b[1] || '').trim()}\n${b[3]}\`\`\`\n\n</Tab>`)
      .join('\n');
    return `<Tabs items={${JSON.stringify(items)}}>\n${tabs}\n</Tabs>`;
  });
}

function convertTabs(md) {
  return md.replace(/::tabs[^\n]*\n([\s\S]*?)\n::/g, (_, body) => {
    const panels = [...body.matchAll(/::div\{([^}]*)\}\s*\n([\s\S]*?)\n\s*::/g)];
    if (panels.length === 0) return body;
    const labels = panels.map((p, i) => {
      const label = p[1].match(/label="([^"]+)"/)?.[1];
      return label || `Tab ${i + 1}`;
    });
    return `<Tabs items={${JSON.stringify(labels)}}>\n${panels.map((p) => `<Tab>\n${p[2].trim()}\n</Tab>`).join('\n')}\n</Tabs>`;
  });
}

function convertAlerts(md) {
  return md.replace(/::alert\{([^}]*)\}\s*\n([\s\S]*?)\n::/g, (_, attrs, body) => {
    let type = attrs.match(/type="([^"]+)"/)?.[1] || 'info';
    if (type === 'danger') type = 'error';
    if (type === 'note' || type === 'example') type = 'info';
    return `<Callout type=${JSON.stringify(type)}>\n${body.trim()}\n</Callout>`;
  });
}

function convertCollapsibles(md) {
  return md.replace(/::collapsible[^\n]*\n([\s\S]*?)\n::/g, (_, body) => {
    const title = body.match(/#title\s*\n([\s\S]*?)(?=\n#content|\n$)/)?.[1]?.trim() || 'Question';
    const content = body.match(/#content\s*\n([\s\S]*)/)?.[1]?.trim() || '';
    return `<Accordions type="single" collapsible defaultValue="item">\n<Accordion title=${JSON.stringify(title)} value="item">\n${content}\n</Accordion>\n</Accordions>`;
  });
}

function convertTeamCards(md) {
  return md.replace(/::team-card-group\s*\n([\s\S]*?)\n::/g, (_, body) => {
    const cards = [...body.matchAll(/::team-card\s*\n---\s*\n([\s\S]*?)\n---\s*\n::/g)].map((match) => {
      const data = parseSimpleYaml(match[1]);
      const link = match[1].match(/to:\s*(https?:\/\/\S+)/)?.[1] || '';
      return `<TeamCard name=${JSON.stringify(data.name || data.title || 'Team')} title=${JSON.stringify(data.title || '')} description=${JSON.stringify(data.description || '')} link=${JSON.stringify(link)} />`;
    });
    return `<TeamCardGroup>\n${cards.join('\n')}\n</TeamCardGroup>`;
  });
}

function convertSteps(md) {
  return md.replace(/::steps\s*\n([\s\S]*?)\n::/g, (_, body) => `<Steps>\n${body.trim()}\n</Steps>`);
}

function convertNuxtBlocks(md) {
  return md
    .replace(/::hero[\s\S]*?\n::/g, '')
    .replace(/::\s*$/gm, '')
    .replace(/::([a-zA-Z0-9-]+)(?:\{([^}]*)\})?/g, (_, name, attrs) => {
      const component = name.split('-').map((part) => part[0]?.toUpperCase() + part.slice(1)).join('');
      return `<${component}${attrsToProps(attrs || '')}>`;
    });
}

function convert(md) {
  let out = md.replace(/\r\n/g, '\n');
  out = out
    .replace(/<br\s*>/gi, '<br />')
    .replace(/<\/?span\b[^>]*>/gi, '')
    .replace(/\{(?:no-zoom|zoom="false"|:zoom="false")\}/g, '')
    .replace(/<b>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/\{%([^%]+)%\}/g, (_, inner) => `\`{%${inner}%}\``);
  out = convertFileTrees(out);
  out = convertCodeGroups(out);
  out = convertTabs(out);
  out = convertAlerts(out);
  out = convertCollapsibles(out);
  out = convertTeamCards(out);
  out = convertSteps(out);
  out = convertShortcodes(out);
  out = convertNuxtBlocks(out);
  return out;
}

async function copyAssets() {
  await fs.mkdir(path.join(newRoot, 'public'), { recursive: true });
  for (const name of ['logo.svg', 'logo-dark.svg', 'favicon.ico', 'ProjectIcon', 'base-useage', 'example.png']) {
    await fs.cp(path.join(oldRoot, 'public', name), path.join(newRoot, 'public', name), {
      recursive: true,
      force: true,
    });
  }
}

async function writeMeta(srcDir, destDir) {
  const source = path.join(srcDir, '_dir.yml');
  try {
    const meta = parseSimpleYaml(await fs.readFile(source, 'utf8'));
    const pages = (await fs.readdir(srcDir))
      .filter((file) => /^\d+/.test(file) && file.endsWith('.md'))
      .sort()
      .map((file) => slugName(file));
    await fs.writeFile(
      path.join(destDir, 'meta.json'),
      `${JSON.stringify({ title: meta.title, icon: normalizeIcon(meta.icon), pages }, null, 2)}\n`,
    );
  } catch {
    // no directory metadata
  }
}

async function migrateLocale(locale) {
  const localeRoot = locale === 'cn' ? path.join(oldRoot, 'content/cn') : path.join(oldRoot, 'content');
  const [homeMeta] = extractFrontmatter(await fs.readFile(path.join(localeRoot, 'index.md'), 'utf8'));
  await fs.mkdir(outRoot, { recursive: true });
  await fs.writeFile(
    path.join(outRoot, locale === 'cn' ? 'index.cn.mdx' : 'index.mdx'),
    normalizeFrontmatter({
      ...homeMeta,
      description:
        locale === 'cn'
          ? 'Solitude 是一个极简而优雅的 Hexo 主题，专为开发人员和作家设计。'
          : 'Solitude is a minimalist and elegant Hexo theme designed for developers and writers.',
    }) +
      (locale === 'cn'
        ? '欢迎使用 Solitude 文档。请选择左侧章节开始阅读。\n'
        : 'Welcome to the Solitude documentation. Choose a section from the sidebar to get started.\n'),
  );

  for (const section of sections) {
    const sectionSrc = path.join(localeRoot, section);
    const sectionDest = path.join(outRoot, slugName(section));
    await fs.mkdir(sectionDest, { recursive: true });
    await writeMeta(sectionSrc, sectionDest);

    const entries = await fs.readdir(sectionSrc, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const [meta, body] = extractFrontmatter(await fs.readFile(path.join(sectionSrc, entry.name), 'utf8'));
        await fs.writeFile(path.join(sectionDest, outName(entry.name, locale)), normalizeFrontmatter(meta) + convert(body));
      } else if (entry.isDirectory()) {
        const subSrc = path.join(sectionSrc, entry.name);
        const subDest = path.join(sectionDest, slugName(entry.name));
        await fs.mkdir(subDest, { recursive: true });
        await writeMeta(subSrc, subDest);
        for (const file of (await fs.readdir(subSrc)).filter((file) => file.endsWith('.md')).sort()) {
          const [meta, body] = extractFrontmatter(await fs.readFile(path.join(subSrc, file), 'utf8'));
          await fs.writeFile(path.join(subDest, outName(file, locale)), normalizeFrontmatter(meta) + convert(body));
        }
      }
    }
  }
}

await fs.rm(outRoot, { recursive: true, force: true });
await copyAssets();
await migrateLocale('en');
await migrateLocale('cn');
await fs.writeFile(
  path.join(outRoot, 'meta.json'),
  `${JSON.stringify({ title: 'Docs', pages: ['index', 'getting-started', 'configuration', 'faq'] }, null, 2)}\n`,
);
