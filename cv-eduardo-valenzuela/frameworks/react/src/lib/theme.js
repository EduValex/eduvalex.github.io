// Theme management utilities
// Responsible for: dark mode persistence, system preference sync, event dispatch

const STORAGE_KEY = 'cv_theme';

export function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  // Fallback to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
}

export function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

export function initTheme() {
  const initial = getInitialTheme();
  applyTheme(initial);
  // Listen for system changes (only if user never explicitly set a theme)
  if (!localStorage.getItem(STORAGE_KEY)) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    });
  }
}
