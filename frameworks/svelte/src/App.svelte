<script>
  import { onMount } from 'svelte';
  import Navbar from './lib/Navbar.svelte';
  import cvData from '@data/cv-data.json';
  import emailjs from '@emailjs/browser';

  // Svelte 5 runes mode: use $state for reactive state
  let currentLang = $state('es');
  let theme = $state('dark');
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let formStatus = $state(null);
  let formLoading = $state(false);

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
  const getSkillIcon = (skillName) => SKILL_ICONS[skillName] || '';

  // --- Filtros de proyectos (igual a React) ---
  const FULLSTACK_KEYS = ['Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'];
  const getCategory = (p) => {
    if (p.category) return p.category;
    const tech = p.technologies || [];
    if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress';
    const isFull = FULLSTACK_KEYS.some(t => tech.includes(t));
    return isFull ? 'Full Stack' : 'Personal';
  };
  let selectedCategory = $state('Todos');
  const categories = ['Todos','Full Stack','WordPress','Personal'].filter(k => {
    if (k === 'Todos') return cvData.projects.length > 0;
    return cvData.projects.some(p => getCategory(p) === k);
  });
  const categoryIcons = { 'Todos': '🗂️', 'WordPress': '🧩', 'Full Stack': '🧰', 'Personal': '⭐' };
  const countFor = (cat) => cat === 'Todos' ? cvData.projects.length : cvData.projects.filter(p => getCategory(p) === cat).length;
  
  // Use $derived for computed values
  const filteredProjects = $derived(selectedCategory === 'Todos' ? cvData.projects : cvData.projects.filter(p => getCategory(p) === selectedCategory));
  const aboutText = $derived(currentLang === 'es' ? (cvData.about?.es || '') : (cvData.about?.en || ''));
  
  // Simple non-reactive values
  const githubUser = cvData.personal?.social?.github || '';
  const githubUrl = githubUser ? `https://github.com/${githubUser}` : '#';
  const linkedinUser = cvData.personal?.social?.linkedin || '';
  const linkedinUrl = linkedinUser ? `https://www.linkedin.com/in/${linkedinUser}` : '#';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('svelte-lang', lang);
  }

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('svelte-theme', theme);
    document.body.classList.toggle('light', theme === 'light');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    formLoading = true;
    formStatus = null;

    try {
      const result = await emailjs.send(
        'service_35dui0c',
        'template_dlh2p8t',
        {
          from_name: name,
          from_email: email,
          message
        },
        'qZw7aS4i2gCI3Wz2B'
      );

      if (result.text === 'OK') {
        formStatus = {
          type: 'success',
          message: currentLang === 'es' 
            ? '¡Mensaje enviado! Te responderé pronto 🚀' 
            : 'Message sent! I\'ll reply soon 🚀'
        };
        name = '';
        email = '';
        message = '';
      } else {
        throw new Error('EmailJS error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      formStatus = {
        type: 'error',
        message: currentLang === 'es'
          ? 'Hubo un error al enviar. Intenta nuevamente.'
          : 'There was an error sending. Please try again.'
      };
    } finally {
      formLoading = false;
    }
  }

  onMount(() => {
    // Initialize language
    const savedLang = localStorage.getItem('svelte-lang') || 'es';
    currentLang = savedLang;

    // Initialize theme
    const savedTheme = localStorage.getItem('svelte-theme') || 'dark';
    theme = savedTheme;
    document.body.classList.toggle('light', savedTheme === 'light');

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
</script>

<Navbar {currentLang} {theme} onChangeLang={setLanguage} onToggleTheme={toggleTheme} />

<main class="container">
  <!-- Hero -->
  <section class="panel reveal">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
      <img src="/favicon.ico" alt="Eduardo Valenzuela" style="width: 90px; height: 90px; border-radius: 18px; object-fit: cover; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.3);" />
      <div style="flex: 1;">
        <h1>{currentLang === 'es' ? `Hola, soy ${cvData.personal.name}` : `Hi, I'm ${cvData.personal.name}`}</h1>
        <small>{cvData.personal.location}</small>
      </div>
    </div>
    <p style="margin-top: 1rem;">
      {currentLang === 'es' ? 'Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.' : 'Full‑Stack Developer. Here\'s my resume in PDF ready to download.'}
    </p>
    <p style="margin-top: 1.25rem;">
      <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
        {currentLang === 'es' ? '📄 Descargar CV' : '📄 Download Resume'}
      </a>
      <a class="btn secondary" href="#contact" style="margin-left: 0.75rem;">
        {currentLang === 'es' ? '💬 Contacto' : '💬 Contact'}
      </a>
    </p>
  </section>

  <!-- About -->
  <section id="about" class="panel reveal">
    <h2>
      <span>👨‍💻</span>
      <span>{currentLang === 'es' ? 'Sobre mí' : 'About Me'}</span>
    </h2>
      {#each aboutText.split('\n\n') as paragraph}
      <p>{paragraph}</p>
    {/each}
  </section>

  <!-- Services -->
  <section id="services" class="panel reveal">
    <div style="text-align: center; max-width: 650px; margin: 0 auto 2rem;">
      <h2 style="justify-content: center;">
        <span>🚀</span>
        <span>{currentLang === 'es' ? 'Servicios' : 'Services'}</span>
      </h2>
      <p style="color: #94a3b8; font-size: 0.95rem;">
        {currentLang === 'es' ? 'Soluciones digitales completas para hacer crecer tu negocio' : 'Complete digital solutions to grow your business'}
      </p>
    </div>
    <div class="grid">
      {#each services as service}
        <div class="service">
          <div class="icon-box">{service.icon}</div>
          <h3>{currentLang === 'es' ? service.titleES : service.titleEN}</h3>
          <p>{currentLang === 'es' ? service.descES : service.descEN}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
            {#each service.tags as tag}
              <span class="badge">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Experience -->
  <section id="experience" class="panel reveal">
    <h2>
      <span>💼</span>
      <span>{currentLang === 'es' ? 'Experiencia' : 'Experience'}</span>
    </h2>
    <div class="grid-2">
      {#each cvData.experience as exp}
        <div class="exp-card">
          <h3>{exp.position}</h3>
          <small>{exp.company} • {exp.period}</small>
            <p>{exp.description}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
            {#each exp.technologies as tech}
              <span class="badge">{tech}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="panel reveal">
    <h2>
      <span>🎨</span>
      <span>{currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</span>
    </h2>
    <!-- Filtros por categoría -->
    <div class="panel" style="padding:.5rem .75rem; margin-bottom:1rem;">
      <div style="display:flex; flex-wrap:wrap; gap:.5rem;">
        {#each categories as cat}
          <button
            class="badge {selectedCategory === cat ? 'active' : ''}"
            aria-pressed={selectedCategory === cat}
            onclick={() => selectedCategory = cat}
          >
            <span style="margin-right:.35rem;">{categoryIcons[cat] || '🏷️'}</span>
            {cat}
            <span style="margin-left:.5rem; opacity:.8;">{countFor(cat)}</span>
          </button>
        {/each}
      </div>
    </div>
    <div class="grid">
      {#each filteredProjects as proj}
        <div class="proj-card">
          <h3>{proj.name}</h3>
          <small>{proj.year}</small>
            <p>{proj.description}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
            {#each proj.technologies as tech}
              <span class="badge">{tech}</span>
            {/each}
          </div>
          <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
            {#if proj.demo}
              <a href={proj.demo} target="_blank" rel="noopener" class="btn" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                {currentLang === 'es' ? '🌐 Ver Demo' : '🌐 View Demo'}
              </a>
            {/if}
            {#if proj.github}
              <a href={proj.github} target="_blank" rel="noopener" class="btn secondary" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                {currentLang === 'es' ? '💻 Código' : '💻 Code'}
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="panel reveal">
    <h2>
      <span>⚡</span>
      <span>{currentLang === 'es' ? 'Habilidades' : 'Skills'}</span>
    </h2>
      <div class="grid-skills">
        <div class="panel">
          <h3>Frontend</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.frontend as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
        <div class="panel">
          <h3>Backend</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.backend as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
        <div class="panel">
          <h3>{currentLang === 'es' ? 'Herramientas · Bases de datos' : 'Tools · Databases'}</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.tools.databases as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
        <div class="panel">
          <h3>SEO & Analytics</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.tools.seoAnalytics as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
        <div class="panel">
          <h3>{currentLang === 'es' ? 'Herramientas · Dev & Deploy' : 'Tools · Dev & Deploy'}</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.tools.devTools as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
        <div class="panel">
          <h3>IA</h3>
          <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
            {#each cvData.skills.ai as s}
              <span class="badge" title={`${s.level}%`}>{#if getSkillIcon(s.name)}<span style="margin-right:4px">{getSkillIcon(s.name)}</span>{/if}{s.name}</span>
            {/each}
          </div>
        </div>
      </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="panel reveal">
    <h2>
      <span>📧</span>
      <span>{currentLang === 'es' ? 'Contacto' : 'Contact'}</span>
    </h2>
    <div class="grid-2">
      <div>
        <h3 style="margin-bottom: 1rem;">{currentLang === 'es' ? '¿Hablamos?' : 'Let\'s talk?'}</h3>
        <p>{currentLang === 'es' ? 'Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.' : 'If you have a project in mind or just want to chat about technology, send me a message.'}</p>
        <ul class="contact-info">
          <li>
            <span class="icon">📧</span>
            <div class="detail">
              <strong>Email</strong>
              <a href="mailto:{cvData.personal.email}">{cvData.personal.email}</a>
            </div>
          </li>
          <li>
            <span class="icon">📱</span>
            <div class="detail">
              <strong>{currentLang === 'es' ? 'Teléfono' : 'Phone'}</strong>
              <a href="tel:{cvData.personal.phone}">{cvData.personal.phone}</a>
            </div>
          </li>
          <li>
            <span class="icon">💼</span>
            <div class="detail">
              <strong>LinkedIn</strong>
                <a href={linkedinUrl} target="_blank" rel="noopener">{currentLang === 'es' ? 'Ver perfil' : 'View profile'}</a>
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
        <form onsubmit={handleSubmit}>
          <div class="field">
            <label for="name" class="label">{currentLang === 'es' ? 'Nombre *' : 'Name *'}</label>
            <input id="name" bind:value={name} type="text" class="input" required />
          </div>
          <div class="field">
            <label for="email" class="label">Email *</label>
            <input id="email" bind:value={email} type="email" class="input" placeholder="tu@email.com" required />
          </div>
          <div class="field">
            <label for="message" class="label">{currentLang === 'es' ? 'Mensaje *' : 'Message *'}</label>
            <textarea id="message" bind:value={message} class="textarea" required></textarea>
          </div>
          {#if formStatus}
            <div class="alert {formStatus.type}">{formStatus.message}</div>
          {/if}
          <button type="submit" class="btn" style="margin-top: 0.5rem;" disabled={formLoading}>
            {formLoading ? '⏳...' : (currentLang === 'es' ? '📨 Enviar Mensaje' : '📨 Send Message')}
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer style="text-align: center; padding: 2rem 0; color: #64748b; font-size: 0.85rem;">
    <p>© 2025 Eduardo Valenzuela — {currentLang === 'es' ? 'Hecho con' : 'Built with'} 🧡 Svelte</p>
    <p style="margin-top: 0.5rem;">
      <a href="/" style="margin-right: 1rem;">⚛️ React</a>
      <a href="/astro/" style="margin-right: 1rem;">⭐ Astro</a>
      <a href="/vue/" style="margin-right: 1rem;">💚 Vue</a>
      <a href="/solid/">🔷 Solid</a>
    </p>
  </footer>
</main>

<style>
  /* Scroll offset for sticky navbar */
  :global(section) {
    scroll-margin-top: 100px;
    padding-top: 4rem;
  }

  :global(section:first-of-type) {
    padding-top: 0;
  }

  .service {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.2);
    padding: 1.75rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  :global(body.light) .service {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(203, 213, 225, 0.5);
  }

  .service:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }

  :global(body.light) .service:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  .icon-box {
    width: 68px;
    height: 68px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(14, 165, 233, 0.15));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    margin-bottom: 1rem;
    transition: transform 0.3s;
  }

  .service:hover .icon-box {
    transform: scale(1.1) rotate(5deg);
  }

  .badge {
    background: #1e293b;
    border: 1px solid rgba(148, 163, 184, 0.25);
    color: #e5e7eb;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    font-size: 0.8rem;
    white-space: nowrap;
    transition: background 0.2s;
    display: inline-block;
  }

  :global(body.light) .badge {
    background: #e2e8f0;
    border-color: rgba(148, 163, 184, 0.3);
    color: #334155;
  }

  .badge:hover {
    background: #334155;
  }

  :global(body.light) .badge:hover {
    background: #cbd5e1;
  }

  .exp-card,
  .proj-card {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  :global(body.light) .exp-card,
  :global(body.light) .proj-card {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(203, 213, 225, 0.5);
  }

  .exp-card:hover,
  .proj-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  :global(body.light) .exp-card:hover,
  :global(body.light) .proj-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .contact-info {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-info li {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  .contact-info li .icon {
    font-size: 1.4rem;
    flex-shrink: 0;
    line-height: 1;
  }

  .contact-info li .detail {
    flex: 1;
  }

  .contact-info li .detail strong {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .label {
    font-size: 0.9rem;
    color: #cbd5e1;
    font-weight: 500;
  }

  :global(body.light) .label {
    color: #475569;
  }

  .input,
  .textarea {
    width: 100%;
    padding: 0.75rem 0.9rem;
    border-radius: 0.6rem;
    border: 1px solid rgba(148, 163, 184, 0.3);
    background: #0b1220;
    color: #e2e8f0;
    outline: none;
    font-family: inherit;
    font-size: 0.95rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  :global(body.light) .input,
  :global(body.light) .textarea {
    background: white;
    border-color: rgba(148, 163, 184, 0.4);
    color: #1e293b;
  }

  .input:focus,
  .textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  .textarea {
    resize: vertical;
    min-height: 140px;
    line-height: 1.6;
  }

  .alert {
    border-radius: 0.6rem;
    padding: 0.85rem 1rem;
    font-size: 0.9rem;
    margin: 0.75rem 0;
  }

  .alert.success {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.35);
  }

  .alert.error {
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.35);
  }
</style>
