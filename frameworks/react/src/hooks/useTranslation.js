import { useState, useEffect } from 'react';
import { getInitialLanguage, onLanguageChange } from '../lib/i18n.js';
import { es } from '../config/translations/es.js';
import { en } from '../config/translations/en.js';

const translations = { es, en };

/**
 * Custom hook for translations
 * @returns {{ t: Function, lang: string }}
 */
export const useTranslation = () => {
  const [lang, setLang] = useState(getInitialLanguage());
  
  useEffect(() => {
    const cleanup = onLanguageChange(setLang);
    return cleanup;
  }, []);
  
  /**
   * Get translation by key path
   * @param {string} key - Dot notation path (e.g., 'hero.downloadCV')
   * @returns {string}
   */
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    // Fallback to key if translation not found
    return value || key;
  };
  
  return { t, lang };
};
