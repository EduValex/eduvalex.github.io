import data from '@data/cv-data.json';

function SkillGroup({ title, list }) {
  return (
    <div className="panel p-4 flex flex-col gap-3">
      <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {list.map(s => (
          <li key={s.name} className="flex items-center gap-2">
            <span className="code">{s.name}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{s.level}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col gap-6">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Frontend" list={data.skills.frontend} />
        <SkillGroup title="Backend" list={data.skills.backend} />
        <SkillGroup title="Tools" list={data.skills.tools} />
      </div>
    </section>
  );
}
