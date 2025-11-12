import data from '@data/cv-data.json';
import { LazyImage } from './LazyImage.jsx';
import { useTypingEffect } from '../hooks/useTypingEffect.js';

export function Hero() {
  const { personal } = data;
  
  // Efecto de typing para el título
  const roles = [
    personal.title,
    'Full Stack Developer',
    'WordPress Expert',
    'UI/UX Enthusiast'
  ];
  const typedText = useTypingEffect(roles, 100, 50, 2000);
  
  const handleDownloadCV = () => {
    // Placeholder: cuando tengas el PDF, colócalo en /shared/assets/cv-eduardo-valenzuela.pdf
    const cvUrl = '/shared/assets/cv-eduardo-valenzuela.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Eduardo-Valenzuela.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="panel p-6 mt-6 flex flex-col md:flex-row items-center gap-6 animate-fade-in relative overflow-hidden">
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
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all hover-lift shadow-md"
            title="Descargar CV en PDF"
          >
            <span className="animate-bounce">📄</span>
            Descargar CV
          </button>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all hover-lift shadow-md"
          >
            <span>💬</span>
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
