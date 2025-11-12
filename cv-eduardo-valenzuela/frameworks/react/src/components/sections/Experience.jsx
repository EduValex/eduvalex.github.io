import data from '@data/cv-data.json';

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <h2 className="section-title">Experiencia</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {data.experience.map((exp) => (
          <article key={exp.company + exp.period} className="panel p-5 flex flex-col gap-3 h-fit">
            <header className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold tracking-tight">{exp.position}</h3>
                <p className="text-base text-slate-700 dark:text-slate-200">{exp.company}</p>
                <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="text-sm list-disc pl-5 flex flex-col gap-1">
                {exp.achievements.slice(0, 2).map(a => (
                  <li key={a} className="text-slate-600 dark:text-slate-300">{a}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {exp.technologies.slice(0, 4).map(t => (
                <span key={t} className="code">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
