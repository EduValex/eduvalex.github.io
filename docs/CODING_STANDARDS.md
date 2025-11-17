# ✍️ Estándares de Código

> Guía de estilo y convenciones para mantener un código consistente, limpio y profesional en todo el proyecto.

## 🎯 Filosofía

1. **Consistencia sobre preferencias personales**
2. **Legibilidad sobre cleverness**
3. **Explícito sobre implícito**
4. **Simple sobre complejo**

---

## 📋 Tabla de Contenidos

- [Naming Conventions](#naming-conventions)
- [Estructura de Archivos](#estructura-de-archivos)
- [JavaScript/JSX](#javascriptjsx)
- [React Específico](#react-específico)
- [Vue Específico](#vue-específico)
- [CSS/Tailwind](#csstailwind)
- [Comentarios](#comentarios)
- [Git Commits](#git-commits)
- [ESLint & Prettier](#eslint--prettier)

---

## 📝 Naming Conventions

### Archivos

```bash
# Componentes React: PascalCase
Header.jsx
FrameworkSwitcher.jsx
ProjectCard.jsx

# Componentes Vue: PascalCase
HeaderComponent.vue
ProjectCard.vue

# Utilities, hooks, composables: camelCase
dataLoader.js
useTheme.js
useFrameworkSwitch.js

# Constants: UPPER_SNAKE_CASE
FRAMEWORKS.js
API_ENDPOINTS.js

# CSS/Styles: kebab-case
main.css
framework-switcher.css
```

### Variables y Funciones

```javascript
// Variables: camelCase
const userName = 'Eduardo';
const isDarkMode = true;
const projectsList = [];

// Funciones: camelCase, verbos
function fetchUserData() {}
function handleThemeToggle() {}
function validateEmail() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_PROJECTS = 10;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_THEME = 'light';

// Clases: PascalCase
class DataValidator {}
class ThemeManager {}

// Componentes React: PascalCase
const UserProfile = () => {};
const ProjectCard = ({ project }) => {};

// Hooks personalizados: use + PascalCase
const useTheme = () => {};
const useCVData = () => {};

// Boolean: is/has/should prefix
const isLoading = false;
const hasError = true;
const shouldRender = true;

// Handlers: handle + Action
const handleClick = () => {};
const handleSubmit = () => {};
const handleChange = () => {};
```

---

## 📂 Estructura de Archivos

### React Component

```jsx
// ✅ CORRECTO: Estructura ordenada y clara

// 1. Imports externos
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. Imports internos
import { useTheme } from '../../hooks/useTheme';
import { ProjectCard } from '../cards/ProjectCard';

// 3. Imports de estilos/assets (si aplica)
import './Projects.css';

// 4. Constants (si son específicas del componente)
const MAX_VISIBLE_PROJECTS = 6;

/**
 * Projects Section Component
 * 
 * Displays a grid of project cards with filtering and sorting capabilities.
 * 
 * @returns {JSX.Element} Projects section
 */
export const Projects = () => {
  // 5. Hooks (ordenados: useState, useEffect, custom hooks)
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const { isDark } = useTheme();

  // 6. useEffect
  useEffect(() => {
    loadProjects();
  }, []);

  // 7. Funciones (handlers primero, helpers después)
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const loadProjects = async () => {
    // lógica
  };

  // 8. Early returns
  if (!projects.length) {
    return <div>No projects found</div>;
  }

  // 9. Render
  return (
    <section className="projects">
      {/* JSX */}
    </section>
  );
};

// 10. PropTypes o TypeScript types (si aplica)
Projects.propTypes = {
  // ...
};
```

---

## 🟨 JavaScript/JSX

### Variables

```javascript
// ✅ CORRECTO: const por defecto
const name = 'Eduardo';
const projects = [];

// ✅ CORRECTO: let solo si se reasigna
let counter = 0;
counter++;

// ❌ INCORRECTO: var nunca
var oldWay = 'no';
```

### Funciones

```javascript
// ✅ CORRECTO: Arrow functions para la mayoría
const getUserName = (user) => user.name;

const processData = (data) => {
  // múltiples líneas
  const processed = data.map(item => item.value);
  return processed;
};

// ✅ CORRECTO: Function declaration para hoisting cuando sea necesario
function initializeApp() {
  // setup code
}

// ❌ INCORRECTO: Mezclar estilos sin razón
const someFunc = function() {}; // Evitar function expressions
```

### Destructuring

```javascript
// ✅ CORRECTO: Destructuring cuando mejora legibilidad
const { name, email, age } = user;
const [first, second] = array;

// ✅ CORRECTO: Default values
const { theme = 'light' } = settings;

// ✅ CORRECTO: Rest operator
const { id, ...rest } = data;

// ❌ INCORRECTO: Destructuring excesivo
const { a: { b: { c: { d } } } } = obj; // Muy anidado
```

### Template Literals

```javascript
// ✅ CORRECTO: Template literals para interpolación
const greeting = `Hello, ${name}!`;
const url = `${API_BASE}/users/${userId}`;

// ✅ CORRECTO: Strings simples sin interpolación
const title = 'Eduardo Valenzuela';

// ❌ INCORRECTO: Template literals innecesarios
const message = `Hello`; // Usar 'Hello'
```

### Ternarios y Conditionals

```javascript
// ✅ CORRECTO: Ternarios simples
const status = isActive ? 'Active' : 'Inactive';

// ✅ CORRECTO: Ternarios en JSX
{isLoading ? <Spinner /> : <Content />}

// ✅ CORRECTO: Múltiples condiciones = if/else
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else {
  // ...
}

// ❌ INCORRECTO: Ternarios anidados
const value = a ? b : c ? d : e ? f : g; // Muy confuso
```

### Arrays y Objects

```javascript
// ✅ CORRECTO: Spread operator
const newArray = [...oldArray, newItem];
const newObj = { ...oldObj, newKey: 'value' };

// ✅ CORRECTO: Array methods
const names = users.map(user => user.name);
const active = users.filter(user => user.isActive);
const total = prices.reduce((sum, price) => sum + price, 0);

// ❌ INCORRECTO: Mutación directa
oldArray.push(newItem); // Evitar en React state
oldObj.newKey = 'value'; // Evitar en React state
```

---

## ⚛️ React Específico

### Components

```jsx
// ✅ CORRECTO: Named exports para componentes
export const Header = () => {
  return <header>...</header>;
};

// ✅ CORRECTO: Props destructuring
export const ProjectCard = ({ title, description, image }) => {
  return <div>...</div>;
};

// ✅ CORRECTO: Props con default values
export const Button = ({ 
  type = 'button', 
  variant = 'primary',
  onClick,
  children 
}) => {
  return <button type={type} className={variant} onClick={onClick}>
    {children}
  </button>;
};

// ❌ INCORRECTO: Default exports (menos searchable)
export default function Header() {} // Evitar
```

### Hooks

```jsx
// ✅ CORRECTO: Custom hooks con "use" prefix
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => setIsDark(prev => !prev);
  
  return { isDark, toggleTheme };
};

// ✅ CORRECTO: Dependency arrays completas
useEffect(() => {
  fetchData(userId);
}, [userId]); // Lista todas las dependencias

// ❌ INCORRECTO: Dependency array vacío con dependencias
useEffect(() => {
  fetchData(userId); // userId debería estar en deps
}, []); // ESLint warning
```

### Conditional Rendering

```jsx
// ✅ CORRECTO: && para renderizado condicional simple
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}

// ✅ CORRECTO: Ternario para if/else
{isLoading ? <Spinner /> : <Content />}

// ✅ CORRECTO: Early return para lógica compleja
if (isLoading) return <Spinner />;
if (error) return <ErrorMessage />;
return <Content />;

// ❌ INCORRECTO: Ternario con null
{condition ? <Component /> : null} // Usar && en su lugar
```

### Event Handlers

```jsx
// ✅ CORRECTO: Arrow function en handler
<button onClick={() => handleClick(id)}>Click</button>

// ✅ CORRECTO: Reference directa sin argumentos
<button onClick={handleClick}>Click</button>

// ✅ CORRECTO: Handler con evento
const handleChange = (e) => {
  setValue(e.target.value);
};

// ❌ INCORRECTO: Llamada directa en onClick
<button onClick={handleClick()}>Click</button> // Se ejecuta en render
```

### State Updates

```jsx
// ✅ CORRECTO: Functional updates
setCount(prevCount => prevCount + 1);
setItems(prevItems => [...prevItems, newItem]);

// ✅ CORRECTO: Múltiples estados separados
const [name, setName] = useState('');
const [email, setEmail] = useState('');

// ✅ CORRECTO: Estado de objeto para datos relacionados
const [user, setUser] = useState({ name: '', email: '' });

// ❌ INCORRECTO: Update basado en valor actual
setCount(count + 1); // Race condition posible
```

---

## 💚 Vue Específico

### Components (Composition API)

```vue
<script setup>
// ✅ CORRECTO: Imports arriba
import { ref, computed, onMounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

// ✅ CORRECTO: Props con defineProps
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
});

// ✅ CORRECTO: Emits con defineEmits
const emit = defineEmits(['update', 'delete']);

// ✅ CORRECTO: Reactive state
const counter = ref(0);
const user = ref({ name: '', email: '' });

// ✅ CORRECTO: Computed properties
const doubleCount = computed(() => counter.value * 2);

// ✅ CORRECTO: Methods
const increment = () => {
  counter.value++;
  emit('update', counter.value);
};

// ✅ CORRECTO: Lifecycle
onMounted(() => {
  fetchData();
});
</script>

<template>
  <!-- Template aquí -->
</template>

<style scoped>
/* Estilos con scope */
</style>
```

---

## 🎨 CSS/Tailwind

### Tailwind Classes

```jsx
// ✅ CORRECTO: Orden lógico de clases
// Layout → Box Model → Typography → Visual → Effects
<div className="
  flex items-center justify-between
  px-4 py-2 mb-4
  text-lg font-semibold
  bg-blue-500 text-white rounded-lg
  hover:bg-blue-600 transition-colors
">

// ✅ CORRECTO: Responsive design mobile-first
<div className="
  w-full 
  md:w-1/2 
  lg:w-1/3
">

// ✅ CORRECTO: Dark mode
<div className="
  bg-white text-gray-900
  dark:bg-gray-800 dark:text-white
">

// ❌ INCORRECTO: Clases desordenadas y largas en una línea
<div className="text-white bg-blue-500 hover:bg-blue-600 flex items-center rounded-lg px-4 mb-4 py-2">
```

### Custom CSS (cuando sea necesario)

```css
/* ✅ CORRECTO: BEM naming si no usas Tailwind */
.card {}
.card__header {}
.card__body {}
.card--featured {}

/* ✅ CORRECTO: CSS custom properties para temas */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --spacing-unit: 8px;
}

/* ✅ CORRECTO: Mobile-first media queries */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
```

---

## 💬 Comentarios

### Cuándo comentar

```javascript
// ✅ CORRECTO: Explicar POR QUÉ, no QUÉ
// Using setTimeout to ensure DOM is ready before scrolling
setTimeout(() => window.scrollTo(0, savedPosition), 100);

// ✅ CORRECTO: Documentar funciones complejas
/**
 * Loads CV data from shared JSON file and validates structure
 * @returns {Promise<CVData>} Parsed and validated CV data
 * @throws {Error} If data is invalid or file not found
 */
async function loadCVData() {}

// ✅ CORRECTO: TODOs específicos
// TODO: Add error boundary for framework switching
// TODO: Implement analytics tracking (Phase 2)

// ❌ INCORRECTO: Comentarios obvios
// Set count to 0
const count = 0;

// ❌ INCORRECTO: Código comentado (usar Git)
// const oldFunction = () => {
//   // código antiguo
// };
```

### JSDoc para funciones públicas

```javascript
/**
 * Switches to a different framework version
 * 
 * @param {string} framework - Target framework ('react'|'vue'|'vanilla'|'angular')
 * @param {Object} options - Switching options
 * @param {boolean} options.preserveScroll - Whether to save scroll position
 * @returns {void}
 * 
 * @example
 * switchFramework('vue', { preserveScroll: true });
 */
export const switchFramework = (framework, options = {}) => {
  // implementación
};
```

---

## 🔀 Git Commits

### Conventional Commits

```bash
# Formato: <type>(<scope>): <subject>

# Types:
feat:     # Nueva funcionalidad
fix:      # Bug fix
docs:     # Documentación
style:    # Formato (no afecta código)
refactor: # Refactorización
test:     # Tests
chore:    # Mantenimiento

# Ejemplos:
git commit -m "feat(react): add dark mode toggle component"
git commit -m "fix(vue): resolve framework switching state loss"
git commit -m "docs(architecture): update framework flow diagram"
git commit -m "refactor(shared): extract data loader utility"
git commit -m "chore(deps): update vite to v5.0.0"
```

### Commits atómicos

```bash
# ✅ CORRECTO: Un cambio lógico por commit
git commit -m "feat(react): add Hero component"
git commit -m "feat(react): add About component"
git commit -m "style(react): apply Tailwind to Hero"

# ❌ INCORRECTO: Múltiples cambios no relacionados
git commit -m "add components, fix bugs, update docs"
```

---

## 🔧 ESLint & Prettier

### ESLint Config (React)

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Enforce
    'react/prop-types': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    
    // Relax
    'react/react-in-jsx-scope': 'off', // No necesario en React 17+
  },
};
```

### Prettier Config

```javascript
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

### VS Code Settings

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ]
}
```

---

## ✅ Checklist antes de Commit

```markdown
- [ ] Código formateado con Prettier
- [ ] No hay warnings de ESLint
- [ ] Funcionalidad testeada manualmente
- [ ] Comentarios agregados donde sea necesario
- [ ] No hay console.logs de debugging
- [ ] Nombres de variables/funciones son descriptivos
- [ ] Commit message sigue Conventional Commits
- [ ] No hay código comentado (usar Git para historial)
```

---

## 🎓 Recursos

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [Vue Style Guide](https://vuejs.org/style-guide/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Última actualización**: 2025-11-11  
**Versión**: 1.0.0  
**Autor**: Eduardo Valenzuela
