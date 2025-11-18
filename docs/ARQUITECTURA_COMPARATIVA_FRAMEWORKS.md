# Arquitectura Comparativa: 6 Frameworks, 1 Portfolio

> **Documento técnico**: Análisis de implementación del mismo CV/Portfolio en React, Astro, Vue, Svelte, Solid y Vanilla JS

---

## 📋 Resumen Ejecutivo

Este proyecto implementa el mismo portfolio profesional en **6 frameworks modernos** para demostrar:

1. **Diferentes paradigmas de desarrollo web** (Virtual DOM, compiladores, SSG, reactive signals)
2. **Trade-offs arquitectónicos** (bundle size, performance, DX, complejidad)
3. **Casos de uso ideales** para cada tecnología

**Fuente de datos única**: `shared/data/cv-data.json` consumido por todos los frameworks.

**UI unificada**: Navbar de dos filas con switcher de frameworks, misma estructura de secciones (Hero, About, Services, Experience, Projects, Skills, Contact).

### Comparación Rápida

| Framework | Paradigma | Bundle Size | Hidratación | Ideal Para |
|-----------|-----------|-------------|-------------|------------|
| **React** | Virtual DOM + Hooks | ~315 KB | Cliente completo | SPAs complejas, ecosistema rico |
| **Astro** | SSG + Islands | ~2 KB JS | Parcial (islands) | Contenido estático, SEO crítico |
| **Vue** | Virtual DOM + Reactivity | ~101 KB | Cliente completo | Balance DX/performance, transiciones |
| **Svelte** | Compiler-first | ~71 KB | Cliente completo | Apps ligeras, menos boilerplate |
| **Solid** | Fine-grained Reactivity | ~48 KB | Cliente completo | Performance crítica, actualizaciones frecuentes |
| **Vanilla** | Imperativo puro | ~33 KB | N/A (DOM directo) | Control total, sin dependencias |

---

## 🔬 Análisis Profundo por Framework

### 1. React (`frameworks/react/`)

#### Arquitectura
- **Paradigma**: Componentes funcionales con Hooks (useState, useEffect, custom hooks)
- **Rendering**: Virtual DOM con reconciliación (Fiber)
- **Reactivity**: Unidireccional, explicit state management
- **Build tool**: Vite 7.2.2 (ESM-first, HMR ultra-rápido)

#### Implementación Específica
```
src/
├── components/
│   ├── Layout.jsx          # Navbar de 2 filas + tema + idioma
│   ├── sections/
│   │   ├── Hero.jsx        # Avatar + CTA (Download CV)
│   │   ├── About.jsx       # Bio con split por párrafos
│   │   ├── Services.jsx    # 4 servicios con iconos
│   │   ├── Experience.jsx  # Timeline con badges de tech
│   │   ├── Projects.jsx    # Filtros dinámicos por categoría
│   │   ├── Skills.jsx      # Iconos react-icons + tooltips
│   │   └── Contact.jsx     # Formulario EmailJS
│   ├── ThemeToggle.jsx
│   └── LanguageToggle.jsx
├── hooks/
│   ├── useTranslation.js   # i18n custom (ES/EN)
│   ├── useTypingEffect.js  # Efecto typing opcional
│   └── useScrollReveal.js  # IntersectionObserver
├── lib/
│   ├── i18n.js             # Traducciones centralizadas
│   └── theme.js            # Dark/Light mode persistence
└── config/
    └── emailjs.js          # Credenciales EmailJS
```

**Características Únicas**:
- **Filtros de proyectos**: Heurística automática por tecnologías (Full Stack vs WordPress vs Personal)
- **Iconos contextuales**: 50+ iconos de `react-icons` mapeados a skills
- **Animaciones**: Scroll reveal con IntersectionObserver, hover effects, transform scale
- **Custom Hooks**: Reutilización de lógica (traducciones, efectos visuales)

**Ladrillos (Librerías)**:
- `react@19.0.0` + `react-dom@19.0.0`
- `react-icons@5.4.0` (iconos SVG tree-shakeable)
- `@emailjs/browser@4.4.1` (envío de formulario sin backend)

