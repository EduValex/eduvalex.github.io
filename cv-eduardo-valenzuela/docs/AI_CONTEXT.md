# 🤖 AI Context Document

> **IMPORTANTE**: Este documento es para asistentes de IA (como GitHub Copilot, Claude, ChatGPT) que trabajen en este proyecto. Proporciona contexto completo para mantener consistencia y calidad.

## 🎯 Propósito del Proyecto

**CV Eduardo Valenzuela** - Portfolio interactivo multi-framework que demuestra:
1. Dominio de múltiples tecnologías web (React, Vue, Vanilla JS, Angular)
2. Arquitectura de software escalable y mantenible
3. Diseño profesional y experiencia de usuario excepcional

---

## 🧠 Contexto de Arquitectura

### Principio Fundamental: **Single Source of Truth (SSOT)**

```
shared/data/cv-data.json → ÚNICA FUENTE DE INFORMACIÓN
shared/styles/design-tokens.json → ÚNICA FUENTE DE ESTILOS
```

**NUNCA** duplicar información del CV en componentes. **SIEMPRE** leer de `cv-data.json`.

### Estructura del Proyecto

```
cv-eduardo-valenzuela/
├── shared/              # Data y assets compartidos (SSOT)
├── frameworks/
│   ├── react/          # Implementación en React (PRINCIPAL)
│   ├── vue/            # Implementación en Vue
│   ├── vanilla/        # Implementación en JS puro
│   └── angular/        # Implementación en Angular (futuro)
├── switcher/           # Landing page de selección
└── docs/               # Documentación + builds
```

### Flujo de Framework Switching

1. Usuario selecciona framework en switcher o navbar
2. `stateManager.js` guarda estado (dark mode, scroll position)
3. Redirige a `/frameworks/{framework}/`
4. Nuevo framework carga y restaura estado

---

## 📋 Reglas de Oro

### ⚠️ ANTI-PATRONES A EVITAR (Síndrome Transformer)

```javascript
// ❌ NUNCA: Hardcodear información del CV
const name = "Eduardo Valenzuela"; // MAL

// ✅ SIEMPRE: Leer de cv-data.json
const { name } = cvData.personal; // BIEN
```

```javascript
// ❌ NUNCA: Colores hardcoded
<div style={{ color: '#3b82f6' }}>  // MAL

// ✅ SIEMPRE: Usar Tailwind o design tokens
<div className="text-primary">  // BIEN
```

```javascript
// ❌ NUNCA: Código inconsistente entre frameworks
// React con clases, Vue con hooks, etc.

// ✅ SIEMPRE: Misma lógica, sintaxis apropiada para cada framework
```

### 🎨 Estándares de Código

#### Naming Conventions

```javascript
// Variables y funciones: camelCase
const userName = 'Eduardo';
const handleClick = () => {};

// Componentes: PascalCase
const ProjectCard = () => {};
const Header = () => {};

// Constantes: UPPER_SNAKE_CASE
const MAX_PROJECTS = 10;
const API_BASE_URL = 'https://...';

// Archivos:
// - Componentes: PascalCase (Header.jsx, ProjectCard.vue)
// - Utils/Hooks: camelCase (dataLoader.js, useTheme.js)
```

#### Estructura de Componentes React

```jsx
// 1. Imports
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

// 2. Component
export const ComponentName = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState(initial);
  const { isDark } = useTheme();
  
  // 4. Effects
  useEffect(() => {
    // ...
  }, [dependencies]);
  
  // 5. Handlers
  const handleAction = () => {
    // ...
  };
  
  // 6. Early returns
  if (!data) return <Loading />;
  
  // 7. Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};
```

#### Tailwind Class Order

```jsx
// Layout → Box Model → Typography → Visual → Effects
<div className="
  flex items-center justify-between    // Layout
  px-4 py-2 mb-4                       // Box model
  text-lg font-semibold                // Typography
  bg-blue-500 text-white rounded-lg    // Visual
  hover:bg-blue-600 transition-colors  // Effects
">
```

---

## 🔧 Tareas Comunes

### 1. Agregar Nueva Sección al CV

```bash
# Paso 1: Actualizar cv-data.json
shared/data/cv-data.json
# Agregar nueva sección, ej: "certifications"

# Paso 2: Crear componente React
frameworks/react/src/components/sections/Certifications.jsx

# Paso 3: Importar en App.jsx
import { Certifications } from './components/sections/Certifications';

# Paso 4: Agregar al render
<Certifications data={cvData.certifications} />

# Paso 5: Repetir para otros frameworks cuando existan
```

### 2. Modificar Colores/Estilos Globales

```bash
# Paso 1: Editar design tokens
shared/styles/design-tokens.json

# Paso 2: Actualizar Tailwind config
frameworks/react/tailwind.config.js

# Paso 3: Aplicar en componentes con clases de Tailwind
# No hardcodear valores
```

