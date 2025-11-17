/**
 * Language management system
 * Similar to theme.js but for internationalization
 */

const LANGUAGE_KEY = 'preferred-language';
const LANGUAGE_CHANGE_EVENT = 'languagechange';

/**
 * Get initial language from localStorage or browser preference
 * @returns {'es' | 'en'}
 */
export const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    if (import.meta.env.DEV) {
      console.warn('Could not read language from localStorage:', e);
    }
  }
  
  // Fallback to browser language
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
};

/**
 * Set language and persist to localStorage
 * @param {'es' | 'en'} lang
 */
export const setLanguage = (lang) => {
  try {
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Dispatch custom event for components to react
    window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: { language: lang } }));
  } catch (e) {
    if (import.meta.env.DEV) {
      console.warn('Could not save language to localStorage:', e);
    }
  }
};

/**
 * Toggle between ES and EN
 */
export const toggleLanguage = () => {
  const current = getInitialLanguage();
  const next = current === 'es' ? 'en' : 'es';
  setLanguage(next);
};

/**
 * Initialize language on app mount
 */
export const initLanguage = () => {
  const lang = getInitialLanguage();
  document.documentElement.setAttribute('lang', lang);
};

/**
 * Listen to language changes
 * @param {Function} callback
 * @returns {Function} cleanup function
 */
export const onLanguageChange = (callback) => {
  const handler = (e) => callback(e.detail.language);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, handler);
  return () => window.removeEventListener(LANGUAGE_CHANGE_EVENT, handler);
};
