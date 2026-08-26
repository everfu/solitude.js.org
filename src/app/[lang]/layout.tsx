import { Inter } from 'next/font/google';
import { SiteProvider } from '@/components/site-provider';
import { i18n } from '../../../i18n';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <div lang={lang} className={`${inter.className} flex min-h-screen flex-col`}>
      <SiteProvider lang={lang}>{children}</SiteProvider>
    </div>
  );
}

export function generateStaticParams(): { lang: string }[] {
  return i18n.languages.map((lang) => ({ lang }));
}
