import { useEffect } from 'react';
import { initTheme } from '../lib/theme.js';
import { initLanguage } from '../lib/i18n.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { useTranslation } from '../hooks/useTranslation.js';
import { ThemeToggle } from './ThemeToggle.jsx';
import { LanguageToggle } from './LanguageToggle.jsx';

export function Layout({ children }) {
  useEffect(() => {
    initTheme();
    initLanguage();
  }, []);

  // Hook para animaciones de scroll
  useScrollReveal();

  const { t } = useTranslation();

  const frameworks = [
    { id: 'react', name: 'React', icon: '⚛️', url: '/', active: true },
    { id: 'astro', name: 'Astro', icon: '🪐', url: '/astro/' },
    { id: 'vue', name: 'Vue', icon: '💚', url: '/vue/' },
    { id: 'solid', name: 'Solid', icon: '🔷', url: '/solid/' },
    { id: 'vanilla', name: 'Vanilla', icon: '⚡', url: '/vanilla/' },
    { id: 'next', name: 'Next.js', icon: '▲', url: '/next/' },
    { id: 'lab', name: 'Lab', icon: '🧪', url: '/lab/' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar idéntico a Astro */}
      <nav>
        <div className="inner">
          {/* Fila 1: Menu principal */}
          <div className="menu-row">
            <button
              className="logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Volver arriba"
            >
              👨‍💻
            </button>
            <div className="menu-links">
              <a href="#about">
                <span className="icon">👤</span>
                <span>{t('Sobre mí', 'About')}</span>
              </a>
              <a href="#services">
                <span className="icon">🚀</span>
                <span>{t('Servicios', 'Services')}</span>
              </a>
              <a href="#experience">
                <span className="icon">💼</span>
                <span>{t('Experiencia', 'Experience')}</span>
              </a>
              <a href="#projects">
                <span className="icon">🎨</span>
                <span>{t('Proyectos', 'Projects')}</span>
              </a>
              <a href="#skills">
                <span className="icon">⚡</span>
                <span>{t('Habilidades', 'Skills')}</span>
              </a>
              <a href="#contact">
                <span className="icon">📧</span>
                <span>{t('Contacto', 'Contact')}</span>
              </a>
            </div>
            <div className="controls">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Fila 2: Framework switcher */}
          <div className="frameworks-row">
            {frameworks.map((fw) => (
              <a
                key={fw.id}
                href={fw.url}
                className={fw.active ? 'active' : ''}
                title={`Ver en ${fw.name}`}
              >
                {fw.icon} <span className="hidden-mobile">{fw.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
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
