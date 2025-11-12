import { useMemo, useState } from 'react';
import data from '@data/cv-data.json';

// Mapeo de tecnologías a emojis/iconos
const techIcons = {
  'React': '⚛️',
  'Vue.js': '💚',
  'Node.js': '🟢',
  'PostgreSQL': '🐘',
  'MongoDB': '🍃',
  'Firebase': '🔥',
  'Next.js': '▲',
  'TypeScript': '🔷',
  'JavaScript': '🟨',
  'Tailwind CSS': '🎨',
  'Redux': '🟣',
  'Stripe': '💳',
  'Express': '🚂',
  'Chart.js': '📊',
  'Contentful': '📝',
  'Vercel': '▲',
  'Python': '🐍',
  'Docker': '🐳',
  'AWS': '☁️',
};

export function ProjectsSection() {
  // Derivar categoría desde tecnologías si no existe en los datos
  const getCategory = (project) => {
    if (project.category) return project.category;
    const tech = project.technologies || [];
    const isWP = tech.includes('WordPress') || tech.includes('WooCommerce');
    if (isWP) return 'WordPress';
    const isFullStack = [
      'Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'
    ].some(t => tech.includes(t));
    if (isFullStack) return 'Full Stack';
    return 'Personal';
  };

  // Construir categorías y contadores
  const categories = useMemo(() => {
    const counts = { Todos: data.projects.length };
    for (const p of data.projects) {
      const cat = getCategory(p);
      counts[cat] = (counts[cat] || 0) + 1;
    }
    // Orden sugerido: Todos, WordPress, Full Stack, Personal
    const ordered = ['Todos', 'WordPress', 'Full Stack', 'Personal'];
    // Añadir cualquier categoría adicional que pudiera existir
    const extras = Object.keys(counts).filter(k => !ordered.includes(k));
    return [...ordered, ...extras].filter(k => counts[k]);
  }, []);

  const [selected, setSelected] = useState('Todos');

  const filtered = useMemo(() => {
    const list = selected === 'Todos' ? data.projects : data.projects.filter(p => getCategory(p) === selected);
    // Mantener destacados arriba dentro del filtro
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [selected]);

  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="section-title">Proyectos</h2>

      {/* Filtros por categoría */}
      <div className="panel p-2 sm:p-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border
                ${selected === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'}
              `}
            >
              <span className="align-middle">{cat}</span>
              <span className="ml-2 inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1 rounded-full text-[11px] bg-black/10 dark:bg-white/10">
                {cat === 'Todos' ? data.projects.length : data.projects.filter(p => getCategory(p) === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map(project => (
          <article key={project.name} className="panel p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <header>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span title="Destacado" className="inline-flex items-center px-2 py-1 rounded text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">⭐</span>
                  )}
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {getCategory(project)}
                  </span>
                </div>
              </div>
            </header>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => (
                <span key={t} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                  {techIcons[t] && <span>{techIcons[t]}</span>}
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
                  className="text-primary hover:text-primary-light font-medium transition-colors"
                >
                  💻 Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light font-medium transition-colors"
                >
                  🚀 Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
