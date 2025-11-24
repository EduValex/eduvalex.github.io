import { useTranslation } from '../../hooks/useTranslation.js';
import data from '@data/cv-data.json';

export function ServicesSection() {
  const { lang } = useTranslation();

  return (
    <section id="services" className="flex flex-col gap-6">
      <div className="text-center max-w-2xl mx-auto mb-2">
        <h2 className="section-title justify-center">
          <span className="animate-float">🚀</span>
          {lang === 'es' ? '¿Qué hago?' : 'What I Do'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
          {lang === 'es'
            ? 'Servicios de desarrollo y consultoría digital para empresas y emprendedores'
            : 'Development and digital consulting services for businesses and entrepreneurs'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {data.services.map((service, index) => (
          <article
            key={service.id}
            className="panel p-6 flex flex-col gap-4 hover-lift transition-all group relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {lang === 'es' ? service.title.es : service.title.en}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'es' ? service.description.es : service.description.en}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {service.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-xs font-medium text-primary dark:text-blue-400 border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
