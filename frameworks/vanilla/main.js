// Import CV data
import cvData from '@data/cv-data.json';

// State
let currentLang = 'es';
let theme = 'dark';

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
const getSkillIcon = (name) => SKILL_ICONS[name] ? `<span style="margin-right:4px">${SKILL_ICONS[name]}</span>` : '';

// Initialize
function init() {
  // Load saved preferences
  currentLang = localStorage.getItem('vanilla-lang') || 'es';
  theme = localStorage.getItem('vanilla-theme') || 'dark';
  
  // Apply theme
  document.body.classList.toggle('light', theme === 'light');
  document.getElementById('theme-toggle').textContent = theme === 'light' ? '☀️' : '🌙';
  
  // Setup event listeners
  setupNavbar();
  
  // Render content
  renderContent();
  
  // Setup reveal on scroll
  setupRevealOnScroll();
}

// Setup navbar
function setupNavbar() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('vanilla-theme', theme);
    document.body.classList.toggle('light', theme === 'light');
    document.getElementById('theme-toggle').textContent = theme === 'light' ? '☀️' : '🌙';
    document.getElementById('navbar').classList.toggle('light', theme === 'light');
  });
  
  // Language toggle
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('vanilla-lang', currentLang);
      
      // Update active state
      document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update nav links text
      document.querySelectorAll('.menu-links a').forEach(link => {
        const textEl = link.querySelector('.text');
        if (textEl && link.dataset.langEs && link.dataset.langEn) {
          textEl.textContent = currentLang === 'es' ? link.dataset.langEs : link.dataset.langEn;
        }
      });
      
      // Re-render content
      renderContent();
    });
  });
  
  // Set initial lang state
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  
  // Update nav links for initial language
  document.querySelectorAll('.menu-links a').forEach(link => {
    const textEl = link.querySelector('.text');
    if (textEl && link.dataset.langEs && link.dataset.langEn) {
      textEl.textContent = currentLang === 'es' ? link.dataset.langEs : link.dataset.langEn;
    }
  });
  
  // Set navbar theme
  document.getElementById('navbar').classList.toggle('light', theme === 'light');
}

