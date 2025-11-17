<script>
  import { createEventDispatcher } from 'svelte';
  
  export let currentLang = 'es';
  export let theme = 'dark';
  
  const dispatch = createEventDispatcher();
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<nav class:light={theme === 'light'}>
  <div class="inner">
    <!-- FILA 1: Menu principal -->
    <div class="menu-row">
      <button class="logo-btn" on:click={scrollToTop}>
        👨‍💻
      </button>
      <div class="menu-links">
        <a href="#about"><span class="icon">👤</span><span>{currentLang === 'es' ? 'Sobre mí' : 'About'}</span></a>
        <a href="#services"><span class="icon">🚀</span><span>{currentLang === 'es' ? 'Servicios' : 'Services'}</span></a>
        <a href="#experience"><span class="icon">💼</span><span>{currentLang === 'es' ? 'Experiencia' : 'Experience'}</span></a>
        <a href="#projects"><span class="icon">🎨</span><span>{currentLang === 'es' ? 'Proyectos' : 'Projects'}</span></a>
        <a href="#skills"><span class="icon">⚡</span><span>{currentLang === 'es' ? 'Habilidades' : 'Skills'}</span></a>
        <a href="#contact"><span class="icon">📧</span><span>{currentLang === 'es' ? 'Contacto' : 'Contact'}</span></a>
      </div>
      <div class="controls">
        <button 
          class="theme-toggle" 
          on:click={() => dispatch('toggleTheme')}
          title={currentLang === 'es' ? 'Cambiar tema' : 'Toggle theme'}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <div class="lang-toggle">
          <button 
            class:active={currentLang === 'es'}
            on:click={() => dispatch('changeLang', 'es')}
          >
            ES
          </button>
          <button 
            class:active={currentLang === 'en'}
            on:click={() => dispatch('changeLang', 'en')}
          >
            EN
          </button>
        </div>
      </div>
    </div>

    <!-- FILA 2: Framework switcher -->
    <div class="frameworks-row">
      <a href="/" title="React version">⚛️ <span class="hidden-mobile">React</span></a>
      <a href="/astro/" title="Astro version">🪐 <span class="hidden-mobile">Astro</span></a>
      <a href="/vue/" title="Vue version">💚 <span class="hidden-mobile">Vue</span></a>
      <a href="/svelte/" title="Svelte version" class="active">🧡 <span class="hidden-mobile">Svelte</span></a>
      <a href="/solid/" title="Solid version">🔷 <span class="hidden-mobile">Solid</span></a>
      <a href="/vanilla/" title="Vanilla JS version">⚡ <span class="hidden-mobile">Vanilla</span></a>
      <a href="/lab/" title="Sobre este proyecto">🧪 <span class="hidden-mobile">Lab</span></a>
    </div>
  </div>
</nav>

<style>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

nav.light {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: rgba(203, 213, 225, 0.5);
}

.inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.menu-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.logo-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s;
}

.logo-btn:hover {
  transform: scale(1.1);
}

.menu-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.menu-links a {
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  transition: all 0.15s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

nav.light .menu-links a {
  color: #475569;
}

.menu-links a:hover {
  background: rgba(148, 163, 184, 0.15);
}

.menu-links a .icon {
  font-size: 1rem;
}

.frameworks-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.frameworks-row::-webkit-scrollbar {
  display: none;
}

.frameworks-row a {
  color: #94a3b8;
  text-decoration: none;
  padding: 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  transition: all 0.2s;
  white-space: nowrap;
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.frameworks-row a:hover {
  background: rgba(148, 163, 184, 0.15);
  border-color: rgba(148, 163, 184, 0.4);
}

.frameworks-row a.active {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lang-toggle {
  background: #1e293b;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 0.5rem;
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
}

nav.light .lang-toggle {
  background: #e2e8f0;
  border-color: rgba(148, 163, 184, 0.4);
}

.lang-toggle button {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 0.35rem 0.75rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
  font-weight: 500;
}

nav.light .lang-toggle button {
  color: #64748b;
}

.lang-toggle button.active {
  background: #3b82f6;
  color: white;
}

.lang-toggle button:hover:not(.active) {
  background: rgba(148, 163, 184, 0.15);
  color: #cbd5e1;
}

nav.light .lang-toggle button:hover:not(.active) {
  background: rgba(148, 163, 184, 0.2);
  color: #334155;
}

.theme-toggle {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 0.5rem;
  padding: 0.35rem 0.6rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.theme-toggle:hover {
  background: rgba(148, 163, 184, 0.15);
  border-color: rgba(148, 163, 184, 0.5);
}

@media (max-width: 640px) {
  .hidden-mobile {
    display: none;
  }
  .menu-links span:not(.icon) {
    display: none;
  }
}
</style>
