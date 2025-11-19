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
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-700 shadow-lg">
        {/* Fila 1: Logo + Menu + Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 border-b border-slate-200 dark:border-slate-700/50">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl hover:scale-110 transition-transform"
            >
              👨‍💻
            </button>
            <div className="hidden md:flex items-center gap-1">
              <a href="#about" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">👤</span>
                <span className="hidden lg:inline">{t('Sobre mí', 'About')}</span>
              </a>
              <a href="#services" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">🚀</span>
                <span className="hidden lg:inline">{t('Servicios', 'Services')}</span>
              </a>
              <a href="#experience" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">💼</span>
                <span className="hidden lg:inline">{t('Experiencia', 'Experience')}</span>
              </a>
              <a href="#projects" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">🎨</span>
                <span className="hidden lg:inline">{t('Proyectos', 'Projects')}</span>
              </a>
              <a href="#skills" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">⚡</span>
                <span className="hidden lg:inline">{t('Habilidades', 'Skills')}</span>
              </a>
              <a href="#contact" className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="mr-1.5">📧</span>
                <span className="hidden lg:inline">{t('Contacto', 'Contact')}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={toggleLang}
                className="px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {lang === 'es' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>
          {/* Fila 2: Framework switcher */}
          <div className="flex items-center justify-center h-10 gap-1 overflow-x-auto scrollbar-hide">
            {frameworks.map((fw) => (
              <a
                key={fw.id}
                href={fw.url}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all hover:scale-105 whitespace-nowrap ${
                  fw.active
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title={`Ver en ${fw.name}`}
              >
                <span className="mr-1">{fw.icon}</span>
                <span className="hidden sm:inline">{fw.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Eduardo Valenzuela Milla
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
            {t('Desarrollador Full Stack', 'Full Stack Developer')}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              'Desarrollador Full Stack apasionado por la construcción de soluciones digitales. Especializado en WordPress, Django, React y más.',
              'Full Stack Developer passionate about building digital solutions. Specialized in WordPress, Django, React and more.'
            )}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {t('Contactar', 'Contact')}
            </a>
            <a
              href="/CV-Eduardo-Valenzuela.pdf"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
              download
            >
              {t('Descargar CV', 'Download CV')}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            👨‍💻 {t('Sobre mí', 'About Me')}
          </h2>
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
            <p>
              {t(
                'Mi trayectoria en tecnología comenzó en la Universidad de La Frontera (UFRO) en Temuco, Chile, donde descubrí mi pasión por convertir ideas en soluciones digitales.',
                'My journey in technology began at Universidad de La Frontera (UFRO) in Temuco, Chile, where I discovered my passion for turning ideas into digital solutions.'
              )}
            </p>
            <p>
              {t(
                'Hoy combino lo mejor de ambos mundos: ayudo a las empresas a crecer digitalmente mientras mantengo mi conexión con el bienestar a través del yoga. Mi enfoque permanece constante: código limpio, soluciones escalables y compromiso genuino con cada proyecto.',
                'Today I combine the best of both worlds: helping businesses grow digitally while maintaining my connection to wellness through yoga. My approach remains constant: clean code, scalable solutions, and genuine commitment to every project.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            📧 {t('Contacto', 'Contact')}
          </h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:valenzuela.edo@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              valenzuela.edo@gmail.com
            </a>
            <a href="https://github.com/eduvalex" className="text-blue-600 dark:text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/eduardo-valenzuela-milla" className="text-blue-600 dark:text-blue-400 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
        <p>© 2025 Eduardo Valenzuela — {t('Hecho con', 'Built with')} ▲ Next.js</p>
      </footer>
    </div>
  )
}
