import Image from 'next/image';
import { ArrowUpRight, Cloud, Gift, Sparkles, Zap, type LucideIcon } from 'lucide-react';
import type { AdItem } from '@/lib/ads';
import { cn } from '@/lib/cn';

type AdCardProps = {
  ad: AdItem;
  variant?: 'inline' | 'sidebar' | 'home';
  className?: string;
};

const imageSizes = {
  inline: '(min-width: 768px) 640px, calc(100vw - 2rem)',
  sidebar: '236px',
  home: '(min-width: 1024px) 420px, calc(100vw - 2rem)',
} satisfies Record<NonNullable<AdCardProps['variant']>, string>;

const imageLayout = {
  inline: 'min-h-[150px] aspect-[3/1]',
  sidebar: 'min-h-[112px] aspect-[2.55/1]',
  home: 'min-h-[128px] aspect-[4/1] sm:min-h-[140px]',
} satisfies Record<NonNullable<AdCardProps['variant']>, string>;

const contentClass = {
  inline: 'max-w-[54%] p-5 md:p-6',
  sidebar: 'max-w-[78%] p-2.5',
  home: 'max-w-[50%] p-5 md:p-6',
} satisfies Record<NonNullable<AdCardProps['variant']>, string>;

const imagePosition = {
  inline: 'object-center',
  sidebar: 'object-[58%_center]',
  home: 'object-[62%_center]',
} satisfies Record<NonNullable<AdCardProps['variant']>, string>;

const adIcons = {
  cloud: Cloud,
  gift: Gift,
  sparkles: Sparkles,
  zap: Zap,
} satisfies Record<NonNullable<AdItem['icon']>, LucideIcon>;

function AdBadge({ variant }: { variant: NonNullable<AdCardProps['variant']> }) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute right-2 top-2 rounded border border-white/18 bg-black/20 px-1.5 py-0.5 text-[10px] font-medium leading-none text-white/70 backdrop-blur-md',
        variant === 'sidebar' &&
          'right-3 top-3 border-fd-border/70 bg-fd-background/75 text-[11px] text-fd-muted-foreground shadow-sm dark:border-white/12 dark:bg-white/8 dark:text-white/70',
      )}
    >
      AD
    </span>
  );
}

