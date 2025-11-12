import data from '@data/cv-data.json';

const skillIcons = {
  'HTML': '🟧',
  'CSS': '🟦',
  'JavaScript/ES6+': '🟨',
  'JavaScript': '🟨',
  'TypeScript': '🔷',
  'React.js': '⚛️',
  'React': '⚛️',
  'Vue.js': '💚',
  'Angular': '🅰️',
  'Tailwind CSS': '🎨',
  'Bootstrap': '🅱️',
  'WordPress': '🧩',
  'Shopify': '🛍️',
  'Node.js': '🟢',
  'Express': '🚂',
  'Python': '🐍',
  'Django': '🟩',
  'Flask': '🧪',
  'Ruby on Rails': '💎',
  'Ruby': '💎',
  'PHP': '💜',
  'Yii Framework': '🎴',
  'PostgreSQL': '🐘',
  'MySQL': '🐬',
  'Git': '🔧',
  'AWS': '☁️',
  'Docker': '🐳',
  'REST APIs': '🔗',
  'REST API': '🔗',
  'SEO': '🔍',
  'Zoho CRM': '📇',
};

function SkillGroup({ title, list, index }) {
  return (
    <div 
      className="panel p-4 flex flex-col gap-3 hover-lift transition-all"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></span>
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {list.map((s, idx) => (
          <li 
            key={s.name} 
            className="flex items-center gap-2 hover-scale transition-transform"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <span className="code relative overflow-hidden group inline-flex items-center gap-1">
              {skillIcons[s.name] && (
                <span aria-hidden="true">{skillIcons[s.name]}</span>
              )}
              <span className="relative z-10">{s.name}</span>
              {/* Progress bar basado en level */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 group-hover:h-full group-hover:opacity-10"
                style={{ width: `${s.level}%` }}
              ></div>
            </span>
            <span className="text-xs font-semibold text-primary dark:text-blue-400">
              {s.level}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col gap-6">
      <h2 className="section-title">
        <span className="animate-float">💡</span>
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Frontend" list={data.skills.frontend} index={0} />
        <SkillGroup title="Backend" list={data.skills.backend} index={1} />
        <SkillGroup title="Tools" list={data.skills.tools} index={2} />
      </div>
    </section>
  );
}
