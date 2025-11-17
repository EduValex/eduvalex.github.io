import data from '@data/cv-data.json';
import { useTranslation } from '../../hooks/useTranslation.js';

export function AboutSection() {
  const { t, lang } = useTranslation();
  const aboutText = data.about[lang] || data.about.es;
  
  
  return (
    <section id="about" className="flex flex-col gap-6">
      <h2 className="section-title">
        <span className="animate-float">👨‍💻</span>
        {t('sections.about')}
      </h2>
      
      <div className="panel p-6 hover-lift transition-all relative overflow-hidden group">
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* Full text in one column for better readability */}
        <div className="relative z-10 space-y-4">
          {aboutText.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
            <p 
              key={index}
              className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
  {/* Key highlights with icons (no print) */}
  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 relative z-10 print-hide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">UFRO Temuco</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🧘‍♂️</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{lang === 'es' ? 'Instructor Yoga' : 'Yoga Instructor'}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">💼</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Valex Marketing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">SaaS Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
