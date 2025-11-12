import { useEffect, useState } from 'react';
import { toggleTheme, getInitialTheme } from '../lib/theme.js';

export function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const handler = (e) => setTheme(e.detail.theme);
    window.addEventListener('theme-change', handler);
    return () => window.removeEventListener('theme-change', handler);
  }, []);

  return (
    <button
      onClick={() => setTheme(toggleTheme())}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow-md transition-all hover-scale relative overflow-hidden group"
      aria-label="Toggle dark mode"
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="relative z-10">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
