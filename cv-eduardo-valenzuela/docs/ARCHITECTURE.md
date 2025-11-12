# 🏗️ Arquitectura del Proyecto

> Documentación técnica sobre las decisiones de arquitectura, patrones de diseño y estructura del proyecto.

## 📋 Tabla de Contenidos

- [Visión General](#visión-general)
- [Principios de Diseño](#principios-de-diseño)
- [Estructura de Directorios](#estructura-de-directorios)
- [Flujo de Datos](#flujo-de-datos)
- [Sistema de Framework Switching](#sistema-de-framework-switching)
- [Gestión de Estado](#gestión-de-estado)
- [Decisiones Técnicas](#decisiones-técnicas)

---

## 🎯 Visión General

Este proyecto implementa un **CV interactivo multi-framework** donde la misma información y diseño pueden ser visualizados en diferentes tecnologías web (React, Vue, Vanilla JS, Angular).

### Objetivos Arquitectónicos

1. **Separación de Concerns**: Data, lógica y presentación completamente separados
2. **Reusabilidad**: Un solo `cv-data.json` alimenta todas las versiones
3. **Escalabilidad**: Agregar nuevos frameworks es trivial
4. **Mantenibilidad**: Cambios en un lugar se propagan a todos
5. **Performance**: Builds separados, sin código innecesario
6. **Developer Experience**: Documentación clara y estructura predecible

---

## 🧱 Principios de Diseño

### 1. **Single Source of Truth (SSOT)**

```
shared/data/cv-data.json → Todas las versiones
```

**Beneficios:**
- ✅ Actualizar info una sola vez
- ✅ Consistencia garantizada
- ✅ Fácil de mantener
- ✅ Testeable

### 2. **Design Tokens Centralizados**

```
shared/styles/design-tokens.json → Todas las versiones
```

**Contiene:**
- Paleta de colores (light/dark)
- Tipografía
- Espaciados
- Breakpoints
- Sombras y efectos

### 3. **Framework Agnostic Core**

Cada framework implementa los mismos componentes/vistas:
- `Header` / `Hero`
- `About`
- `Experience`
- `Projects`
- `Skills`
- `Contact`

**Mismo diseño, diferente implementación.**

### 4. **Progressive Enhancement**

```
Vanilla JS → Funcionalidad básica
React/Vue/Angular → Experiencia mejorada
```

---

## 📁 Estructura de Directorios

```
cv-eduardo-valenzuela/
│
├── 📦 shared/                          # Recursos compartidos
│   ├── data/
│   │   └── cv-data.json               # [SSOT] Toda tu información
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.jpg
│   │   │   └── projects/
│   │   └── docs/
│   │       └── cv-eduardo-valenzuela.pdf
│   └── styles/
│       └── design-tokens.json         # [SSOT] Variables de diseño
│
├── ⚛️ frameworks/                      # Implementaciones
│   │
│   ├── react/                         # React + Vite + Tailwind
│   │   ├── src/
│   │   │   ├── components/           # Componentes reutilizables
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header.jsx
│   │   │   │   │   ├── Footer.jsx
│   │   │   │   │   └── FrameworkSwitcher.jsx
│   │   │   │   └── sections/
│   │   │   │       ├── Hero.jsx
│   │   │   │       ├── About.jsx
│   │   │   │       ├── Experience.jsx
│   │   │   │       ├── Projects.jsx
│   │   │   │       ├── Skills.jsx
│   │   │   │       └── Contact.jsx
│   │   │   ├── contexts/             # React Context
│   │   │   │   └── ThemeContext.jsx
│   │   │   ├── hooks/                # Custom hooks
│   │   │   │   ├── useTheme.js
│   │   │   │   ├── useCVData.js
│   │   │   │   └── useFrameworkSwitch.js
│   │   │   ├── utils/                # Utilidades
│   │   │   │   ├── dataLoader.js
│   │   │   │   └── stateManager.js
│   │   │   ├── App.jsx
│   │   │   └── main.jsx
│   │   ├── public/
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── tailwind.config.js
│   │   └── README.md
│   │
│   ├── vue/                           # Vue 3 + Vite + Tailwind
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── composables/          # Composition API
│   │   │   ├── utils/
│   │   │   ├── App.vue
│   │   │   └── main.js
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   ├── vanilla/                       # HTML/CSS/JS puro
│   │   ├── index.html
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   ├── components.js
│   │   │   └── utils.js
│   │   └── styles/
│   │       └── main.css
│   │
│   └── angular/                       # Angular (futuro)
│       └── (estructura Angular estándar)
│
├── 🎛️ switcher/                        # Landing page
│   ├── index.html                     # Selector de framework
│   ├── styles.css
│   └── framework-loader.js
│
├── 📄 docs/                            # Documentación + Build
│   ├── ARCHITECTURE.md                # Este archivo
│   ├── CODING_STANDARDS.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── AI_CONTEXT.md
│   └── (builds para GitHub Pages)
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # CI/CD
│
├── .gitignore
├── README.md
└── package.json                       # Scripts del monorepo
```

---

## 🔄 Flujo de Datos

### 1. Carga Inicial

```
Usuario → switcher/index.html
         ↓
    Elige Framework (React/Vue/etc)
         ↓
    Guarda en localStorage
         ↓
    Redirige a /frameworks/{framework}/
```

### 2. Dentro de Cada Framework

```
main.js/jsx
    ↓
utils/dataLoader.js
    ↓
fetch('../../../shared/data/cv-data.json')
    ↓
Parse y validación
    ↓
Context/Store (React Context / Vue Provide/Inject)
    ↓
Componentes consumen data
```

### 3. Cambio de Framework

```
Usuario clickea FrameworkSwitcher
    ↓
utils/stateManager.js
    ↓
Guarda estado actual:
  - darkMode: boolean
  - scrollPosition: number
  - preferredFramework: string
    ↓
localStorage.setItem('appState', JSON.stringify(state))
    ↓
window.location.href = `/frameworks/{newFramework}/`
    ↓
Nuevo framework carga
    ↓
Lee localStorage
    ↓
Restaura estado (dark mode, scroll, etc)
```

---

## 🔀 Sistema de Framework Switching

### Componentes Clave

#### 1. `FrameworkSwitcher.jsx` (React)

```jsx
// frameworks/react/src/components/layout/FrameworkSwitcher.jsx

const FrameworkSwitcher = () => {
  const frameworks = ['react', 'vue', 'vanilla', 'angular'];
  const current = 'react';
  
  const handleSwitch = (newFramework) => {
    // Guardar estado
    saveAppState({
      darkMode: isDarkMode,
      scrollPosition: window.scrollY,
      timestamp: Date.now()
    });
    
    // Cambiar framework
    window.location.href = `/frameworks/${newFramework}/`;
  };
  
  return (/* UI */);
};
```

#### 2. `stateManager.js` (Compartido)

```javascript
// Guardado en shared/utils/ o copiado a cada framework

export const saveAppState = (state) => {
  localStorage.setItem('cv-app-state', JSON.stringify(state));
};

export const loadAppState = () => {
  const state = localStorage.getItem('cv-app-state');
  return state ? JSON.parse(state) : null;
};

export const clearAppState = () => {
  localStorage.removeItem('cv-app-state');
};
```

#### 3. Inicialización en cada framework

```javascript
// En main.jsx de React, main.js de Vue, etc.

import { loadAppState } from './utils/stateManager';

const savedState = loadAppState();

if (savedState) {
  // Restaurar dark mode
  if (savedState.darkMode) {
    document.documentElement.classList.add('dark');
  }
  
  // Restaurar scroll position (después del render)
  setTimeout(() => {
    window.scrollTo(0, savedState.scrollPosition);
  }, 100);
}
```

---

## 🎨 Gestión de Estado

### React

**Usa Context API:**

```jsx
// contexts/ThemeContext.jsx
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  // ... lógica
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumo con hook
const { isDark, toggleTheme } = useTheme();
```

### Vue

**Usa Provide/Inject:**

```javascript
// App.vue
import { provide, ref } from 'vue';

const isDark = ref(false);
provide('theme', { isDark, toggleTheme });

// Componentes hijos
const { isDark, toggleTheme } = inject('theme');
```

### Vanilla JS

**Usa Event Emitter pattern:**

```javascript
// utils/eventBus.js
class EventBus {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) { /* ... */ }
  emit(event, data) { /* ... */ }
}

export const eventBus = new EventBus();

// Uso
eventBus.on('theme-changed', (isDark) => {
  updateUI(isDark);
});
```

---

## 🎯 Decisiones Técnicas

### ¿Por qué Vite?

- ⚡ Extremadamente rápido (HMR instantáneo)
- 🔧 Configuración mínima
- 📦 Tree-shaking automático
- 🌐 Soporte multi-framework

### ¿Por qué Tailwind CSS?

- 🎨 Consistencia visual garantizada
- 📱 Responsive utilities
- 🌙 Dark mode built-in
- 🔧 Configuración compartida posible

### ¿Por qué JSON para data?

- ✅ Fácil de editar
- ✅ Versionable en Git
- ✅ Validable (JSON Schema)
- ✅ Universal (todos los frameworks lo leen)

### ¿Por qué builds separados?

- 🚀 Performance: cada framework solo carga lo necesario
- 📦 Tamaño: no hay código muerto
- 🐛 Debugging: errores aislados
- 🔄 Deploy: puedes deployar solo lo que cambió

### ¿Por qué no un monorepo tool (Nx/Turborepo)?

**Fase 1**: Simplicidad y aprendizaje
**Fase 2** (futuro): Considerar migración si el proyecto crece

---

## 🚀 Escalabilidad

### Agregar un nuevo framework (ej: Svelte)

```bash
# 1. Crear carpeta
mkdir -p frameworks/svelte

# 2. Init Svelte project
cd frameworks/svelte
npm create vite@latest . -- --template svelte

# 3. Implementar componentes usando cv-data.json

# 4. Agregar al switcher
# Editar: switcher/index.html y agregar botón

# 5. Build
npm run build

# 6. Deploy
```

**Tiempo estimado: 3-4 horas** (si conoces Svelte)

---

## 📊 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────┐
│              USUARIO / BROWSER                   │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│         switcher/index.html (Landing)            │
│  [⚛️ React] [💚 Vue] [📜 Vanilla] [🅰️ Angular]  │
└────────┬────────────────────────────────────────┘
         │
         ├─────► frameworks/react/
         │           ↓
         │       Carga shared/data/cv-data.json
         │           ↓
         │       Renderiza con React
         │
         ├─────► frameworks/vue/
         │           ↓
         │       Carga shared/data/cv-data.json
         │           ↓
         │       Renderiza con Vue
         │
         └─────► frameworks/vanilla/
                     ↓
                 Carga shared/data/cv-data.json
                     ↓
                 Renderiza con JS puro
```

---

## 🔐 Seguridad

- ✅ No hay backend, no hay vulnerabilidades de servidor
- ✅ Data estática (JSON), no hay inyección SQL
- ✅ CSP headers en GitHub Pages
- ✅ HTTPS por defecto

---

## 📈 Performance

### Métricas Objetivo

- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Bundle size (React): <150KB gzipped

### Optimizaciones

- ✅ Code splitting
- ✅ Lazy loading de imágenes
- ✅ Minificación automática (Vite)
- ✅ Builds separados por framework
- ✅ CDN via GitHub Pages

---

## 🧪 Testing Strategy

### Fase 1 (MVP)
- Manual testing
- Visual regression

### Fase 2 (Futuro)
- Unit tests (Vitest)
- E2E tests (Playwright)
- Visual tests (Chromatic)

---

## 🔄 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml

1. Trigger: Push a main
2. Install dependencies
3. Build todos los frameworks
4. Run tests
5. Deploy a GitHub Pages
6. Notify (optional)
```

---

## 📚 Referencias

- [Vite Documentation](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Vue 3 Docs](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

---

**Última actualización**: 2025-11-11  
**Versión**: 1.0.0  
**Autor**: Eduardo Valenzuela