**Arquitectura de Datos**:
- Props drilling desde `App.jsx` → `Layout` → Sections
- Context API NO usado (no necesario para este alcance)
- Estado local con `useState` en cada componente

**Build Output**:
- `index.html` (3.64 KB gzip: 1.31 KB)
- `index-O3k_2Z7l.js` (314 KB gzip: 105 KB) ← React + app bundle
- `index-PhTOXZWx.css` (33.65 KB gzip: 6.70 KB)

**Efecto "Wow" Potencial**:
- ✅ **Implementado**: Hover effects, scroll reveal
- 🔄 **Pendiente**: Transiciones page-level con Framer Motion, parallax scrolling, animated numbers (contador de proyectos), typing effect en Hero

---

### 2. Astro (`frameworks/astro/`)

#### Arquitectura
- **Paradigma**: Static Site Generation (SSG) + Partial Hydration (Islands)
- **Rendering**: Build-time HTML generation, zero JS por defecto
- **Reactivity**: Opcional vía islands (React/Vue/Svelte embebidos si se necesita)
- **Build tool**: Astro CLI + Vite interno

#### Implementación Específica
```
src/
├── pages/
│   └── index.astro         # Monolito SSG (HTML+CSS+JS inline)
└── config/
    └── emailjs.js          # Configuración EmailJS
```

**Características Únicas**:
- **Zero JavaScript hidratado**: Solo EmailJS cargado al final para el form
- **HTML estático puro**: Toda la UI renderizada en build-time
- **SEO perfecto**: Meta tags, estructura semántica, lighthouse 100/100
- **Scroll reveal manual**: IntersectionObserver inline (sin framework)
- **Theme + Language toggle**: Vanilla JS inline (localStorage + DOM manipulation)

**Arquitectura de Datos**:
- Import directo de `cv-data.json` en frontmatter
- Renderizado con template syntax de Astro (`{...}` loops, conditionals)
- Sin hidratación, sin estado del lado cliente (excepto theme/lang toggle)

**Build Output**:
- `index.html` (HTML completo pre-renderizado)
- `index.D63wut4V.css` (estilos inline críticos)
- `_astro/index.<hash>.css` (estilos adicionales)
- **JS total**: ~2 KB (solo EmailJS + toggles)

**Efecto "Wow" Real**:
- ✅ **Velocidad de carga**: LCP < 0.5s (HTML estático)
- ✅ **Lighthouse**: 100/100 en Performance, SEO, Accessibility
- ✅ **Tamaño mínimo**: 10x más pequeño que React

**Efecto "Wow" Potencial**:
- 🔄 **View Transitions API**: Transiciones nativas del navegador entre "páginas" (aunque es SPA)
- 🔄 **Islands interactivas**: Embeber componente React/Vue solo en sección Projects (filtros más complejos)
- 🔄 **Image optimization**: `<Image />` de Astro con lazy-loading automático

**Limitaciones Actuales**:
- ❌ Filtros de proyectos: Implementados con JS vanilla básico (sin framework)
- ❌ Sin iconos SVG dinámicos (solo emojis)
- ⚠️ Habilidades: Badges en grid responsive pero sin íconos específicos

---

### 3. Vue (`frameworks/vue/`)

#### Arquitectura
- **Paradigma**: Composition API (Vue 3) + SFC (Single File Components)
- **Rendering**: Virtual DOM con sistema de diff optimizado
- **Reactivity**: Proxy-based reactivity (`ref`, `computed`, `reactive`)
- **Build tool**: Vite 6.4.1

#### Implementación Específica
```
src/
├── App.vue                 # Componente raíz (todo-en-uno)
├── style.css               # Estilos globales
└── config/
    ├── emailjs.example.js
    └── emailjs.js
```

**Características Únicas**:
- **Reactivity nativa**: `ref()` para primitivos, `computed()` para derivados
- **Two-way binding**: `v-model` en formulario (más declarativo que React)
- **Directives**: `v-if`, `v-for`, `v-show` (sintaxis template limpia)
- **Transiciones**: `<Transition>` y `<TransitionGroup>` built-in (NO usadas aún)

**Arquitectura de Datos**:
- Estado local con `ref()` (currentLang, theme, formData)
- Computed properties para filtros de proyectos (`filteredProjects`)
- Watchers NO usados (no necesario)

