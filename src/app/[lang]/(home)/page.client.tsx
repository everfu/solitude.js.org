'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  FileCode2,
  Terminal,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { buttonClass, homeScenes, runtimeModules, startSteps, type HomeLocale, type HomeScene } from './home.data';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  { ssr: false },
);

const projectIcons = [
  ['/ProjectIcon/algolia.svg', 'Algolia'],
  ['/ProjectIcon/DocSearch.svg', 'DocSearch'],
  ['/ProjectIcon/twikoo.svg', 'Twikoo'],
  ['/ProjectIcon/waline.svg', 'Waline'],
  ['/ProjectIcon/giscus.svg', 'Giscus'],
] as const;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [canRenderShaders, setCanRenderShaders] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactQuery = window.matchMedia('(max-width: 767px)');
    const updateTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    const updateShaderMode = () => setCanRenderShaders(!motionQuery.matches && !compactQuery.matches);
    const themeObserver = new MutationObserver(updateTheme);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '160px 0px' },
    );

    updateTheme();
    updateShaderMode();
    themeObserver.observe(document.documentElement, { attributeFilter: ['class'], attributes: true });
    if (rootRef.current) visibilityObserver.observe(rootRef.current);
    motionQuery.addEventListener('change', updateShaderMode);
    compactQuery.addEventListener('change', updateShaderMode);

    const timer = window.setTimeout(() => setMounted(true), 160);

    return () => {
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      motionQuery.removeEventListener('change', updateShaderMode);
      compactQuery.removeEventListener('change', updateShaderMode);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-fd-background', className)}
    >
      <div className="home-grid absolute inset-0 opacity-55 dark:opacity-35" />
      {mounted && canRenderShaders && isVisible ? (
        <>
          <GrainGradient
            className="absolute inset-0 animate-fd-fade-in opacity-75 duration-700"
            colors={isDark ? ['#fff383', '#fc7744', '#0db7c4', '#12121200'] : ['#6c63ff', '#c9d8ff', '#ff8066', '#fbf9ff00']}
            colorBack="#00000000"
            softness={0.92}
            intensity={0.58}
            noise={0.34}
            speed={0.34}
            shape="corners"
            minPixelRatio={1}
            maxPixelCount={1920 * 1080}
          />
          <Dithering
            width={560}
            height={560}
            colorBack="#00000000"
            colorFront={isDark ? '#fff383' : '#4f63ee'}
            shape="sphere"
            type="4x4"
            scale={0.4}
            size={2.1}
            speed={0}
            frame={5000 * 120}
            className="absolute -right-40 top-2 animate-fd-fade-in opacity-45 duration-500 xl:right-0"
            minPixelRatio={1}
          />
        </>
      ) : (
        <div className="absolute inset-y-0 right-0 w-1/2 bg-brand/8" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_52%,var(--color-fd-background)_96%)]" />
    </div>
  );
}

