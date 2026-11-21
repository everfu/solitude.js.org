import type { ReactNode } from 'react';
import { Figure, FigureHeader } from '../../ui/figure';
import { FIRST } from './data';
import { loadInks } from './presets';
import { FIRST_POSE, hangRopes } from './scene';
import { Stage } from './stage';

export async function Style({ cn }: { cn: boolean }) {
  const table = await loadInks();
  // the desk's cables in its first pose settle here, once: the browser takes their shape
  const ropes = hangRopes(FIRST_POSE);
  // the long title's claims carry it on in its light voice, a line each after a lit lamp of the
  // switches' kind
  const claims: ReactNode[] = [];
  for (const claim of (cn ? ['用 Markdown 和 MDX 写作。','自定义首页、侧栏与文章。','在 Astro、Hugo 或 Hexo 上发布。'] : ['Write with Markdown and MDX.', 'Customize your homepage, sidebar and posts.', 'Publish with Astro, Hugo or Hexo.'])) {
    claims.push(
      <li key={claim} className="relative ps-5.5 md:ps-3.5">
        <span
          aria-hidden
          className="absolute top-3.25 left-0 size-2 -translate-y-1/2 rounded-full border border-lp-ink bg-lp-sun after:absolute after:top-px after:left-px after:size-0.5 after:bg-lp-yellow"
        />
        {claim}
      </li>,
    );
  }

  return (
    <Figure id="style" aria-label="Style" status={`layout: ${FIRST}`} className="pb-16">
      <div className="px-(--lp-gutter) pt-16 pb-10 md:pb-12">
        <FigureHeader title={cn ? ['Solitude 是一款为', { term: '写作者' }, '打造的开源博客主题。'] : ['Solitude is an ', { term: 'open source' }, ' blog theme for ', { term: 'writers' }, ' and developers.']} className="max-w-6xl! text-pretty!" />
        <ul className="mt-6 flex flex-col gap-3 text-base font-light tracking-tight text-pretty">
          {claims}
        </ul>
      </div>
      <Stage
        table={table}
        hung={{ x: Array.from(ropes.x), y: Array.from(ropes.y) }}
      />
    </Figure>
  );
}
