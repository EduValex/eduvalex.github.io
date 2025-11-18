import { createSignal, onMount, For, Show } from 'solid-js';
import Navbar from './components/Navbar';
import cvData from '@data/cv-data.json';
import emailjs from '@emailjs/browser';

const services = [
  {
    icon: '🛠️',
    titleES: 'Desarrollo Web & Apps',
    titleEN: 'Web & App Development',
    descES: 'Sitios web corporativos, e-commerce, landing pages y aplicaciones web full-stack con React, Django, Rails y WordPress.',
    descEN: 'Corporate websites, e-commerce, landing pages and full-stack web applications with React, Django, Rails and WordPress.',
    tags: ['React', 'WordPress', 'Django', 'E-Commerce', 'SaaS']
  },
  {
    icon: '🔍',
    titleES: 'Auditorías SEO',
    titleEN: 'SEO Audits',
    descES: 'Análisis técnico completo de SEO on-page, velocidad de carga, estructura del sitio y Core Web Vitals.',
    descEN: 'Complete technical SEO on-page analysis, page speed, site structure and Core Web Vitals.',
    tags: ['SEO On-Page', 'PageSpeed', 'Analytics', 'SEMrush']
  },
  {
    icon: '🤖',
    titleES: 'Asistentes IA Personalizados',
    titleEN: 'Custom AI Assistants',
    descES: 'Diseño e integración de chatbots inteligentes con ChatGPT, Claude AI y modelos custom para automatización.',
    descEN: 'Design and integration of intelligent chatbots with ChatGPT, Claude AI and custom models for automation.',
    tags: ['ChatGPT', 'Claude AI', 'Automation', 'Webhooks']
  },
  {
    icon: '🔌',
    titleES: 'Integraciones & Plugins',
    titleEN: 'Integrations & Plugins',
    descES: 'Desarrollo de plugins WordPress personalizados, conexiones con APIs externas y pasarelas de pago.',
    descEN: 'Custom WordPress plugin development, external API connections and payment gateways.',
    tags: ['WordPress Plugins', 'APIs', 'Google Drive', 'Webhooks']
  }
];

// Iconos para skills
const SKILL_ICONS = {
  'HTML': '🌐', 'CSS': '🎨', 'JavaScript': '⚡', 'JavaScript/ES6+': '⚡',
  'TypeScript': '📘', 'React': '⚛️', 'React.js': '⚛️', 'Vue.js': '💚',
  'Angular': '🅰️', 'Tailwind CSS': '🎨', 'Bootstrap': '🅱️',
  'WordPress': '📰', 'Shopify': '🛒', 'Node.js': '🟢', 'Express': '⚡',
  'Python': '🐍', 'Django': '🎸', 'Flask': '🔶', 'Ruby on Rails': '💎',
  'Ruby': '💎', 'PHP': '🐘', 'PostgreSQL': '🐘', 'MySQL': '🐬',
  'MongoDB': '🍃', 'Git': '🔀', 'Docker': '🐳', 'ChatGPT': '🤖',
  'GitHub Copilot': '🤖', 'GitHub': '🐱', 'Google Gemini': '✨',
  'Jira': '📋', 'Trello': '📋', 'Postman': '📮', 'SEMrush': '📊',
  'Wix': '🌐', 'Google Analytics': '📊', 'Google Search Console': '🔍',
  'PageSpeed Insights': '⚡', 'Vercel': '▲', 'Render': '🚀',
  'Railway': '🚂', 'Heroku': '🟣', 'REST API': '🔗', 'REST APIs': '🔗',
  'SEO': '🔍', 'SEO Audits': '🧪', 'Yii Framework': '🎴',
  'Zoho CRM': '📇', 'AWS': '☁️', 'Claude AI': '🤖', 'Loveable AI': '💖',
  'Monday': '📋', 'HTML/CSS': '🎨', 'Google Trends': '📈',
  'Asistentes IA Personalizados': '🛠️', 'Grok': '🤖', 'Beaver Builder': '🦫'
};
const getSkillIcon = (name) => SKILL_ICONS[name] || '';