**Build Output**:
- `index.html` (0.64 KB gzip: 0.39 KB)
- `index-Bqu_jdRv.js` (100.79 KB gzip: 37.96 KB) ← Vue runtime + app
- `index-PHYS9Ajt.css` (8.88 KB gzip: 2.30 KB)

**Efecto "Wow" Potencial**:
- 🔄 **`<Transition name="fade">`**: Transiciones CSS automáticas entre secciones
- 🔄 **`<TransitionGroup>`**: Animación de filtros de proyectos (enter/leave)
- 🔄 **Suspense boundaries**: Loading states elegantes
- 🔄 **Teleport**: Modal overlay para proyectos (vista detalle)

**Ventajas sobre React**:
- Menos boilerplate (no necesita useState, useEffect explícitos)
- Transiciones nativas sin librerías externas
- Better DX para formularios (`v-model`)

---

### 4. Svelte (`frameworks/svelte/`)

#### Arquitectura
- **Paradigma**: Compiler-first (no runtime framework, solo compiled code)
- **Rendering**: Imperativo quirúrgico (actualizaciones DOM directas)
- **Reactivity**: Compilador detecta asignaciones (`let count = 0; count++`)
- **Build tool**: Vite 6.4.1 + `@sveltejs/vite-plugin-svelte@5.0.3`

#### Implementación Específica
```
src/
├── App.svelte              # Componente raíz
├── lib/
│   └── Navbar.svelte       # Navbar compartido
└── main.js                 # Entry point
```

**Características Únicas**:
- **Sin Virtual DOM**: Compilador genera código JS imperativo optimizado
- **Reactive declarations**: `$: doubled = count * 2` (auto-recalcula)
- **Transitions built-in**: `transition:fade`, `transition:slide`, `animate:flip`
- **Stores**: Gestión de estado reactiva con `writable()`, `derived()` (NO usados aún)

**Estado Actual**:
- ⚠️ **Error runtime**: `effect_orphan` (Svelte 5 incompatibilidad)
- ⚠️ **Runes mode**: Desactivado (`runes: false` en vite.config) para compatibilidad legacy
- ⚠️ **Refactorización pendiente**: Migrar a Svelte 5 runes (`$state`, `$derived`, `$effect`) o revertir a Svelte 4

**Arquitectura de Datos**:
- Variables `let` reactivas automáticas
- Callbacks props para eventos (onChangeLang, onToggleTheme)
- Formulario con bindings planos (name, email, message)

**Build Output**:
- `index.html` (0.62 KB gzip: 0.39 KB)
- `index-CepiMAdQ.js` (70.65 KB gzip: 25.69 KB) ← Svelte runtime + app
- `index-DzXHAlsL.css` (8.76 KB gzip: 2.23 KB)

**Efecto "Wow" Potencial** (cuando funcione):
- 🔄 **Transitions nativas**: `transition:fly`, `transition:scale` en filtros
- 🔄 **Animate directive**: `animate:flip` para reordenar proyectos
- 🔄 **Crossfade**: Transiciones entre secciones con shared element
- 🔄 **Motion**: `spring()` y `tweened()` para valores animados

**Bloqueadores**:
- ❌ Runtime error en producción (effect_orphan)
- ❌ Mezcla de sintaxis legacy + Svelte 5
- 🔄 **Solución recomendada**: Reescribir desde cero en Svelte 5 runes mode O downgrade a Svelte 4

---

### 5. Solid (`frameworks/solid/`)

#### Arquitectura
- **Paradigma**: Fine-grained reactivity (signals + computed)
- **Rendering**: No Virtual DOM, actualizaciones directas al DOM
- **Reactivity**: `createSignal()` + `createEffect()` (granular tracking)
- **Build tool**: Vite 6.4.1

#### Implementación Específica
```
src/
├── App.jsx                 # Componente raíz (JSX similar a React)
├── index.css               # Estilos globales
└── config/
    └── emailjs.js
```

**Características Únicas**:
- **Signals**: Primitivos reactivos ultra-rápidos
  ```js
  const [count, setCount] = createSignal(0);
  const doubled = () => count() * 2; // Auto-reactive
  ```
