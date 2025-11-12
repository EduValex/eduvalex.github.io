import data from '@data/cv-data.json';

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.filter(p => p.featured).map(project => (
          <article key={project.name} className="panel p-5 flex flex-col gap-3">
            <header>
              <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
            </header>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => <span key={t} className="code">{t}</span>)}
            </div>
            <div className="flex gap-3 text-sm">
              {project.github && <a href={project.github} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">Código</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
