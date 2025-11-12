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
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiShopify,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiRubyonrails,
  SiRuby,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiOpenai,
  SiGithub,
  SiGoogle,
  SiJira,
  SiTrello,
} from 'react-icons/si';

const SKILL_ICON_MAP = {
  'HTML': { Comp: SiHtml5, color: '#E34F26' },
  'CSS': { Comp: SiCss3, color: '#1572B6' },
  'JavaScript': { Comp: SiJavascript, color: '#F7DF1E' },
  'JavaScript/ES6+': { Comp: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { Comp: SiTypescript, color: '#3178C6' },
  'React': { Comp: SiReact, color: '#61DAFB' },
  'React.js': { Comp: SiReact, color: '#61DAFB' },
  'Vue.js': { Comp: SiVuedotjs, color: '#41B883' },
  'Angular': { Comp: SiAngular, color: '#DD0031' },
  'Tailwind CSS': { Comp: SiTailwindcss, color: '#06B6D4' },
  'Bootstrap': { Comp: SiBootstrap, color: '#7952B3' },
  'WordPress': { Comp: SiWordpress, color: '#21759B' },
  'Shopify': { Comp: SiShopify, color: '#7AB55C' },
  'Node.js': { Comp: SiNodedotjs, color: '#339933' },
  'Express': { Comp: SiExpress, color: '#000000' },
  'Python': { Comp: SiPython, color: '#3776AB' },
  'Django': { Comp: SiDjango, color: '#092E20' },
  'Flask': { Comp: SiFlask, color: '#000000' },
  'Ruby on Rails': { Comp: SiRubyonrails, color: '#CC0000' },
  'Ruby': { Comp: SiRuby, color: '#CC342D' },
  'PHP': { Comp: SiPhp, color: '#777BB4' },
  'PostgreSQL': { Comp: SiPostgresql, color: '#4169E1' },
  'MySQL': { Comp: SiMysql, color: '#4479A1' },
  'Git': { Comp: SiGit, color: '#F05033' },
  'Docker': { Comp: SiDocker, color: '#2496ED' },
  'ChatGPT': { Comp: SiOpenai, color: '#10A37F' },
  'GitHub Copilot': { Comp: SiGithub, color: '#181717' },
  'Google Gemini': { Comp: SiGoogle, color: '#4285F4' },
  'Jira': { Comp: SiJira, color: '#0052CC' },
  'Trello': { Comp: SiTrello, color: '#0052CC' },
};

function RenderSkillIcon({ name }) {
  const entry = SKILL_ICON_MAP[name] || SKILL_ICON_MAP[name?.replace('APIs', 'API')] || SKILL_ICON_MAP[name?.replace('.js', '')];
  if (!entry) {
    const FALLBACK_EMOJI = {
      'REST API': '🔗',
      'REST APIs': '🔗',
      'SEO': '🔍',
      'Yii Framework': '🎴',
      'Zoho CRM': '📇',
      'AWS': '☁️',
      'Claude AI': '🤖',
      'Loveable AI': '💖',
      'Monday': '📋',
      'HTML/CSS': '🎨',
    };
    const emoji = FALLBACK_EMOJI[name];
    return emoji ? <span aria-hidden="true">{emoji}</span> : null;
  }
  const { Comp, color } = entry;
  return <Comp size={14} color={color} aria-label={name} title={name} style={{ flexShrink: 0 }} />;
}

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
            <span className="code relative overflow-hidden group inline-flex items-center gap-1.5">
              <RenderSkillIcon name={s.name} />
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
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="flex flex-col gap-6">
      <h2 className="section-title">
        <span className="animate-float">💡</span>
        {t('sections.skills')}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title={t('skills.frontend')} list={data.skills.frontend} index={0} />
        <SkillGroup title={t('skills.backend')} list={data.skills.backend} index={1} />
        <SkillGroup title={t('skills.tools')} list={data.skills.tools} index={2} />
        <SkillGroup title={t('skills.ai')} list={data.skills.ai} index={3} />
      </div>
    </section>
  );
}
