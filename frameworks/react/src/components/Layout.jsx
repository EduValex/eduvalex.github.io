import { useEffect } from 'react';
import { initTheme } from '../lib/theme.js';
import { initLanguage } from '../lib/i18n.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

export function Layout({ children }) {
  useEffect(() => {
    initTheme();
    initLanguage();
  }, []);

  // Hook para animaciones de scroll
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 flex flex-col gap-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
