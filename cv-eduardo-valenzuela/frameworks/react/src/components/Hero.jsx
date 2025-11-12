import { useState } from 'react';
import data from '@data/cv-data.json';
import { LazyImage } from './LazyImage.jsx';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import { useTranslation } from '../hooks/useTranslation.js';

export function Hero() {
  const { personal } = data;
  const { t } = useTranslation();
  
  // Efecto de typing para el título
  const roles = t('hero.roles');
  const typedText = useTypingEffect(roles, 100, 50, 2000);
  
  const cvUrl = '/shared/assets/cv-eduardo-valenzuela.pdf';
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfOptions, setPdfOptions] = useState({
    sections: {
      hero: true,
      about: true,
      services: true,
      experience: true,
      projects: true,
      skills: true,
      contact: true,
    },
    style: 'styled', // 'styled' | 'plain'
  });

  // Utilidad: aplica/remueve clases para impresión selectiva
  const applyPrintConfig = (apply) => {
    const body = document.body;
    const ids = Object.keys(pdfOptions.sections);
    if (apply) {
      // Estilo
      body.classList.toggle('print-plain', pdfOptions.style === 'plain');
      body.classList.toggle('print-styled', pdfOptions.style === 'styled');
      // Secciones a ocultar
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!pdfOptions.sections[id]) {
          el.classList.add('print-hide');
        }
      });
    } else {
      body.classList.remove('print-plain');
      body.classList.remove('print-styled');
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('print-hide');
      });
    }
  };

  const handleConfirmPdf = () => {
    setShowPdfModal(false);
    // Aplica configuración y abre diálogo de impresión
    applyPrintConfig(true);
    const cleanup = () => {
      applyPrintConfig(false);
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    try {
      window.print();
    } catch (e) {
      if (import.meta.env.DEV) console.warn('Print dialog failed:', e);
      cleanup();
      // Fallback descarga
      window.location.href = cvUrl;
    }
  };

  return (
  <section id="hero" className="panel p-6 mt-6 flex flex-col md:flex-row items-center gap-6 animate-fade-in relative overflow-hidden">
      {/* Efecto de gradiente animado de fondo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift" 
             style={{ backgroundSize: '300% 300%' }}>
        </div>
      </div>
      
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg animate-scale-in hover-glow">
        <div className="absolute inset-0 animate-pulse-glow opacity-30"></div>
        <LazyImage
          src={personal.photo}
          alt={`Foto de ${personal.name}`}
          className="w-full h-full relative z-10"
        />
      </div>
      <div className="flex-1 text-center md:text-left animate-fade-in-up delay-200 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight hover-scale transition-transform inline-block">
          {personal.name}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-1 h-8 flex items-center justify-center md:justify-start">
          <span className="font-semibold">{typedText}</span>
          <span className="animate-pulse ml-1 text-primary">|</span>
        </p>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{personal.tagline}</p>
        
        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <button
            onClick={() => setShowPdfModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all hover-lift shadow-md"
              title="Generar y Descargar PDF"
          >
              <span>�</span>
              Generar y Descargar PDF
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all hover-lift shadow-md"
          >
            <span>💬</span>
            {t('hero.contact')}
          </a>
        </div>
      </div>
      {/* Modal configuración PDF */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 no-print" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-xl bg-white dark:bg-slate-900 shadow-xl p-5">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <span>🧾</span>
              Configurar PDF
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Elige qué secciones incluir y el estilo del PDF.</p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'hero', label: 'Header' },
                { id: 'about', label: 'Sobre mí' },
                { id: 'services', label: 'Servicios' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contacto' },
              ].map((s) => (
                <label key={s.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    checked={pdfOptions.sections[s.id]}
                    onChange={(e) => setPdfOptions((prev) => ({
                      ...prev,
                      sections: { ...prev.sections, [s.id]: e.target.checked },
                    }))}
                  />
                  {s.label}
                </label>
              ))}
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Estilo</div>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pdf-style"
                    className="accent-primary"
                    checked={pdfOptions.style === 'styled'}
                    onChange={() => setPdfOptions((p) => ({ ...p, style: 'styled' }))}
                  />
                  Con estilos y colores
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pdf-style"
                    className="accent-primary"
                    checked={pdfOptions.style === 'plain'}
                    onChange={() => setPdfOptions((p) => ({ ...p, style: 'plain' }))}
                  />
                  Blanco y negro (simple)
                </label>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setShowPdfModal(false)} className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700">Cancelar</button>
              <button onClick={handleConfirmPdf} className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark">Generar PDF</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
