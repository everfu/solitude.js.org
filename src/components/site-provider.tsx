'use client';

import type { ReactNode } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FrameworkProvider, type Framework } from 'fumadocs-core/framework';
import { RootProvider } from 'fumadocs-ui/provider/base';
import { getI18nProvider } from '@/lib/i18n';
import { defaultDocsVersion, isDocsVersion } from '@/lib/shared';
import { i18n, localeCookieMaxAge, localeCookieName } from '../../i18n';

// English pages are prerendered under /en, while the public page tree omits it.
function usePublicPathname() {
  return usePathname().replace(/^\/en(?=\/|$)/, '') || '/';
}

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
  const pathname = usePublicPathname();
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
    <FrameworkProvider
      usePathname={usePublicPathname}
      useParams={useParams}
      useRouter={useRouter}
      Link={Link as Framework['Link']}
      Image={Image as Framework['Image']}
    >
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
    </FrameworkProvider>
  );
}