export function HeroThemeStage({ lang }: { lang: HomeLocale }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const updateTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !stageRef.current || event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    rafRef.current = window.requestAnimationFrame(() => {
      stageRef.current?.style.setProperty('--hero-rotate-x', `${y * -3.5}deg`);
      stageRef.current?.style.setProperty('--hero-rotate-y', `${x * 4.5}deg`);
      stageRef.current?.style.setProperty('--hero-shift-x', `${x * 8}px`);
      stageRef.current?.style.setProperty('--hero-shift-y', `${y * 8}px`);
    });
  };

  const resetTilt = () => {
    stageRef.current?.style.setProperty('--hero-rotate-x', '0deg');
    stageRef.current?.style.setProperty('--hero-rotate-y', '0deg');
    stageRef.current?.style.setProperty('--hero-shift-x', '0px');
    stageRef.current?.style.setProperty('--hero-shift-y', '0px');
  };

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stageStyle = {
    '--hero-rotate-x': '0deg',
    '--hero-rotate-y': '0deg',
    '--hero-shift-x': '0px',
    '--hero-shift-y': '0px',
  } as CSSProperties;

  return (
    <div
      className="relative w-full min-w-0 select-none py-4 lg:py-0"
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
    >
      <Link
        href="https://blog.zhheo.com/"
        target="_blank"
        rel="noreferrer"
        aria-label={lang === 'cn' ? '在新标签页打开 Solitude 主题博客演示' : 'Open the Solitude theme blog demo in a new tab'}
        className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-fd-background"
      >
        <div ref={stageRef} style={stageStyle} className="home-hero-stage relative mx-auto aspect-[720/486] w-full max-w-[760px]">
          <div className="home-macbook absolute left-0 top-[4%] w-[92%]" aria-hidden>
            <div className="home-macbook-lid">
              <span className="home-macbook-camera" />
              <div className="home-macbook-screen">
                <Image
                  src="/showcase/blog-zhheo-desktop.webp"
                  alt=""
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1023px) 86vw, 46vw"
                />
              </div>
            </div>
            <div className="home-macbook-hinge" />
            <div className="home-macbook-base">
              <span className="home-macbook-notch" />
            </div>
          </div>

          <div className="home-iphone absolute bottom-[1%] right-0 z-10 w-[23%]" aria-hidden>
            <div className="home-iphone-buttons">
              <span />
              <span />
              <span />
            </div>
            <div className="home-iphone-shell">
              <span className="home-iphone-island" />
              <div className="home-iphone-screen">
                <Image
                  src="/showcase/blog-zhheo-mobile.webp"
                  alt=""
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1023px) 22vw, 12vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function SceneVisual({ scene, lang, compact = false }: { scene: HomeScene; lang: HomeLocale; compact?: boolean }) {
  const accentClass = {
    brand: 'text-brand',
    cyan: 'text-home-cyan',
    coral: 'text-home-coral',
  }[scene.accent];

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg border border-fd-border bg-fd-card/85 shadow-xl shadow-black/8 dark:border-white/10 dark:bg-[#171717]/95',
        compact
          ? scene.id === 'runtime'
            ? 'h-[510px] sm:h-[380px]'
            : scene.id === 'reading'
              ? 'h-[280px] sm:h-[380px]'
              : 'h-[360px]'
          : 'aspect-[16/10]',
      )}
    >
      <div className="flex h-11 items-center justify-between border-b border-fd-border/65 px-4 dark:border-white/10">
        <div className="flex items-center gap-2 text-xs font-medium text-fd-muted-foreground">
          <scene.icon className={cn('size-4', accentClass)} />
          {scene.eyebrow[lang]}
        </div>
        <span className="font-mono text-xs text-fd-muted-foreground">{scene.index} / 03</span>
      </div>

      {scene.id === 'home' && (
        <div className="relative grid h-[calc(100%_-_2.75rem)] place-items-center overflow-hidden bg-[#15161b] p-4 sm:p-6">
          <div className="absolute inset-0 home-dot-field opacity-35" />
          <div className="relative w-[94%] overflow-hidden rounded-md border border-white/12 bg-[#1b1c22] shadow-2xl">
            <Image
              src="/base-useage/home_top_banner.png"
              alt={lang === 'cn' ? 'Solitude 首页横幅能力演示' : 'Solitude homepage banner demo'}
              width={1230}
              height={638}
              className="h-auto w-full"
              sizes="(max-width: 1023px) 90vw, 52vw"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-[42%] overflow-hidden rounded-md border border-white/15 bg-[#1b1c22] shadow-xl sm:bottom-6 sm:right-6">
            <Image
              src="/base-useage/home_top_recpmmend.png"
              alt={lang === 'cn' ? 'Solitude 首页推荐内容能力演示' : 'Solitude homepage recommendation demo'}
              width={1232}
              height={632}
              className="h-auto w-full"
              sizes="(max-width: 1023px) 40vw, 24vw"
            />
          </div>
        </div>
      )}

      {scene.id === 'reading' && (
        <div className="grid h-[calc(100%_-_2.75rem)] grid-cols-1 gap-3 overflow-hidden bg-fd-secondary/55 p-3 sm:grid-cols-[minmax(0,1fr)_30%] sm:gap-4 sm:p-5">
          <div className="relative min-w-0 overflow-hidden rounded-md border border-fd-border/70 bg-fd-card shadow-sm shadow-black/5 dark:border-white/10">
            <Image
              src="/showcase/reading-article.webp"
              alt={lang === 'cn' ? 'Solitude 文章 AI 摘要与代码内容演示' : 'Solitude article AI summary and code demo'}
              fill
              className="object-cover object-top"
              sizes="(max-width: 639px) calc(100vw - 4rem), (max-width: 1023px) 62vw, 36vw"
            />
          </div>
          <div className="relative hidden min-w-0 overflow-hidden rounded-md border border-fd-border/70 bg-fd-card shadow-sm shadow-black/5 dark:border-white/10 sm:block">
            <Image
              src="/showcase/reading-sidebar.webp"
              alt={lang === 'cn' ? 'Solitude 文章目录与最近发布侧栏演示' : 'Solitude article outline and recent posts sidebar demo'}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1023px) 28vw, 16vw"
            />
          </div>
        </div>
      )}

      {scene.id === 'runtime' && (
        <div className="grid h-[calc(100%_-_2.75rem)] gap-4 overflow-hidden bg-[#111214] p-4 text-white sm:grid-cols-[1.05fr_0.95fr] sm:p-6">
          <div className="flex min-h-0 flex-col rounded-md border border-white/10 bg-[#191a1e] p-4 font-mono text-xs sm:p-5 sm:text-sm">
            <div className="mb-5 flex items-center justify-between text-white/50">
              <span>runtime.ts</span>
              <FileCode2 className="size-4 text-home-coral" />
            </div>
            <div className="space-y-2.5 leading-6">
              <p><span className="text-home-coral">import</span> {'{ Solitude }'} <span className="text-home-coral">from</span> <span className="text-home-cyan">&apos;../core/api.js&apos;</span></p>
              <p className="text-white/45">{`// ${lang === 'cn' ? '统一管理页面生命周期' : 'Manage the page lifecycle'}`}</p>
              <p><span className="text-brand dark:text-[#fff383]">Solitude</span>.on(<span className="text-home-cyan">&apos;afterNavigate&apos;</span>, () =&gt; {'{'}</p>
              <p className="pl-4 text-white/80">mountPageModules()</p>
              <p>{'}'})</p>
            </div>
            <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-white/45">
              <span className="size-1.5 rounded-full bg-home-cyan" />
              {lang === 'cn' ? '按需加载 · 自动清理' : 'On demand · automatic cleanup'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {runtimeModules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.label} className="flex min-w-0 flex-col justify-between rounded-md border border-white/10 bg-white/5 p-3 sm:p-4">
                  <Icon className="size-4 text-home-cyan sm:size-5" />
                  <div className="mt-5 min-w-0">
                    <p className="truncate text-sm font-semibold">{module.label}</p>
                    <p className="mt-1 text-[11px] leading-4 text-white/45 sm:text-xs">{module.detail[lang]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-full hidden items-center justify-between border-t border-white/10 pt-4 sm:flex">
            <span className="text-xs text-white/40">{lang === 'cn' ? '集成生态' : 'Integration ecosystem'}</span>
            <div className="flex items-center gap-3">
              {projectIcons.map(([src, alt]) => (
                <span key={src} className="inline-flex size-8 items-center justify-center rounded-md bg-white/90 p-1.5">
                  <Image src={src} alt={alt} width={24} height={24} className="size-full object-contain" />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CapabilityStory({ lang }: { lang: HomeLocale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = useReducedMotion();
  const activeScene = homeScenes[activeIndex];
  const ActiveIcon = activeScene.icon;

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    let frame: number | null = null;
    let connected = false;

    const updateActiveScene = () => {
      frame = null;
      const firstMarker = markerRefs.current[0];
      if (!desktopQuery.matches || !firstMarker) return;

      const markerBounds = firstMarker.getBoundingClientRect();
      if (markerBounds.height === 0) return;

      const progress = -markerBounds.top / markerBounds.height;
      const nextIndex = Math.max(0, Math.min(homeScenes.length - 1, Math.round(progress)));
      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveScene);
    };

    const disconnect = () => {
      if (!connected) return;
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      connected = false;
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
    };

    const connect = () => {
      disconnect();
      if (!desktopQuery.matches) return;

      connected = true;
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate);
      scheduleUpdate();
    };

    connect();
    desktopQuery.addEventListener('change', connect);
    return () => {
      desktopQuery.removeEventListener('change', connect);
      disconnect();
    };
  }, []);

  const goToScene = (index: number) => {
    markerRefs.current[index]?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  return (
    <section className="home-capability-story relative border-y border-fd-border bg-fd-card/35 lg:h-[300svh]">
      <div className="home-capability-desktop mx-auto hidden h-svh w-full max-w-[1400px] grid-cols-[minmax(280px,0.78fr)_minmax(560px,1.22fr)] items-center gap-12 px-10 lg:sticky lg:top-0 lg:grid">
        <div className="relative z-10 max-w-md">
          <div key={activeScene.id} className="home-scene-copy">
            <div className="mb-7 flex items-center gap-3">
              <span className={cn('inline-flex size-10 items-center justify-center rounded-md border bg-fd-background', activeScene.accent === 'brand' && 'border-brand/30 text-brand', activeScene.accent === 'cyan' && 'border-home-cyan/30 text-home-cyan', activeScene.accent === 'coral' && 'border-home-coral/30 text-home-coral')}>
                <ActiveIcon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase text-fd-muted-foreground">{lang === 'cn' ? '界面能力演示' : 'Interface capability demo'}</p>
                <p className="mt-1 font-mono text-xs text-fd-muted-foreground">{activeScene.index} / 03</p>
              </div>
            </div>
            <p className={cn('text-sm font-medium', activeScene.accent === 'brand' && 'text-brand', activeScene.accent === 'cyan' && 'text-home-cyan', activeScene.accent === 'coral' && 'text-home-coral')}>
              {activeScene.eyebrow[lang]}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.08] text-fd-foreground xl:text-5xl">{activeScene.title[lang]}</h2>
            <p className="mt-5 text-base leading-7 text-fd-muted-foreground">{activeScene.description[lang]}</p>
            <ul className="mt-7 space-y-3">
              {activeScene.points[lang].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-fd-foreground">
                  <span className={cn('size-1.5 rounded-full', activeScene.accent === 'brand' && 'bg-brand', activeScene.accent === 'cyan' && 'bg-home-cyan', activeScene.accent === 'coral' && 'bg-home-coral')} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-3" aria-label={lang === 'cn' ? '场景导航' : 'Scene navigation'}>
            {homeScenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => goToScene(index)}
                aria-label={`${scene.index} ${scene.eyebrow[lang]}`}
                aria-current={index === activeIndex ? 'step' : undefined}
                className={cn('h-1.5 rounded-full bg-fd-border transition-[width,background-color] duration-300', index === activeIndex ? 'w-12 bg-fd-foreground' : 'w-5 hover:bg-fd-muted-foreground')}
              />
            ))}
          </div>
        </div>

        <div key={activeScene.id} className="home-scene-visual relative z-10 min-w-0">
          <SceneVisual scene={activeScene} lang={lang} />
        </div>
      </div>

      <div className="home-capability-mobile relative mx-auto grid w-full max-w-[760px] gap-14 px-5 py-16 md:px-10 lg:hidden">
        <div>
          <p className="text-sm font-medium text-brand">{lang === 'cn' ? '界面能力演示' : 'Interface capability demo'}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">{lang === 'cn' ? '每一屏，都服务于内容' : 'Every screen serves the content'}</h2>
        </div>
        {homeScenes.map((scene) => (
          <article key={scene.id} className="grid gap-6">
            <div>
              <p className="font-mono text-xs text-fd-muted-foreground">{scene.index} / 03</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{scene.title[lang]}</h3>
              <p className="mt-3 leading-7 text-fd-muted-foreground">{scene.description[lang]}</p>
            </div>
            <SceneVisual scene={scene} lang={lang} compact />
          </article>
        ))}
      </div>

      <div className="home-capability-markers pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {homeScenes.map((scene, index) => (
          <div
            key={scene.id}
            ref={(element) => {
              markerRefs.current[index] = element;
            }}
            data-scene-index={index}
            className="h-svh"
          />
        ))}
      </div>
    </section>
  );
}

