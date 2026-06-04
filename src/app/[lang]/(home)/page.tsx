import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Code2, Eye, Heart, Rocket, Sparkles } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/cn';
import { withLocale } from '@/lib/layout.shared';
import { previewUrl, releaseUrl, themeRepositoryUrl } from '@/lib/shared';
import { createHomeMetadata } from '@/lib/seo';
import { HeroBackground, ThemePreviewStage } from './page.client';
import { Marquee } from './marquee';
import {
  buttonClass,
  featureItems,
  formatAmount,
  getSponsors,
  showcaseItems,
  sponsorWays,
  startSteps,
  type Sponsor,
} from './home.data';

function chunkItems<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  );
}

function DreamSection({ isCn, sponsors }: { isCn: boolean; sponsors: Sponsor[] }) {
  const totalAmount = sponsors.reduce((total, sponsor) => total + sponsor.amount, 0);
  const providers = Array.from(new Set(sponsors.map((sponsor) => sponsor.provider.toUpperCase())));
  const visibleSponsors = sponsors.slice(0, 20);
  const remainingSponsors = Math.max(sponsors.length - visibleSponsors.length, 0);
  const stats = [
    [isCn ? '赞助人数' : 'Sponsors', sponsors.length.toString()],
    [isCn ? '累计金额' : 'Total support', `¥${formatAmount(totalAmount)}`],
    [isCn ? '赞助平台' : 'Platform', providers.length > 0 ? providers.join(' / ') : isCn ? '等待同步' : 'Pending'],
  ];

  return (
    <section className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-14 md:px-10 md:py-20">
      <div className="text-center">
        <p className="text-sm font-medium uppercase text-brand">{isCn ? '赞助支持' : 'Sponsor support'}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {isCn ? '感谢每一份支持' : 'Made possible by sponsors'}
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-fd-card p-6 shadow-sm md:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--color-brand)_24%,transparent),transparent_62%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="min-w-0">
            <Heart className="mb-6 size-7 fill-current text-pink-500" />
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {isCn ? '每一次赞助，都会让 Solitude 走得更远' : 'Every contribution helps Solitude keep moving'}
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-fd-muted-foreground">
              {isCn
                ? '这些名字记录了 Solitude 被持续使用、反馈和维护的过程。谢谢你们让这个主题不只是代码，也是一段被共同照看的体验。'
                : 'These names mark the people who keep Solitude used, tested, and cared for. Thank you for making the theme more than code.'}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {sponsorWays.map((way, index) => {
                const Icon = way.icon;

                return (
                  <Link
                    key={way.href}
                    href={way.href}
                    className={cn(
                      buttonClass,
                      index === 0
                        ? 'bg-brand text-brand-foreground hover:bg-brand-200'
                        : 'border bg-fd-card/80 text-fd-card-foreground hover:bg-fd-accent',
                    )}
                  >
                    <Icon className="size-4" />
                    {way.label[isCn ? 'cn' : 'en']}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-fd-border/60 bg-fd-secondary/45 p-4 md:p-5">
            {visibleSponsors.length > 0 ? (
              <div className="grid justify-items-center gap-3 py-2">
                <div className="flex max-w-full flex-wrap justify-center gap-y-2 pl-5 md:pl-7">
                  {visibleSponsors.map((sponsor) => (
                    <Link
                      key={`${sponsor.provider}-${sponsor.login}`}
                      href={sponsor.link}
                      className="-ml-5 inline-flex size-14 shrink-0 items-center justify-center rounded-full border-[5px] border-fd-card bg-fd-card shadow-sm transition-transform hover:z-10 hover:-translate-y-1 md:-ml-7 md:size-16"
                      title={`${sponsor.name} · ¥${formatAmount(sponsor.amount)}`}
                    >
                      <Image
                        src={sponsor.avatar}
                        alt={sponsor.name}
                        width={64}
                        height={64}
                        className="size-full rounded-full object-cover"
                        sizes="64px"
                      />
                    </Link>
                  ))}
                  {remainingSponsors > 0 && (
                    <span className="-ml-5 inline-flex size-14 shrink-0 items-center justify-center rounded-full border-[5px] border-fd-card bg-fd-secondary text-lg font-medium text-fd-muted-foreground shadow-sm md:-ml-7 md:size-16 md:text-xl">
                      +{remainingSponsors}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-center text-lg font-medium text-fd-muted-foreground md:text-xl">
                  {isCn ? '感谢这些支持者与贡献者。' : 'Some of our best contributors.'}
                </p>
              </div>
            ) : (
              <div className="flex min-h-[120px] items-center justify-center rounded-lg border border-dashed bg-fd-card/50 px-4 text-center text-sm leading-6 text-fd-muted-foreground">
                {isCn
                  ? '赞助数据暂时没有同步成功，但感谢墙会在数据恢复后自动显示。'
                  : 'Sponsor data is not available right now. The wall will appear again when it syncs.'}
              </div>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-lg border bg-fd-card/70 p-4 text-center">
                  <p className="text-xs font-medium uppercase text-fd-muted-foreground">{label}</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-fd-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
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
  const locale = lang === 'cn' ? 'cn' : 'en';
  const isCn = locale === 'cn';
  const installHref = withLocale(lang, '/docs/getting-started/installation');
  const sponsors = await getSponsors();
  const localizedStartSteps = startSteps[locale];
  const localizedFeatureItems = featureItems[locale];

  return (
    <>
      <main className="text-landing-foreground dark:text-landing-foreground-dark">
      <section className="relative isolate overflow-hidden border-b border-fd-border">
        <HeroBackground />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-10 px-5 pb-14 pt-10 md:px-10 md:pb-16 md:pt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] lg:items-center">
          <div className="flex max-w-2xl flex-col items-start text-start">
            <Link
              href={releaseUrl}
              className="inline-flex items-center gap-2 rounded-full border border-brand/45 bg-fd-card/70 px-3 py-2 text-xs font-medium text-brand shadow-sm backdrop-blur"
            >
              <Sparkles className="size-3.5" />
              {isCn ? '查看最新发布' : 'View latest releases'}
            </Link>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.02] tracking-tight text-landing-foreground dark:text-landing-foreground-dark md:text-5xl xl:text-6xl">
              {isCn ? (
                <>
                  Solitude
                  <br />
                  为 Hexo 准备的
                  <br />
                  <span className="text-brand">现代博客主题</span>
                </>
              ) : (
                <>
                  Solitude
                  <br />
                  a modern Hexo
                  <br />
                  <span className="text-brand">blog theme</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-landing-foreground/80 dark:text-landing-foreground-dark/80 md:text-lg">
              {isCn
                ? '预览 Solitude 的首页、导航、文章与侧栏体验，用几条命令把它装进你的 Hexo 博客，快速拥有一个漂亮、顺手、可持续维护的个人站点。'
                : 'Preview Solitude across the homepage, navigation, posts, and sidebars, then install it into your Hexo blog with a few commands to get a polished, comfortable, maintainable personal site.'}
            </p>
            <div className="mt-8 flex w-full flex-wrap items-center gap-3">
              <Link href={installHref} className={cn(buttonClass, 'bg-brand text-brand-foreground hover:bg-brand-200')}>
                <Rocket className="size-4" />
                {isCn ? '立即安装' : 'Install Now'}
              </Link>
              <Link
                href={previewUrl}
                className={cn(buttonClass, 'border bg-fd-card/80 text-fd-card-foreground hover:bg-fd-accent')}
              >
                <Eye className="size-4" />
                {isCn ? '在线预览' : 'Live Preview'}
              </Link>
              <Link
                href={themeRepositoryUrl}
                className={cn(buttonClass, 'border bg-fd-card/80 text-fd-card-foreground hover:bg-fd-accent')}
              >
                <Code2 className="size-4" />
                GitHub
              </Link>
            </div>
          </div>

          <ThemePreviewStage lang={locale} />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase text-brand">
              {isCn ? '从预览到上线' : 'From preview to launch'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isCn ? '3 步把主题跑起来' : 'Launch the theme in 3 steps'}
            </h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {localizedStartSteps.map((step, index) => (
            <div key={step.title} className="flex min-h-[260px] flex-col rounded-lg border bg-fd-card p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                  {index + 1}
                </span>
                <CheckCircle2 className="size-5 text-brand" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-7 text-fd-muted-foreground">{step.description}</p>
              <pre className="mt-auto overflow-x-auto whitespace-pre-wrap break-all rounded-md border bg-fd-secondary p-3 font-mono text-xs text-fd-secondary-foreground">
                <code>{step.command}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-fd-border bg-fd-card/45">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase text-brand">
              {isCn ? '主题能力预览' : 'Theme capability preview'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isCn ? '博客常用能力，开箱就有方向' : 'Blog essentials with clear setup paths'}
            </h2>
            <p className="mt-5 leading-7 text-fd-muted-foreground">
              {isCn
                ? 'Solitude 面向个人博客、技术写作和内容展示，把首页、文章、侧栏、搜索、评论和功能页组合成一套完整的博客体验。'
                : 'Solitude is shaped for personal blogs, technical writing, and rich content pages, combining home, posts, sidebars, search, comments, and feature pages into one complete theme experience.'}
            </p>
            <div className="relative mt-8 grid min-h-[250px] overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {chunkItems(showcaseItems[locale], 8).map((row, index) => (
                <Marquee
                  key={row.map((item) => item.label).join('-')}
                  pauseOnHover
                  repeat={3}
                  reverse={index % 2 === 1}
                  className={cn(
                    '[--duration:34s] [--gap:1rem] px-0 py-2',
                    index % 2 === 1 && '[--duration:38s]',
                  )}
                >
                  {row.map((item) => {
                    const Icon = item.icon;

                    return (
                      <span
                        key={item.label}
                        className="group inline-flex h-14 w-[172px] shrink-0 items-center gap-3 rounded-lg border border-fd-border/45 bg-fd-card/50 px-4 text-sm font-semibold text-fd-card-foreground transition-colors hover:border-brand/35 hover:bg-fd-card/75 md:w-[188px]"
                      >
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-brand/10 bg-brand/10 text-brand transition-colors group-hover:border-brand/25 group-hover:bg-brand/15">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0 truncate">{item.label}</span>
                      </span>
                    );
                  })}
                </Marquee>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {localizedFeatureItems.map(([title, description, Icon]) => (
              <div key={title} className="rounded-lg border bg-fd-card p-5 shadow-sm">
                <Icon className="mb-4 size-5 text-brand" />
                <h3 className="font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <DreamSection isCn={isCn} sponsors={sponsors} />
      </main>
      <SiteFooter locale={lang} />
    </>
  );
}
