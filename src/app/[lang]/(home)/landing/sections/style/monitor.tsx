'use client';
import { type KeyboardEvent, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { copy } from '../../content';
import { LAYOUTS, type LayoutId, TABS, type TabId, THEME_NAMES, type ThemeId } from './data';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import type { InkTable } from './presets';
import { STRIPES } from '../../ui/window';

interface MonitorProps {
  table: InkTable;
  tab: TabId;
  layout: LayoutId;
  theme: ThemeId;
  /** the theme goes on at once, without the print */
  instant: boolean;
  busy: boolean;
  onTab: (tab: TabId) => void;
  onBusy: (busy: boolean) => void;
  className?: string;
}

/** the browser: the hands-on tabs are its top edge, the chosen one's live page its screen */
export function Monitor({
  table,
  tab,
  layout,
  theme,

  busy,
  onTab,

  className,
}: MonitorProps) {
  const isCn = usePathname().startsWith('/cn');
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const values = table.inks[theme];
    for (let i = 0; i < table.tokens.length; i++) {
      node.style.setProperty('--preview-' + table.tokens[i], values.light[i]);
    }
  }, [table, theme]);
  // the arrows move along the tabs, a click or Enter opens one: each opens a page in full
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const from = TABS.indexOf((event.target as HTMLElement).dataset.tab as TabId);
    let to = from;
    if (event.key === 'ArrowRight') to = (from + 1) % TABS.length;
    else if (event.key === 'ArrowLeft') to = (from - 1 + TABS.length) % TABS.length;
    else if (event.key === 'Home') to = 0;
    else if (event.key === 'End') to = TABS.length - 1;
    else return;
    event.preventDefault();
    event.currentTarget.querySelector<HTMLElement>(`[data-tab="${TABS[to]}"]`)?.focus();
  }

  const tabs = [];
  for (const id of TABS) {
    const on = id === tab;
    tabs.push(
      <button
        key={id}
        type="button"
        role="tab"
        id={`style-tab-${id}`}
        data-tab={id}
        aria-selected={on}
        aria-controls="style-panel"
        tabIndex={on ? 0 : -1}
        onClick={() => onTab(id)}
        className={cn(
          'cursor-pointer border-e border-lp-line-strong px-2 text-xs leading-4 font-medium outline-none focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-current sm:px-3',
          on ? 'bg-lp-yellow text-lp-on-yellow' : 'hover:bg-lp-ink hover:text-lp-paper',
        )}
      >
        {copy.style.tabs[id].label}
      </button>,
    );
  }
  const docs = copy.style.tabs[tab];
  const name = LAYOUTS.find((item) => item.id === layout)!.name;

  // never taller than the screen between the menu and the status bar: the screen gives way
  return (
    <div
      className={cn(
        'flex max-h-[calc(100svh-var(--lp-menu-h)-var(--lp-status-h))] flex-col border border-lp-line-strong bg-lp-paper',
        className,
      )}
    >
      {/* the stripes give way to the tabs; a browser narrower than them scrolls its bar */}
      <div className="flex h-7 shrink-0 overflow-x-auto border-b border-lp-line-strong scrollbar-none [&::-webkit-scrollbar]:hidden">
        <div role="tablist" aria-label="Hands-on" onKeyDown={onKeyDown} className="flex shrink-0">
          {tabs}
        </div>
        <span aria-hidden className={`min-w-0 flex-1 ${STRIPES}`} />
        <span className="flex shrink-0 items-center px-1.5">
          {busy ? (
            // clack's spinner while the page is on its way, a turn every 4 ticks, turned by an
            // HTML box: the compositor can't turn an svg
            <span className="animate-[spin_500ms_linear_infinite] motion-reduce:animate-none">
              <svg aria-hidden viewBox="-7 -7 14 14" className="block size-3.5">
                <circle r="6.5" className="fill-lp-paper stroke-lp-ink" />
                <path d="M-6.5 0a6.5 6.5 0 0 0 13 0z" className="fill-lp-ink" />
              </svg>
            </span>
          ) : (
            // the box at the end of the bar opens the tab's docs, its hit area 24px around it
            <a
              href={(isCn ? '/cn' : '') + docs.href}
              aria-label={`${docs.label} docs`}
              className="relative flex size-3.5 items-center justify-center bg-lp-paper text-lp-ink transition-none after:absolute after:-inset-1.25 hover:bg-lp-ink hover:text-lp-paper focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-lp-ink"
            >
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          )}
        </span>
      </div>
      {/* a monitor's screen: a desktop's, 4:3 beside the pickers, a phone's on a phone; the frame
          fits whatever box it is given */}
      <div ref={root} className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-4 sm:p-10" style={{background: 'var(--preview-muted, var(--lp-paper-2))'}}>
          <Image key={tab + layout} src={previews[tab === 'layouts' ? layout : tab]} alt={docs.label + ' — ' + name} width={1200} height={800} className="max-h-full w-auto max-w-full object-contain shadow-lg" />
        </div>
    </div>
  );
}

const previews = {
  docs: '/showcase/astro-home-desktop.png', notebook: '/showcase/astro-post-mobile-dark.png',
  flux: '/base-useage/home_top_banner.png', glass: '/base-useage/aside_my_card.png',
  spacious: '/showcase/blog-zhheo-desktop.webp', home: '/showcase/blog-zhheo-mobile.webp',
  story: '/showcase/astro-post-mobile-dark.png', openapi: '/base-useage/menu_menu.png',
  graphql: '/base-useage/aside_toc.png', asyncapi: '/base-useage/home_top_banner.png',
};
