# 🤖 AI SESSION GUIDE - Guía para Asistentes IA

**Para**: Claude, ChatGPT, GitHub Copilot y otros asistentes IA
**Propósito**: Retomar desarrollo del proyecto en nuevas sesiones sin perder contexto

---

## 🎯 RESUMEN EJECUTIVO (Lee esto primero)

### ¿Qué es este proyecto?

**CV Multi-Framework Portfolio** - Showcase que implementa el mismo CV en múltiples frameworks (React, Astro, Vue, Angular, etc.) para demostrar:
- Arquitectura escalable multi-framework
- Single source of truth compartida
- Trade-offs de cada tecnología
- Habilidades técnicas del desarrollador

### Estado Actual (2025-11-13)

| Framework | Status | Deployment | Características |
|-----------|--------|------------|-----------------|
| React | ✅ Producción | https://eduvalex.github.io | 35+ animaciones, máxima interactividad |
| Astro | ✅ Build OK | Pendiente config deploy | SSG ultra-rápido, SEO optimizado |
| Vue | 📋 Planeado | - | - |
| Angular | 📋 Planeado | - | - |

### Problema Principal Resuelto

**Astro CSS no cargaba en producción** → Era problema de deployment, no de código.
- Build local: ✅ Funciona
- Deployment: ⚠️ GitHub Pages solo deploy React
- Solución: Configurar multi-framework deploy (ver DEPLOYMENT_GUIDE.md)

---

## 📂 ARQUITECTURA DEL PROYECTO

```
cv-eduardo-valenzuela/
│
├── shared/                          # ← SINGLE SOURCE OF TRUTH
│   ├── data/
│   │   └── cv-data.json            # ← TODO el contenido del CV
│   ├── assets/
│   │   └── images/                 # Imágenes compartidas
│   └── styles/
│       └── design-tokens.json      # Variables de diseño (futuro)
│
├── frameworks/                      # ← Implementaciones
│   ├── react/                      # React + Vite + Tailwind
│   │   ├── src/
│   │   │   ├── components/         # Componentes React
│   │   │   ├── hooks/              # Custom hooks
│   │   │   ├── lib/                # Theme, utils
│   │   │   └── config/             # EmailJS config
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   └── astro/                      # Astro + Inline CSS
│       ├── src/
│       │   └── pages/
│       │       └── index.astro     # Todo en un archivo (por ahora)
│       ├── package.json
│       └── astro.config.mjs
│
├── docs/                           # ← Documentación (5 archivos)
│   ├── README.md                   # Índice de docs
│   ├── PROJECT_OVERVIEW.md         # Visión y arquitectura
│   ├── DEVELOPER_GUIDE.md          # Cómo desarrollar
│   ├── DEPLOYMENT_GUIDE.md         # Cómo deployar
│   ├── AI_SESSION_GUIDE.md         # Este archivo
│   └── AI_CONTEXT.md               # Contexto técnico profundo
│
├── .github/workflows/
│   └── deploy.yml                  # ← CI/CD (actualmente solo React)
│
├── AUDITORIA_COMPLETA_2025.md      # ← Última auditoría
└── package.json                    # Scripts de deploy
```

---

## 🧠 PRINCIPIOS FUNDAMENTALES

### 1. Single Source of Truth (CRÍTICO)

```javascript
// ✅ CORRECTO
import cvData from '@shared/data/cv-data.json';
const { name, email } = cvData.personal;

// ❌ INCORRECTO - NUNCA HARDCODEAR
const name = "Eduardo Valenzuela";
```

**Regla de oro**: TODO el contenido del CV viene de `cv-data.json`. NUNCA duplicar información.

### 2. Framework Independence

Cada framework debe:
- Leer de `shared/data/cv-data.json`
- Tener su propia carpeta en `frameworks/`
- Build independiente
- Deploy en subdirectorio propio (ej: `/react`, `/astro`)

### 3. Características Únicas por Framework

Cada implementación debe mostrar las **ventajas** del framework:

**React** → Animaciones, interactividad, custom hooks
**Astro** → Performance, SEO, zero JS por defecto
**Vue** → Reactivity elegante, Composition API
**Angular** → Enterprise features, TypeScript nativo

### 4. Sin Duplicación de Lógica

Si algo se repite, debe estar en:
- `shared/data/` si es contenido
- `shared/utils/` si es lógica compartida (futuro)
- Cada framework si es específico del framework

---

## 🚨 ANTI-PATRONES (Evitar)

### Síndrome del Transformer

**Detectado en**: Documentación (17 MDs → consolidados a 5)
**NO detectado en**: Código (está limpio)

**Evitar:**
```markdown
❌ Crear RESUMEN_FINAL_v2.md
❌ Crear CHECKLIST_COMPLETADA_NUEVA.md
❌ Duplicar info entre archivos
❌ Fechas contradictorias
❌ Múltiples "últimas auditorías"

✅ Actualizar docs existentes
✅ Usar git commits para changelog
✅ Un archivo = un propósito
```

### Hardcoding

