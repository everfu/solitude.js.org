import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { getI18nProvider } from '@/lib/i18n';
import { i18n } from '../../../i18n';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <div lang={lang} className={`${inter.className} flex min-h-screen flex-col`}>
      <RootProvider i18n={getI18nProvider(lang)}>{children}</RootProvider>
    </div>
  );
}

export function generateStaticParams(): { lang: string }[] {
  return i18n.languages.map((lang) => ({ lang }));
}
