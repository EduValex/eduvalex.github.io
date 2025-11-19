'use client'

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState<'es' | 'en'>('es')

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const savedLang = localStorage.getItem('lang') as 'es' | 'en' | null
    if (savedTheme) setTheme(savedTheme)
    if (savedLang) setLang(savedLang)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
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
          <h1>{t('Hola, soy', 'Hi, I\'m')} Eduardo Valenzuela Milla</h1>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            {t('Desarrollador Full Stack', 'Full Stack Developer')}
          </p>
          <p>
            {t(
              'Desarrollador Full Stack apasionado por la construcción de soluciones digitales.',
              'Full Stack Developer passionate about building digital solutions.'
            )}
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" className="btn">
              {t('📧 Contactar', '📧 Contact')}
            </a>
            <a href="/CV-Eduardo-Valenzuela.pdf" className="btn secondary" download>
              {t('📄 Descargar CV', '📄 Download CV')}
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="panel">
          <h2>👨‍💻 {t('Sobre mí', 'About Me')}</h2>
          <p>
            {t(
              'Mi trayectoria en tecnología comenzó en la Universidad de La Frontera (UFRO) en Temuco, Chile, donde descubrí mi pasión por convertir ideas en soluciones digitales.',
              'My journey in technology began at Universidad de La Frontera (UFRO) in Temuco, Chile, where I discovered my passion for turning ideas into digital solutions.'
            )}
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="panel">
          <h2>📧 {t('Contacto', 'Contact')}</h2>
          <div className="flex flex-col gap-2">
            <a href="mailto:valenzuela.edo@gmail.com">valenzuela.edo@gmail.com</a>
            <a href="https://github.com/eduvalex">GitHub</a>
            <a href="https://linkedin.com/in/eduardo-valenzuela-milla">LinkedIn</a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#64748b', fontSize: '0.85rem' }}>
          <p>© 2025 Eduardo Valenzuela — {t('Hecho con', 'Built with')} ▲ Next.js</p>
        </footer>
      </div>
    </>
  )
}
