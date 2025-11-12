import { useEffect } from 'react';

/**
 * Hook para animar secciones al hacer scroll
 * Usa Intersection Observer para detectar cuando elementos entran al viewport
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
}
