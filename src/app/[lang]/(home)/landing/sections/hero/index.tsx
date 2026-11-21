import { docsVersions, docsVersionConfig, previewUrl, themeRepositoryUrl } from '@/lib/shared';
import { ArrowUpRight } from 'lucide-react';
import { Figure } from '../../ui/figure';
import { Glitch } from './glitch';
import { Stage } from './stage';
const invert =
  'transition-none hover:bg-lp-ink hover:text-lp-paper focus-visible:bg-lp-ink focus-visible:text-lp-paper focus-visible:outline-none';

/** a screen below the menu: the text and the sky over the horizon, the sky beside the text on
 * desktop and under it on phones */
export function Hero({ cn }: { cn: boolean }) {
  return (
    <Figure
      id="solitude"
      aria-label="Solitude"
      status="ready"
      className="grid min-h-[calc(100svh-var(--lp-menu-h))] grid-rows-[auto_1fr_auto] gap-x-12 px-(--lp-gutter) pb-(--lp-status-h) @container lg:grid-cols-2 lg:grid-rows-[1fr_auto]"
    >
      <div className="py-8 lg:self-center">
        <h1 className="text-[clamp(2.75rem,6vw,5rem)] leading-[1.06] tracking-tight">
          <span className="font-medium text-lp-orange"><Glitch>Solitude</Glitch></span><br />
          {cn ? '给日常一个家。' : 'A home for your stories.'}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-lp-ink-2">
          {cn ? '一款开源个人博客主题。写长文、整理相册，也给常去的朋友小站留个位置。'
            : 'An open-source personal blog theme for long reads, photo collections, and a blogroll of places worth visiting.'}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={previewUrl} className={`inline-flex h-11 items-center gap-2 border border-lp-line-strong bg-lp-yellow px-5 font-medium text-lp-on-yellow ${invert}`}>
            {cn ? '逛逛示例博客' : 'Visit the demo blog'} <ArrowUpRight aria-hidden className="size-4" />
          </a>
          <a href={themeRepositoryUrl} className={`inline-flex h-11 items-center gap-1 px-3 font-medium underline decoration-lp-line-strong underline-offset-4 ${invert}`}>
            GitHub <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </div>
        <p className="mt-5 text-sm text-lp-ink-2">
          {cn ? '主题版本　' : 'Editions　'}
          {docsVersions.map((version, i) => (
            <span key={version}>
              {i > 0 && ' · '}
              <a href={docsVersionConfig[version].previewUrl} className={`text-lp-ink ${invert}`}>{docsVersionConfig[version].label}</a>
            </span>
          ))}
        </p>
      </div>
      <Stage cn={cn} />
      <div
        aria-hidden
        className="relative col-span-full -mx-(--lp-gutter) h-10 border-t border-lp-line-strong"
      >
        <div className="h-1.5 bg-[repeating-linear-gradient(to_right,var(--lp-line-strong)_0_1px,transparent_1px_24px)] bg-position-(--lp-gutter)" />
        <div className="absolute inset-x-0 top-0 h-2.5 bg-[repeating-linear-gradient(to_right,var(--lp-line-strong)_0_1px,transparent_1px_240px)] bg-position-(--lp-gutter)" />
      </div>
    </Figure>
  );
}