function App() {
  const [currentLang, setCurrentLang] = createSignal('es');
  const [theme, setTheme] = createSignal('dark');
  const [formData, setFormData] = createSignal({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = createSignal(null);
  const [formLoading, setFormLoading] = createSignal(false);

  // Filtros de proyectos (igual a React)
  const FULLSTACK_KEYS = ['Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'];
  const getCategory = (p) => {
    if (p.category) return p.category;
    const tech = p.technologies || [];
    if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress';
    const isFull = FULLSTACK_KEYS.some(t => tech.includes(t));
    return isFull ? 'Full Stack' : 'Personal';
  };
  const categoryIcons = { 'Todos': '🗂️', 'WordPress': '🧩', 'Full Stack': '🧰', 'Personal': '⭐' };
  const categories = ['Todos','Full Stack','WordPress','Personal'].filter(k => {
    if (k === 'Todos') return cvData.projects.length > 0;
    return cvData.projects.some(p => getCategory(p) === k);
  });
  const [selectedCategory, setSelectedCategory] = createSignal('Todos');
  const filteredProjects = () => {
    const sel = selectedCategory();
    const list = sel === 'Todos' ? cvData.projects : cvData.projects.filter(p => getCategory(p) === sel);
    const priority = { 'Full Stack': 0, 'WordPress': 1, 'Personal': 2 };
    return [...list].sort((a,b) => {
      if (sel === 'Todos') {
        const pa = priority[getCategory(a)] ?? 99; const pb = priority[getCategory(b)] ?? 99;
        if (pa !== pb) return pa - pb;
      }
      return Number(b.featured) - Number(a.featured);
    });
  };
  const countFor = (cat) => cat === 'Todos' ? cvData.projects.length : cvData.projects.filter(p => getCategory(p) === cat).length;

  const aboutParagraphs = () => {
    const text = currentLang() === 'es' ? (cvData.about?.es || '') : (cvData.about?.en || '');
    return text.split('\n\n');
  };

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('solid-lang', lang);
  };

  const handleThemeToggle = () => {
    const newTheme = theme() === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('solid-theme', newTheme);
    document.body.classList.toggle('light', newTheme === 'light');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormStatus(null);

    try {
      const result = await emailjs.send(
        'service_35dui0c',
        'template_dlh2p8t',
        {
          from_name: formData().name,
          from_email: formData().email,
          message: formData().message
        },
        'qZw7aS4i2gCI3Wz2B'
      );

      if (result.text === 'OK') {
        setFormStatus({
          type: 'success',
          message: currentLang() === 'es' 
            ? '¡Mensaje enviado! Te responderé pronto 🚀' 
            : 'Message sent! I\'ll reply soon 🚀'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('EmailJS error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        type: 'error',
        message: currentLang() === 'es'
          ? 'Hubo un error al enviar. Intenta nuevamente.'
          : 'There was an error sending. Please try again.'
      });
    } finally {
      setFormLoading(false);
    }
  };

  onMount(() => {
    const savedLang = localStorage.getItem('solid-lang') || 'es';
    setCurrentLang(savedLang);

    const savedTheme = localStorage.getItem('solid-theme') || 'dark';
    setTheme(savedTheme);
    document.body.classList.toggle('light', savedTheme === 'light');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  });

  return (
    <>
      <Navbar 
        currentLang={currentLang()} 
        theme={theme()} 
        onChangeLang={handleLangChange}
        onToggleTheme={handleThemeToggle}
      />

      <main class="container">
        {/* Hero */}
        <section class="panel reveal">
          <div style={{ display: 'flex', 'align-items': 'center', gap: '1.5rem', 'flex-wrap': 'wrap' }}>
            <img src="/favicon.ico" alt="Eduardo Valenzuela" style={{ width: '90px', height: '90px', 'border-radius': '18px', 'object-fit': 'cover', 'flex-shrink': '0', 'box-shadow': '0 4px 12px rgba(0,0,0,.3)' }} />
            <div style={{ flex: 1 }}>
              <h1>{currentLang() === 'es' ? `Hola, soy ${cvData.personal.name}` : `Hi, I'm ${cvData.personal.name}`}</h1>
              <small>{cvData.personal.location}</small>
            </div>
          </div>
          <p style={{ 'margin-top': '1rem' }}>
            {currentLang() === 'es' ? 'Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.' : 'Full‑Stack Developer. Here\'s my resume in PDF ready to download.'}
          </p>
          <p style={{ 'margin-top': '1.25rem' }}>
            <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
              {currentLang() === 'es' ? '📄 Descargar CV' : '📄 Download Resume'}
            </a>
            <a class="btn secondary" href="#contact" style={{ 'margin-left': '0.75rem' }}>
              {currentLang() === 'es' ? '💬 Contacto' : '💬 Contact'}
            </a>
          </p>
        </section>

        {/* About */}
        <section id="about" class="panel reveal">
          <h2>
            <span>👨‍💻</span>
            <span>{currentLang() === 'es' ? 'Sobre mí' : 'About Me'}</span>
          </h2>
          <For each={aboutParagraphs()}>
            {(paragraph) => <p>{paragraph}</p>}
          </For>
        </section>

        {/* Services */}
        <section id="services" class="panel reveal">
          <div style={{ 'text-align': 'center', 'max-width': '650px', margin: '0 auto 2rem' }}>
            <h2 style={{ 'justify-content': 'center' }}>
              <span>🚀</span>
              <span>{currentLang() === 'es' ? 'Servicios' : 'Services'}</span>
            </h2>
            <p style={{ color: '#94a3b8', 'font-size': '0.95rem' }}>
              {currentLang() === 'es' ? 'Soluciones digitales completas para hacer crecer tu negocio' : 'Complete digital solutions to grow your business'}
            </p>
          </div>
          <div class="grid">
            <For each={services}>
              {(service) => (
                <div class="service">
                  <div class="icon-box">{service.icon}</div>
                  <h3>{currentLang() === 'es' ? service.titleES : service.titleEN}</h3>
                  <p>{currentLang() === 'es' ? service.descES : service.descEN}</p>
                  <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '0.5rem', 'margin-top': '1rem' }}>
                    <For each={service.tags}>
                      {(tag) => <span class="badge">{tag}</span>}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" class="panel reveal">
          <h2>
            <span>💼</span>
            <span>{currentLang() === 'es' ? 'Experiencia' : 'Experience'}</span>
          </h2>
          <div class="grid-2">
            <For each={cvData.experience}>
              {(exp) => (
                <div class="exp-card">
                  <h3>{exp.position}</h3>
                  <small>{exp.company} • {exp.period}</small>
                  <p>{exp.description}</p>
                  <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '0.5rem', 'margin-top': '1rem' }}>
                    <For each={exp.technologies}>
                      {(tech) => <span class="badge">{tech}</span>}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" class="panel reveal">
          <h2>
            <span>🎨</span>
            <span>{currentLang() === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</span>
          </h2>
          <div class="panel" style={{ padding: '.5rem .75rem', 'margin-bottom': '1rem' }}>
            <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '.5rem' }}>
              <For each={categories}>
                {(cat) => (
                  <button
                    class={`badge ${selectedCategory() === cat ? 'active' : ''}`}
                    aria-selected={selectedCategory() === cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span style={{ 'margin-right': '.35rem' }}>{categoryIcons[cat] || '🏷️'}</span>
                    {cat}
                    <span style={{ 'margin-left': '.5rem', opacity: 0.8 }}>{countFor(cat)}</span>
                  </button>
                )}
              </For>
            </div>
          </div>
          <div class="grid">
            <For each={filteredProjects()}>
              {(proj) => (
                <div class="proj-card">
                  <h3>{proj.name}</h3>
                  <small>{proj.year}</small>
                  <p>{proj.description}</p>
                  <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '0.5rem', 'margin-top': '0.75rem' }}>
                    <For each={proj.technologies}>
                      {(tech) => <span class="badge">{tech}</span>}
                    </For>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', 'margin-top': '1rem', 'flex-wrap': 'wrap' }}>
                    <Show when={proj.demo}>
                      <a href={proj.demo} target="_blank" rel="noopener" class="btn" style={{ padding: '0.5rem 0.9rem', 'font-size': '0.85rem' }}>
                        {currentLang() === 'es' ? '🌐 Ver Demo' : '🌐 View Demo'}
                      </a>
                    </Show>
                    <Show when={proj.github}>
                      <a href={proj.github} target="_blank" rel="noopener" class="btn secondary" style={{ padding: '0.5rem 0.9rem', 'font-size': '0.85rem' }}>
                        {currentLang() === 'es' ? '💻 Código' : '💻 Code'}
                      </a>
                    </Show>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" class="panel reveal">
          <h2>
            <span>⚡</span>
            <span>{currentLang() === 'es' ? 'Habilidades' : 'Skills'}</span>
          </h2>
          <div class="grid-skills">
            <article class="panel">
              <h3>Frontend</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.frontend}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
            <article class="panel">
              <h3>Backend</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.backend}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
            <article class="panel">
              <h3>{currentLang() === 'es' ? 'Herramientas · Bases de datos' : 'Tools · Databases'}</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.tools.databases}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
            <article class="panel">
              <h3>SEO & Analytics</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.tools.seoAnalytics}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
            <article class="panel">
              <h3>{currentLang() === 'es' ? 'Herramientas · Dev & Deploy' : 'Tools · Dev & Deploy'}</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.tools.devTools}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
            <article class="panel">
              <h3>IA</h3>
              <div class="badges" style={{ 'margin-top': '.75rem' }}>
                <For each={cvData.skills.ai}>{(s) => <span class="badge" title={`${s.level}%`}>{getSkillIcon(s.name) && <span style={{ 'margin-right': '4px' }}>{getSkillIcon(s.name)}</span>}{s.name}</span>}</For>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" class="panel reveal">
          <h2>
            <span>📧</span>
            <span>{currentLang() === 'es' ? 'Contacto' : 'Contact'}</span>
          </h2>
          <div class="grid-2">
            <div>
              <h3 style={{ 'margin-bottom': '1rem' }}>{currentLang() === 'es' ? '¿Hablamos?' : 'Let\'s talk?'}</h3>
              <p>{currentLang() === 'es' ? 'Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.' : 'If you have a project in mind or just want to chat about technology, send me a message.'}</p>
              <ul class="contact-info">
                <li>
                  <span class="icon">📧</span>
                  <div class="detail">
                    <strong>Email</strong>
                    <a href={`mailto:${cvData.personal.email}`}>{cvData.personal.email}</a>
                  </div>
                </li>
                <li>
                  <span class="icon">📱</span>
                  <div class="detail">
                    <strong>{currentLang() === 'es' ? 'Teléfono' : 'Phone'}</strong>
                    <a href={`tel:${cvData.personal.phone}`}>{cvData.personal.phone}</a>
                  </div>
                </li>
                <li>
                  <span class="icon">💼</span>
                  <div class="detail">
                    <strong>LinkedIn</strong>
                    <a href={`https://www.linkedin.com/in/${cvData.personal?.social?.linkedin || ''}`} target="_blank" rel="noopener">{currentLang() === 'es' ? 'Ver perfil' : 'View profile'}</a>
                  </div>
                </li>
                <li>
                  <span class="icon">💻</span>
                  <div class="detail">
                    <strong>GitHub</strong>
                    <a href={`https://github.com/${cvData.personal?.social?.github || ''}`} target="_blank" rel="noopener">@{cvData.personal?.social?.github || ''}</a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div class="field">
                  <label for="name" class="label">{currentLang() === 'es' ? 'Nombre *' : 'Name *'}</label>
                  <input 
                    id="name" 
                    value={formData().name}
                    onInput={(e) => setFormData({ ...formData(), name: e.target.value })}
                    type="text" 
                    class="input" 
                    required 
                  />
                </div>
                <div class="field">
                  <label for="email" class="label">Email *</label>
                  <input 
                    id="email" 
                    value={formData().email}
                    onInput={(e) => setFormData({ ...formData(), email: e.target.value })}
                    type="email" 
                    class="input" 
                    placeholder="tu@email.com" 
                    required 
                  />
                </div>
                <div class="field">
                  <label for="message" class="label">{currentLang() === 'es' ? 'Mensaje *' : 'Message *'}</label>
                  <textarea 
                    id="message" 
                    value={formData().message}
                    onInput={(e) => setFormData({ ...formData(), message: e.target.value })}
                    class="textarea" 
                    required 
                  />
                </div>
                <Show when={formStatus()}>
                  <div class={`alert ${formStatus().type}`}>{formStatus().message}</div>
                </Show>
                <button type="submit" class="btn" style={{ 'margin-top': '0.5rem' }} disabled={formLoading()}>
                  {formLoading() ? '⏳...' : (currentLang() === 'es' ? '📨 Enviar Mensaje' : '📨 Send Message')}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 'text-align': 'center', padding: '2rem 0', color: '#64748b', 'font-size': '0.85rem' }}>
          <p>© 2025 Eduardo Valenzuela — {currentLang() === 'es' ? 'Hecho con' : 'Built with'} 🔷 Solid</p>
          <p style={{ 'margin-top': '0.5rem' }}>
            <a href="/" style={{ 'margin-right': '1rem' }}>⚛️ React</a>
            <a href="/astro/" style={{ 'margin-right': '1rem' }}>⭐ Astro</a>
            <a href="/vue/" style={{ 'margin-right': '1rem' }}>💚 Vue</a>
            <a href="/svelte/" style={{ 'margin-right': '1rem' }}>🧡 Svelte</a>
            <a href="/vanilla/">⚡ Vanilla</a>
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
