import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute } from '@/lib/shared';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n, localeCookieMaxAge, localeCookieName } from '../i18n';

const i18nMiddleware = createI18nMiddleware(i18n);
const localeRewriteHeader = 'x-solitude-locale-rewrite';

function getBrowserLocale(request: NextRequest) {
  const cookie = request.cookies.get(localeCookieName)?.value;
  if (cookie === 'en' || cookie === 'cn') return cookie;

  const first = request.headers.get('accept-language')?.split(',')[0]?.trim().toLowerCase();
  return first?.startsWith('zh') ? 'cn' : 'en';
}

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

export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  if (
    request.headers.get(localeRewriteHeader) === 'en'
    && (pathname === '/en' || pathname.startsWith('/en/'))
  ) {
    return NextResponse.next();
  }

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
    if (getBrowserLocale(request) === 'cn') {
      url.pathname = `/cn${pathname}`;
      return NextResponse.redirect(url);
    }
    url.pathname = `/en${pathname}`;
    const headers = new Headers(request.headers);
    headers.set(localeRewriteHeader, 'en');
    return NextResponse.rewrite(url, { request: { headers } });
  }

  const response = await i18nMiddleware(request, event);

  if (response instanceof NextResponse && (pathname === '/en' || pathname.startsWith('/en/'))) {
    response.cookies.set(localeCookieName, 'en', {
      maxAge: localeCookieMaxAge,
      path: '/',
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|llms.mdx|og|logo.svg|logo-dark.svg|ProjectIcon|base-useage|showcase).*)',
  ],
};