// Render content
function renderContent() {
  const app = document.getElementById('app');
  const t = (es, en) => currentLang === 'es' ? es : en;
  
  app.innerHTML = `
    <!-- Hero -->
    <section class="panel reveal">
      <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <img src="/favicon.ico" alt="Eduardo Valenzuela" style="width: 90px; height: 90px; border-radius: 18px; object-fit: cover; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.3);" />
        <div style="flex: 1;">
          <h1>${t(`Hola, soy ${cvData.personal.name}`, `Hi, I'm ${cvData.personal.name}`)}</h1>
          <small>${cvData.personal.location}</small>
        </div>
      </div>
      <p style="margin-top: 1rem;">
        ${t('Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.', 'Full‑Stack Developer. Here\'s my resume in PDF ready to download.')}
      </p>
      <p style="margin-top: 1.25rem;">
        <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
          ${t('📄 Descargar CV', '📄 Download Resume')}
        </a>
        <a class="btn secondary" href="#contact" style="margin-left: 0.75rem;">
          ${t('💬 Contacto', '💬 Contact')}
        </a>
      </p>
    </section>

    <!-- About -->
    <section id="about" class="panel reveal">
      <h2>
        <span>👨‍💻</span>
        <span>${t('Sobre mí', 'About Me')}</span>
      </h2>
  ${((currentLang === 'es' ? (cvData.about?.es || '') : (cvData.about?.en || ''))).split('\n\n').map(p => `<p>${p}</p>`).join('')}
    </section>

    <!-- Services -->
    <section id="services" class="panel reveal">
      <div style="text-align: center; max-width: 650px; margin: 0 auto 2rem;">
        <h2 style="justify-content: center;">
          <span>🚀</span>
          <span>${t('Servicios', 'Services')}</span>
        </h2>
        <p style="color: #94a3b8; font-size: 0.95rem;">
          ${t('Soluciones digitales completas para hacer crecer tu negocio', 'Complete digital solutions to grow your business')}
        </p>
      </div>
      <div class="grid">
        ${services.map(service => `
          <div class="service">
            <div class="icon-box">${service.icon}</div>
            <h3>${currentLang === 'es' ? service.titleES : service.titleEN}</h3>
            <p>${currentLang === 'es' ? service.descES : service.descEN}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              ${service.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="panel reveal">
      <h2>
        <span>💼</span>
        <span>${t('Experiencia', 'Experience')}</span>
      </h2>
      <div class="grid-2">
        ${cvData.experience.map(exp => `
          <div class="exp-card">
            <h3>${exp.position}</h3>
            <small>${exp.company} • ${exp.period}</small>
            <p>${exp.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              ${exp.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="panel reveal">
      <h2>
        <span>🎨</span>
        <span>${t('Proyectos Destacados', 'Featured Projects')}</span>
      </h2>
        <!-- Filtros por categoría -->
        <div class="panel" style="padding:.5rem .75rem; margin-bottom:1rem;">
          <div style="display:flex; flex-wrap:wrap; gap:.5rem;" id="proj-filters"></div>
        </div>
      <div class="grid">
        ${cvData.projects.map(proj => `
          <div class="proj-card">
            <h3>${proj.name}</h3>
            <small>${proj.year}</small>
            <p>${proj.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
              ${proj.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
            </div>
            <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
              ${proj.demo ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="btn" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">${t('🌐 Ver Demo', '🌐 View Demo')}</a>` : ''}
              ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener" class="btn secondary" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">${t('💻 Código', '💻 Code')}</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="panel reveal">
      <h2>
        <span>⚡</span>
        <span>${t('Habilidades', 'Skills')}</span>
      </h2>
      <div class="grid-skills">
        <article class="panel">
          <h3>Frontend</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.frontend.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
        <article class="panel">
          <h3>Backend</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.backend.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
        <article class="panel">
          <h3>${t('Herramientas · Bases de datos', 'Tools · Databases')}</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.tools.databases.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
        <article class="panel">
          <h3>SEO & Analytics</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.tools.seoAnalytics.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
        <article class="panel">
          <h3>${t('Herramientas · Dev & Deploy', 'Tools · Dev & Deploy')}</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.tools.devTools.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
        <article class="panel">
          <h3>IA</h3>
          <div class="badges" style="margin-top:.75rem">
            ${cvData.skills.ai.map(s => `<span class="badge" title="${s.level}%">${getSkillIcon(s.name)}${s.name}</span>`).join('')}
          </div>
        </article>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="panel reveal">
      <h2>
        <span>📧</span>
        <span>${t('Contacto', 'Contact')}</span>
      </h2>
      <div class="grid-2">
        <div>
          <h3 style="margin-bottom: 1rem;">${t('¿Hablamos?', 'Let\'s talk?')}</h3>
          <p>${t('Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.', 'If you have a project in mind or just want to chat about technology, send me a message.')}</p>
          <ul class="contact-info">
            <li>
              <span class="icon">📧</span>
              <div class="detail">
                <strong>Email</strong>
                <a href="mailto:${cvData.personal.email}">${cvData.personal.email}</a>
              </div>
            </li>
            <li>
              <span class="icon">📱</span>
              <div class="detail">
                <strong>${t('Teléfono', 'Phone')}</strong>
                <a href="tel:${cvData.personal.phone}">${cvData.personal.phone}</a>
              </div>
            </li>
            <li>
              <span class="icon">💼</span>
              <div class="detail">
                <strong>LinkedIn</strong>
                <a href="${cvData.personal?.social?.linkedin ? `https://www.linkedin.com/in/${cvData.personal.social.linkedin}` : '#'}" target="_blank" rel="noopener">${t('Ver perfil', 'View profile')}</a>
              </div>
            </li>
            <li>
              <span class="icon">💻</span>
              <div class="detail">
                <strong>GitHub</strong>
                <a href="${cvData.personal?.social?.github ? `https://github.com/${cvData.personal.social.github}` : '#'}" target="_blank" rel="noopener">@${cvData.personal?.social?.github || ''}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <form id="contact-form">
            <div class="field">
              <label for="name" class="label">${t('Nombre *', 'Name *')}</label>
              <input id="name" name="name" type="text" class="input" required />
            </div>
            <div class="field">
              <label for="email" class="label">Email *</label>
              <input id="email" name="email" type="email" class="input" placeholder="tu@email.com" required />
            </div>
            <div class="field">
              <label for="message" class="label">${t('Mensaje *', 'Message *')}</label>
              <textarea id="message" name="message" class="textarea" required></textarea>
            </div>
            <div id="form-status"></div>
            <button type="submit" class="btn" style="margin-top: 0.5rem;">
              ${t('📨 Enviar Mensaje', '📨 Send Message')}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="text-align: center; padding: 2rem 0; color: #64748b; font-size: 0.85rem;">
      <p>© 2025 Eduardo Valenzuela — ${t('Hecho con', 'Built with')} ⚡ Vanilla JS</p>
      <p style="margin-top: 0.5rem;">
        <a href="/" style="margin-right: 1rem;">⚛️ React</a>
        <a href="/astro/" style="margin-right: 1rem;">⭐ Astro</a>
        <a href="/vue/" style="margin-right: 1rem;">💚 Vue</a>
        <a href="/solid/" style="margin-right: 1rem;">🔷 Solid</a>
        <a href="/next/">▲ Next.js</a>
      </p>
    </footer>
  `;
  
  // Setup form
  setupContactForm();
  
  // Re-setup reveal on scroll for new content
  setupRevealOnScroll();

    // Setup project filters
    setupProjectFilters();
}

// Setup contact form
// Project filters (same logic as React)
function setupProjectFilters() {
  const FULLSTACK_KEYS = ['Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js'];
  const getCategory = (p) => {
    if (p.category) return p.category;
    const tech = p.technologies || [];
    if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress';
    return FULLSTACK_KEYS.some(t => tech.includes(t)) ? 'Full Stack' : 'Personal';
  };
  const categories = ['Todos','Full Stack','WordPress','Personal'].filter(k => {
    if (k === 'Todos') return cvData.projects.length > 0;
    return cvData.projects.some(p => getCategory(p) === k);
  });
  const categoryIcons = { 'Todos': '🗂️', 'WordPress': '🧩', 'Full Stack': '🧰', 'Personal': '⭐' };
  const countFor = (cat) => cat === 'Todos' ? cvData.projects.length : cvData.projects.filter(p => getCategory(p) === cat).length;
  let selected = 'Todos';

  const filtersEl = document.getElementById('proj-filters');
  const renderFilters = () => {
    filtersEl.innerHTML = categories.map(cat => `
      <button class="badge ${selected === cat ? 'active' : ''}" data-cat="${cat}" aria-selected="${selected === cat}">
        <span style="margin-right:.35rem;">${categoryIcons[cat] || '🏷️'}</span>
        ${cat}
        <span style="margin-left:.5rem; opacity:.8;">${countFor(cat)}</span>
      </button>`).join('');
  };
  const renderList = () => {
    const list = selected === 'Todos' ? cvData.projects : cvData.projects.filter(p => getCategory(p) === selected);
    const priority = { 'Full Stack': 0, 'WordPress': 1, 'Personal': 2 };
    const sorted = [...list].sort((a,b) => {
      if (selected === 'Todos') {
        const pa = priority[getCategory(a)] ?? 99; const pb = priority[getCategory(b)] ?? 99;
        if (pa !== pb) return pa - pb;
      }
      return Number(b.featured) - Number(a.featured);
    });
    const grid = document.querySelector('#projects + .grid, section#projects + .grid');
    // Fallback: find the first grid under projects section
    const projectsSection = document.querySelector('section#projects');
    const gridEl = projectsSection?.querySelector('.grid');
    if (!gridEl) return;
    gridEl.innerHTML = sorted.map(proj => `
      <div class="proj-card">
        <h3>${proj.name}</h3>
        <small>${proj.year || ''}</small>
        <p>${proj.description}</p>
        <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
          ${(proj.technologies||[]).map(tech => `<span class="badge">${tech}</span>`).join('')}
        </div>
        <div style="display:flex; gap:.75rem; margin-top:1rem; flex-wrap:wrap;">
          ${proj.demo ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="btn" style="padding:.5rem .9rem; font-size:.85rem;">${t('🌐 Ver Demo','🌐 View Demo')}</a>` : ''}
          ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener" class="btn secondary" style="padding:.5rem .9rem; font-size:.85rem;">${t('💻 Código','💻 Code')}</a>` : ''}
        </div>
      </div>
    `).join('');
  };
  renderFilters();
  renderList();
  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    selected = btn.getAttribute('data-cat');
    renderFilters();
    renderList();
  });
}
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳...';
    statusDiv.innerHTML = '';
    
    try {
      const result = await emailjs.send(
        'service_35dui0c',
        'template_dlh2p8t',
        {
          from_name: form.name.value,
          from_email: form.email.value,
          message: form.message.value
        },
        'qZw7aS4i2gCI3Wz2B'
      );
      
      if (result.text === 'OK') {
        statusDiv.innerHTML = `<div class="alert success">${currentLang === 'es' ? '¡Mensaje enviado! Te responderé pronto 🚀' : 'Message sent! I\'ll reply soon 🚀'}</div>`;
        form.reset();
      } else {
        throw new Error('EmailJS error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      statusDiv.innerHTML = `<div class="alert error">${currentLang === 'es' ? 'Hubo un error al enviar. Intenta nuevamente.' : 'There was an error sending. Please try again.'}</div>`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Setup reveal on scroll
function setupRevealOnScroll() {
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
  
  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}

// Start app
init();
