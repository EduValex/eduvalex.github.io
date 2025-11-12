import { useMemo, useState } from 'react';
import data from '@data/cv-data.json';

// Iconos simples por tecnología (emoji/lightweight)
const techIcons = {
  'HTML': '🟧',
  'CSS': '🟦',
  'JavaScript': '🟨',
  'TypeScript': '🔷',
  'React': '⚛️',
  'Vue.js': '💚',
  'Angular': '🅰️',
  'Node.js': '🟢',
  'Express': '�',
  'Tailwind CSS': '🎨',
  'Bootstrap': '🅱️',
  'WordPress': '🧩',
  'WooCommerce': '�',
  'Shopify': '�️',
  'PHP': '💜',
  'Ruby': '💎',
  'Ruby on Rails': '💎',
  'Python': '🐍',
  'Django': '🟩',
  'Flask': '🧪',
  'Nuxt.js': '🟩',
  'PostgreSQL': '🐘',
  'MySQL': '🐬',
  'Redis': '🔴',
  'Celery': '🥬',
  'JWT': '🔑',
  'REST API': '🔗',
  'CORS': '🛡️',
  'Docker': '🐳',
  'AWS': '☁️',
  'Google Analytics': '📈',
  'Instagram API': '📸',
  'React Router': '🧭',
};

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
  const categories = useMemo(() => {
    const counts = { Todos: data.projects.length };
    for (const p of data.projects) {
      const cat = getCategory(p);
      counts[cat] = (counts[cat] || 0) + 1;
    }
    const ordered = ['Todos', 'WordPress', 'Full Stack', 'Personal'];
    const extras = Object.keys(counts).filter(k => !ordered.includes(k));
    return [...ordered, ...extras].filter(k => counts[k]);
  }, []);

  const [selected, setSelected] = useState('Todos');

  const filtered = useMemo(() => {
    const list = selected === 'Todos'
      ? data.projects
      : data.projects.filter(p => getCategory(p) === selected);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [selected]);

  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="section-title">Proyectos</h2>

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
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover-scale transition-transform cursor-default"
                >
                  {techIcons[t] && <span className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>{techIcons[t]}</span>}
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
