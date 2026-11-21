import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Figure, FigureHeader } from '../../ui/figure';
import { Command } from '../../ui/command';
import { command } from '../../content';
import { Stage } from './stage';
import { Wordmark } from './wordmark';
import { themeRepositoryUrl } from '@/lib/shared';

export function Start({ cn, docs }: { cn: boolean; docs: string }) {
  const label = cn ? '官方文档' : 'Official Docs';

  return (
    <Figure id="start" aria-label={cn ? '开始' : 'Start'} status="ready">
      <Stage>
        <FigureHeader title={cn ? ['搭起你的', { term: '第一个博客' }, '。'] : ['Start a blog ', { term: 'of your own' }, '.']} />
        <div>
          <p className="mb-3 text-sm text-lp-ink-2">{cn ? '从 Astro 版本开始' : 'Start with the Astro edition'}</p>
          <Command command={command} className="w-full" />
        </div>
        <a href={themeRepositoryUrl} className="flex w-fit items-center gap-1 underline underline-offset-4">
          {cn ? '在 GitHub 查看主题' : 'Explore the theme on GitHub'} <ArrowUpRight size={16} />
        </a>
      </Stage>
      <Link href={docs} aria-label={label} className="group block border-t border-lp-line px-(--lp-gutter) pt-5 focus-visible:outline-2 focus-visible:-outline-offset-4">
        <span className="flex items-center justify-between text-sm text-lp-ink-2">
          <span>{cn ? 'Solitude · 安装、配置与写作指南' : 'Solitude · Installation, configuration and writing guides'}</span>
          <span className="border border-lp-line-strong p-2 group-hover:bg-lp-yellow group-hover:text-lp-on-yellow"><ArrowUpRight size={18} /></span>
        </span>
        <Wordmark word={label} />
      </Link>
    </Figure>
  );
}