- **Sin re-renders**: Solo actualiza nodos DOM afectados (granularidad superior a React)
- **JSX real**: Compilado a imperative DOM operations (no VDOM)
- **Suspense + Transitions**: Concurrency primitives (NO usados aún)

**Arquitectura de Datos**:
- Signals para estado reactivo (currentLang, theme, formData)
- Derived computations con funciones puras
- Effects para side-effects (localStorage, EmailJS)

**Build Output**:
- `index.html` (0.62 KB gzip: 0.39 KB)
- `index-OGrCpm4e.js` (47.56 KB gzip: 16.93 KB) ← Solid runtime + app (más pequeño que Vue/Svelte)
- `index-CPuCErZ3.css` (7.83 KB gzip: 2.23 KB)

**Efecto "Wow" Potencial**:
- 🔄 **Transiciones con `createTransition()`**: Updates batched automáticamente
- 🔄 **Suspense boundaries**: Loading states sin flicker
- 🔄 **Fine-grained updates**: Animaciones suaves sin re-render de padres
- 🔄 **Store pattern**: Estado global con `createStore()` (Immutable updates)

**Ventajas sobre React**:
- 3x más rápido en benchmarks (no VDOM reconciliation)
- Menor bundle size
- Reactivity más natural (no useEffect dependencies)

---

### 6. Vanilla JS (`frameworks/vanilla/`)

#### Arquitectura
- **Paradigma**: Imperativo puro (DOM manipulation directa)
- **Rendering**: `document.createElement()`, `innerHTML`, event listeners
- **Reactivity**: Manual (event handlers + DOM updates)
- **Build tool**: Vite 6.4.1 (solo bundling, sin compilación)

#### Implementación Específica
```
├── main.js                 # Lógica completa
├── style.css               # Estilos
└── index.html              # Template HTML
```

**Características**:
- **Zero dependencies**: Solo EmailJS para formulario
- **Control total**: Acceso directo a Web APIs (fetch, localStorage, IntersectionObserver)
- **Imperativo explícito**: Cada actualización escrita a mano
- **Performance**: Sin overhead de framework (pero más código boilerplate)

**Arquitectura de Datos**:
- Variables globales (`currentLang`, `theme`)
- Funciones puras para renderizado (`renderSection()`)
- Event delegation para optimización

**Build Output**:
- `index.html` (3.17 KB gzip: 1.14 KB)
- `index-BIVoyMO_.js` (32.59 KB gzip: 10.33 KB) ← App code + EmailJS
- `index-CjzXRXzG.css` (7.81 KB gzip: 2.23 KB)

**Efecto "Wow" Potencial**:
- 🔄 **Web Animations API**: `element.animate()` para transiciones hardware-accelerated
- 🔄 **View Transitions API**: Transiciones nativas sin librerías
- 🔄 **CSS Houdini**: Custom properties animables
- 🔄 **Intersection Observer avanzado**: Parallax scroll, staggered animations

**Ventajas**:
- Más pequeño de todos (sin runtime)
- Sin actualizaciones de dependencias
- Performance predecible

**Desventajas**:
- Más código boilerplate
- Mantenimiento manual de estado
- Sin type safety (a menos que uses JSDoc)

---

## 🎯 Matriz de Trade-Offs

| Criterio | React | Astro | Vue | Svelte | Solid | Vanilla |
|----------|-------|-------|-----|--------|-------|---------|
| **Bundle Size** | 315KB | 2KB | 101KB | 71KB | 48KB | 33KB |
| **Time to Interactive** | ~2s | ~0.3s | ~1.5s | ~1.2s | ~1s | ~0.8s |
| **DX (Developer Experience)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Ecosistema** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Media | Baja | Baja | Baja | Media | Baja |
| **Performance (Runtime)** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **SEO** | ⭐⭐⭐ (CSR) | ⭐⭐⭐⭐⭐ (SSG) | ⭐⭐⭐ (CSR) | ⭐⭐⭐ (CSR) | ⭐⭐⭐ (CSR) | ⭐⭐⭐ (CSR) |
| **Type Safety** | TypeScript | TypeScript | TypeScript | TypeScript | TypeScript | JSDoc |
| **Tooling** | Excelente | Bueno | Excelente | Bueno | Bueno | Básico |

