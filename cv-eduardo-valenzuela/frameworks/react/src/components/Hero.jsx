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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 no-print animate-fade-in" role="dialog" aria-modal="true" onClick={() => setShowPdfModal(false)}>
          <div className="w-full max-w-lg rounded-xl bg-white dark:bg-slate-800 shadow-2xl p-6 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-slate-900 dark:text-white">
              <span>🧾</span>
              Configurar PDF
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">Elige qué secciones incluir y el estilo del PDF.</p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { id: 'hero', label: 'Header' },
                { id: 'about', label: 'Sobre mí' },
                { id: 'services', label: 'Servicios' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contacto' },
              ].map((s) => (
                <label key={s.id} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    className="accent-primary w-4 h-4"
                    checked={pdfOptions.sections[s.id]}
                    onChange={(e) => setPdfOptions((prev) => ({
                      ...prev,
                      sections: { ...prev.sections, [s.id]: e.target.checked },
                    }))}
                  />
                  <span className="text-slate-700 dark:text-slate-200">{s.label}</span>
                </label>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-5">
              <div className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">Estilo de impresión</div>
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 p-2 rounded transition-colors">
                  <input
                    type="radio"
                    name="pdf-style"
                    className="accent-primary w-4 h-4"
                    checked={pdfOptions.style === 'styled'}
                    onChange={() => setPdfOptions((p) => ({ ...p, style: 'styled' }))}
                  />
                  <span className="text-slate-700 dark:text-slate-200">Con estilos y colores</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 p-2 rounded transition-colors">
                  <input
                    type="radio"
                    name="pdf-style"
                    className="accent-primary w-4 h-4"
                    checked={pdfOptions.style === 'plain'}
                    onChange={() => setPdfOptions((p) => ({ ...p, style: 'plain' }))}
                  />
                  <span className="text-slate-700 dark:text-slate-200">Blanco y negro (simple)</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowPdfModal(false)} 
                className="px-5 py-2.5 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirmPdf} 
                className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
              >
                Generar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
