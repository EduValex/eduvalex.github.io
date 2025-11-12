import { useMemo, useState } from 'react';
import data from '@data/cv-data.json';
import { useTranslation } from '../../hooks/useTranslation.js';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiWoocommerce,
  SiShopify,
  SiPhp,
  SiRuby,
  SiRubyonrails,
  SiPython,
  SiDjango,
  SiFlask,
  SiNuxtdotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGoogleanalytics,
  SiInstagram,
  SiReactrouter,
  SiVite,
  SiGithubpages,
  SiGoogledrive,
  SiWebpack,
  SiSass,
  SiHeroku,
} from 'react-icons/si';

// Mapeo a íconos de marca (Simple Icons) + color oficial básico
const TECH_ICON_MAP = {
  'HTML': { Comp: SiHtml5, color: '#E34F26' },
  'CSS': { Comp: SiCss3, color: '#1572B6' },
  'JavaScript': { Comp: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { Comp: SiTypescript, color: '#3178C6' },
  'React': { Comp: SiReact, color: '#61DAFB' },
  'Vue.js': { Comp: SiVuedotjs, color: '#41B883' },
  'Angular': { Comp: SiAngular, color: '#DD0031' },
  'Node.js': { Comp: SiNodedotjs, color: '#339933' },
  'Express': { Comp: SiExpress, color: '#000000' },
  'Tailwind CSS': { Comp: SiTailwindcss, color: '#06B6D4' },
  'Bootstrap': { Comp: SiBootstrap, color: '#7952B3' },
  'WordPress': { Comp: SiWordpress, color: '#21759B' },
  'WooCommerce': { Comp: SiWoocommerce, color: '#96588A' },
  'Shopify': { Comp: SiShopify, color: '#7AB55C' },
  'PHP': { Comp: SiPhp, color: '#777BB4' },
  'Ruby': { Comp: SiRuby, color: '#CC342D' },
  'Ruby on Rails': { Comp: SiRubyonrails, color: '#CC0000' },
  'Python': { Comp: SiPython, color: '#3776AB' },
  'Django': { Comp: SiDjango, color: '#092E20' },
  'Flask': { Comp: SiFlask, color: '#000000' },
  'Nuxt.js': { Comp: SiNuxtdotjs, color: '#00DC82' },
  'PostgreSQL': { Comp: SiPostgresql, color: '#4169E1' },
  'MySQL': { Comp: SiMysql, color: '#4479A1' },
  'Redis': { Comp: SiRedis, color: '#DC382D' },
  'Docker': { Comp: SiDocker, color: '#2496ED' },
  'Google Analytics': { Comp: SiGoogleanalytics, color: '#E37400' },
  'Instagram API': { Comp: SiInstagram, color: '#E4405F' },
  'React Router': { Comp: SiReactrouter, color: '#CA4245' },
  'Vite': { Comp: SiVite, color: '#646CFF' },
  'GitHub Pages': { Comp: SiGithubpages, color: '#222222' },
  'Google Drive API': { Comp: SiGoogledrive, color: '#34A853' },
  'Webpack': { Comp: SiWebpack, color: '#8DD6F9' },
  'SCSS': { Comp: SiSass, color: '#CC6699' },
  'Heroku': { Comp: SiHeroku, color: '#430098' },
};

const TECH_ALIASES = {
  'Nuxt': 'Nuxt.js',
};

function RenderTechIcon({ name }) {
  const key = TECH_ICON_MAP[name] ? name : (TECH_ALIASES[name] || name);
  const entry = TECH_ICON_MAP[key];
  // Fallback a emoji para tecnologías sin logo oficial
  const FALLBACK_EMOJI = {
    'JWT': '🔑',
    'REST API': '🔗',
    'CORS': '🛡️',
    'Celery': '🥬',
    'AWS': '☁️',
    'SEO': '🔍',
    'OAuth 2.0': '🔑',
  };
  if (!entry) {
    const emoji = FALLBACK_EMOJI[name];
    return emoji ? <span aria-hidden="true">{emoji}</span> : null;
  }
  const { Comp, color } = entry;
  return (
    <Comp
      size={16}
      color={color}
      aria-label={name}
      title={name}
      style={{ flexShrink: 0 }}
    />
  );
}

// Iconos por categoría
const categoryIcons = {
  'Todos': '🗂️',
  'WordPress': '🧩',
  'Full Stack': '🧰',
  'Personal': '⭐',
};

function getCategory(project) {
  if (project.category) return project.category;
  const tech = project.technologies || [];
  if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress';
  const isFullStack = [
    'Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'
  ].some(t => tech.includes(t));
  if (isFullStack) return 'Full Stack';
  return 'Personal';
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const categories = useMemo(() => {
    const counts = { [t('projects.filters.all')]: data.projects.length };
    for (const p of data.projects) {
      const cat = getCategory(p);
      counts[cat] = (counts[cat] || 0) + 1;
    }
    // Mostrar Full Stack primero en los filtros
    const ordered = ['Todos', 'Full Stack', 'WordPress', 'Personal'];
    const extras = Object.keys(counts).filter(k => !ordered.includes(k));
    return [...ordered, ...extras].filter(k => counts[k]);
  }, []);

  const [selected, setSelected] = useState('Todos');

  const filtered = useMemo(() => {
    const list = selected === 'Todos'
      ? data.projects
      : data.projects.filter(p => getCategory(p) === selected);
    // Priorizar categorías: Full Stack primero, luego WordPress y luego el resto
    const CATEGORY_PRIORITY = { 'Full Stack': 0, 'WordPress': 1, 'Personal': 2 };
    return [...list].sort((a, b) => {
      if (selected === 'Todos') {
        const pa = CATEGORY_PRIORITY[getCategory(a)] ?? 99;
        const pb = CATEGORY_PRIORITY[getCategory(b)] ?? 99;
        if (pa !== pb) return pa - pb;
      }
      // Dentro de la misma categoría, ordena por destacado
      return Number(b.featured) - Number(a.featured);
    });
  }, [selected]);

  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="section-title">{t('sections.projects')}</h2>

      {/* Filtros por categoría */}
      <div className="panel p-2 sm:p-3">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtros de proyectos">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              role="tab"
              aria-selected={selected === cat}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover-scale ${selected === cat
                ? 'bg-primary text-white border-primary shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'} border`}
            >
              <span className="mr-1">{categoryIcons[cat] || '🏷️'}</span>
              <span className="align-middle">{cat}</span>
              <span className="ml-2 inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1 rounded-full text-[11px] bg-black/10 dark:bg-white/10">
                {cat === 'Todos' ? data.projects.length : data.projects.filter(p => getCategory(p) === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lista de proyectos */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <article 
            key={project.name} 
            className="panel p-6 flex flex-col gap-4 hover-lift transition-all"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <header>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span 
                      title="Destacado" 
                      className="inline-flex items-center px-2 py-1 rounded text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 animate-pulse-glow"
                    >⭐</span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <span>{categoryIcons[getCategory(project)] || '🏷️'}</span>
                    {getCategory(project)}
                  </span>
                  {project.client && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" title="Proyecto para cliente">
                      Cliente
                    </span>
                  )}
                </div>
              </div>
            </header>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => (
                <span 
                  key={t} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover-scale transition-transform cursor-default"
                >
                  <RenderTechIcon name={t} />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm mt-auto pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-light font-medium transition-all hover-scale"
                >
                  <span>💻</span> Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-light font-medium transition-all hover-scale"
                >
                  <span>🚀</span> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
