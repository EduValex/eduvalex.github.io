# 🚀 CV Eduardo Valenzuela - Multi-Framework Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://eduvalex.github.io)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![Vue](https://img.shields.io/badge/Vue-3.4-green)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Un CV interactivo y profesional que puede ser visualizado en **múltiples frameworks** (React, Vue, Vanilla JS, Angular) con un solo click. Demuestra habilidades técnicas avanzadas y arquitectura de software escalable.

## ✨ Características Únicas

- 🔄 **Framework Switcher Real**: Cambia entre React, Vue, Vanilla JS y Angular en tiempo real
- 🌙 **Dark Mode**: Tema claro/oscuro con persistencia
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- 🎨 **Design System Centralizado**: Tokens compartidos entre frameworks
- 📊 **Data-Driven**: Una sola fuente de verdad (JSON) para toda la información
- ♿ **Accesible**: Cumple con estándares WCAG 2.1
- 🚀 **Optimizado**: Builds separados para máximo rendimiento

## 🏗️ Arquitectura

```
cv-eduardo-valenzuela/
├── 📦 shared/              # Data y recursos compartidos
│   ├── data/
│   │   └── cv-data.json   # Tu información (única fuente)
│   ├── assets/            # Imágenes, logos, CV PDF
│   └── styles/
│       └── design-tokens.json  # Variables de diseño
│
├── ⚛️ frameworks/          # Implementaciones por framework
│   ├── react/             # React + Vite + Tailwind
│   ├── vue/               # Vue 3 + Vite + Tailwind
│   ├── vanilla/           # HTML/CSS/JS puro
│   └── angular/           # Angular (próximamente)
│
├── 🎛️ switcher/            # Landing y controlador
│   └── index.html         # Selector de framework
│
└── 📄 docs/                # Build final (GitHub Pages)
```

## 🚀 Quick Start

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/eduvalex/eduvalex.github.io.git
cd eduvalex.github.io

# Instalar dependencias de React
cd frameworks/react
npm install

# Iniciar desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # React dev server
npm run dev:vue          # Vue dev server
npm run dev:all          # Todos los frameworks

# Build
npm run build            # Build React
npm run build:vue        # Build Vue
npm run build:all        # Build todos los frameworks

# Deploy
npm run deploy           # Deploy a GitHub Pages
```

## 📝 Personalización

### 1. Edita tu información

```bash
# Abre y edita con tus datos
shared/data/cv-data.json
```

### 2. Personaliza colores y estilos

```bash
# Edita los tokens de diseño
shared/styles/design-tokens.json
```

### 3. Agrega tu foto

```bash
# Coloca tu foto en
shared/assets/images/profile.jpg
```

### 4. Build y deploy

```bash
npm run build:all
npm run deploy
```

## 🎨 Frameworks Disponibles

| Framework | Estado | Características |
|-----------|--------|-----------------|
| ⚛️ React | ✅ Completo | Hooks, Context, React Router |
| 💚 Vue | 🚧 En desarrollo | Composition API, Vue Router |
| 📜 Vanilla JS | 🚧 En desarrollo | ES6+, Web Components |
| 🅰️ Angular | 📋 Planeado | Standalone Components |

## 📚 Documentación

- [📐 Arquitectura del Proyecto](./docs/ARCHITECTURE.md)
- [✍️ Estándares de Código](./docs/CODING_STANDARDS.md)
- [🛠️ Guía de Desarrollo](./docs/DEVELOPMENT_GUIDE.md)
- [🤖 Contexto para IA](./docs/AI_CONTEXT.md)

## 🤝 Contribuir

Este es un proyecto personal, pero si tienes sugerencias:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - ve [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Eduardo Valenzuela**

- GitHub: [@eduvalex](https://github.com/eduvalex)
- LinkedIn: [Eduardo Valenzuela](https://linkedin.com/in/eduardo-valenzuela)
- Portfolio: [eduvalex.github.io](https://eduvalex.github.io)

## 🙏 Agradecimientos

- Inspirado en las mejores prácticas de arquitectura de software
- Comunidades de React, Vue y Angular
- GitHub Pages por el hosting gratuito

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
