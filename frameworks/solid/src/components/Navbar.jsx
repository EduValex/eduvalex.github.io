import './Navbar.css';

function Navbar(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav classList={{ light: props.theme === 'light' }}>
      <div class="inner">
        {/* FILA 1: Menu principal */}
        <div class="menu-row">
          <button class="logo-btn" onClick={scrollToTop}>
            👨‍💻
          </button>
          <div class="menu-links">
            <a href="#about"><span class="icon">👤</span><span>{props.currentLang === 'es' ? 'Sobre mí' : 'About'}</span></a>
            <a href="#services"><span class="icon">🚀</span><span>{props.currentLang === 'es' ? 'Servicios' : 'Services'}</span></a>
            <a href="#experience"><span class="icon">💼</span><span>{props.currentLang === 'es' ? 'Experiencia' : 'Experience'}</span></a>
            <a href="#education"><span class="icon">🎓</span><span>{props.currentLang === 'es' ? 'Educación' : 'Education'}</span></a>
            <a href="#projects"><span class="icon">🎨</span><span>{props.currentLang === 'es' ? 'Proyectos' : 'Projects'}</span></a>
            <a href="#skills"><span class="icon">⚡</span><span>{props.currentLang === 'es' ? 'Habilidades' : 'Skills'}</span></a>
            <a href="#contact"><span class="icon">📧</span><span>{props.currentLang === 'es' ? 'Contacto' : 'Contact'}</span></a>
          </div>
          <div class="controls">
            <button 
              class="theme-toggle" 
              onClick={props.onToggleTheme}
              title={props.currentLang === 'es' ? 'Cambiar tema' : 'Toggle theme'}
            >
              {props.theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <div class="lang-toggle">
              <button 
                classList={{ active: props.currentLang === 'es' }}
                onClick={() => props.onChangeLang('es')}
              >
                ES
              </button>
              <button 
                classList={{ active: props.currentLang === 'en' }}
                onClick={() => props.onChangeLang('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* FILA 2: Framework switcher */}
        <div class="frameworks-row">
          <a href="/" title="React version">⚛️ <span class="hidden-mobile">React</span></a>
          <a href="/astro/" title="Astro version">🪐 <span class="hidden-mobile">Astro</span></a>
          <a href="/vue/" title="Vue version">💚 <span class="hidden-mobile">Vue</span></a>
          <a href="/solid/" title="Solid version" class="active">🔷 <span class="hidden-mobile">Solid</span></a>
          <a href="/vanilla/" title="Vanilla JS version">⚡ <span class="hidden-mobile">Vanilla</span></a>
          <a href="/next/" title="Next.js version">▲ <span class="hidden-mobile">Next.js</span></a>
          <a href="/lab/" title="Sobre este proyecto">🧪 <span class="hidden-mobile">Lab</span></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
