import { component$, useSignal, useVisibleTask$, $, type QRL } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '../components/navbar';
import cvData from '@data/cv-data.json';
import emailjs from '@emailjs/browser';

export default component$(() => {
  // Signals (reactive state in Qwik)
  const currentLang = useSignal('es');
  const theme = useSignal('dark');
  const name = useSignal('');
  const email = useSignal('');
  const message = useSignal('');
  const formStatus = useSignal<{type: string, message: string} | null>(null);
  const formLoading = useSignal(false);
  const selectedCategory = useSignal('Todos');

  // Services data
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

  // Skill icons mapping
  const SKILL_ICONS: Record<string, string> = {
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
  
  const getSkillIcon = (skillName: string) => SKILL_ICONS[skillName] || '';

  // Project filters
  const FULLSTACK_KEYS = ['Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'];
  const getCategory = (p: any) => {
    if (p.category) return p.category;
    const tech = p.technologies || [];
    if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress';
    const isFull = FULLSTACK_KEYS.some(t => tech.includes(t));
    return isFull ? 'Full Stack' : 'Personal';
  };

  const categories = ['Todos','Full Stack','WordPress','Personal'].filter(k => {
    if (k === 'Todos') return cvData.projects.length > 0;
    return cvData.projects.some(p => getCategory(p) === k);
  });
  
  const categoryIcons: Record<string, string> = { 'Todos': '🗂️', 'WordPress': '🧩', 'Full Stack': '🧰', 'Personal': '⭐' };
  
  const countFor = (cat: string) => cat === 'Todos' ? cvData.projects.length : cvData.projects.filter(p => getCategory(p) === cat).length;

  // Computed values
  const filteredProjects = () => selectedCategory.value === 'Todos' 
    ? cvData.projects 
    : cvData.projects.filter(p => getCategory(p) === selectedCategory.value);
  
  const aboutText = () => currentLang.value === 'es' ? (cvData.about?.es || '') : (cvData.about?.en || '');

  const githubUser = cvData.personal?.social?.github || '';
  const githubUrl = githubUser ? `https://github.com/${githubUser}` : '#';
  const linkedinUser = cvData.personal?.social?.linkedin || '';
  const linkedinUrl = linkedinUser ? `https://www.linkedin.com/in/${linkedinUser}` : '#';

  // Actions
  const setLanguage = $((lang: string) => {
    currentLang.value = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('qwik-lang', lang);
    }
  });

  const toggleTheme = $(() => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('qwik-theme', theme.value);
    }
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('light', theme.value === 'light');
    }
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();
    formLoading.value = true;
    formStatus.value = null;

    try {
      const result = await emailjs.send(
        'service_35dui0c',
        'template_dlh2p8t',
        {
          from_name: name.value,
          from_email: email.value,
          message: message.value
        },
        'qZw7aS4i2gCI3Wz2B'
      );

      if (result.text === 'OK') {
        formStatus.value = {
          type: 'success',
          message: currentLang.value === 'es' 
            ? '¡Mensaje enviado! Te responderé pronto 🚀' 
            : 'Message sent! I\'ll reply soon 🚀'
        };
        name.value = '';
        email.value = '';
        message.value = '';
      } else {
        throw new Error('EmailJS error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      formStatus.value = {
        type: 'error',
        message: currentLang.value === 'es'
          ? 'Hubo un error al enviar. Intenta nuevamente.'
          : 'There was an error sending. Please try again.'
      };
    } finally {
      formLoading.value = false;
    }
  });

  // Client-side initialization
  useVisibleTask$(() => {
    if (typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('qwik-lang') || 'es';
      currentLang.value = savedLang;

      const savedTheme = localStorage.getItem('qwik-theme') || 'dark';
      theme.value = savedTheme;
      document.body.classList.toggle('light', savedTheme === 'light');
    }

    // Reveal on scroll
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
        currentLang={currentLang.value} 
        theme={theme.value}
        onChangeLang$={setLanguage}
        onToggleTheme$={toggleTheme}
      />

      <main class="container">
        {/* Hero */}
        <section class="panel reveal">
          <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
            <img src="/favicon.ico" alt="Eduardo Valenzuela" style="width: 90px; height: 90px; border-radius: 18px; object-fit: cover; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.3);" />
            <div style="flex: 1;">
              <h1>{currentLang.value === 'es' ? `Hola, soy ${cvData.personal.name}` : `Hi, I'm ${cvData.personal.name}`}</h1>
              <small>{cvData.personal.location}</small>
            </div>
          </div>
          <p style="margin-top: 1rem;">
            {currentLang.value === 'es' ? 'Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.' : 'Full‑Stack Developer. Here\'s my resume in PDF ready to download.'}
          </p>
          <p style="margin-top: 1.25rem;">
            <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
              {currentLang.value === 'es' ? '📄 Descargar CV' : '📄 Download Resume'}
            </a>
            <a class="btn secondary" href="#contact" style="margin-left: 0.75rem;">
              {currentLang.value === 'es' ? '💬 Contacto' : '💬 Contact'}
            </a>
          </p>
        </section>

        {/* About */}
        <section id="about" class="panel reveal">
          <h2>
            <span>👨‍💻</span>
            <span>{currentLang.value === 'es' ? 'Sobre mí' : 'About Me'}</span>
          </h2>
          {aboutText().split('\n\n').map((paragraph: string, i: number) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {/* Services */}
        <section id="services" class="panel reveal">
          <div style="text-align: center; max-width: 650px; margin: 0 auto 2rem;">
            <h2 style="justify-content: center;">
              <span>🚀</span>
              <span>{currentLang.value === 'es' ? 'Servicios' : 'Services'}</span>
            </h2>
            <p style="color: #94a3b8; font-size: 0.95rem;">
              {currentLang.value === 'es' ? 'Soluciones digitales completas para hacer crecer tu negocio' : 'Complete digital solutions to grow your business'}
            </p>
          </div>
          <div class="grid">
            {services.map((service, idx) => (
              <div key={idx} class="service">
                <div class="icon-box">{service.icon}</div>
                <h3>{currentLang.value === 'es' ? service.titleES : service.titleEN}</h3>
                <p>{currentLang.value === 'es' ? service.descES : service.descEN}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                  {service.tags.map((tag, i) => (
                    <span key={i} class="badge">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" class="panel reveal">
          <h2>
            <span>💼</span>
            <span>{currentLang.value === 'es' ? 'Experiencia' : 'Experience'}</span>
          </h2>
          <div class="grid-2">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} class="exp-card">
                <h3>{exp.position}</h3>
                <small>{exp.company} • {exp.period}</small>
                <p>{exp.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} class="badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" class="panel reveal">
          <h2>
            <span>🎨</span>
            <span>{currentLang.value === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</span>
          </h2>
          <div class="panel" style="padding:.5rem .75rem; margin-bottom:1rem;">
            <div style="display:flex; flex-wrap:wrap; gap:.5rem;">
              {categories.map((cat) => (
                <button
                  key={cat}
                  class={`badge ${selectedCategory.value === cat ? 'active' : ''}`}
                  aria-pressed={selectedCategory.value === cat}
                  onClick$={() => selectedCategory.value = cat}
                >
                  <span style="margin-right:.35rem;">{categoryIcons[cat] || '🏷️'}</span>
                  {cat}
                  <span style="margin-left:.5rem; opacity:.8;">{countFor(cat)}</span>
                </button>
              ))}
            </div>
          </div>
          <div class="grid">
            {filteredProjects().map((proj, idx) => (
              <div key={idx} class="proj-card">
                <h3>{proj.name}</h3>
                <small>{proj.year}</small>
                <p>{proj.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
                  {proj.technologies.map((tech: string, i: number) => (
                    <span key={i} class="badge">{tech}</span>
                  ))}
                </div>
                <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener" class="btn" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                      {currentLang.value === 'es' ? '🌐 Ver Demo' : '🌐 View Demo'}
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener" class="btn secondary" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                      {currentLang.value === 'es' ? '💻 Código' : '💻 Code'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" class="panel reveal">
          <h2>
            <span>⚡</span>
            <span>{currentLang.value === 'es' ? 'Habilidades' : 'Skills'}</span>
          </h2>
          <div class="grid-skills">
            <div class="panel">
              <h3>Frontend</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.frontend.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="panel">
              <h3>Backend</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.backend.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="panel">
              <h3>{currentLang.value === 'es' ? 'Herramientas · Bases de datos' : 'Tools · Databases'}</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.tools.databases.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="panel">
              <h3>SEO & Analytics</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.tools.seoAnalytics.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="panel">
              <h3>{currentLang.value === 'es' ? 'Herramientas · Dev & Deploy' : 'Tools · Dev & Deploy'}</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.tools.devTools.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="panel">
              <h3>IA</h3>
              <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
                {cvData.skills.ai.map((s, i) => (
                  <span key={i} class="badge" title={`${s.level}%`}>
                    {getSkillIcon(s.name) && <span style="margin-right:4px">{getSkillIcon(s.name)}</span>}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" class="panel reveal">
          <h2>
            <span>📧</span>
            <span>{currentLang.value === 'es' ? 'Contacto' : 'Contact'}</span>
          </h2>
          <div class="grid-2">
            <div>
              <h3 style="margin-bottom: 1rem;">{currentLang.value === 'es' ? '¿Hablamos?' : 'Let\'s talk?'}</h3>
              <p>{currentLang.value === 'es' ? 'Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.' : 'If you have a project in mind or just want to chat about technology, send me a message.'}</p>
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
                    <strong>{currentLang.value === 'es' ? 'Teléfono' : 'Phone'}</strong>
                    <a href={`tel:${cvData.personal.phone}`}>{cvData.personal.phone}</a>
                  </div>
                </li>
                <li>
                  <span class="icon">💼</span>
                  <div class="detail">
                    <strong>LinkedIn</strong>
                    <a href={linkedinUrl} target="_blank" rel="noopener">{currentLang.value === 'es' ? 'Ver perfil' : 'View profile'}</a>
                  </div>
                </li>
                <li>
                  <span class="icon">💻</span>
                  <div class="detail">
                    <strong>GitHub</strong>
                    <a href={githubUrl} target="_blank" rel="noopener">@{githubUser}</a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <form preventdefault:submit onSubmit$={handleSubmit}>
                <div class="field">
                  <label for="name" class="label">{currentLang.value === 'es' ? 'Nombre *' : 'Name *'}</label>
                  <input id="name" bind:value={name} type="text" class="input" required />
                </div>
                <div class="field">
                  <label for="email" class="label">Email *</label>
                  <input id="email" bind:value={email} type="email" class="input" placeholder="tu@email.com" required />
                </div>
                <div class="field">
                  <label for="message" class="label">{currentLang.value === 'es' ? 'Mensaje *' : 'Message *'}</label>
                  <textarea id="message" bind:value={message} class="textarea" required></textarea>
                </div>
                {formStatus.value && (
                  <div class={`alert ${formStatus.value.type}`}>{formStatus.value.message}</div>
                )}
                <button type="submit" class="btn" style="margin-top: 0.5rem;" disabled={formLoading.value}>
                  {formLoading.value ? '⏳...' : (currentLang.value === 'es' ? '📨 Enviar Mensaje' : '📨 Send Message')}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style="text-align: center; padding: 2rem 0; color: #64748b; font-size: 0.85rem;">
          <p>© 2025 Eduardo Valenzuela — {currentLang.value === 'es' ? 'Hecho con' : 'Built with'} ⚡ Qwik</p>
          <p style="margin-top: 0.5rem;">
            <a href="/" style="margin-right: 1rem;">⚛️ React</a>
            <a href="/astro/" style="margin-right: 1rem;">⭐ Astro</a>
            <a href="/vue/" style="margin-right: 1rem;">💚 Vue</a>
            <a href="/solid/">🔷 Solid</a>
          </p>
        </footer>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Eduardo Valenzuela — Full Stack Developer (Qwik)',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de Eduardo Valenzuela — Full Stack Developer especializado en React, Django, WordPress y SEO',
    },
  ],
};
