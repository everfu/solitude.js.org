import type { Metadata, MetadataRoute } from 'next';
import { i18n } from '../../i18n';
import { appDescription, appName, docsRoute, themeName } from './shared';

type Locale = (typeof i18n.languages)[number];

const defaultLocale = i18n.defaultLanguage as Locale;

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '');
}

export function getSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value);
    url.pathname = trimTrailingSlash(url.pathname);
    url.search = '';
    url.hash = '';

    return url;
  } catch {
    return undefined;
  }
}

export function getMetadataBase(): URL | undefined {
  return getSiteUrl();
}

function normalizePath(path: string) {
  if (!path || path === '/') return '/';
  return `/${path}`.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
}

export function withLocalePath(locale: Locale | string, path: string) {
  const normalized = normalizePath(path);
  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return `/${locale}`;

  return `/${locale}${normalized}`;
}

export function toAbsoluteUrl(path: string) {
  const normalized = normalizePath(path);
  const siteUrl = getSiteUrl();

  return siteUrl ? new URL(normalized, siteUrl).toString() : normalized;
}

function toConfiguredAbsoluteUrl(path: string) {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return undefined;

  return new URL(normalizePath(path), siteUrl).toString();
}

export function getLanguageAlternates(path: string) {
  return {
    en: toAbsoluteUrl(withLocalePath('en', path)),
    cn: toAbsoluteUrl(withLocalePath('cn', path)),
    'x-default': toAbsoluteUrl(withLocalePath(defaultLocale, path)),
  };
}

export function createSiteMetadata(): Metadata {
  return {
    metadataBase: getMetadataBase(),
    title: {
      default: appName,
      template: `%s | ${appName}`,
    },
    description: appDescription,
    applicationName: appName,
    verification: {
      google: 'OQ-FnVME50EgIvv5nO4fsNl7EHkEl0vUSoFUe_fAMgY',
    },
    icons: {
      icon: '/favicon.ico',
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: appName,
      title: appName,
      description: appDescription,
      url: toAbsoluteUrl('/'),
    },
    twitter: {
      card: 'summary_large_image',
      title: appName,
      description: appDescription,
    },
  };
}

export function createHomeMetadata(locale: Locale | string): Metadata {
  const isCn = locale === 'cn';
  const title = isCn ? `${themeName} 文档` : `${themeName} Documentation`;
  const description = isCn
    ? 'Solitude 是一个面向 Hugo 与 Hexo 的现代博客主题，这里提供安装、配置、内容、功能页面、搜索和评论集成文档。'
    : 'Solitude is a modern blog theme for Hugo and Hexo. Find installation, configuration, content, feature page, search, and comment integration docs.';
  const canonical = toAbsoluteUrl(withLocalePath(locale, '/'));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates('/'),
    },
    openGraph: {
      type: 'website',
      siteName: appName,
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function createDocsMetadata({
  title,
  description,
  image,
  locale,
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  locale: Locale | string;
  path: string;
}): Metadata {
  const canonical = toAbsoluteUrl(withLocalePath(locale, path));
  const imageUrl = image ? toConfiguredAbsoluteUrl(image) : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      type: 'article',
      siteName: appName,
      title,
      description,
      url: canonical,
      images: imageUrl ? [imageUrl] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function createRobots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: siteUrl ? new URL('/sitemap.xml', siteUrl).toString() : undefined,
  };
}

export function createSitemapEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: toAbsoluteUrl(path),
    alternates: {
      languages: getLanguageAlternates(path),
    },
  };
}

export function createLocalizedSitemapEntry(locale: Locale | string, path: string): MetadataRoute.Sitemap[number] {
  return {
    url: toAbsoluteUrl(withLocalePath(locale, path)),
    alternates: {
      languages: getLanguageAlternates(path),
    },
  };
}

export const docsBasePath = docsRoute;