### 3. Agregar Nuevo Framework

```bash
# Ver DEVELOPMENT_GUIDE.md sección "Agregar Nuevos Frameworks"
# Resumen:
# 1. Create vite project en frameworks/{nuevo}
# 2. Configurar Tailwind
# 3. Crear estructura de componentes
# 4. Implementar dataLoader que lea shared/cv-data.json
# 5. Agregar al switcher
```

---

## 🚨 Decisiones Técnicas Críticas

### ¿Por qué no TypeScript inicialmente?

- **Fase 1**: JavaScript para velocidad de desarrollo
- **Fase 2**: Migrar a TypeScript progresivamente
- **Razón**: Demostrar que puedes escribir código limpio sin TS (aunque TS es mejor)

### ¿Por qué Tailwind y no CSS Modules/Styled Components?

- Consistencia visual entre frameworks
- Facilidad para compartir design tokens
- Utility-first permite prototipar rápido
- Dark mode built-in

### ¿Por qué Vite y no CRA/Webpack?

- 10-100x más rápido en desarrollo
- HMR instantáneo
- Build optimizado out-of-the-box
- Soporte multi-framework

### ¿Por qué GitHub Pages y no Vercel/Netlify?

- Gratuito sin límites
- Muestra conocimiento de Git/GitHub
- Suficiente para sitio estático
- Fácil de configurar

---

## 📝 Templates de Código

### Componente React Básico

```jsx
import { useTheme } from '../../hooks/useTheme';

/**
 * ComponentName - Brief description
 * 
 * @param {Object} props
 * @param {Array} props.data - Description
 * @returns {JSX.Element}
 */
export const ComponentName = ({ data }) => {
  const { isDark } = useTheme();
  
  if (!data || data.length === 0) {
    return null;
  }
  
  return (
    <section 
      id="component-name" 
      className="py-16 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Section Title
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Custom Hook

```javascript
import { useState, useEffect } from 'react';

/**
 * useHookName - Brief description
 * 
 * @param {*} param - Description
 * @returns {Object} { value, setValue, ... }
 */
export const useHookName = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [value]);
  
  const someMethod = () => {
    // Logic
  };
  
  return { value, setValue, someMethod };
};
```

### Data Loader Utility

```javascript
/**
 * Loads CV data from shared JSON file
 * 
 * @returns {Promise<Object>} CV data object
 * @throws {Error} If data cannot be loaded or is invalid
 */
export const loadCVData = async () => {
  try {
    // Adjust path based on framework location
    const response = await fetch('../../../shared/data/cv-data.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Basic validation
    if (!data.personal || !data.personal.name) {
      throw new Error('Invalid CV data structure');
    }
    
    return data;
  } catch (error) {
    console.error('Error loading CV data:', error);
    throw error;
  }
};
```

### State Manager

```javascript
const STATE_KEY = 'cv-app-state';

/**
 * Saves application state to localStorage
 * 
 * @param {Object} state - State object to save
 */
export const saveAppState = (state) => {
  try {
    const stateWithTimestamp = {
      ...state,
      timestamp: Date.now(),
    };
    localStorage.setItem(STATE_KEY, JSON.stringify(stateWithTimestamp));
  } catch (error) {
    console.warn('Could not save state:', error);
  }
};

/**
 * Loads application state from localStorage
 * 
 * @returns {Object|null} Saved state or null if not found
 */
export const loadAppState = () => {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (!saved) return null;
    
    const state = JSON.parse(saved);
    
    // Invalidate state older than 7 days
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - state.timestamp > SEVEN_DAYS) {
      clearAppState();
      return null;
    }
    
    return state;
  } catch (error) {
    console.warn('Could not load state:', error);
    return null;
  }
};

/**
 * Clears saved application state
 */
export const clearAppState = () => {
  localStorage.removeItem(STATE_KEY);
};
```

---

## 🔍 Debugging Tips

### Common Issues

**1. Data no carga**
```javascript
// Verificar en console:
console.log('CV Data:', cvData);

// Verificar path del fetch:
// frameworks/react/src → '../../../shared/data/cv-data.json'
// frameworks/vue/src → '../../../shared/data/cv-data.json'
```

**2. Dark mode no persiste**
```javascript
// Verificar localStorage en DevTools:
Application → Local Storage → cv-app-state