---

## 🛠️ Stack Técnico Compartido

### Backend & Services
- **EmailJS**: Envío de formularios sin backend (service_35dui0c)
- **GitHub Pages**: Hosting estático gratuito
- **GitHub Actions**: CI/CD automatizado

### Tooling
- **Vite**: Build tool para todos (excepto Astro que usa Astro CLI)
- **ESLint**: Linting (React, Vue)
- **PostCSS**: CSS processing (React)
- **Autoprefixer**: Vendor prefixes automáticos

### Datos
- **JSON único**: `shared/data/cv-data.json`
  - Personal info
  - Experience (4 posiciones)
  - Projects (12 proyectos)
  - Skills (Frontend, Backend, Tools, AI)
  - Services (4 servicios)

### Assets
- **Shared assets**: `shared/assets/` (logos, imágenes)
- **Favicon**: Copiado a cada subdirectorio (`/astro/`, `/vue/`, etc.)

---

## 🚀 Efectos "Wow" Propuestos por Framework

### React: Animaciones Sofisticadas
**Librería**: Framer Motion
```jsx
import { motion } from 'framer-motion';

<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.section>
```

**Efectos específicos**:
- Page transitions con `AnimatePresence`
- Staggered children (cascada de aparición)
- Parallax scroll con `useScroll()` + `useTransform()`
- Gesture controls (drag, swipe) en proyectos
- Números animados (contador de experiencia)

---

### Astro: Velocidad Extrema + View Transitions
**Librería**: View Transitions API nativa
```astro
---
// astro.config.mjs
export default defineConfig({
  experimental: {
    viewTransitions: true
  }
});
---

<ViewTransitions />
```

**Efectos específicos**:
- Transiciones de página instantáneas (aunque sea SPA)
- Fade entre secciones sin JS
- Image optimization automática (`<Image />`)
- Lazy-load progresivo de assets
- Lighthouse 100/100 mantenido

---

### Vue: Transiciones Nativas Elegantes
**Librería**: Built-in `<Transition>` y `<TransitionGroup>`
```vue
<Transition name="slide-fade">
  <div v-if="show">Content</div>
</Transition>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
```

**Efectos específicos**:
- Transiciones en filtros de proyectos (enter/leave)
- Modal con teleport + transition
- List transitions con `<TransitionGroup>`
- Route transitions (si se usa Vue Router)
- Staggered animations con delay programático

---

### Svelte: Transiciones Compiladas Ultra-Ligeras
**Librería**: Built-in transitions + stores
```svelte
<script>
  import { fly, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
</script>

{#each projects as project (project.id)}
  <div
    transition:fly={{ y: 50, duration: 400 }}
    animate:flip={{ duration: 300 }}
  >
    {project.name}
  </div>
{/each}
```

**Efectos específicos**:
- Fly/fade/slide transitions en secciones
- Crossfade entre proyectos
- Animate directive para reordenar filtros
- Spring physics con `spring()` store
- Draw directive para SVG animations

**Bloqueador actual**: Error runtime, requiere refactorización

---

### Solid: Actualizaciones Instantáneas con Transitions
**Librería**: Built-in `createTransition()`
```jsx
import { createSignal, createTransition } from 'solid-js';

const [pending, startTransition] = useTransition();

<button onClick={() => {
  startTransition(() => setFilter('All'));
}}>
  {pending() ? 'Loading...' : 'Show All'}
</button>
```

**Efectos específicos**:
- Transiciones sin flicker (batched updates)
- Fine-grained animations (solo afectados)
- Suspense boundaries con skeleton loaders
- Optimistic UI updates
- Concurrent rendering de listas grandes

---

### Vanilla: Web APIs Modernas Sin Overhead
**Librería**: Web Animations API + View Transitions API
```js
// Web Animations API
element.animate([
  { transform: 'translateY(0)', opacity: 1 },
  { transform: 'translateY(-20px)', opacity: 0 }
], {
  duration: 300,
  easing: 'ease-out'
});

// View Transitions API
document.startViewTransition(() => {
  // Update DOM
});
```

