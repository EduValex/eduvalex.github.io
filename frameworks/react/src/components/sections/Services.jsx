import { useTranslation } from '../../hooks/useTranslation.js';

const SERVICES = [
  {
    icon: '🛠️',
    titleES: 'Desarrollo Web & Apps',
    titleEN: 'Web & App Development',
    descES: 'Sitios web corporativos, e-commerce, landing pages y aplicaciones web full-stack con React, Django, Rails y WordPress. Responsive, rápidos y optimizados para conversión.',
    descEN: 'Corporate websites, e-commerce, landing pages and full-stack web applications with React, Django, Rails and WordPress. Responsive, fast and conversion-optimized.',
    tags: ['React', 'WordPress', 'Django', 'E-Commerce', 'SaaS']
  },
  {
    icon: '🔍',
    titleES: 'Auditorías SEO',
    titleEN: 'SEO Audits',
    descES: 'Análisis técnico completo de SEO on-page, velocidad de carga, estructura del sitio, Core Web Vitals y estrategia de keywords con reportes detallados y plan de acción.',
    descEN: 'Complete technical SEO on-page analysis, page speed, site structure, Core Web Vitals and keyword strategy with detailed reports and action plan.',
    tags: ['SEO On-Page', 'PageSpeed', 'Analytics', 'SEMrush']
  },
  {
    icon: '🤖',
    titleES: 'Asistentes IA Personalizados',
    titleEN: 'Custom AI Assistants',
    descES: 'Diseño e integración de chatbots inteligentes con ChatGPT, Claude AI y modelos custom para automatización, atención al cliente 24/7 y workflows empresariales.',
    descEN: 'Design and integration of intelligent chatbots with ChatGPT, Claude AI and custom models for automation, 24/7 customer service and business workflows.',
    tags: ['ChatGPT', 'Claude AI', 'Automation', 'Webhooks']
  },
  {
    icon: '🔌',
    titleES: 'Integraciones & Plugins',
    titleEN: 'Integrations & Plugins',
    descES: 'Desarrollo de plugins WordPress personalizados, conexiones con APIs externas (Google, Instagram, Drive), pasarelas de pago y automatizaciones con webhooks.',
    descEN: 'Custom WordPress plugin development, external API connections (Google, Instagram, Drive), payment gateways and webhook automations.',
    tags: ['WordPress Plugins', 'APIs', 'Google Drive', 'Webhooks']
  }
];

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
        {SERVICES.map((service, index) => (
          <article 
            key={service.titleES}
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
                  {lang === 'es' ? service.titleES : service.titleEN}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === 'es' ? service.descES : service.descEN}
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
