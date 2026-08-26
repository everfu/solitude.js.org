import Link from 'next/link';
import { appName, getDocsStartPath, previewUrl, themeRepositoryUrl } from '@/lib/shared';
import { withLocale } from '@/lib/layout.shared';

type SiteFooterProps = {
  locale: string;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const isCn = locale === 'cn';
  const links = [
    {
      href: withLocale(locale, getDocsStartPath()),
      label: isCn ? '文档' : 'Docs',
    },
    {
      href: previewUrl,
      label: isCn ? '预览' : 'Preview',
    },
    {
      href: themeRepositoryUrl,
      label: 'GitHub',
    },
  ];

  return (
    <footer className="border-t border-fd-border bg-fd-card/45 text-sm text-fd-muted-foreground">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-1">
          <p className="font-medium text-fd-foreground">{appName}</p>
          <p>
            © 2026 {isCn ? '伍拾柒' : 'everfu'}. {isCn ? '保留所有权利。' : 'All rights reserved.'}
          </p>
        </div>

        <nav aria-label={isCn ? '页脚链接' : 'Footer links'} className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-fd-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