```javascript
// ❌ MAL
<h1>Eduardo Valenzuela</h1>
const primaryColor = "#3b82f6";

// ✅ BIEN
<h1>{cvData.personal.name}</h1>
<div className="text-primary"> // Tailwind
```

### CSS Duplicado

```css
/* ❌ MAL - Inline styles */
<div style={{ color: 'blue', fontSize: '16px' }}>

/* ✅ BIEN - Tailwind classes */
<div className="text-blue-500 text-base">

/* ✅ BIEN - CSS modules si necesario */
import styles from './Component.module.css';
```

---

## 🔄 WORKFLOWS COMUNES

### Agregar Contenido al CV

1. Actualizar `shared/data/cv-data.json`
2. Verificar en React: `cd frameworks/react && npm run dev`
3. Verificar en Astro: `cd frameworks/astro && npm run dev`
4. Commit: `git commit -m "content: add new project X"`

**NO** tocar archivos de componentes a menos que cambies estructura.

### Agregar Nuevo Framework

Ver [DEVELOPER_GUIDE.md - Agregar Framework](../docs/DEVELOPER_GUIDE.md#agregar-nuevo-framework)

Pasos resumidos:
1. Crear `frameworks/nuevo-framework/`
2. Configurar build tool (Vite, etc.)
3. Crear data loader que lea `cv-data.json`
4. Implementar componentes
5. Configurar base path en config
6. Actualizar workflow de deploy

### Actualizar Documentación

**Ubicaciones:**
- `docs/` → Documentación general
- `frameworks/X/README.md` → Docs específicas del framework
- `AUDITORIA_COMPLETA_2025.md` → Última auditoría (no editar, crear nueva si necesario)

**Regla**: Máximo 5-6 archivos MD principales. Si necesitas más, pregunta primero.

---

## 🎨 CARACTERÍSTICAS POR FRAMEWORK

### React (Implementado)

**Lo que lo hace único:**
- ✨ 35+ animaciones (typing effect, cursor trail, scroll reveal)
- 🎨 Theme system con dark mode persistente
- 🪝 Custom hooks (useScrollReveal, useTypingEffect)
- ⚡ Code splitting automático
- 📦 Bundle: 75 KB gzipped

**Componentes principales:**
- `Hero` - Con typing animation
- `Projects` - Con filtros interactivos
- `Skills` - Con progress bars animadas
- `Contact` - Con EmailJS integration
- `ThemeToggle` - Dark mode switch
- `CursorEffect` - Particle trail (solo desktop)

**Tech stack:**
- React 19.2
- Vite 7.2
- Tailwind CSS 3.4
- EmailJS
- React Icons

### Astro (Implementado, deployment pendiente)

**Lo que lo hace único:**
- ⚡ SSG ultra-rápido (build en 7s vs 12s React)
- 📦 Bundle: ~40 KB (casi 50% más pequeño)
- 🎨 CSS inline (mejor First Paint)
- 🌐 Toggle de idioma ES/EN
- 📧 EmailJS desde CDN

**Arquitectura:**
- Todo en `src/pages/index.astro` (monolito intencional)
- CSS inline en `<style>` tag
- JS inline minificado
- Zero JS en cliente por defecto

**Tech stack:**
- Astro 4.x
- CSS puro (no Tailwind)
- EmailJS CDN
- Zero dependencies en cliente

**Diferencias vs React:**
- Sin animaciones complejas (no hay runtime JS)
- CSS no cacheable (inline)
- Menos modular (todo en 1 archivo)
- Más rápido en First Paint

---

## 🚀 DEPLOYMENT

### Estado Actual

**GitHub Pages configurado para**:
- Main branch
- Deploy desde workflow
- URL: https://eduvalex.github.io

**Deploy actual**:
- ✅ React en `/` (raíz)
- ❌ Astro NO deployada (workflow solo compila React)

### Configuración Objetivo

```
https://eduvalex.github.io/          ← Landing page o React
https://eduvalex.github.io/react     ← Versión React
https://eduvalex.github.io/astro     ← Versión Astro
https://eduvalex.github.io/vue       ← Versión Vue (futuro)
```

### Problema a Resolver

Modificar `.github/workflows/deploy.yml` para:
1. Build todos los frameworks
2. Merge en un solo directorio
3. Deploy conjunto

Ver [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) para implementación.

---

## 📊 MÉTRICAS Y CALIDAD

### Código

**React:**
- ESLint: 0 errors, 0 warnings ✅
- Build time: 11.67s
- Bundle: 75 KB gzipped
- Lighthouse: >90 (estimado)

**Astro:**
- Build time: 7.16s
- Bundle: ~40 KB
- First Paint: <1s (estimado)

### Documentación

**Antes**: 17 archivos MD (duplicados, desactualizados)
**Ahora**: 5 archivos MD (consolidados, claros)

### Git

**Commits limpios**: Feature, fix, docs, style
**Branch**: main
**Status**: 1 archivo sin commit (`generate-pdf.cjs`)

---

## 🔧 HERRAMIENTAS Y COMANDOS

### Desarrollo

```bash
# React
cd frameworks/react
npm run dev      # http://localhost:5173
npm run build
npm run preview

# Astro
cd frameworks/astro
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

### Deploy

```bash
# Desde raíz
npm run deploy   # Ejecuta deploy.js (solo React actualmente)
```

### Auditoría

```bash
# React
cd frameworks/react
npm run lint
npm run build    # Verificar warnings
```

---

## 📝 PROMPTS ÚTILES PARA NUEVAS SESIONES

### Retomar Desarrollo

```
Hola, soy [IA]. Voy a continuar el desarrollo del CV Multi-Framework.

He leído:
- docs/AI_SESSION_GUIDE.md
- AUDITORIA_COMPLETA_2025.md

Entiendo que:
1. cv-data.json es single source of truth
2. React está en producción, Astro en local
3. Necesito configurar multi-framework deploy

¿Hay algo que deba saber antes de empezar con [tarea específica]?
```

### Agregar Feature

```
Voy a agregar [feature] a la versión [framework].

Verificaré:
1. ¿Ya existe en otros frameworks?
2. ¿Es específico de este framework o debería compartirse?
3. ¿Necesito actualizar cv-data.json?

¿Procedo?
```

### Debugging

```
Tengo un problema en [framework]:
- Comportamiento esperado: [X]
- Comportamiento actual: [Y]
- Ya revisé: [archivos]

Contexto: Este es un proyecto multi-framework showcase, source of truth en cv-data.json.

¿Sugerencias?
```

---

## 🎯 TAREAS PENDIENTES (Roadmap)

### CRÍTICO (Esta semana)

- [ ] Configurar deployment multi-framework
- [ ] Decidir estructura de landing page
- [ ] Committear `generate-pdf.cjs`
- [ ] Agregar sitemap.xml

### MEDIO (Este mes)

- [ ] Implementar Vue version
- [ ] Refactorizar Astro (modularizar)
- [ ] Agregar tests (Vitest)
- [ ] Implementar framework switcher dinámico

### BAJO (Próximos meses)

- [ ] Angular version
- [ ] Svelte version
- [ ] Migrar a TypeScript
- [ ] Analytics

---

## ⚠️ TRAMPAS COMUNES

### 1. "Voy a arreglar el CSS de Astro"

**STOP** - El CSS funciona. El problema es deployment. No toques el código.

### 2. "Voy a crear RESUMEN_FINAL_DEFINITIVO.md"

**STOP** - Ya hay docs suficientes. Actualiza existentes o pregunta primero.

### 3. "Voy a optimizar React copiando lo de Astro"

**STOP** - Cada framework tiene su filosofía. React tiene animaciones, Astro no. Está bien.

### 4. "Voy a sincronizar cv-data.json con el HTML estático"

**OK** - Pero automatiza. No copies manualmente. Ver `generate-pdf.cjs`.

---

## 🤝 COMUNICACIÓN CON EL USUARIO

### Preguntar cuando:

- Vas a modificar arquitectura
- Vas a agregar dependencias
- Vas a cambiar deployment
- No estás seguro de una decisión

### NO preguntar para:

- Fix de bugs obvios
- Actualizar docs
- Mejorar código dentro del patrón existente
- Tareas en el roadmap aprobado

---

## 📚 RECURSOS ADICIONALES

### Documentación del Proyecto

1. [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Visión general
2. [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) - Desarrollo detallado
3. [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deploy paso a paso
4. [AI_CONTEXT.md](AI_CONTEXT.md) - Contexto técnico profundo

### Última Auditoría

[AUDITORIA_COMPLETA_2025.md](../AUDITORIA_COMPLETA_2025.md) - Lee esto para entender el estado actual

### Git

```bash
git log --oneline -20  # Últimos commits
git status             # Estado actual
```

---

## ✅ CHECKLIST ANTES DE EMPEZAR

Cuando retomes el proyecto en una nueva sesión:

- [ ] Leí `docs/AI_SESSION_GUIDE.md` (este archivo)
- [ ] Leí `AUDITORIA_COMPLETA_2025.md`
- [ ] Revisé `git status` y últimos commits
- [ ] Entiendo que `cv-data.json` es source of truth
- [ ] Sé en qué framework voy a trabajar
- [ ] Tengo clara la tarea a realizar

**Si marcaste todo** → Procede con confianza 🚀

**Si falta algo** → Lee la documentación correspondiente primero.

---

## 🎓 FILOSOFÍA DEL PROYECTO

Este no es solo un CV. Es:

1. **Showcase técnico** - Demuestra habilidades en múltiples frameworks
2. **Arquitectura real** - Patrón multi-framework escalable
3. **Experimento** - Cada framework muestra su filosofía única
4. **Portfolio vivo** - Se actualiza y mejora constantemente

**Objetivo**: Impresionar reclutadores Y servir como referencia técnica.

---

**Última actualización**: 2025-11-13
**Versión**: 2.0.0
**Próxima sesión**: ¡Bienvenido de vuelta! 👋
