import data from '@data/cv-data.json';
import { useTranslation } from '../../hooks/useTranslation.js';
import {
  SiWordpress,
  SiPhp,
  SiRubyonrails,
  SiPython,
  SiDjango,
  SiReact,
  SiZoho,
  SiWoocommerce,
  SiMysql,
  SiPostgresql,
  SiBootstrap,
  SiJavascript,
  SiGoogleanalytics,
  SiHeroku,
} from 'react-icons/si';

// Company/tech icons mapping
const COMPANY_ICONS = {
  'Valex Marketing': '🎯',
  'Grant Solutions': '🌐',
  'Enlanubelab': '☁️',
  'Anacondaweb': '🐍',
};

const MAIN_TECH_ICONS = {
  'WordPress': SiWordpress,
  'PHP': SiPhp,
  'Ruby on Rails': SiRubyonrails,
  'Python': SiPython,
  'Django': SiDjango,
  'React': SiReact,
  'Zoho CRM': SiZoho,
};

// Technology badge icons
const TECHNOLOGY_ICON_MAP = {
  'WordPress': { Comp: SiWordpress, color: '#21759B' },
  'WooCommerce': { Comp: SiWoocommerce, color: '#96588A' },
  'React': { Comp: SiReact, color: '#61DAFB' },
  'PHP': { Comp: SiPhp, color: '#777BB4' },
  'MySQL': { Comp: SiMysql, color: '#4479A1' },
  'PostgreSQL': { Comp: SiPostgresql, color: '#4169E1' },
  'Ruby on Rails': { Comp: SiRubyonrails, color: '#CC0000' },
  'Python': { Comp: SiPython, color: '#3776AB' },
  'Django': { Comp: SiDjango, color: '#092E20' },
  'JavaScript': { Comp: SiJavascript, color: '#F7DF1E' },
  'Bootstrap': { Comp: SiBootstrap, color: '#7952B3' },
  'Zoho CRM': { Comp: SiZoho, color: '#C8202F' },
  'Google Analytics': { Comp: SiGoogleanalytics, color: '#E37400' },
  'Heroku': { Comp: SiHeroku, color: '#430098' },
};

function TechBadgeIcon({ name }) {
  const entry = TECHNOLOGY_ICON_MAP[name] || TECHNOLOGY_ICON_MAP[name?.replace('JS', 'JavaScript')];
  if (!entry) {
    const FALLBACK = {
      'SEO': '🔍',
      'Yii Framework': '🎴',
    };
    const emoji = FALLBACK[name];
    return emoji ? <span aria-hidden="true">{emoji}</span> : null;
  }
  const { Comp, color } = entry;
  return <Comp size={12} color={color} title={name} aria-label={name} style={{ flexShrink: 0 }} />;
}

export function ExperienceSection() {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="flex flex-col gap-6">
      <h2 className="section-title">
        <span className="animate-float">💼</span>
        {t('sections.experience')}
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {data.experience.map((exp, index) => {
          const companyIcon = COMPANY_ICONS[exp.company] || '🏢';
          const mainTech = exp.technologies.find(t => MAIN_TECH_ICONS[t]);
          const TechIcon = mainTech ? MAIN_TECH_ICONS[mainTech] : null;
          
          return (
            <article 
              key={exp.company + exp.period} 
              className="panel p-5 flex flex-col gap-3 h-fit hover-lift transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <header className="flex items-start gap-3">
                {/* Company icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {companyIcon}
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-base text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
                    {exp.company}
                    {TechIcon && (
                      <TechIcon size={16} className="text-primary opacity-60" />
                    )}
                  </p>
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span>📅</span>
                    {exp.period} · {exp.location}
                  </span>
                </div>
              </header>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="text-sm list-disc pl-5 flex flex-col gap-1">
                {exp.achievements.slice(0, 2).map(a => (
                  <li 
                    key={a} 
                    className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {exp.technologies.slice(0, 4).map(t => (
                <span 
                  key={t} 
                  className="code hover-scale transition-transform cursor-default"
                >
                  <span className="inline-flex items-center gap-1">
                    <TechBadgeIcon name={t} />
                    <span>{t}</span>
                  </span>
                </span>
              ))}
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
