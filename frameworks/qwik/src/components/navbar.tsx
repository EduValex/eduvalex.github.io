import { component$, useSignal, $, useStyles$ } from '@builder.io/qwik';
import styles from './navbar.css?inline';

interface NavbarProps {
  currentLang: string;
  theme: string;
  onChangeLang$: (lang: string) => void;
  onToggleTheme$: () => void;
}

export default component$<NavbarProps>(({ currentLang, theme, onChangeLang$, onToggleTheme$ }) => {
  useStyles$(styles);
  
  return (
    <nav class={theme === 'light' ? 'light' : ''}>
      {/* Fila 1: menú de secciones + toggles */}
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
            onClick$={onToggleTheme$}
            title={currentLang === 'es' ? 'Cambiar tema' : 'Toggle theme'}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <div class="lang-toggle">
            <button 
              class={currentLang === 'es' ? 'active' : ''}
              onClick$={() => onChangeLang$('es')}
            >ES</button>
            <button 
              class={currentLang === 'en' ? 'active' : ''}
              onClick$={() => onChangeLang$('en')}
            >EN</button>
          </div>
        </div>
      </div>

      {/* Fila 2: switcher de frameworks */}
      <div class="inner frameworks">
        <div class="badges">
          <a href="/" title="React version" class="badge">⚛️ <span class="hide-sm">React</span></a>
          <a href="/astro/" title="Astro version" class="badge">🪐 <span class="hide-sm">Astro</span></a>
          <a href="/vue/" title="Vue version" class="badge">💚 <span class="hide-sm">Vue</span></a>
          <a href="/qwik/" title="Qwik version" class="badge active">⚡ <span class="hide-sm">Qwik</span></a>
          <a href="/solid/" title="Solid version" class="badge">🔷 <span class="hide-sm">Solid</span></a>
          <a href="/vanilla/" title="Vanilla version" class="badge">⚙️ <span class="hide-sm">Vanilla</span></a>
          <a href="/lab/" title="Sobre este proyecto" class="badge">🧪 <span class="hide-sm">Lab</span></a>
        </div>
      </div>
    </nav>
  );
});
