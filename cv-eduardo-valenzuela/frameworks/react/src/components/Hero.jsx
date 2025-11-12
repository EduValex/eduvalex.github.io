import data from '@data/cv-data.json';

export function Hero() {
  const { personal } = data;
  return (
    <section className="panel p-6 mt-6 flex flex-col md:flex-row items-center gap-6">
      <img
        src={personal.photo}
        alt={`Foto de ${personal.name}`}
        className="w-28 h-28 rounded-full object-cover border border-slate-200 dark:border-slate-700"
      />
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{personal.name}</h1>
        <p className="text-slate-600 dark:text-slate-300">{personal.title}</p>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{personal.tagline}</p>
      </div>
    </section>
  );
}
