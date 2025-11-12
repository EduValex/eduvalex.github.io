import data from '@data/cv-data.json';

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-4">
      <h2 className="section-title">
        <span className="animate-float">👨‍💻</span>
        Sobre mí
      </h2>
      <div className="panel p-6 hover-lift transition-all relative overflow-hidden group">
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
          {data.about}
        </p>
      </div>
    </section>
  );
}
