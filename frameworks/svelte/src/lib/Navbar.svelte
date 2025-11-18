<script>
  // Legacy mode: use export let
  export let currentLang = 'es';
  export let theme = 'dark';
  export let onChangeLang = () => {};
  export let onToggleTheme = () => {};
</script>

<nav class:light={theme === 'light'}>
  <!-- Fila 1: menú de secciones + toggles -->
  <div class="inner">
    <div class="badges">
      <a href="#about">{currentLang === 'es' ? '👤 Sobre mí' : '👤 About'}</a>
      <a href="#services">{currentLang === 'es' ? '🚀 Servicios' : '🚀 Services'}</a>
      <a href="#experience">{currentLang === 'es' ? '💼 Experiencia' : '💼 Experience'}</a>
      <a href="#projects">{currentLang === 'es' ? '🎨 Proyectos' : '🎨 Projects'}</a>
      <a href="#skills">{currentLang === 'es' ? '⚡ Habilidades' : '⚡ Skills'}</a>
      <a href="#contact">{currentLang === 'es' ? '📧 Contacto' : '📧 Contact'}</a>
    </div>
    <div class="badges">
      <button 
        class="theme-toggle" 
        onclick={onToggleTheme}
        title={currentLang === 'es' ? 'Cambiar tema' : 'Toggle theme'}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <div class="lang-toggle">
        <button 
          class:active={currentLang === 'es'}
          onclick={() => onChangeLang('es')}
        >ES</button>
        <button 
          class:active={currentLang === 'en'}
          onclick={() => onChangeLang('en')}
        >EN</button>
      </div>
    </div>
  </div>

  <!-- Fila 2: switcher de frameworks -->
  <div class="inner frameworks">
    <div class="badges">
      <a href="/" title="React version" class="badge">⚛️ <span class="hide-sm">React</span></a>
      <a href="/astro/" title="Astro version" class="badge">🪐 <span class="hide-sm">Astro</span></a>
      <a href="/vue/" title="Vue version" class="badge">💚 <span class="hide-sm">Vue</span></a>
      <a href="/svelte/" title="Svelte version" class="badge active">🧡 <span class="hide-sm">Svelte</span></a>
      <a href="/solid/" title="Solid version" class="badge">🔷 <span class="hide-sm">Solid</span></a>
      <a href="/vanilla/" title="Vanilla version" class="badge">⚡ <span class="hide-sm">Vanilla</span></a>
      <a href="/lab/" title="Sobre este proyecto" class="badge">🧪 <span class="hide-sm">Lab</span></a>
    </div>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    background: rgba(15, 23, 42, 0.9);
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  nav.light {
    background: rgba(255, 255, 255, 0.95);
    border-bottom-color: rgba(203, 213, 225, 0.5);
  }

  .inner {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
  }

  .inner.frameworks {
    border-top: 1px solid rgba(148, 163, 184, 0.2);
  }

  nav a {
    color: #cbd5e1;
    text-decoration: none;
    padding: 0.4rem 0.7rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    transition: background 0.15s, transform 0.15s;
    white-space: nowrap;
  }

  nav.light a {
    color: #475569;
  }

  nav a:hover {
    background: rgba(148, 163, 184, 0.15);
    text-decoration: none;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
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
  }

  .badge.active {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
  }

  nav.light .badge {
    background: #e2e8f0;
    border-color: rgba(148, 163, 184, 0.3);
    color: #334155;
  }

  .badge:hover {
    background: #334155;
  }

  nav.light .badge:hover {
    background: #cbd5e1;
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

  .hide-sm { display: none; }
  @media (min-width: 640px) { .hide-sm { display: inline; } }
</style>
