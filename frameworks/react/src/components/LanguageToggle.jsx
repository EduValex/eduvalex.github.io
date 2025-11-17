import { useState, useEffect } from 'react';
import { getInitialLanguage, toggleLanguage } from '../lib/i18n.js';

/**
 * Language toggle component (ES/EN)
 * Similar to ThemeToggle
 */
export function LanguageToggle() {
  const [lang, setLang] = useState(getInitialLanguage());
  
  useEffect(() => {
    const handleLanguageChange = (e) => {
      setLang(e.detail.language);
    };
    
    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);
  
  const handleToggle = () => {
    toggleLanguage();
  };
  
  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-all"
      aria-label={`Cambiar idioma (actual: ${lang === 'es' ? 'Español' : 'English'})`}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-base" role="img" aria-hidden="true">
        {lang === 'es' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className="hidden sm:inline font-medium">
        {lang === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}