export function InstallTimeline({ lang, installHref }: { lang: HomeLocale; installHref: string }) {
  const steps = startSteps[lang];
  const [activeStep, setActiveStep] = useState(0);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.stepIndex);
        if (Number.isFinite(index)) setActiveStep(index);
      },
      { rootMargin: '-24% 0px -30% 0px', threshold: [0.15, 0.5, 0.8] },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const copyCommand = async (command: string, index: number) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedStep(index);
      window.setTimeout(() => setCopiedStep(null), 1600);
    } catch {
      setCopiedStep(null);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="home-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid w-full max-w-[1400px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-home-coral">{lang === 'cn' ? '从零到运行' : 'From zero to running'}</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
            {lang === 'cn' ? '三步，把主题交给 Hexo' : 'Three steps from Hexo to Solitude'}
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-fd-muted-foreground">
            {lang === 'cn'
              ? '命令保持简短，配置路径保持清楚。完成后继续阅读安装文档，处理升级和自定义场景。'
              : 'The commands stay short and the setup path stays clear. Continue into the guide for upgrades and customization.'}
          </p>
          <Link href={installHref} className={cn(buttonClass, 'mt-7 border border-fd-border bg-fd-card text-fd-foreground hover:bg-fd-accent')}>
            {lang === 'cn' ? '阅读安装文档' : 'Read installation guide'}
            <ExternalLink className="size-4" />
          </Link>
        </div>

        <ol className="relative before:absolute before:bottom-12 before:left-[1.15rem] before:top-12 before:w-px before:bg-fd-border">
          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            return (
              <li
                key={step.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                data-step-index={index}
                className="relative grid min-h-[220px] grid-cols-[2.3rem_minmax(0,1fr)] gap-5 border-b border-fd-border py-10 first:pt-0 last:border-0 last:pb-0 sm:gap-7"
              >
                <span className={cn('relative z-10 inline-flex size-9 items-center justify-center rounded-full border bg-fd-background font-mono text-xs transition-colors duration-300', isActive ? 'border-home-coral bg-home-coral text-white dark:text-black' : 'border-fd-border text-fd-muted-foreground')}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-fd-muted-foreground">{step.description}</p>
                  <div className={cn('mt-6 flex min-w-0 items-center gap-3 rounded-md border px-4 py-3 transition-colors duration-300', isActive ? 'border-home-coral/40 bg-home-coral/8' : 'border-fd-border bg-fd-card/70')}>
                    <Terminal className={cn('size-4 shrink-0', isActive ? 'text-home-coral' : 'text-fd-muted-foreground')} />
                    <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-fd-foreground sm:text-sm">{step.command}</code>
                    <button
                      type="button"
                      onClick={() => copyCommand(step.command, index)}
                      aria-label={copiedStep === index ? (lang === 'cn' ? '已复制' : 'Copied') : lang === 'cn' ? '复制命令' : 'Copy command'}
                      title={copiedStep === index ? (lang === 'cn' ? '已复制' : 'Copied') : lang === 'cn' ? '复制命令' : 'Copy command'}
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
                    >
                      {copiedStep === index ? <Check className="size-4 text-home-cyan" /> : <Copy className="size-4" />}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function ScrollCue({ lang }: { lang: HomeLocale }) {
  return (
    <div className="hidden items-center gap-2 text-xs font-medium text-fd-muted-foreground md:flex">
      <ChevronDown className="home-scroll-cue size-4" />
      {lang === 'cn' ? '向下探索' : 'Scroll to explore'}
    </div>
  );
}
