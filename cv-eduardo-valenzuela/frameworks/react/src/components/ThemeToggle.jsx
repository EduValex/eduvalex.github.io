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
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
