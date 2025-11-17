<template>
  <div>
    <Navbar 
      :currentLang="currentLang"
      :theme="theme"
      @changeLang="setLanguage"
      @toggleTheme="toggleTheme"
    />
    
    <main class="container">
      <!-- Hero -->
      <section class="panel reveal">
        <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
          <div style="width: 90px; height: 90px; border-radius: 18px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 48px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.3);">
            👨‍💻
          </div>
          <div style="flex: 1;">
            <h1>{{ currentLang === 'es' ? `Hola, soy ${cvData.personal.name}` : `Hi, I'm ${cvData.personal.name}` }}</h1>
            <small>{{ cvData.personal.location }}</small>
          </div>
        </div>
        <p style="margin-top: 1rem;">
          {{ currentLang === 'es' ? 'Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.' : 'Full‑Stack Developer. Here\'s my resume in PDF ready to download.' }}
        </p>
        <p style="margin-top: 1.25rem;">
          <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
            {{ currentLang === 'es' ? '📄 Descargar CV' : '📄 Download Resume' }}
          </a>
          <a class="btn secondary" href="#contact" style="margin-left: 0.75rem;">
            {{ currentLang === 'es' ? '💬 Contacto' : '💬 Contact' }}
          </a>
        </p>
      </section>

      <!-- About -->
      <section id="about" class="panel reveal">
        <h2>
          <span>👨‍💻</span>
          <span>{{ currentLang === 'es' ? 'Sobre mí' : 'About Me' }}</span>
        </h2>
        <p v-for="(par, idx) in aboutText" :key="idx">{{ par }}</p>
      </section>

      <!-- Services -->
      <section id="services" class="panel reveal">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 2rem;">
          <h2 style="justify-content: center;">
            <span>🚀</span>
            <span>{{ currentLang === 'es' ? 'Servicios' : 'Services' }}</span>
          </h2>
          <p style="color: #94a3b8; font-size: 0.95rem;">
            {{ currentLang === 'es' ? 'Soluciones digitales completas para hacer crecer tu negocio' : 'Complete digital solutions to grow your business' }}
          </p>
        </div>
        <div class="grid">
          <div v-for="service in services" :key="service.titleES" class="service">
            <div class="icon-box">{{ service.icon }}</div>
            <h3>{{ currentLang === 'es' ? service.titleES : service.titleEN }}</h3>
            <p>{{ currentLang === 'es' ? service.descES : service.descEN }}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              <span v-for="tag in service.tags" :key="tag" class="badge">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="panel reveal">
        <h2>
          <span>💼</span>
          <span>{{ currentLang === 'es' ? 'Experiencia' : 'Experience' }}</span>
        </h2>
        <div class="grid-2">
          <div v-for="exp in cvData.experience" :key="exp.company" class="exp-card">
            <h3>{{ exp.position }}</h3>
            <small>{{ exp.company }} • {{ exp.period }}</small>
            <p>{{ exp.description }}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              <span v-for="tech in exp.technologies" :key="tech" class="badge">{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="panel reveal">
        <h2>
          <span>🎨</span>
          <span>{{ currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects' }}</span>
        </h2>
        <div class="grid">
          <div v-for="proj in cvData.projects" :key="proj.name" class="proj-card">
            <h3>{{ proj.name }}</h3>
            <small>{{ proj.year }}</small>
            <p>{{ proj.description }}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
              <span v-for="tech in proj.technologies" :key="tech" class="badge">{{ tech }}</span>
            </div>
            <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
              <a v-if="proj.demo" :href="proj.demo" target="_blank" rel="noopener" class="btn" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                {{ currentLang === 'es' ? '🌐 Ver Demo' : '🌐 View Demo' }}
              </a>
              <a v-if="proj.github" :href="proj.github" target="_blank" rel="noopener" class="btn secondary" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">
                {{ currentLang === 'es' ? '💻 Código' : '💻 Code' }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="panel reveal">
        <h2>
          <span>⚡</span>
          <span>{{ currentLang === 'es' ? 'Habilidades' : 'Skills' }}</span>
        </h2>
        <div class="grid-skills">
          <article class="panel">
            <h3>Frontend</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.frontend" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
          <article class="panel">
            <h3>Backend</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.backend" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
          <article class="panel">
            <h3>{{ currentLang === 'es' ? 'Herramientas · Bases de datos' : 'Tools · Databases' }}</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.tools.databases" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
          <article class="panel">
            <h3>SEO & Analytics</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.tools.seoAnalytics" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
          <article class="panel">
            <h3>{{ currentLang === 'es' ? 'Herramientas · Dev & Deploy' : 'Tools · Dev & Deploy' }}</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.tools.devTools" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
          <article class="panel">
            <h3>IA</h3>
            <div class="badges" style="margin-top:.75rem">
              <span v-for="s in cvData.skills.ai" :key="s.name" class="badge" :title="s.level + '%'">{{ s.name }}</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="panel reveal">
        <h2>
          <span>📧</span>
          <span>{{ currentLang === 'es' ? 'Contacto' : 'Contact' }}</span>
        </h2>
        <div class="grid-2">
          <div>
            <h3 style="margin-bottom: 1rem;">{{ currentLang === 'es' ? '¿Hablamos?' : 'Let\'s talk?' }}</h3>
            <p>{{ currentLang === 'es' ? 'Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.' : 'If you have a project in mind or just want to chat about technology, send me a message.' }}</p>
            <ul class="contact-info">
              <li>
                <span class="icon">📧</span>
                <div class="detail">
                  <strong>Email</strong>
                  <a :href="`mailto:${cvData.personal.email}`">{{ cvData.personal.email }}</a>
                </div>
              </li>
              <li>
                <span class="icon">📱</span>
                <div class="detail">
                  <strong>{{ currentLang === 'es' ? 'Teléfono' : 'Phone' }}</strong>
                  <a :href="`tel:${cvData.personal.phone}`">{{ cvData.personal.phone }}</a>
                </div>
              </li>
              <li>
                <span class="icon">💼</span>
                <div class="detail">
                  <strong>LinkedIn</strong>
                  <a :href="linkedinUrl" target="_blank" rel="noopener">{{ currentLang === 'es' ? 'Ver perfil' : 'View profile' }}</a>
                </div>
              </li>
              <li>
                <span class="icon">💻</span>
                <div class="detail">
                  <strong>GitHub</strong>
                  <a :href="githubUrl" target="_blank" rel="noopener">@{{ githubUser }}</a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label for="name" class="label">{{ currentLang === 'es' ? 'Nombre *' : 'Name *' }}</label>
                <input id="name" v-model="formData.name" type="text" class="input" required />
              </div>
              <div class="field">
                <label for="email" class="label">Email *</label>
                <input id="email" v-model="formData.email" type="email" class="input" placeholder="tu@email.com" required />
              </div>
              <div class="field">
                <label for="message" class="label">{{ currentLang === 'es' ? 'Mensaje *' : 'Message *' }}</label>
                <textarea id="message" v-model="formData.message" class="textarea" required></textarea>
              </div>
              <div v-if="formStatus" :class="['alert', formStatus.type]">{{ formStatus.message }}</div>
              <button type="submit" class="btn" style="margin-top: 0.5rem;" :disabled="formLoading">
                {{ formLoading ? '⏳...' : (currentLang === 'es' ? '📨 Enviar Mensaje' : '📨 Send Message') }}
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer style="text-align: center; padding: 2rem 0; color: #64748b; font-size: 0.85rem;">
        <p>© 2025 Eduardo Valenzuela — {{ currentLang === 'es' ? 'Hecho con' : 'Built with' }} 💚 Vue</p>
        <p style="margin-top: 0.5rem;">
          <a href="/" style="margin-right: 1rem;">⚛️ React</a>
          <a href="/astro/" style="margin-right: 1rem;">⭐ Astro</a>
          <a href="/angular/">🅰️ Angular</a>
        </p>
      </footer>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import cvData from '@data/cv-data.json';
import emailjs from '@emailjs/browser';

export default {
  name: 'App',
  components: { Navbar },
  setup() {
    const currentLang = ref('es');
    const theme = ref('dark');
    const formData = ref({ name: '', email: '', message: '' });
    const formStatus = ref(null);
    const formLoading = ref(false);

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

    const aboutText = computed(() => {
      const text = currentLang.value === 'es' ? (cvData.about?.es || '') : (cvData.about?.en || '');
      return text.split('\n\n');
    });

    const githubUser = computed(() => cvData.personal?.social?.github || '');
    const githubUrl = computed(() => (githubUser.value ? `https://github.com/${githubUser.value}` : '#'));
    const linkedinUrl = computed(() => {
      const li = cvData.personal?.social?.linkedin;
      return li ? `https://www.linkedin.com/in/${li}` : '#';
    });

    const setLanguage = (lang) => {
      currentLang.value = lang;
      localStorage.setItem('vue-lang', lang);
    };

    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
      localStorage.setItem('vue-theme', theme.value);
      document.body.classList.toggle('light', theme.value === 'light');
    };

    const handleSubmit = async () => {
      formLoading.value = true;
      formStatus.value = null;

      try {
        const result = await emailjs.send(
          'service_35dui0c',
          'template_dlh2p8t',
          {
            from_name: formData.value.name,
            from_email: formData.value.email,
            message: formData.value.message
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
          formData.value = { name: '', email: '', message: '' };
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
    };

    onMounted(() => {
      // Initialize language
      const savedLang = localStorage.getItem('vue-lang') || 'es';
      currentLang.value = savedLang;

      // Initialize theme
      const savedTheme = localStorage.getItem('vue-theme') || 'dark';
      theme.value = savedTheme;
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

    return {
      cvData,
      currentLang,
      theme,
      services,
      aboutText,
      formData,
      formStatus,
      formLoading,
      setLanguage,
      toggleTheme,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.service {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 1.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

body.light .service {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(203, 213, 225, 0.5);
}

.service:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

body.light .service:hover {
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

body.light .badge {
  background: #e2e8f0;
  border-color: rgba(148, 163, 184, 0.3);
  color: #334155;
}

.badge:hover {
  background: #334155;
}

body.light .badge:hover {
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

body.light .exp-card,
body.light .proj-card {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(203, 213, 225, 0.5);
}

.exp-card:hover,
.proj-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

body.light .exp-card:hover,
body.light .proj-card:hover {
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

body.light .label {
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

body.light .input,
body.light .textarea {
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
