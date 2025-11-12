import data from '@data/cv-data.json';

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-4">
      <h2 className="section-title">Sobre mí</h2>
      <div className="panel p-6">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {data.about}
        </p>
      </div>
    </section>
  );
}
