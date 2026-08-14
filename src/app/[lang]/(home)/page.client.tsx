'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { HomeLocale } from './home.data';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false },
);

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  { ssr: false },
);

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

export function ScrollCue({ lang }: { lang: HomeLocale }) {
  return (
    <div className="hidden items-center gap-2 text-xs font-medium text-fd-muted-foreground md:flex">
      <ChevronDown className="home-scroll-cue size-4" />
      {lang === 'cn' ? '向下探索' : 'Scroll to explore'}
    </div>
  );
}
