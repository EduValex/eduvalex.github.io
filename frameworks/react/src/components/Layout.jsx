import { useEffect, useMemo, useState } from 'react';
import { initTheme } from '../lib/theme.js';
import { initLanguage } from '../lib/i18n.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { useTranslation } from '../hooks/useTranslation.js';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';
import { TechLinksInline } from './TechLinksInline.jsx';
import data from '@data/cv-data.json';

// Eliminado FrameworkSwitcher: ahora usamos TechDropdown controlado

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

  const [techOpen, setTechOpen] = useState(false);
  // Cierre por click fuera y tecla ESC (UX estándar)
  useEffect(() => {
    if (!techOpen) return;
    const handleDocClick = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('[data-tech-dropdown]')) {
        return; // click dentro del dropdown
      }
      setTechOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setTechOpen(false);
    };
    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [techOpen]);

  const frameworks = [
    { id: 'react', name: 'React', icon: '⚛️', url: '/', active: true },
    { id: 'astro', name: 'Astro', icon: '🪐', url: '/astro/' },
    { id: 'vue', name: 'Vue', icon: '💚', url: '/vue/' },
    { id: 'solid', name: 'Solid', icon: '🔷', url: '/solid/' },
    { id: 'vanilla', name: 'Vanilla', icon: '⚡', url: '/vanilla/' },
    { id: 'lab', name: 'Lab', icon: '🧪', url: '/lab/' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header de dos filas con iconos (unificado) */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/85 text-slate-100 border-b border-slate-700/60 shadow-md">
        {/* Fila 1: menú + toggles */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold" title={personal?.name}>
              {initials}
            </div>
            <nav className="hidden sm:flex items-center flex-wrap gap-1.5 md:gap-2">
              <a href="#about" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">👤 Sobre mí</a>
              <a href="#services" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">🚀 Servicios</a>
              <a href="#experience" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">💼 Experiencia</a>
              <a href="#projects" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">🎨 Proyectos</a>
              <a href="#skills" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">⚡ Habilidades</a>
              <a href="#contact" className="px-2.5 py-1.5 rounded-md text-xs md:text-sm text-slate-200 hover:bg-slate-700/60">📧 Contacto</a>
            </nav>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <TechLinksInline />
          </div>
        </div>
        {/* Fila 2: switcher de frameworks */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
            {frameworks.map((fw) => (
              <a
                key={fw.id}
                href={fw.url}
                className={`${fw.active ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-700/60'} px-3 py-1 rounded-md text-xs font-medium transition-all hover:scale-105 whitespace-nowrap`}
                title={`Ver en ${fw.name}`}
              >
                <span className="mr-1">{fw.icon}</span>
                <span className="hidden sm:inline">{fw.name}</span>
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* El contenido principal se envuelve (desde About en adelante) en App.jsx */}
      <main className="flex-1 py-10 flex flex-col gap-12">
        {children}
      </main>
      <footer className="mt-16 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Eduardo Valenzuela — Full Stack Developer
      </footer>
    </div>
  );
}

function t(key) {
  const { t: translate } = useTranslation();
  return translate(key);
}
