import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, logo } from '@/lib/layout.shared';

import { StatusBar } from './landing/ui/status-bar';
import './landing/landing.css';

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  const options = baseOptions(lang);
  return <HomeLayout {...options} nav={{ ...options.nav, title: <>{logo(24)}<span className="font-medium">Solitude</span></> }} className="landing overflow-x-clip selection:bg-lp-yellow selection:text-lp-on-yellow sheet:[--fd-layout-width:calc(var(--lp-max)-2px-2*var(--lp-gutter)+32px)]">
    <div data-sheet="" className="mx-auto w-full max-w-(--lp-max) flex-1 border-lp-line pb-(--lp-status-h) sheet:border-x">{children}</div>
    <StatusBar />
  </HomeLayout>;
}
