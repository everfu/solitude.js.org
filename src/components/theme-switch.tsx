'use client';

import { Airplay, Moon, Sun } from 'lucide-react';
import { useEffect, useState, type ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type Theme = 'light' | 'dark' | 'system';

const themes = ['light', 'dark', 'system'] as const;
const labels: Record<Theme, string> = {
  light: 'Light theme',
  dark: 'Dark theme',
  system: 'System theme',
};

function getSystemTheme(): Exclude<Theme, 'system'> {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  document.documentElement.style.colorScheme = resolvedTheme;
}

function readTheme(): Theme {
  let stored: string | null = null;

  try {
    stored = localStorage.getItem('theme');
  } catch {
    return 'system';
  }

  return themes.includes(stored as Theme) ? (stored as Theme) : 'system';
}

export function ThemeSwitch({
  className,
  mode = 'light-dark',
  ...props
}: ComponentProps<'div'> & { mode?: 'light-dark' | 'light-dark-system' }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<Exclude<Theme, 'system'>>('light');

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    function sync(nextTheme = readTheme()) {
      setThemeState(nextTheme);
      setResolvedTheme(nextTheme === 'system' ? getSystemTheme() : nextTheme);
      applyTheme(nextTheme);
    }

    function onStorage(event: StorageEvent) {
      if (event.key === 'theme') sync();
    }

    function onMediaChange() {
      sync();
    }

    sync();
    media.addEventListener('change', onMediaChange);
    window.addEventListener('storage', onStorage);

    return () => {
      media.removeEventListener('change', onMediaChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  function setTheme(nextTheme: Theme) {
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore storage failures and still apply the selected theme for this page.
    }

    setThemeState(nextTheme);
    setResolvedTheme(nextTheme === 'system' ? getSystemTheme() : nextTheme);
    applyTheme(nextTheme);
  }

  const container = cn(
    'inline-flex items-center overflow-hidden rounded-full border p-1 *:rounded-full',
    className,
  );
  const item = 'size-6.5 p-1.5 text-fd-muted-foreground';
  const active = 'bg-fd-accent text-fd-accent-foreground';

  if (mode === 'light-dark') {
    return (
      <button
        type="button"
        className={container}
        aria-label="Toggle theme"
        data-theme-toggle=""
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        <Sun fill="currentColor" className={cn(item, resolvedTheme === 'light' && active)} />
        <Moon fill="currentColor" className={cn(item, resolvedTheme === 'dark' && active)} />
      </button>
    );
  }

  return (
    <div className={container} data-theme-toggle="" {...props}>
      <button
        type="button"
        aria-label={labels.light}
        className={cn(item, theme === 'light' && active)}
        onClick={() => setTheme('light')}
      >
        <Sun fill="currentColor" className="size-full" />
      </button>
      <button
        type="button"
        aria-label={labels.dark}
        className={cn(item, theme === 'dark' && active)}
        onClick={() => setTheme('dark')}
      >
        <Moon fill="currentColor" className="size-full" />
      </button>
      <button
        type="button"
        aria-label={labels.system}
        className={cn(item, theme === 'system' && active)}
        onClick={() => setTheme('system')}
      >
        <Airplay fill="currentColor" className="size-full" />
      </button>
    </div>
  );
}
