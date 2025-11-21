import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import data from '@data/cv-data.json';
import { LazyImage } from './LazyImage.jsx';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import { useTranslation } from '../hooks/useTranslation.js';

export function Hero() {
  const { personal } = data;
  const { t } = useTranslation();
  
  // Parallax effect con scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Efecto de typing para el título
  const roles = t('hero.roles');
  const typedText = useTypingEffect(roles, 100, 50, 2000);
  
  const cvUrl = '/CV-Eduardo-Valenzuela.pdf';

  // Counters animados
  const totalProjects = data.projects.length;
  const yearsExperience = new Date().getFullYear() - 2014;
  const techSet = new Set();
  data.projects.forEach(p => (p.technologies || []).forEach(t => techSet.add(t)));
  const uniqueTechs = techSet.size;

  const useCountUp = (to, duration = 1600) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * easeOut));
        if (progress >= 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }, [to, duration]);
    return value;
  };

  const projectsCount = useCountUp(totalProjects);
  const yearsCount = useCountUp(yearsExperience);
  const techsCount = useCountUp(uniqueTechs);

  return (
  <motion.section 
    id="hero" 
    className="panel p-6 mt-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
    style={{ y, opacity }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
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
        
        <div className="mt-4 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
          <div className="flex flex-col p-3 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm text-center md:text-left">
            <span className="text-2xl md:text-3xl font-extrabold text-primary">{projectsCount}</span>
            <span className="text-[11px] uppercase font-medium text-slate-500 dark:text-slate-400">Proyectos</span>
          </div>
          <div className="flex flex-col p-3 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm text-center md:text-left">
            <span className="text-2xl md:text-3xl font-extrabold text-primary">{yearsCount}+</span>
            <span className="text-[11px] uppercase font-medium text-slate-500 dark:text-slate-400">Años Exp.</span>
          </div>
          <div className="flex flex-col p-3 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm text-center md:text-left">
            <span className="text-2xl md:text-3xl font-extrabold text-primary">{techsCount}</span>
            <span className="text-[11px] uppercase font-medium text-slate-500 dark:text-slate-400">Tecnologías</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <motion.a
            href={cvUrl}
            download="CV-Eduardo-Valenzuela.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-md"
            title="Descargar CV"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📄</span>
            Descargar CV
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>💬</span>
            {t('hero.contact')}
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