// Debe contener:
{
  "darkMode": true/false,
  "timestamp": 1234567890
}
```

**3. Framework switching pierde estado**
```javascript
// Asegurar que stateManager se llama antes de redirect:
saveAppState({ darkMode, scrollPosition });
window.location.href = `/frameworks/${newFramework}/`;
```

---

## 📊 Métricas de Calidad

### Checklist para Nuevo Código

```markdown
- [ ] Lee data de cv-data.json (no hardcoded)
- [ ] Usa Tailwind classes (no inline styles)
- [ ] Sigue naming conventions
- [ ] Tiene comentarios JSDoc si es función pública
- [ ] Maneja edge cases (data undefined, arrays vacíos)
- [ ] Responsive (mobile-first)
- [ ] Dark mode compatible
- [ ] No hay console.logs de debugging
- [ ] ESLint no tiene warnings
- [ ] Componente es reutilizable si aplica
```

### Performance Goals

```
- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Bundle size (React): <150KB gzipped
```

---

## 🎓 Contexto para Nuevas Implementaciones

### Al implementar nueva feature:

1. **¿Es data?** → Agregar a `cv-data.json`
2. **¿Es estilo?** → Agregar a `design-tokens.json` o usar Tailwind
3. **¿Es lógica compartida?** → Crear utility en `utils/`
4. **¿Es estado global?** → Usar Context (React) / Provide-Inject (Vue)
5. **¿Es componente?** → Verificar si existe similar para reusar

### Al hacer refactor:

1. **¿Mejora legibilidad?** ✅
2. **¿Mantiene funcionalidad?** ✅
3. **¿Sigue estándares?** ✅
4. **¿No rompe otros frameworks?** ✅ (si cambias shared/)

---

## 🚀 Prioridades de Desarrollo

### Fase 1 (MVP) - ✅ EN PROGRESO
- [x] Estructura del proyecto
- [x] Documentación completa
- [ ] React version completa
- [ ] Dark mode funcional
- [ ] Responsive design
- [ ] Framework switcher básico
- [ ] Deploy en GitHub Pages

### Fase 2 (Expansión) - 📋 PLANEADO
- [ ] Vue version completa
- [ ] Vanilla JS version
- [ ] Animaciones y transiciones
- [ ] Tests automatizados
- [ ] CI/CD con GitHub Actions

### Fase 3 (Avanzado) - 💭 FUTURO
- [ ] Angular version
- [ ] Svelte version
- [ ] TypeScript migration
- [ ] CMS para editar CV sin tocar código
- [ ] Analytics

---

## 🤝 Colaboración con IA

### Prompt Templates Efectivos

**Para agregar componente:**
```
Necesito agregar un componente [ComponentName] en la versión React que:
1. Lea datos de cvData.[section]
2. Sea responsive (mobile-first)
3. Soporte dark mode
4. Siga los estándares en CODING_STANDARDS.md
5. Use Tailwind para estilos

Data disponible en cv-data.json: [pegar estructura]
```

**Para debugging:**
```
Tengo un problema en [archivo]:
- Comportamiento esperado: [descripción]
- Comportamiento actual: [descripción]
- Error (si hay): [copiar error]
- Ya intenté: [lista]

Contexto del proyecto: [referir a este documento]
```

**Para refactor:**
```
Quiero refactorizar [archivo/función] para:
1. [objetivo 1]
2. [objetivo 2]

Restricciones:
- Mantener funcionalidad actual
- Seguir CODING_STANDARDS.md
- No romper compatibilidad con otros frameworks

Código actual:
[pegar código]
```

---

## 📚 Referencias Rápidas

### Documentos del Proyecto

- `README.md` - Overview y quick start
- `ARCHITECTURE.md` - Decisiones técnicas y estructura
- `CODING_STANDARDS.md` - Reglas de código
- `DEVELOPMENT_GUIDE.md` - Guía paso a paso
- `AI_CONTEXT.md` - Este documento

### Archivos Clave

- `shared/data/cv-data.json` - Toda la información del CV
- `shared/styles/design-tokens.json` - Variables de diseño
- `frameworks/react/src/App.jsx` - Entry point de React
- `frameworks/react/src/contexts/ThemeContext.jsx` - Dark mode
- `frameworks/react/src/utils/dataLoader.js` - Carga de datos

### Recursos Externos

- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)

---

## ⚡ Quick Commands

```bash
# Desarrollo
cd frameworks/react && npm run dev

# Build
cd frameworks/react && npm run build

# Lint
npm run lint

# Format
npm run format

# Deploy
npm run deploy
```

---

## 🎯 Objetivos del Proyecto

**Primario**: Crear CV profesional que impresione a reclutadores

**Secundario**: Demostrar habilidades técnicas avanzadas

**Terciario**: Aprender y experimentar con arquitectura de software

---

**Última actualización**: 2025-11-11  
**Versión**: 1.0.0  
**Autor**: Eduardo Valenzuela

---

## 🤖 Nota para IAs

Este proyecto está diseñado para ser **altamente mantenible y escalable**. Cuando trabajes en él:

1. **Lee este documento primero** antes de sugerir cambios
2. **Sigue los estándares** rigurosamente (no son negociables)
3. **Pregunta si tienes duda** sobre decisiones de arquitectura
4. **Documenta cambios significativos** en commit messages y código
5. **Piensa en consistencia** - si cambias algo en React, probablemente deba cambiar en Vue también

**El objetivo no es solo hacer que funcione, sino hacerlo BIEN.** 🎯
