'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { AdCard } from '@/components/ads/ad-card';
import { getAdsByPlacement, type AdPlacement } from '@/lib/ads';

type RandomAdCardProps = {
  placement?: AdPlacement;
  className?: string;
};

const subscribe = () => () => {};

export function RandomAdCard({ placement = 'docs-sidebar', className }: RandomAdCardProps) {
  const items = useMemo(() => getAdsByPlacement(placement), [placement]);
  const [sample] = useState(Math.random);
  // The server and the first client render must show the same card.
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const ad = items[hydrated ? Math.floor(sample * items.length) : 0];
  if (!ad) return null;

  return <AdCard ad={ad} variant="sidebar" className={className} />;
}
