'use client'

import { useEffect, useState } from 'react'
import { cvData, getSkillIcon } from './data'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [activeCategory, setActiveCategory] = useState('Todos')

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const savedLang = localStorage.getItem('lang') as 'es' | 'en' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.classList.toggle('light', savedTheme === 'light')
    }
    if (savedLang) setLang(savedLang)

    // Load EmailJS SDK
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      // Initialize EmailJS with correct publicKey (same as React/Astro)
      // @ts-ignore
      if (window.emailjs) {
        // @ts-ignore
        window.emailjs.init({ publicKey: 'qZw7aS4i2gCI3Wz2B' })
      }
    }
    document.head.appendChild(script)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.classList.toggle('light', newTheme === 'light')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    const form = e.currentTarget
    
    try {
      // @ts-ignore
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded')
      }
      
      // Use sendForm() like React and Astro versions with CORRECT credentials
      // @ts-ignore
      await window.emailjs.sendForm(
        'service_35dui0c',
        'template_dlh2p8t',
        form,
        'qZw7aS4i2gCI3Wz2B'
      )
      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  if (!mounted) return null

  const t = (es: string, en: string) => (lang === 'es' ? es : en)

  const frameworks = [
    { id: 'react', name: 'React', icon: '⚛️', url: '/' },
    { id: 'astro', name: 'Astro', icon: '🪐', url: '/astro/' },
    { id: 'vue', name: 'Vue', icon: '💚', url: '/vue/' },
    { id: 'solid', name: 'Solid', icon: '🔷', url: '/solid/' },
    { id: 'vanilla', name: 'Vanilla', icon: '⚡', url: '/vanilla/' },
    { id: 'next', name: 'Next.js', icon: '▲', url: '/next/', active: true },
    { id: 'lab', name: 'Lab', icon: '🧪', url: '/lab/' },
  ]

  const { personal, about, experience, projects, skills, services } = cvData

  // Filtros de proyectos
  const FULLSTACK_KEYS = ['Django','Python','Node.js','Express','Ruby on Rails','PostgreSQL','JWT','Celery','Redis','Nuxt.js']
  const getCategory = (p: any) => {
    if (p.category) return p.category
    const tech = p.technologies || []
    if (tech.includes('WordPress') || tech.includes('WooCommerce')) return 'WordPress'
    const isFull = FULLSTACK_KEYS.some(t => tech.includes(t))
    return isFull ? 'Full Stack' : 'Personal'
  }
  
  const categories = ['Todos', 'Full Stack', 'WordPress', 'Personal']
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter((p: any) => getCategory(p) === activeCategory)

  return (
    <>
      {/* Navbar idéntico a Astro */}
      <nav>
        <div className="inner">
          {/* Fila 1: Menu principal */}
          <div className="menu-row">
            <button
              className="logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Volver arriba"
            >
              👨‍💻
            </button>
            <div className="menu-links">
              <a href="#about">
                <span className="icon">👤</span>
                <span>{t('Sobre mí', 'About')}</span>
              </a>
              <a href="#services">
                <span className="icon">🚀</span>
                <span>{t('Servicios', 'Services')}</span>
              </a>
              <a href="#experience">
                <span className="icon">💼</span>
                <span>{t('Experiencia', 'Experience')}</span>
              </a>
              <a href="#projects">
                <span className="icon">🎨</span>
                <span>{t('Proyectos', 'Projects')}</span>
              </a>
              <a href="#skills">
                <span className="icon">⚡</span>
                <span>{t('Habilidades', 'Skills')}</span>
              </a>
              <a href="#contact">
                <span className="icon">📧</span>
                <span>{t('Contacto', 'Contact')}</span>
              </a>
            </div>
            <div className="controls">
              <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
              </button>
              <div className="lang-toggle">
                <button
                  className={lang === 'es' ? 'active' : ''}
                  onClick={() => { setLang('es'); localStorage.setItem('lang', 'es'); }}
                >
                  ES
                </button>
                <button
                  className={lang === 'en' ? 'active' : ''}
                  onClick={() => { setLang('en'); localStorage.setItem('lang', 'en'); }}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Fila 2: Framework switcher */}
          <div className="frameworks-row">
            {frameworks.map((fw) => (
              <a
                key={fw.id}
                href={fw.url}
                className={fw.active ? 'active' : ''}
                title={`Ver en ${fw.name}`}
              >
                {fw.icon} <span className="hidden-mobile">{fw.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Hero */}
        <section className="panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <img 
              src="/favicon.ico" 
              alt={personal.name}
              style={{ width: '90px', height: '90px', borderRadius: '18px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            />
            <div style={{ flex: 1 }}>
              <h1>{t('Hola, soy', 'Hi, I\'m')} {personal.name}</h1>
              <small>{personal.location}</small>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>
            {t(
              'Desarrollador Full-Stack. Aquí tienes mi CV en PDF listo para descargar.',
              'Full-Stack Developer. Here\'s my resume in PDF ready to download.'
            )}
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="/CV-Eduardo-Valenzuela.pdf" className="btn" download>
              {t('📄 Descargar CV', '📄 Download Resume')}
            </a>
            <a href="#contact" className="btn secondary" style={{ marginLeft: '0.75rem' }}>
              {t('💬 Contacto', '💬 Contact')}
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="panel">
          <h2>👨‍💻 {t('Sobre mí', 'About Me')}</h2>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {lang === 'es' ? about.es : about.en}
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            🚀 {t('Servicios', 'Services')}
          </h2>
          <div className="grid-2">
            {services.map((service: any, idx: number) => (
              <div key={idx} className="service">
                <div className="icon-box">{service.icon}</div>
                <h3>{lang === 'es' ? service.titleES : service.titleEN}</h3>
                <p>{lang === 'es' ? service.descES : service.descEN}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {service.tags.map((tag: string) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            💼 {t('Experiencia', 'Experience')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experience.map((exp: any, idx: number) => (
              <div key={idx} className="exp-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3>{exp.company}</h3>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.95rem', fontWeight: 500 }}>{exp.position}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <small style={{ display: 'block' }}>{exp.period}</small>
                    <small>{exp.location}</small>
                  </div>
                </div>
                <p>{exp.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {exp.technologies.map((tech: string) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            🎨 {t('Proyectos', 'Projects')}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`badge ${activeCategory === cat ? 'active' : ''}`}
                style={{ 
                  cursor: 'pointer',
                  ...(activeCategory === cat && { background: '#3b82f6', color: 'white' })
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid">
            {filteredProjects.map((project: any, idx: number) => (
              <div key={idx} className="proj-card">
                <h3>{project.name}</h3>
                <p style={{ fontSize: '0.9rem', margin: '0.75rem 0' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <div style={{ marginTop: '1rem' }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.85rem', padding: '0.5rem 0.9rem' }}>
                      {t('Ver proyecto', 'View project')} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            ⚡ {t('Habilidades', 'Skills')}
          </h2>
          <div className="grid-skills">
            {Object.entries(skills).map(([category, skillList]: [string, any]) => (
              <div key={category} className="panel">
                <h3 style={{ marginBottom: '1rem' }}>{category}</h3>
                <div className="skills-badges">
                  {skillList.map((skill: string) => (
                    <span key={skill} className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span dangerouslySetInnerHTML={{ __html: getSkillIcon(skill) }} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            📧 {t('Contacto', 'Contact')}
          </h2>
          <div className="grid-2">
            <div className="panel">
              <h3 style={{ marginBottom: '1.25rem' }}>{t('Información de contacto', 'Contact Information')}</h3>
              <ul className="contact-info">
                <li>
                  <span className="icon">📧</span>
                  <div className="detail">
                    <strong>{t('Email', 'Email')}</strong>
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </div>
                </li>
                <li>
                  <span className="icon">📱</span>
                  <div className="detail">
                    <strong>{t('Teléfono', 'Phone')}</strong>
                    <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                  </div>
                </li>
                <li>
                  <span className="icon">🐱</span>
                  <div className="detail">
                    <strong>GitHub</strong>
                    <a href={`https://github.com/${personal.social.github}`} target="_blank" rel="noopener noreferrer">
                      github.com/{personal.social.github}
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon">💼</span>
                  <div className="detail">
                    <strong>LinkedIn</strong>
                    <a href={`https://linkedin.com/in/${personal.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/{personal.social.linkedin}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="panel">
              <h3 style={{ marginBottom: '1.25rem' }}>{t('Envíame un mensaje', 'Send me a message')}</h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">{t('Nombre', 'Name')}</label>
                  <input type="text" name="from_name" className="input" required />
                </div>
                <div className="field">
                  <label className="label">{t('Email', 'Email')}</label>
                  <input type="email" name="from_email" className="input" required />
                </div>
                <div className="field">
                  <label className="label">{t('Mensaje', 'Message')}</label>
                  <textarea name="message" className="textarea" required></textarea>
                </div>
                <button type="submit" className="btn" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' 
                    ? t('Enviando...', 'Sending...') 
                    : t('Enviar mensaje', 'Send message')}
                </button>
                {formStatus === 'success' && (
                  <div className="alert success" style={{ marginTop: '1rem' }}>
                    {t('¡Mensaje enviado con éxito!', 'Message sent successfully!')}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="alert error" style={{ marginTop: '1rem' }}>
                    {t('Error al enviar el mensaje. Intenta de nuevo.', 'Error sending message. Try again.')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#64748b', fontSize: '0.85rem' }}>
          <p>© 2025 {personal.name} — {t('Hecho con', 'Built with')} ▲ Next.js</p>
        </footer>
      </div>
    </>
  )
}
