# 📚 Documentación del Proyecto

**CV Eduardo Valenzuela - Multi-Framework Portfolio**

Este es un proyecto showcase que demuestra cómo implementar el mismo CV en múltiples frameworks modernos, cada uno con sus propias características únicas.

---

## 📖 Documentación Disponible

### Para Humanos 👨‍💻

1. **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Visión general del proyecto, arquitectura y decisiones
2. **[DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)** - Cómo desarrollar, agregar frameworks, workflows
3. **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Configuración y deployment multi-framework

### Para IAs 🤖

4. **[AI_SESSION_GUIDE.md](AI_SESSION_GUIDE.md)** - Guía para continuar desarrollo en nuevas sesiones de chat
5. **[AI_CONTEXT.md](AI_CONTEXT.md)** - Contexto técnico completo del proyecto

---

## 🎯 Quick Start

### Desarrollar localmente

```bash
# React
cd frameworks/react
npm install
npm run dev

# Astro
cd frameworks/astro
npm install
npm run dev

# (Futuro: Vue, Angular, Svelte, etc.)
```

### Deploy a producción

```bash
# Desde la raíz del proyecto
npm run deploy
```

Ver [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) para detalles.

---

## 🗂️ Estructura del Proyecto

```
cv-eduardo-valenzuela/
├── shared/                    # Source of truth compartido
│   └── data/
│       └── cv-data.json       # ÚNICA fuente de datos
├── frameworks/                # Implementaciones por framework
│   ├── react/                 # Versión React (+ animaciones)
│   └── astro/                 # Versión Astro (+ performance)
├── docs/                      # Esta documentación
└── .github/workflows/         # CI/CD multi-framework
```

---

## 🚀 Frameworks Implementados

| Framework | Status | Características Únicas | Demo |
|-----------|--------|------------------------|------|
| **React** | ✅ Producción | 35+ animaciones, interactividad máxima | [Ver](https://eduvalex.github.io) |
| **Astro** | 🚧 Configurando | SSG ultra-rápido, SEO optimizado | [Ver](https://eduvalex.github.io/astro) |
| Vue | 📋 Planeado | Reactivity elegante, Composition API | - |
| Angular | 📋 Planeado | Enterprise-ready, TypeScript nativo | - |
| Svelte | 💭 Futuro | Zero runtime, compilación mágica | - |

---

## 📝 Changelog de Documentación

### 2025-11-13 - Reorganización Mayor
- Consolidados 17 MDs → 5 MDs esenciales
- Eliminadas auditorías antiguas
- Creada guía para sesiones AI
- Actualizado deployment multi-framework

### Archivos Eliminados (obsoletos)
- `AUDITORIA_CODIGO.md` - Info duplicada
- `CHECKLIST_AUDITORIA_COMPLETADA.md` - Completado
- `RESUMEN_AUDITORIA.md` - Consolidado en PROJECT_OVERVIEW
- `ESTADO_FINAL_PROYECTO.md` - Info en DEVELOPER_GUIDE
- `RESUMEN_COMPLETO_FEATURES.md` - Info en PROJECT_OVERVIEW
- `RESUMEN_MEJORAS_CAFE.md` - No necesario
- `MEJORAS_IMPLEMENTADAS.md` - Usar git log
- `ANIMACIONES_Y_EFECTOS_COOL.md` - Info en framework docs
- `CHECKLIST_PRE_DEPLOY.md` - Info en DEPLOYMENT_GUIDE
- `GUIA_EMAILJS_RAPIDA.md` - Info en DEVELOPER_GUIDE
- `EMAILJS_SETUP.md` - Duplicado
- `CODING_STANDARDS.md` - Info en DEVELOPER_GUIDE
- `DEVELOPMENT_GUIDE.md` - Renombrado a DEVELOPER_GUIDE

---

## ❓ FAQ

### ¿Por qué múltiples frameworks?

Este proyecto es un **showcase técnico** que demuestra:
1. Arquitectura multi-framework escalable
2. Single source of truth compartida
3. Diferentes filosofías de desarrollo
4. Trade-offs de cada framework

### ¿Cómo agrego un nuevo framework?

Ver [DEVELOPER_GUIDE.md - Agregar Nuevo Framework](DEVELOPER_GUIDE.md#agregar-nuevo-framework)

### ¿Cómo continúo en una nueva sesión de chat?

Ver [AI_SESSION_GUIDE.md](AI_SESSION_GUIDE.md) - Diseñado para IAs que retoman el proyecto

---

## 🤝 Contribuir

Este es un proyecto personal, pero ideas y sugerencias son bienvenidas.

**Mantener en mente:**
- Single source of truth: `shared/data/cv-data.json`
- Consistencia entre frameworks
- Documentación actualizada
- No duplicar lógica

---

**Última actualización**: 2025-11-13
**Versión docs**: 2.0.0 (reorganización mayor)
