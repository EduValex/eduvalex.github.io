import data from '@data/cv-data.json';
import { useTranslation } from '../../hooks/useTranslation.js';

const INSTITUTION_ICONS = {
  'Fondo Talento Digital para Chile': '🎓',
  'edutecno': '💻',
  'Duoc UC': '🏛️',
  'Universidad de La Frontera': '🎓',
  'Instituto Hernando de Magallanes': '📚',
  'Udemy': '🎥',
};

export function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="flex flex-col gap-6">
      <h2 className="section-title">
        <span className="animate-float">🎓</span>
        {t('sections.education')}
      </h2>
      <div className="flex flex-col gap-4">
        {data.education.map((edu, index) => {
          const institutionIcon = INSTITUTION_ICONS[edu.institution] || '🎓';

          return (
            <article
              key={edu.institution + edu.period}
              className="panel p-5 flex flex-col gap-3 hover-lift transition-all group border-l-4 border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <header className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex items-start gap-3 flex-1">
                  {/* Institution icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {institutionIcon}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {edu.period}
                </span>
              </header>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {edu.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
