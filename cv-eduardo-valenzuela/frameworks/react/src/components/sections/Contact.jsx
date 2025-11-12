import data from '@data/cv-data.json';

export function ContactSection() {
  const { personal } = data;
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="section-title">Contacto</h2>
      <div className="panel p-5 flex flex-col gap-3">
        <ul className="flex flex-col gap-2 text-sm">
          <li><strong>Email:</strong> <a className="text-primary hover:text-primary-light" href={`mailto:${personal.email}`}>{personal.email}</a></li>
          <li><strong>Teléfono:</strong> {personal.phone}</li>
          <li><strong>Ubicación:</strong> {personal.location}</li>
        </ul>
        <div className="flex flex-wrap gap-3 text-sm">
          {personal.social.github && <a href={`https://github.com/${personal.social.github}`} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">GitHub</a>}
          {personal.social.linkedin && <a href={`https://linkedin.com/in/${personal.social.linkedin}`} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">LinkedIn</a>}
          {personal.social.twitter && <a href={`https://twitter.com/${personal.social.twitter}`} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">Twitter</a>}
          {personal.social.portfolio && <a href={personal.social.portfolio} target="_blank" rel="noopener" className="text-primary hover:text-primary-light">Portfolio</a>}
        </div>
      </div>
    </section>
  );
}
