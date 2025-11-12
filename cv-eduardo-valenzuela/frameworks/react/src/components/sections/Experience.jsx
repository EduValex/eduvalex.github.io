import data from '@data/cv-data.json';

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <h2 className="section-title">Experiencia</h2>
      <div className="flex flex-col gap-5">
        {data.experience.map((exp) => (
          <article key={exp.company + exp.period} className="panel p-5 flex flex-col gap-2">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold tracking-tight">{exp.position} · {exp.company}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(t => (
                  <span key={t} className="code">{t}</span>
                ))}
              </div>
            </header>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
            <ul className="text-sm list-disc pl-5 flex flex-col gap-1">
              {exp.achievements.map(a => (
                <li key={a} className="text-slate-600 dark:text-slate-300">{a}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
