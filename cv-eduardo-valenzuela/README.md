# 🚀 CV Eduardo Valenzuela - Multi-Framework Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge)](https://eduvalex.github.io)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> Portfolio personal y CV interactivo construido con React, Vite y Tailwind CSS. Diseño moderno, responsive, con dark mode y animaciones sutiles.

**🌐 Live Demo:** https://eduvalex.github.io

---

## ✨ Características

- 🎨 **Diseño Moderno**: UI limpia con Tailwind CSS y dark mode
- 📱 **100% Responsive**: Optimizado para todos los dispositivos  
- ⚡ **Performance**: Lazy loading, optimizaciones de Vite
- 🌙 **Dark Mode**: Tema claro/oscuro con persistencia
- 📊 **Data-Driven**: Toda la información en `shared/data/cv-data.json`
- 📧 **Formulario Contacto**: Integración con EmailJS (sin backend)
- 🎬 **Animaciones**: Scroll reveal y transiciones suaves
- � **SEO Optimizado**: Meta tags, Open Graph, sitemap
- ♿ **Accesible**: Semántica HTML correcta

## 🚀 Quick Start

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/eduvalex/eduvalex.github.io.git
cd eduvalex.github.io

# Instalar dependencias de React
cd frameworks/react
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## 📝 Personalización

### 1. Editar tu información

Todo el contenido está centralizado en un solo archivo JSON:

```bash
shared/data/cv-data.json
```

Edita tus datos personales, experiencia, proyectos, skills, etc.

### 2. Configurar formulario de contacto

El formulario usa EmailJS (gratis, sin backend):

1. Lee la guía: `docs/GUIA_EMAILJS_RAPIDA.md`
2. Crea cuenta en https://www.emailjs.com/
3. Configura credenciales en: `frameworks/react/src/config/emailjs.js`

### 3. Agregar tu CV en PDF

Coloca tu CV en:
```
shared/assets/cv-eduardo-valenzuela.pdf
```

El botón "Descargar CV" funcionará automáticamente.

### 4. Personalizar colores (opcional)

Edita los tokens de diseño:
```bash
shared/styles/design-tokens.json
```

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo (puerto 5173)

# Build
npm run build            # Compila para producción

# Preview
npm run preview          # Preview del build de producción

# Deploy
npm run deploy           # Publica a GitHub Pages

# Lint
npm run lint             # Revisa el código con ESLint
```

---

## 📦 Estructura del Proyecto

```
cv-eduardo-valenzuela/
├── 📦 shared/                    # Recursos compartidos
│   ├── data/
│   │   └── cv-data.json         # ⭐ Tu información aquí
│   ├── assets/
│   │   ├── images/              # Fotos, logos
│   │   └── cv-*.pdf             # Tu CV en PDF
│   └── styles/
│       └── design-tokens.json   # Variables de diseño
│
├── ⚛️ frameworks/
│   └── react/                   # Implementación React
│       ├── src/
│       │   ├── components/      # Componentes React
│       │   ├── hooks/           # Custom hooks
│       │   ├── lib/             # Utilidades
│       │   └── config/          # Configuración (EmailJS)
│       ├── public/              # Assets públicos
│       └── dist/                # Build de producción
│
├── 📄 docs/                      # Documentación
│   ├── GUIA_EMAILJS_RAPIDA.md
│   ├── MEJORAS_IMPLEMENTADAS.md
│   └── ...
│
├── index.html                    # Landing page
├── deploy.js                     # Script de deploy
└── package.json                  # Configuración raíz
```

---

## 🚀 Deploy a GitHub Pages

### Primera vez

1. Crea el repositorio en GitHub con el nombre exacto:
   ```
   eduvalex.github.io
   ```

2. Conecta tu proyecto local:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/eduvalex/eduvalex.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Configura GitHub Pages:
   - Settings → Pages
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / (root)
   - Save

4. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

5. Espera ~2 minutos y visita: https://eduvalex.github.io

### Actualizaciones futuras

```bash
# Hacer cambios
npm run build
npm run deploy
```

**Nota:** El deploy usa `gh-pages` para publicar. No necesitas GitHub Actions.

---

## 🎨 Tecnologías Utilizadas

### Frontend
- **React 19.2** - UI library
- **Vite 7.2** - Build tool ultra rápido
- **Tailwind CSS 3.4** - Utility-first CSS
- **EmailJS** - Formulario de contacto sin backend

### Herramientas
- **ESLint** - Linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes automáticos
- **gh-pages** - Deploy a GitHub Pages

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ en todos los aspectos
- � **Bundle Size**: ~228 KB (~71 KB gzipped)
- 🖼️ **Lazy Loading**: Imágenes cargadas bajo demanda
- 🎨 **CSS Purging**: Tailwind elimina CSS no usado
- 🚀 **Vite**: Hot Module Replacement ultrarrápido

---

## 🎯 Roadmap

### ✅ Completado
- [x] Portfolio React funcional
- [x] Dark mode con persistencia
- [x] Formulario de contacto (EmailJS)
- [x] SEO completo (meta tags, sitemap)
- [x] Animaciones y transiciones
- [x] Lazy loading de imágenes
- [x] Deploy a GitHub Pages

### 🚧 En progreso
- [ ] Agregar assets (fotos, imágenes de proyectos)
- [ ] Configurar EmailJS
- [ ] Optimizaciones finales de performance

### 📋 Futuro
- [ ] Versión Vue.js
- [ ] Versión Vanilla JS
- [ ] Blog/artículos técnicos
- [ ] Google Analytics / Plausible
- [ ] i18n (inglés/español)
- [ ] Tests con Vitest

---

## 🤝 Contribuir

Este es un proyecto personal de portafolio, pero si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/MejoraMuyCool`)
3. Commit tus cambios (`git commit -m 'Add: Mejora muy cool'`)
4. Push a la rama (`git push origin feature/MejoraMuyCool`)
5. Abre un Pull Request

---

## 📄 Licencia

MIT License - ve [LICENSE](LICENSE) para más detalles.

---

## 👤 Autor

**Eduardo Valenzuela**

- 💼 LinkedIn: [eduardo-valenzuela-milla](https://linkedin.com/in/eduardo-valenzuela-milla)
- 💻 GitHub: [@eduvalex](https://github.com/eduvalex)
- 📧 Email: valenzuela.edo@gmail.com
- 🌐 Portfolio: [eduvalex.github.io](https://eduvalex.github.io)

---

## � Documentación Adicional

- [Guía EmailJS](./docs/GUIA_EMAILJS_RAPIDA.md) - Configuración paso a paso
- [Mejoras Implementadas](./docs/MEJORAS_IMPLEMENTADAS.md) - Changelog detallado
- [Instrucciones Deploy](./DEPLOY_INSTRUCTIONS.md) - Guía completa de deploy

---

<div align="center">

### ⭐ Si te gusta este proyecto, dale una estrella!

**Hecho con ❤️ en React, Vite y Tailwind CSS**

</div>
