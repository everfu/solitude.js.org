import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Eye, Heart, Rocket, Sparkles } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/cn';
import { withLocale } from '@/lib/layout.shared';
import { createHomeMetadata } from '@/lib/seo';
import { previewUrl, releaseUrl, themeRepositoryUrl } from '@/lib/shared';
import { HomePrinciples } from './home-experience';
import { HeroBackground, HeroThemeStage, ScrollCue } from './page.client';
import { SponsorJourney } from './sponsor-journey';
import { buttonClass, formatAmount, getSponsors, sponsorWays, type HomeLocale, type Sponsor } from './home.data';

function SponsorSection({ lang, sponsors, docsHref }: { lang: HomeLocale; sponsors: Sponsor[]; docsHref: string }) {
  const isCn = lang === 'cn';
  const totalAmount = sponsors.reduce((total, sponsor) => total + sponsor.amount, 0);

  return (
    <section className="overflow-hidden bg-fd-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-sm text-fd-muted-foreground"><Heart className="size-4 fill-current text-brand" />{isCn ? '由社区共同支持' : 'Supported by the community'}</p>
            <h2 className="mt-7 max-w-4xl text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-fd-foreground md:text-6xl md:leading-[1.05]">{isCn ? '每一个名字，都让 Solitude 走得更远。' : 'Every name helps Solitude go further.'}</h2>
          </div>
          <div className="grid grid-cols-2 border-y border-fd-border py-5 text-sm">
            <div className="border-r border-fd-border pr-5">
              <p className="text-fd-muted-foreground">{isCn ? '支持者' : 'Supporters'}</p>
              <p className="mt-2 text-xl font-medium text-fd-foreground">{sponsors.length}</p>
            </div>
            <div className="pl-5">
              <p className="text-fd-muted-foreground">{isCn ? '累计支持' : 'Total support'}</p>
              <p className="mt-2 text-xl font-medium text-fd-foreground">¥{formatAmount(totalAmount)}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-b border-fd-border pb-14 md:mt-20 md:pb-20">
          {sponsors.length > 0 ? (
            <SponsorJourney sponsors={sponsors} lang={lang} />
          ) : (
            <div className="grid min-h-36 place-items-center px-8 text-center text-sm leading-6 text-fd-muted-foreground">{isCn ? '赞助数据暂时不可用，恢复同步后会自动显示。' : 'Sponsor data is temporarily unavailable and will return after the next sync.'}</div>
          )}
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h3 className="max-w-4xl text-[1.75rem] font-medium leading-[1.15] tracking-[-0.035em] text-fd-foreground md:text-6xl md:leading-[1.04]">{isCn ? '为下一篇文章准备好了吗？' : 'Ready for your next story?'}</h3>
            <p className="mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground">{isCn ? '阅读 Hugo 文档、查看真实站点，或直接在 GitHub 上了解 Solitude。' : 'Read the Hugo docs, explore a live site, or see how Solitude is built on GitHub.'}</p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
            <Link href={docsHref} className={cn(buttonClass, 'w-full bg-brand text-brand-foreground hover:bg-brand-200 sm:w-auto')}><BookOpen className="size-4" />{isCn ? '阅读文档' : 'Read Docs'}</Link>
            <Link href={previewUrl} className={cn(buttonClass, 'w-full border border-fd-border text-fd-foreground hover:bg-fd-accent sm:w-auto')}><Eye className="size-4" />{isCn ? '在线预览' : 'Live Preview'}</Link>
            <Link href={themeRepositoryUrl} className={cn(buttonClass, 'w-full border border-fd-border text-fd-foreground hover:bg-fd-accent sm:w-auto')}>GitHub<ArrowRight className="size-4" /></Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-fd-border pt-7 text-sm text-fd-muted-foreground">
          {sponsorWays.map((way) => {
            const Icon = way.icon;
            return <Link key={way.href} href={way.href} className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-fd-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"><Icon className="size-4" />{way.label[lang]}</Link>;
          })}
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  return createHomeMetadata(lang);
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const locale: HomeLocale = lang === 'cn' ? 'cn' : 'en';
  const isCn = locale === 'cn';
  const installHref = withLocale(lang, '/docs/hugo/getting-started/installation');
  const docsHref = withLocale(lang, '/docs/hugo/getting-started/introduction');
  const sponsors = await getSponsors();

  return (
    <>
      <main className="text-landing-foreground dark:text-landing-foreground-dark">
        <section className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden border-b border-fd-border">
          <HeroBackground />
          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-3.5rem)] w-full max-w-[1400px] gap-10 px-5 pb-10 pt-10 md:px-10 md:pb-12 md:pt-14 lg:grid-cols-[minmax(0,0.83fr)_minmax(520px,1.17fr)] lg:items-center lg:gap-14">
            <div className="flex max-w-2xl flex-col items-start">
              <Link
                href={releaseUrl}
                className="inline-flex items-center gap-2 rounded-md border border-brand/40 bg-fd-card/70 px-3 py-2 text-xs font-medium text-brand shadow-sm backdrop-blur transition-colors hover:bg-fd-card"
              >
                <Sparkles className="size-3.5" />
                {isCn ? 'Solitude Hugo 原生版现已可用' : 'Solitude for Hugo is now available'}
              </Link>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.98] text-landing-foreground dark:text-landing-foreground-dark md:text-6xl xl:text-7xl">
                Solitude for Hugo
                <span className="mt-3 block max-w-xl text-3xl leading-[1.08] text-landing-foreground/82 dark:text-landing-foreground-dark/82 md:text-4xl xl:text-5xl">
                  {isCn ? '让博客回到内容本身' : 'Bring the focus back to your content'}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-landing-foreground/72 dark:text-landing-foreground-dark/72 md:text-lg">
                {isCn
                  ? '原生 Go Templates、Hugo Pipes 与标准内容模型，无需 Node.js 也能获得清晰、流畅、可持续维护的博客体验。'
                  : 'Native Go Templates, Hugo Pipes, and the standard content model deliver a clear, fluid, maintainable blog experience without Node.js.'}
              </p>

              <div className="mt-8 flex w-full flex-wrap items-center gap-3">
                <Link href={installHref} className={cn(buttonClass, 'bg-brand text-brand-foreground hover:bg-brand-200')}>
                  <Rocket className="size-4" />
                  {isCn ? '立即安装' : 'Install Now'}
                </Link>
                <Link href={previewUrl} className={cn(buttonClass, 'border border-fd-border bg-fd-card/80 text-fd-card-foreground hover:bg-fd-accent')}>
                  <Eye className="size-4" />
                  {isCn ? '在线预览' : 'Live Preview'}
                </Link>
                <Link href={themeRepositoryUrl} className={cn(buttonClass, 'border border-fd-border bg-fd-card/80 text-fd-card-foreground hover:bg-fd-accent')}>
                  <Code2 className="size-4" />
                  GitHub
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-fd-border/70 pt-5 text-xs font-medium text-fd-muted-foreground">
                <span>Go Templates</span>
                <span>Hugo Pipes</span>
                <span>No Node.js</span>
                <ScrollCue lang={locale} />
              </div>
            </div>

            <HeroThemeStage lang={locale} />
          </div>
        </section>

        <HomePrinciples lang={locale} />
        <SponsorSection lang={locale} sponsors={sponsors} docsHref={docsHref} />
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
