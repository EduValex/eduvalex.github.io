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
  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.filter(p => p.featured).map(project => (
          <article key={project.name} className="panel p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="text-xl font-bold tracking-tight mb-2">{project.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
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
