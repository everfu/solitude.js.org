import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute } from '@/lib/shared';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '../i18n';

const i18nMiddleware = createI18nMiddleware(i18n);

function getMarkdownRewrite(pathname: string) {
  const isCn = pathname === `/cn${docsRoute}` || pathname.startsWith(`/cn${docsRoute}/`);
  const isEn = pathname === docsRoute || pathname.startsWith(`${docsRoute}/`);
  if (!isCn && !isEn) return;

  const base = isCn ? `/cn${docsRoute}` : docsRoute;
  let slug = pathname.slice(base.length);
  if (slug.endsWith('.md')) slug = slug.slice(0, -3);

  return isCn
    ? `/llms.mdx/cn/docs${slug}/content.md`
    : `${docsContentRoute}${slug}/content.md`;
}

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith('.md')) {
    const result = getMarkdownRewrite(pathname);
    if (result) return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = getMarkdownRewrite(pathname);
    if (result) return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (pathname === '/' || pathname === docsRoute || pathname.startsWith(`${docsRoute}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  return i18nMiddleware(request, event);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|llms.mdx|logo.svg|logo-dark.svg|ProjectIcon|base-useage).*)',
  ],
};
