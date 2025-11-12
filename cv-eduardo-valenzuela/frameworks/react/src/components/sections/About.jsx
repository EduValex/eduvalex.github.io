import data from '@data/cv-data.json';

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-4">
      <h2 className="section-title">Sobre mí</h2>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-prose">
        {data.about}
      </p>
    </section>
  );
}
