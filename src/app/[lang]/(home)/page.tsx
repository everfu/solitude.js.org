import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Code2, Eye, Heart, Rocket, Sparkles } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/cn';
import { withLocale } from '@/lib/layout.shared';
import { createHomeMetadata } from '@/lib/seo';
import { previewUrl, releaseUrl, themeRepositoryUrl } from '@/lib/shared';
import { CapabilityStory, HeroBackground, HeroThemeStage, InstallTimeline, ScrollCue } from './page.client';
import { Marquee } from './marquee';
import { buttonClass, formatAmount, getSponsors, sponsorWays, type HomeLocale, type Sponsor } from './home.data';

function SponsorSection({ lang, sponsors, docsHref }: { lang: HomeLocale; sponsors: Sponsor[]; docsHref: string }) {
  const isCn = lang === 'cn';
  const totalAmount = sponsors.reduce((total, sponsor) => total + sponsor.amount, 0);
  const providers = Array.from(new Set(sponsors.map((sponsor) => sponsor.provider.toUpperCase())));
  const visibleSponsors = sponsors.slice(0, 16);
  const stats = [
    [isCn ? '赞助人数' : 'Sponsors', sponsors.length.toString()],
    [isCn ? '累计支持' : 'Total support', `¥${formatAmount(totalAmount)}`],
    [isCn ? '赞助平台' : 'Platforms', providers.length > 0 ? providers.length.toString() : '0'],
  ];

  return (
    <section className="relative overflow-hidden border-t border-fd-border bg-fd-card/45">
      <div className="home-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 border-b border-fd-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-home-coral">
              <Heart className="size-5 fill-current" />
              <p className="text-sm font-medium">{isCn ? '由社区共同支持' : 'Supported by the community'}</p>
            </div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              {isCn ? '每一个名字，都让 Solitude 继续向前' : 'Every name keeps Solitude moving'}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-fd-muted-foreground">
              {isCn
                ? '感谢持续使用、反馈和支持 Solitude 的每一个人。赞助用于主题维护、文档与公共服务。'
                : 'Thank you to everyone who uses, tests, and supports Solitude. Sponsorship funds maintenance, documentation, and public services.'}
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-5 sm:gap-8">
            {stats.map(([label, value]) => (
              <div key={label} className="min-w-0 border-l border-fd-border pl-4 sm:pl-6">
                <dt className="text-xs text-fd-muted-foreground">{label}</dt>
                <dd className="mt-2 break-all text-lg font-semibold text-fd-foreground sm:text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="py-12">
          {visibleSponsors.length > 0 ? (
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <Marquee pauseOnHover repeat={2} className="[--duration:44s] [--gap:0.75rem] px-0 py-3">
                {visibleSponsors.map((sponsor) => (
                  <Link
                    key={`${sponsor.provider}-${sponsor.login}`}
                    href={sponsor.link}
                    className="group flex h-16 w-[210px] shrink-0 items-center gap-3 rounded-md border border-fd-border/70 bg-fd-card/80 px-3 transition-colors hover:border-home-coral/45 hover:bg-fd-card"
                    title={`${sponsor.name} · ¥${formatAmount(sponsor.amount)}`}
                  >
                    <Image
                      src={sponsor.avatar}
                      alt=""
                      width={44}
                      height={44}
                      unoptimized
                      className="size-11 shrink-0 rounded-full object-cover ring-2 ring-fd-background"
                      sizes="44px"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-fd-foreground">{sponsor.name}</span>
                      <span className="mt-1 block text-xs text-fd-muted-foreground">{sponsor.provider.toUpperCase()} · ¥{formatAmount(sponsor.amount)}</span>
                    </span>
                  </Link>
                ))}
              </Marquee>
            </div>
          ) : (
            <div className="flex min-h-24 items-center justify-center border-y border-dashed border-fd-border px-4 text-center text-sm leading-6 text-fd-muted-foreground">
              {isCn ? '赞助数据暂时不可用，恢复同步后会自动显示。' : 'Sponsor data is temporarily unavailable and will return after the next sync.'}
            </div>
          )}
        </div>

        <div className="grid gap-8 border-t border-fd-border pt-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">{isCn ? '从这里开始' : 'Start here'}</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              {isCn ? '把 Solitude 4 装进你的 Hexo 博客' : 'Bring Solitude 4 to your Hexo blog'}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={docsHref} className={cn(buttonClass, 'bg-brand text-brand-foreground hover:bg-brand-200')}>
              <BookOpen className="size-4" />
              {isCn ? '阅读文档' : 'Read Docs'}
            </Link>
            <Link href={previewUrl} className={cn(buttonClass, 'border border-fd-border bg-fd-card text-fd-foreground hover:bg-fd-accent')}>
              <Eye className="size-4" />
              {isCn ? '在线预览' : 'Live Preview'}
            </Link>
            <Link href={themeRepositoryUrl} className={cn(buttonClass, 'border border-fd-border bg-fd-card text-fd-foreground hover:bg-fd-accent')}>
              <Code2 className="size-4" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-fd-muted-foreground">
          {sponsorWays.map((way) => {
            const Icon = way.icon;
            return (
              <Link key={way.href} href={way.href} className="inline-flex items-center gap-2 transition-colors hover:text-fd-foreground">
                <Icon className="size-4" />
                {way.label[lang]}
              </Link>
            );
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
  const installHref = withLocale(lang, '/docs/getting-started/installation');
  const docsHref = withLocale(lang, '/docs/getting-started/introduction');
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
                {isCn ? 'Solitude 4.0.0 已发布' : 'Solitude 4.0.0 is available'}
              </Link>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.98] text-landing-foreground dark:text-landing-foreground-dark md:text-6xl xl:text-7xl">
                Solitude 4
                <span className="mt-3 block max-w-xl text-3xl leading-[1.08] text-landing-foreground/82 dark:text-landing-foreground-dark/82 md:text-4xl xl:text-5xl">
                  {isCn ? '让博客回到内容本身' : 'Bring the focus back to your content'}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-landing-foreground/72 dark:text-landing-foreground-dark/72 md:text-lg">
                {isCn
                  ? '原生 ES 模块、统一 PJAX 生命周期与按需加载能力，为 Hexo 带来清晰、流畅、可持续维护的博客体验。'
                  : 'Native ES modules, a unified PJAX lifecycle, and on-demand features give Hexo a clear, fluid, maintainable blog experience.'}
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
                <span>ES Modules</span>
                <span>PJAX Lifecycle</span>
                <span>On-demand</span>
                <ScrollCue lang={locale} />
              </div>
            </div>

            <HeroThemeStage lang={locale} />
          </div>
        </section>

        <CapabilityStory lang={locale} />
        <InstallTimeline lang={locale} installHref={installHref} />
        <SponsorSection lang={locale} sponsors={sponsors} docsHref={docsHref} />
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
