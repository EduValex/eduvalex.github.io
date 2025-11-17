# 🛠️ Guía de Desarrollo

> Instrucciones paso a paso para configurar el entorno de desarrollo, trabajar en el proyecto y realizar contribuciones.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Configuración Inicial](#configuración-inicial)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Desarrollo Local](#desarrollo-local)
- [Personalizar el CV](#personalizar-el-cv)
- [Agregar Nuevos Frameworks](#agregar-nuevos-frameworks)
- [Build y Deploy](#build-y-deploy)
- [Troubleshooting](#troubleshooting)

---

## 📦 Requisitos Previos

### Software Necesario

```bash
# Node.js (v18 o superior)
node --version  # v18.0.0+

# npm (viene con Node.js)
npm --version   # 9.0.0+

# Git
git --version   # 2.30+
```

### Instalar Node.js

- **Windows/Mac**: [nodejs.org](https://nodejs.org/)
- **Linux**: 
  ```bash
  # Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

### Editor Recomendado

**VS Code** con extensiones:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Volar (para Vue)

---

## 🚀 Configuración Inicial

### 1. Clonar el Repositorio

```bash
# Opción A: Si ya existe en GitHub
git clone https://github.com/tu-usuario/cv-eduardo-valenzuela.git
cd cv-eduardo-valenzuela

# Opción B: Si es nuevo (ya lo tienes)
cd cv-eduardo-valenzuela
git init
```

### 2. Instalar Dependencias

```bash
# React version
cd frameworks/react
npm install

# Vue version (cuando esté lista)
cd ../vue
npm install

# Volver a la raíz
cd ../..
```

### 3. Configurar VS Code

```bash
# Abrir en VS Code
code .
```

El proyecto ya incluye:
- `.vscode/settings.json` - Configuración del editor
- `.vscode/extensions.json` - Extensiones recomendadas

---

## 📂 Estructura del Proyecto

```
cv-eduardo-valenzuela/
├── shared/                    # 🔄 Data compartida entre frameworks
│   ├── data/
│   │   └── cv-data.json      # 👈 EDITA TU INFO AQUÍ
│   ├── assets/
│   │   └── images/           # 👈 TUS FOTOS AQUÍ
│   └── styles/
│       └── design-tokens.json # 👈 COLORES Y ESTILOS
│
├── frameworks/
│   └── react/                # 👈 TRABAJA AQUÍ PRIMERO
│       ├── src/
│       ├── public/
│       └── package.json
│
├── switcher/                 # Landing page (no tocar aún)
├── docs/                     # Documentación
└── README.md
```

---

## 💻 Desarrollo Local

### Iniciar Servidor de Desarrollo (React)

```bash
cd frameworks/react
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

**Hot Module Replacement (HMR)** activado - los cambios se ven instantáneamente ⚡

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia dev server
npm run dev -- --host  # Expone en red local (para mobile testing)

# Build
npm run build        # Build de producción
npm run preview      # Preview del build

# Linting y formato
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Fix automático de ESLint
npm run format       # Formatea con Prettier
```

---

## 🎨 Personalizar el CV

### 1. Información Personal

**Archivo**: `shared/data/cv-data.json`

```json
{
  "personal": {
    "name": "Tu Nombre Completo",
    "title": "Tu Título Profesional",
    "email": "tu@email.com",
    "phone": "+56 9 1234 5678",
    "location": "Ciudad, País",
    "photo": "/shared/assets/images/profile.jpg",
    "tagline": "Tu tagline corto y atractivo",
    "social": {
      "github": "tu-usuario",
      "linkedin": "tu-usuario",
      "twitter": "tu-usuario",
      "portfolio": "https://tu-portfolio.com"
    }
  },
  
  "about": "Tu descripción profesional. Quién eres, qué haces, qué te apasiona...",
  
  "experience": [
    {
      "company": "Nombre de la Empresa",
      "position": "Tu Cargo",
      "period": "Mes Año - Presente",
      "location": "Ciudad, País",
      "description": "Descripción de tus responsabilidades y logros",
      "technologies": ["React", "Node.js", "PostgreSQL"],
      "achievements": [
        "Logro específico con métricas",
        "Otro logro importante"
      ]
    }
  ],
  
  "education": [
    {
      "institution": "Universidad/Instituto",
      "degree": "Título obtenido",
      "field": "Área de estudio",
      "period": "Año inicio - Año fin",
      "description": "Detalles adicionales"
    }
  ],
  
  "projects": [
    {
      "name": "Nombre del Proyecto",
      "description": "Descripción breve",
      "longDescription": "Descripción detallada del proyecto",
      "image": "/shared/assets/images/projects/proyecto1.jpg",
      "technologies": ["React", "Firebase", "Tailwind"],
      "github": "https://github.com/tu-usuario/proyecto",
      "demo": "https://proyecto-demo.com",
      "featured": true
    }
  ],
  
  "skills": {
    "frontend": [
      { "name": "React", "level": 90 },
      { "name": "Vue", "level": 75 },
      { "name": "TypeScript", "level": 85 }
    ],
    "backend": [
      { "name": "Node.js", "level": 80 },
      { "name": "Python", "level": 70 }
    ],
    "tools": [
      { "name": "Git", "level": 85 },
      { "name": "Docker", "level": 70 }
    ]
  },
  
  "languages": [
    { "name": "Español", "level": "Nativo" },
    { "name": "Inglés", "level": "Avanzado" }
  ],
  
  "certifications": [
    {
      "name": "Nombre de la Certificación",
      "issuer": "Organización",
      "date": "Mes Año",
      "url": "https://certificado.com"
    }
  ]
}
```

### 2. Colores y Estilos

**Archivo**: `shared/styles/design-tokens.json`

```json
{
  "colors": {
    "primary": "#3b82f6",      // Azul - cambia por tu color
    "secondary": "#8b5cf6",    // Púrpura
    "accent": "#06b6d4",       // Cyan
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444",
    
    "light": {
      "background": "#ffffff",
      "surface": "#f9fafb",
      "text": {
        "primary": "#1f2937",
        "secondary": "#6b7280"
      }
    },
    
    "dark": {
      "background": "#0f172a",
      "surface": "#1e293b",
      "text": {
        "primary": "#f1f5f9",
        "secondary": "#cbd5e1"
      }
    }
  },
  
  "typography": {
    "fontFamily": {
      "heading": "'Inter', sans-serif",
      "body": "'Inter', sans-serif",
      "mono": "'Fira Code', monospace"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    }
  },
  
  "spacing": {
    "unit": "8px"
  },
  
  "borderRadius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "full": "9999px"
  }
}
```

### 3. Imágenes

```bash
# Agrega tu foto de perfil
shared/assets/images/profile.jpg

# Agrega fotos de proyectos
shared/assets/images/projects/
  ├── proyecto1.jpg
  ├── proyecto2.jpg
  └── proyecto3.jpg

# Logos de empresas (opcional)
shared/assets/images/companies/
  ├── empresa1.png
  └── empresa2.png
```

**Recomendaciones**:
- **Foto de perfil**: 400x400px, formato JPG/PNG, <100KB
- **Proyectos**: 800x600px, formato JPG/WebP, <200KB
- Usa [TinyPNG](https://tinypng.com/) para optimizar

### 4. Aplicar Tokens en Tailwind

**Archivo**: `frameworks/react/tailwind.config.js`

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // Carga desde design-tokens.json
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        // ... más colores
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
};
```

---

## 🆕 Agregar Nuevos Frameworks

### Ejemplo: Agregar Svelte

#### 1. Crear proyecto Svelte

```bash
cd frameworks
npm create vite@latest svelte -- --template svelte
cd svelte
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 2. Configurar Tailwind

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* src/app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 3. Crear estructura de componentes

```
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── About.svelte
│   │   └── ...
│   └── utils/
│       └── dataLoader.js  # Copia de React version
├── App.svelte
└── main.js
```

#### 4. Cargar datos compartidos

```javascript
// src/lib/utils/dataLoader.js
export async function loadCVData() {
  const response = await fetch('../../../shared/data/cv-data.json');
  return response.json();
}
```

```svelte
<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { loadCVData } from './lib/utils/dataLoader';
  
  let cvData = null;
  
  onMount(async () => {
    cvData = await loadCVData();
  });
</script>

{#if cvData}
  <Header data={cvData.personal} />
  <!-- más componentes -->
{/if}
```

#### 5. Agregar al switcher

```html
<!-- switcher/index.html -->
<button onclick="switchTo('svelte')">
  🔥 Svelte
</button>
```

#### 6. Build y deploy

```bash
npm run build
# Output: frameworks/svelte/dist/
```

---

## 🏗️ Build y Deploy

### Build Local

```bash
# React
cd frameworks/react
npm run build  # Output: dist/

# Vue
cd frameworks/vue
npm run build  # Output: dist/

# Copiar todos los builds a docs/
# (Automatizado en npm run build:all)
```

### Deploy a GitHub Pages

#### Opción 1: Manual

```bash
# 1. Build todos los frameworks
npm run build:all

# 2. Commit y push
git add .
git commit -m "build: generate production builds"
git push origin main

# 3. Configurar en GitHub
# Settings → Pages → Source: main branch / docs folder
```

#### Opción 2: Automático con GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies (React)
        working-directory: ./frameworks/react
        run: npm ci
      
      - name: Build React
        working-directory: ./frameworks/react
        run: npm run build
      
      # Repetir para Vue, etc.
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

### Configurar dominio personalizado (opcional)

```bash
# 1. Agregar CNAME file
echo "tu-dominio.com" > docs/CNAME

# 2. Configurar en tu registrador de dominios:
# A record → 185.199.108.153
# A record → 185.199.109.153
# A record → 185.199.110.153
# A record → 185.199.111.153
```

---

## 🐛 Troubleshooting

### Problema: `npm install` falla

```bash
# Solución 1: Limpiar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Solución 2: Usar versión específica de Node
nvm install 18
nvm use 18
```

### Problema: Puerto 5173 ya en uso

```bash
# Solución: Usar otro puerto
npm run dev -- --port 3000
```

### Problema: Cambios no se reflejan

```bash
# Solución 1: Hard refresh
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Solución 2: Limpiar cache de Vite
rm -rf frameworks/react/.vite
npm run dev
```

### Problema: Imágenes no cargan

```bash
# Verificar rutas:
# En cv-data.json debe ser:
"photo": "/shared/assets/images/profile.jpg"

# NO:
"photo": "shared/assets/images/profile.jpg"  # Sin /
"photo": "./shared/assets/images/profile.jpg"  # Con ./
```

### Problema: Dark mode no persiste

```javascript
// Verificar en dev tools → Application → Local Storage
// Debe existir: cv-app-state

// Si no funciona, revisar:
// frameworks/react/src/utils/stateManager.js
```

### Problema: Build falla con error de memoria

```bash
# Solución: Aumentar heap size de Node
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

---

## 🧪 Testing

### Manual Testing Checklist

```markdown
- [ ] Página carga correctamente
- [ ] Dark mode funciona y persiste
- [ ] Todas las secciones son visibles
- [ ] Links externos abren correctamente
- [ ] Responsive en móvil (Chrome DevTools)
- [ ] Framework switcher funciona
- [ ] Estado persiste al cambiar framework
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en consola
```

### Testing en diferentes dispositivos

```bash
# Exponer servidor en red local
npm run dev -- --host

# Obtener IP local
# Windows:
ipconfig

# Mac/Linux:
ifconfig

# Acceder desde móvil:
http://TU-IP:5173
```

---

## 📚 Recursos Útiles

### Documentación

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

### Herramientas

- [TinyPNG](https://tinypng.com/) - Optimizar imágenes
- [Coolors](https://coolors.co/) - Paletas de colores
- [Google Fonts](https://fonts.google.com/) - Tipografías
- [Hero Icons](https://heroicons.com/) - Iconos
- [Undraw](https://undraw.co/) - Ilustraciones

### Inspiración

- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/search/portfolio)

---

## 🤝 Workflow Recomendado

### Día a día

```bash
# 1. Actualizar main
git pull origin main

# 2. Crear rama para feature
git checkout -b feat/nueva-seccion

# 3. Desarrollar
npm run dev
# ... hacer cambios ...

# 4. Commit
git add .
git commit -m "feat(react): add new section"

# 5. Push
git push origin feat/nueva-seccion

# 6. Merge a main (vía PR o directamente)
git checkout main
git merge feat/nueva-seccion
```

---

## ✅ Next Steps

Después de completar la configuración:

1. ✅ Editar `shared/data/cv-data.json` con tu info
2. ✅ Agregar tu foto en `shared/assets/images/`
3. ✅ Personalizar colores en `design-tokens.json`
4. ✅ Testear localmente con `npm run dev`
5. ✅ Build y deploy cuando estés listo
6. 🚀 ¡Compartir tu CV con el mundo!

---

**¿Necesitas ayuda?** Abre un issue en GitHub o revisa la documentación adicional en `/docs/`.

**Última actualización**: 2025-11-11  
**Versión**: 1.0.0  
**Autor**: Eduardo Valenzuela
