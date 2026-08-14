'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { formatAmount, type HomeLocale, type Sponsor } from './home.data';

const DESKTOP_COLUMNS = 7;
const MOBILE_COLUMNS = 2;

function buildSerpentinePath(rows: number, width: number) {
  if (rows < 1) return '';

  const rowStep = 100;
  const edge = width * 0.055;
  let path = `M 0 0 Q ${edge * 0.45} -18 ${edge} 0`;

  for (let row = 0; row < rows; row += 1) {
    const y = row * rowStep;
    const travelsRight = row % 2 === 0;
    const rowEnd = travelsRight ? width - edge : edge;

    path += ` L ${rowEnd} ${y}`;

    if (row < rows - 1) {
      const nextY = (row + 1) * rowStep;
      const controlX = travelsRight ? width + edge : -edge;
      path += ` C ${controlX} ${y} ${controlX} ${nextY} ${rowEnd} ${nextY}`;
    }
  }

  return path;
}

function SponsorPortrait({ sponsor, lang }: { sponsor: Sponsor; lang: HomeLocale }) {
  const [imageFailed, setImageFailed] = useState(!sponsor.avatar);
  const amount = `¥${formatAmount(sponsor.amount)}`;
  const provider = sponsor.provider.toUpperCase();
  const accessibleLabel = lang === 'cn'
    ? `${sponsor.name}，通过 ${provider} 支持 ${amount}`
    : `${sponsor.name}, ${amount} via ${provider}`;
  const initial = sponsor.name.trim().slice(0, 1).toUpperCase() || 'S';

  return (
    <Link
      href={sponsor.link}
      title={`${sponsor.name} · ${provider} · ${amount}`}
      aria-label={accessibleLabel}
      className="group/sponsor relative z-10 flex min-w-0 flex-col items-center rounded-xl px-1 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-fd-background"
    >
      <span className="sponsor-portrait relative grid size-14 place-items-center overflow-hidden rounded-full border border-fd-border bg-fd-card text-lg font-medium text-fd-muted-foreground shadow-[0_10px_28px_rgba(43,37,64,0.12)] ring-4 ring-fd-background transition-[transform,border-color,box-shadow] duration-200 group-hover/sponsor:-translate-y-1 group-hover/sponsor:border-brand/60 group-hover/sponsor:shadow-[0_14px_34px_rgba(43,37,64,0.18)] md:size-20 dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
        <span aria-hidden>{initial}</span>
        {!imageFailed ? (
          <Image
            src={sponsor.avatar}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 768px) 80px, 56px"
            className="bg-fd-card object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : null}
      </span>
      <span className="mt-3 max-w-full break-words text-sm font-medium leading-5 text-fd-foreground transition-colors group-hover/sponsor:text-brand md:text-base">
        {sponsor.name}
      </span>
    </Link>
  );
}

export function SponsorJourney({ sponsors, lang }: { sponsors: Sponsor[]; lang: HomeLocale }) {
  const desktopRows = Math.ceil(sponsors.length / DESKTOP_COLUMNS);
  const mobileRows = Math.ceil(sponsors.length / MOBILE_COLUMNS);
  const desktopHeight = Math.max((desktopRows - 1) * 100, 1);
  const mobileHeight = Math.max((mobileRows - 1) * 100, 1);
  const layoutStyle = {
    '--sponsor-desktop-path-height': desktopRows > 1 ? `${(desktopRows - 1) * 11.5}rem` : '1px',
    '--sponsor-mobile-path-height': mobileRows > 1 ? `${(mobileRows - 1) * 8.25}rem` : '1px',
  } as CSSProperties;

  return (
    <div className="sponsor-journey" style={layoutStyle}>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox={`0 0 1000 ${desktopHeight}`}
        preserveAspectRatio="none"
        className="sponsor-journey-path sponsor-journey-path-desktop"
      >
        <path d={buildSerpentinePath(desktopRows, 1000)} />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox={`0 0 1000 ${mobileHeight}`}
        preserveAspectRatio="none"
        className="sponsor-journey-path sponsor-journey-path-mobile"
      >
        <path d={buildSerpentinePath(mobileRows, 1000)} />
      </svg>

      <div className="sponsor-journey-grid">
        {sponsors.map((sponsor) => (
          <SponsorPortrait key={`${sponsor.provider}-${sponsor.login}`} sponsor={sponsor} lang={lang} />
        ))}
      </div>
    </div>
  );
}
