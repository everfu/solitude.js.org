import { SiteFooter } from '@/components/site-footer';
import { createHomeMetadata } from '@/lib/seo';
import { getDocsStartPath } from '@/lib/shared';
import { withLocale } from '@/lib/layout.shared';
import { Hero } from './landing/sections/hero';
import { Studio } from './landing/sections/studio';
import { Write } from './landing/sections/write';
import { Start } from './landing/sections/start';
import { Figure } from './landing/ui/figure';
import { getSponsors } from './home.data';
import { SponsorSection } from './sponsors';
import { Showcase } from './landing/sections/showcase';

export async function generateMetadata({ params }: PageProps<'/[lang]'>) {
  return createHomeMetadata((await params).lang);
}

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const cn = lang === 'cn';
  const docs = withLocale(lang, getDocsStartPath());
  return <>
    <Hero cn={cn} />
    <Showcase cn={cn} />
    <Studio cn={cn} />
    <Write cn={cn} />
    <Figure id="sponsors" aria-label={cn ? '赞助' : 'Sponsors'}><SponsorSection lang={cn ? 'cn':'en'} sponsors={await getSponsors()} /></Figure>
    <Start cn={cn} docs={docs} />
    <SiteFooter locale={lang} />
  </>;
}
