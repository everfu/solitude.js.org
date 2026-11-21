'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { docsVersionConfig, docsVersions, type DocsVersion } from '@/lib/shared';
import { Figure, FigureHeader } from '../ui/figure';
import { Shadow, Window } from '../ui/window';
import './showcase.css';

const examples = {
  astro: {
    article: 'p/getting-started/',
    cn: '从一篇 Markdown 文章开始，在 MDX 中穿插组件，把图文和示例编排在同一页。',
    en: 'Start with a Markdown post and use MDX components to bring pictures, prose, and examples onto the same page.',
  },
  hugo: {
    article: 'p/shortcode-showcase.html',
    cn: '用 Hugo 短代码为文章加入折叠内容、链接卡片和图表，继续在 Markdown 中写作。',
    en: 'Write in Markdown and add collapsible sections, link cards, and diagrams with Hugo shortcodes.',
  },
  hexo: {
    article: 'p/f86654a0.html',
    cn: '用主题配置编排首页和侧栏。这篇实战文章展示了如何将热门文章放进侧栏卡片。',
    en: 'Arrange your homepage and sidebar through theme settings. This tutorial builds a sidebar card for popular posts.',
  },
};

export function Showcase({ cn }: { cn: boolean }) {
  const [edition, select] = useState<DocsVersion>('astro');
  const { label, previewUrl } = docsVersionConfig[edition];
  const example = examples[edition];
  const article = new URL(example.article, previewUrl).href;
  const homeLabel = cn ? '打开示例首页' : 'Open demo homepage';
  const postLabel = cn ? '阅读示例文章' : 'Read sample post';

  return (
    <Figure id="showcase" aria-label={cn ? '主题实景' : 'Showcase'} className="px-(--lp-gutter) py-(--lp-section)">
      <FigureHeader title={cn ? ['三个版本，看看 ', { term: 'Solitude' }, ' 的实际模样。'] : ['Explore ', { term: 'Solitude' }, ' across three blog engines.']} />
      <div className="showcase-layout">
        <div className="showcase-desk" id="edition-preview">
          <div key={edition} className="showcase-windows">
            <a className="showcase-home" href={previewUrl} aria-label={label + ' · ' + homeLabel}>
              <Shadow />
              <Window title={edition + '/index.html'}>
                <Image src={'/showcase/' + edition + '-home.webp'} width={1440} height={900} alt={cn ? label + ' 博客桌面首页' : label + ' desktop homepage'} sizes="(min-width: 1100px) 59vw, 85vw" />
              </Window>
            </a>
            <a className="showcase-article" href={article} aria-label={label + ' · ' + postLabel}>
              <Shadow />
              <Window title={edition + '/post'}>
                <Image src={'/showcase/' + edition + '-article.webp'} width={780} height={1688} alt={cn ? label + ' 手机文章页' : label + ' mobile article'} sizes="(min-width: 1100px) 16vw, 24vw" />
              </Window>
            </a>
          </div>
        </div>
        <div className="showcase-selector">
          <Window title={cn ? '选择主题版本' : 'Choose an edition'}>
            <div role="group" aria-label={cn ? '主题版本' : 'Theme edition'}>
              {docsVersions.map((version) => (
                <button key={version} type="button" aria-pressed={version === edition} aria-controls="edition-preview edition-details" onClick={() => select(version)}>
                  <Image src={'/showcase/' + version + '-home.webp'} alt="" width={144} height={90} sizes="72px" />
                  <span>{docsVersionConfig[version].label}</span>
                  {version === edition && <Check size={16} aria-hidden />}
                </button>
              ))}
            </div>
          </Window>
          <div id="edition-details" aria-live="polite" aria-atomic="true">
            <h3>{label} Solitude</h3>
            <p>{cn ? example.cn : example.en}</p>
            <div className="showcase-links">
              <a href={previewUrl}>{homeLabel} <ArrowUpRight size={14} /></a>
              <a href={article}>{postLabel} <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </Figure>
  );
}