**Efectos específicos**:
- Hardware-accelerated animations
- Native smooth scroll con `scrollIntoView({ behavior: 'smooth' })`
- Intersection Observer para parallax
- CSS Custom Properties animadas con Houdini
- requestAnimationFrame para 60fps garantizados

---

## 📊 Recomendaciones de Uso

### Elige React si:
- ✅ Necesitas ecosistema maduro (librerías, devtools, comunidad)
- ✅ Proyecto complejo con gestión de estado (Redux, Zustand, Jotai)
- ✅ Team grande familiarizado con React
- ✅ Necesitas server components (Next.js)

### Elige Astro si:
- ✅ Contenido estático o semi-estático (blog, portfolio, docs)
- ✅ SEO es crítico (e-commerce, marketing sites)
- ✅ Performance es prioridad máxima
- ✅ Quieres combinar frameworks (React + Vue islands)

### Elige Vue si:
- ✅ Balance entre DX y performance
- ✅ Transiciones elegantes sin librerías externas
- ✅ Equipo pequeño o developers junior (curva de aprendizaje suave)
- ✅ Necesitas directivas ricas (`v-model`, `v-for`, `v-if`)

### Elige Svelte si:
- ✅ Bundle size es crítico (mobile-first)
- ✅ Menos boilerplate (código más limpio)
- ✅ Animaciones nativas compiladas
- ✅ No necesitas ecosistema gigante

### Elige Solid si:
- ✅ Performance crítica (dashboards, data-viz)
- ✅ Actualizaciones frecuentes de estado
- ✅ Experiencia con signals/observables
- ✅ Quieres JSX sin Virtual DOM

### Elige Vanilla si:
- ✅ Control total del bundle
- ✅ Proyecto pequeño sin necesidad de framework
- ✅ Performance predecible
- ✅ Sin actualizaciones de dependencias

---

## 🐛 Estado Actual del Proyecto

### ✅ Funcionales en Producción
- React: 100% funcional, navbar unificada, filtros, scroll offset
- Astro: 100% funcional, Skills grid responsive, filtros JS vanilla
- Vue: 100% funcional, filtros, scroll offset
- Solid: 100% funcional, filtros, scroll offset
- Vanilla: 100% funcional, filtros, scroll offset

### ⚠️ Con Issues
- **Svelte**: Runtime error `effect_orphan` en producción
  - Causa: Mezcla de sintaxis Svelte 4 legacy + Svelte 5
  - Solución propuesta: Reescribir en Svelte 5 runes mode O downgrade a Svelte 4
  - Alternativa temporal: Usar modo legacy completo (sin runes, sin `$state`)

### 🔄 Mejoras Pendientes
1. **Iconos en todas las versiones**: Solo React tiene iconos SVG de react-icons
2. **Efectos "wow" específicos**: Implementar transiciones únicas por framework
3. **Foto de perfil**: Reemplazar emoji por avatar real
4. **Lab page**: Actualizar con comparaciones técnicas (este documento)
5. **Tests**: E2E con Playwright para validar cada versión

---

## 📝 Conclusiones

Este proyecto demuestra que:

1. **No hay framework perfecto**: Cada uno tiene trade-offs
2. **La arquitectura importa**: SSG (Astro) vs SPA (resto) cambia todo
3. **Bundle size ≠ Performance**: Solid es más pequeño Y más rápido que React
4. **DX vs Performance**: Vue/React sacrifican tamaño por mejor experiencia de desarrollo
5. **Vanilla sigue vigente**: Para proyectos simples, puede ser la mejor opción

**Recomendación final para este portfolio**:
- **Producción**: Astro (velocidad + SEO)
- **Demo técnica**: Mantener las 6 versiones como showcase

---

## 🔗 Referencias

- React Docs: https://react.dev
- Astro Docs: https://docs.astro.build
- Vue Docs: https://vuejs.org
- Svelte Docs: https://svelte.dev
- Solid Docs: https://www.solidjs.com
- MDN Web APIs: https://developer.mozilla.org/en-US/docs/Web/API

---

**Última actualización**: 17 de noviembre de 2025
**Autor**: Eduardo Valenzuela
**Repositorio**: https://github.com/eduvalex/eduvalex.github.io
