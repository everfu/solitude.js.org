import {
  Coffee,
  CircleDollarSign,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import { sponsorsJsonUrl, afdianUrl, githubSponsorUrl } from '@/lib/shared';

export const buttonClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-[background-color,color,border-color,transform] active:translate-y-px';

export type HomeLocale = 'en' | 'cn';

type LocalizedText = Record<HomeLocale, string>;

export type Sponsor = {
  provider: string;
  name: string;
  login: string;
  avatar: string;
  amount: number;
  link: string;
  org: boolean;
};

export const sponsorWays: Array<{
  href: string;
  label: LocalizedText;
  icon: LucideIcon;
}> = [
  {
    href: afdianUrl,
    label: { en: 'AFDIAN', cn: '爱发电' },
    icon: Heart,
  },
  {
    href: 'https://ko-fi.com/everfu',
    label: { en: 'Ko-fi', cn: 'Ko-fi' },
    icon: Coffee,
  },
  {
    href: githubSponsorUrl,
    label: { en: 'GitHub Sponsors', cn: 'GitHub Sponsors' },
    icon: CircleDollarSign,
  },
];

function isSponsor(value: unknown): value is Omit<Sponsor, 'amount'> & { amount: string | number } {
  if (!value || typeof value !== 'object') return false;

  const sponsor = value as Record<string, unknown>;

  return (
    typeof sponsor.provider === 'string' &&
    typeof sponsor.name === 'string' &&
    typeof sponsor.login === 'string' &&
    typeof sponsor.avatar === 'string' &&
    typeof sponsor.link === 'string' &&
    typeof sponsor.org === 'boolean' &&
    (typeof sponsor.amount === 'string' || typeof sponsor.amount === 'number')
  );
}

export async function getSponsors(): Promise<Sponsor[]> {
  try {
    const response = await fetch(sponsorsJsonUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];

    return data
      .map((item, index) => {
        if (!isSponsor(item)) return null;

        const amount = Number(item.amount);
        if (!Number.isFinite(amount)) return null;

        return { ...item, amount, index };
      })
      .filter((item): item is Sponsor & { index: number } => item !== null)
      .sort((a, b) => b.amount - a.amount || a.index - b.index)
      .map(({ index: _index, ...sponsor }) => sponsor);
  } catch {
    return [];
  }
}

export function formatAmount(amount: number) {
  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}
