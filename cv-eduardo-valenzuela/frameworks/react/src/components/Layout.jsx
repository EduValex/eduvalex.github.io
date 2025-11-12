import { useEffect, useMemo } from 'react';
import { initTheme } from '../lib/theme.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { ThemeToggle } from './ThemeToggle.jsx';
import data from '@data/cv-data.json';

function FrameworkSwitcherPlaceholder() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-colors"
      aria-label="Switch framework (placeholder)"
      disabled
      title="Framework switcher vendrá luego"
    >
      🧩 Framework
    </button>
  );
}

export function Layout({ children }) {
  useEffect(() => {
    initTheme();
  }, []);

  // Hook para animaciones de scroll
  useScrollReveal();

  const personal = data.personal;
  const initials = useMemo(() => {
    if (!personal?.name) return 'EV';
    return personal.name
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }, [personal?.name]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-700">
        <div className="container-responsive py-3 flex items-center justify-between">
          <div className="flex items-center gap-3" aria-label={personal?.name || 'Portfolio'}>
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold" title={personal?.name}>
              {initials}
            </div>
            {personal?.title && (
              <span className="text-sm md:text-base text-slate-700 dark:text-slate-200 font-medium">
                {personal.title}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <FrameworkSwitcherPlaceholder />
          </div>
        </div>
      </header>
      <main className="flex-1 container-responsive py-10 flex flex-col gap-12">
        {children}
      </main>
      <footer className="mt-16 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Eduardo Valenzuela — Construido con React + Tailwind
      </footer>
    </div>
  );
}