export function AdCard({ ad, variant = 'inline', className }: AdCardProps) {
  const title = ad.title ?? ad.link;
  const ariaLabel = ad.title ? `${ad.title}${ad.subtitle ? ` - ${ad.subtitle}` : ''}` : ad.link;
  const Icon = ad.icon ? adIcons[ad.icon] : null;
  const cta = ad.cta ?? '立即查看';

  if (!ad.image) {
    return (
      <a
        href={ad.link}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={cn(
          'group not-prose relative block overflow-hidden rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/55 hover:bg-fd-card/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background',
          variant === 'sidebar' && 'p-3',
          className,
        )}
      >
        {Icon && (
          <span className="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-brand/15 bg-brand/10 text-brand">
            <Icon className="size-4.5" />
          </span>
        )}
        <p className={cn('font-semibold tracking-tight', variant === 'sidebar' ? 'text-sm' : 'text-base')}>
          {title}
        </p>
        {ad.subtitle && (
          <p className={cn('mt-1.5 text-fd-muted-foreground', variant === 'sidebar' ? 'text-xs leading-5' : 'text-sm leading-6')}>
            {ad.subtitle}
          </p>
        )}
        <span className={cn('mt-3 inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1.5 text-xs font-semibold text-brand-foreground shadow-sm transition-transform duration-300 group-hover:translate-x-0.5', variant === 'sidebar' && 'mt-2 px-2 py-1 text-[11px]')}>
          {cta}
          <ArrowUpRight className="size-3.5" />
        </span>
        <AdBadge variant={variant} />
      </a>
    );
  }

  if (variant === 'sidebar') {
    return (
      <a
        href={ad.link}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className={cn(
          'group not-prose relative block overflow-hidden rounded-lg border border-fd-border/55 bg-fd-card shadow-sm ring-1 ring-black/5 transition-[border-color,filter] duration-200 hover:border-brand/45 hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background dark:border-white/10 dark:ring-white/10 dark:hover:border-brand/45',
          className,
        )}
      >
        <div className="relative aspect-[638/244] w-full overflow-hidden bg-fd-secondary">
          <Image
            src={ad.image}
            alt={ad.title ?? ''}
            fill
            sizes={imageSizes.sidebar}
            className={cn('object-cover transition-transform duration-300 group-hover:scale-[1.01] group-focus-visible:scale-[1.01]', imagePosition.sidebar)}
          />
          <span className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-[72%] flex-col justify-center px-4 text-white">
            {ad.eyebrow && (
              <span className="mb-2 w-fit rounded-md border border-black/45 bg-fd-foreground/75 px-2 py-1 text-[11px] font-medium leading-none text-fd-background shadow-sm backdrop-blur-sm">
                {ad.eyebrow}
              </span>
            )}
            <p className="line-clamp-2 text-[18px] font-semibold leading-6 tracking-normal drop-shadow-sm">
              {title}
            </p>
            {ad.subtitle && (
              <p className="mt-1 line-clamp-1 text-[12px] font-medium leading-5 text-white/90 drop-shadow-sm">
                {ad.subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="bg-fd-card px-4 py-3 dark:bg-fd-card/95">
          <p className="line-clamp-2 text-[14px] font-semibold leading-5 text-fd-foreground">
            {ad.eyebrow ? `${ad.eyebrow} · ` : ''}
            {title}
          </p>
          {ad.subtitle && (
            <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-fd-muted-foreground">
              {ad.subtitle}
            </p>
          )}
        </div>
        <AdBadge variant={variant} />
      </a>
    );
  }

  return (
    <a
      href={ad.link}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={cn(
        'group not-prose relative block overflow-hidden rounded-lg border border-fd-border/55 bg-fd-secondary shadow-sm ring-1 ring-black/5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/65 hover:shadow-xl hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background dark:border-white/10 dark:ring-white/10 dark:hover:border-brand/75 dark:hover:shadow-black/50',
        imageLayout[variant],
        className,
      )}
    >
      <Image
        src={ad.image}
        alt={ad.title ?? ''}
        fill
        sizes={imageSizes[variant]}
        className={cn('object-cover transition-transform duration-500 group-hover:scale-[1.035] group-focus-visible:scale-[1.035]', imagePosition[variant])}
      />
      <span className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/30 to-transparent dark:from-black/72 dark:via-black/34" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/14 to-white/10 dark:from-black/18 dark:to-white/5" />
      <span className="absolute inset-y-[-45%] left-[-60%] w-1/2 rotate-12 bg-white/25 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[310%] group-focus-visible:translate-x-[310%]" />
      {(ad.title || ad.subtitle || Icon) && (
        <div className={cn('absolute inset-y-0 left-0 flex flex-col justify-center text-white', contentClass[variant])}>
          {Icon && (
            <span className="mb-2 inline-flex size-7 items-center justify-center rounded-md border border-white/25 bg-white/14 text-white/95 shadow-sm backdrop-blur-sm">
              <Icon className="size-3.5" />
            </span>
          )}
          {ad.eyebrow && (
            <p className="mb-1 w-fit rounded-full bg-white/16 px-2 py-0.5 text-[11px] font-semibold leading-none text-white/90 backdrop-blur-sm">
              {ad.eyebrow}
            </p>
          )}
          {ad.title && (
            <p className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight drop-shadow-sm md:text-2xl">
              {ad.title}
            </p>
          )}
          {ad.subtitle && (
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/90 drop-shadow-sm md:text-base">
              {ad.subtitle}
            </p>
          )}
          <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-neutral-950 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
            <span className="truncate">{cta}</span>
            <ArrowUpRight className="size-3.5 shrink-0" />
          </span>
        </div>
      )}
      <AdBadge variant={variant} />
    </a>
  );
}
