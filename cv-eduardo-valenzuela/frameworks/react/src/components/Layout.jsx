import { useEffect, useMemo, useState } from 'react';
import { initTheme } from '../lib/theme.js';
import { initLanguage } from '../lib/i18n.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { useTranslation } from '../hooks/useTranslation.js';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';
import data from '@data/cv-data.json';

function FrameworkSwitcher() {
  const { t } = useTranslation();
  const [currentFramework, setCurrentFramework] = useState('react');
  
  const frameworks = [
    { id: 'react', name: t('nav.frameworks.react'), icon: '⚛️', available: true },
    { id: 'vue', name: t('nav.frameworks.vue'), icon: '💚', available: false },
    { id: 'vanilla', name: t('nav.frameworks.vanilla'), icon: '📜', available: false },
  ];

  const handleFrameworkChange = (frameworkId) => {
    if (!frameworks.find(f => f.id === frameworkId)?.available) {
      return; // No hacer nada si no está disponible
    }
    
    // Futuro: guardar estado y redirigir
    // saveAppState({ darkMode: document.documentElement.classList.contains('dark'), scrollPosition: window.scrollY });
    // window.location.href = `/frameworks/${frameworkId}/`;
    
    setCurrentFramework(frameworkId);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-all"
        aria-label="Seleccionar framework"
        title="Cambiar framework (próximamente Vue y Vanilla)"
      >
        <span>{frameworks.find(f => f.id === currentFramework)?.icon}</span>
        <span className="hidden sm:inline">{frameworks.find(f => f.id === currentFramework)?.name}</span>
        <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown menu - por ahora solo visual */}
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
        <div className="py-1" role="menu">
          {frameworks.map(fw => (
            <button
              key={fw.id}
              onClick={() => handleFrameworkChange(fw.id)}
              disabled={!fw.available}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                fw.available 
                  ? 'hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer' 
                  : 'opacity-40 cursor-not-allowed'
              } ${currentFramework === fw.id ? 'bg-primary/10 text-primary font-medium' : ''}`}
              role="menuitem"
            >
              <span>{fw.icon}</span>
              <span>{fw.name}</span>
              {!fw.available && <span className="ml-auto text-xs">{t('nav.frameworks.comingSoon')}</span>}
              {currentFramework === fw.id && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      </div>
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
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-700">
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
        © {new Date().getFullYear()} Eduardo Valenzuela — {t('footer.madeWith')} React + Tailwind
      </footer>
    </div>
  );
}

function t(key) {
  const { t: translate } = useTranslation();
  return translate(key);
}
