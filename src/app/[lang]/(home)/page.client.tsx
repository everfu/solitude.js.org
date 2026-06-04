'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Check, Copy, FileCode2, Home, Layers3, Search, Terminal, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  {
    ssr: false,
  },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

const installCommand = 'pnpm i hexo-theme-solitude';

const capabilityPanels = {
  en: [
    {
      title: 'Homepage Modules',
      description: 'Banner, recommendations, recent posts.',
      tags: ['banner', 'recommend', 'recent posts'],
      icon: Home,
    },
    {
      title: 'Content Enhancements',
      description: 'Summary, code, math, lightbox.',
      tags: ['AI summary', 'code highlight', 'math', 'lightbox'],
      icon: Layers3,
    },
    {
      title: 'Site Extensions',
      description: 'Search, comments, PWA, feature pages.',
      tags: ['search', 'comments', 'PWA', 'feature pages'],
      icon: Search,
    },
  ],
  cn: [
    {
      title: '首页模块',
      description: '横幅、推荐、近期文章。',
      tags: ['banner', 'recommend', 'recent posts'],
      icon: Home,
    },
    {
      title: '内容增强',
      description: '摘要、代码、数学公式、灯箱。',
      tags: ['AI summary', 'code highlight', 'math', 'lightbox'],
      icon: Layers3,
    },
    {
      title: '站点扩展',
      description: '搜索、评论、PWA、功能页。',
      tags: ['search', 'comments', 'PWA', 'feature pages'],
      icon: Search,
    },
  ],
};

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [canRenderShaders, setCanRenderShaders] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactQuery = window.matchMedia('(max-width: 767px)');
    const updateTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    const updateShaderMode = () => setCanRenderShaders(!motionQuery.matches && !compactQuery.matches);
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    updateShaderMode();
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });
    motionQuery.addEventListener('change', updateShaderMode);
    compactQuery.addEventListener('change', updateShaderMode);

    const timer = window.setTimeout(() => setMounted(true), 250);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener('change', updateShaderMode);
      compactQuery.removeEventListener('change', updateShaderMode);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-fd-background" />
      {mounted && canRenderShaders ? (
        <>
          <GrainGradient
            className="absolute inset-0 animate-fd-fade-in opacity-80 duration-700"
            colors={isDark ? ['#fff383', '#fc7744', '#12121200'] : ['#7c5cff', '#d9cdfc', '#fbf9ff00']}
            colorBack="#00000000"
            softness={1}
            intensity={0.68}
            noise={0.42}
            speed={0.45}
            shape="corners"
            minPixelRatio={1}
            maxPixelCount={1920 * 1080}
          />
          <Dithering
            width={560}
            height={560}
            colorBack="#00000000"
            colorFront={isDark ? '#fc7744' : '#7c5cff'}
            shape="sphere"
            type="4x4"
            scale={0.35}
            size={2.2}
            speed={0}
            frame={5000 * 120}
            className="absolute right-[-180px] top-[-60px] animate-fd-fade-in opacity-50 duration-500 lg:right-[-40px] lg:top-4"
            minPixelRatio={1}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_18%,transparent),transparent_42%),linear-gradient(315deg,color-mix(in_oklab,var(--color-brand-secondary)_18%,transparent),transparent_48%)]" />
      )}
      <div
        className={cn(
          'absolute inset-0 bg-[linear-gradient(to_bottom,transparent_62%,var(--color-fd-background)),linear-gradient(to_right,var(--color-fd-background),transparent_54%)]',
          isDark &&
            'bg-[linear-gradient(to_bottom,transparent_62%,var(--color-fd-background)),linear-gradient(to_right,var(--color-fd-background),transparent_58%)]',
        )}
      />
    </div>
  );
}

export function ThemePreviewStage({ lang }: { lang: 'en' | 'cn' }) {
  const panels = capabilityPanels[lang];
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="relative z-10 w-full min-w-0 select-none">
      <div className="overflow-hidden rounded-lg border border-fd-border bg-fd-card/80 p-4 shadow-2xl shadow-violet-950/10 backdrop-blur-md dark:border-white/10 dark:bg-black/45 dark:shadow-black/60 sm:p-5">
        <div className="mx-auto grid max-w-3xl gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-fd-foreground">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-brand/15 text-brand">
              <Terminal className="size-4" />
            </span>
            {lang === 'cn' ? '安装主题' : 'Install Theme'}
          </div>

          <div className="relative">
            <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-md border bg-fd-secondary py-4 pe-14 ps-4 font-mono text-sm text-fd-secondary-foreground">
              <code>{installCommand}</code>
            </pre>
            <button
              type="button"
              onClick={copyInstallCommand}
              aria-label={copied ? (lang === 'cn' ? '已复制' : 'Copied') : lang === 'cn' ? '复制命令' : 'Copy command'}
              className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-md border bg-fd-card text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              {copied ? <Check className="size-4 text-brand" /> : <Copy className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {panels.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-lg border border-fd-border/70 bg-fd-card/55 p-3 backdrop-blur dark:border-white/10 dark:bg-black/20"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand/15 text-brand">
                  <Icon className="size-4" />
                </span>
                <p className="min-w-0 text-sm font-semibold leading-tight text-fd-foreground">{item.title}</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-fd-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
