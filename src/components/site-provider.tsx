'use client';

import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { getI18nProvider } from '@/lib/i18n';
import { defaultDocsVersion, isDocsVersion } from '@/lib/shared';
import { i18n, localeCookieMaxAge, localeCookieName } from '../../i18n';

function getLocalizedPath(locale: string) {
  const url = new URL(window.location.href);
  const segments = url.pathname.split('/');

  if (i18n.languages.includes(segments[1] as (typeof i18n.languages)[number])) {
    segments.splice(1, 1);
  }

  const pathname = segments.join('/') || '/';
  url.pathname = locale === i18n.defaultLanguage
    ? pathname
    : `/${locale}${pathname === '/' ? '' : pathname}`;

  return `${url.pathname}${url.search}${url.hash}`;
}

export function SiteProvider({ lang, children }: { lang: string; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const versionSegment = pathname.split('/').find((segment, index, segments) => (
    segments[index - 1] === 'docs' && isDocsVersion(segment)
  ));
  const docsVersion = versionSegment && isDocsVersion(versionSegment)
    ? versionSegment
    : defaultDocsVersion;

  function changeLocale(locale: string) {
    if (!i18n.languages.includes(locale as (typeof i18n.languages)[number])) return;

    document.cookie = `${localeCookieName}=${encodeURIComponent(locale)}; Path=/; Max-Age=${localeCookieMaxAge}; SameSite=Lax`;
    router.push(getLocalizedPath(locale));
  }

  return (
    <RootProvider
      key={`${lang}-${docsVersion}`}
      i18n={{ ...getI18nProvider(lang), onLocaleChange: changeLocale }}
      search={{
        options: {
          defaultTag: docsVersion,
        },
      }}
      theme={{ enabled: false }}
    >
      {children}
    </RootProvider>
  );
}
