import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.js';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const sections = [
    { id: 'hero', label: 'Inicio', icon: '🏠' },
    { id: 'about', label: t('sections.about'), icon: '👤' },
    { id: 'services', label: '¿Qué hago?', icon: '🚀' },
    { id: 'experience', label: t('sections.experience'), icon: '💼' },
    { id: 'projects', label: t('sections.projects'), icon: '🎨' },
    { id: 'skills', label: t('sections.skills'), icon: '⚡' },
    { id: 'contact', label: t('sections.contact'), icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Detectar sección activa
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nombre */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            EV
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  activeSection === section.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title={section.label}
              >
                <span className="mr-1.5">{section.icon}</span>
                <span className="hidden lg:inline">{section.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Mobile - Dots */}
          <div className="md:hidden flex items-center gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSection === section.id
                    ? 'bg-primary w-8'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
                title={section.label}
                aria-label={section.label}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
