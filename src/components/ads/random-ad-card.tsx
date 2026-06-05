'use client';

import { useMemo, useState } from 'react';
import { AdCard } from '@/components/ads/ad-card';
import { getAdsByPlacement, type AdPlacement, type AdItem } from '@/lib/ads';

type RandomAdCardProps = {
  placement?: AdPlacement;
  className?: string;
};

const variantByPlacement = {
  'docs-sidebar': 'sidebar',
} satisfies Record<AdPlacement, NonNullable<Parameters<typeof AdCard>[0]['variant']>>;

function pickRandomAd(items: AdItem[]) {
  if (items.length === 0) return null;

  return items[Math.floor(Math.random() * items.length)] ?? null;
}

export function RandomAdCard({ placement = 'docs-sidebar', className }: RandomAdCardProps) {
  const items = useMemo(() => getAdsByPlacement(placement), [placement]);
  const [ad] = useState(() => pickRandomAd(items));

  if (!ad) return null;

  return <AdCard ad={ad} variant={variantByPlacement[placement]} className={className} />;
}
