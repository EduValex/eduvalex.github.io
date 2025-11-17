import { useEffect, useMemo, useState } from 'react';
import { initTheme } from '../lib/theme.js';
import { initLanguage } from '../lib/i18n.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { useTranslation } from '../hooks/useTranslation.js';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';
import { Navbar } from './Navbar.jsx';
import data from '@data/cv-data.json';

function FrameworkSwitcher() {
  // Conmutador simple React/Astro como enlaces
  const isAstro = typeof window !== 'undefined' && window.location.pathname.startsWith('/astro');
  const Link = ({ href, active, children }) => (
    <a
      href={href}
      className={`px-3 py-1.5 rounded-md border text-sm font-medium transition-colors ${
        active
          ? 'bg-blue-600 border-blue-600 text-white'
          : 'bg-white/70 dark:bg-slate-700/60 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
      }`}
    >
      {children}
    </a>
  );

  return (
    <div className="inline-flex items-center gap-2">
      <Link href="/" active={!isAstro}>⚛️ React</Link>
      <Link href="/astro/" active={isAstro}>⭐ Astro</Link>
    </div>
  );
}

export function Layout({ children }) {
  useEffect(() => {
    initTheme();
    initLanguage();
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
      {/* Navbar flotante de navegación */}
      <Navbar />
      
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-700 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
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
            <LanguageToggle />
            <ThemeToggle />
            <FrameworkSwitcher />
          </div>
        </div>
      </header>
      {/* El contenido principal se envuelve (desde About en adelante) en App.jsx */}
      <main className="flex-1 py-10 flex flex-col gap-12">
        {children}
      </main>
      <footer className="mt-16 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Eduardo Valenzuela — React + Tailwind · <a className="underline hover:no-underline" href="/astro/">Ver versión Astro</a>
      </footer>
    </div>
  );
}

function t(key) {
  const { t: translate } = useTranslation();
  return translate(key);
}
