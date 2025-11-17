# 🚀 DEPLOYMENT GUIDE - Multi-Framework

**CV Eduardo Valenzuela - Deployment Multi-Framework en GitHub Pages**

---

## 🎯 Objetivo

Deployar múltiples versiones del CV (React, Astro, Vue, etc.) en GitHub Pages, cada una en su subdirectorio:

```
https://eduvalex.github.io/          ← Landing page (selector de frameworks)
https://eduvalex.github.io/react     ← Versión React
https://eduvalex.github.io/astro     ← Versión Astro
https://eduvalex.github.io/vue       ← Versión Vue (futuro)
```

---

## 📋 Estado Actual

### ✅ Funcionando

- React deployada en `/` (raíz)
- GitHub Pages configurado
- Workflow CI/CD funcionando
- URL: https://eduvalex.github.io

### ⚠️ Pendiente

- Astro NO deployada (build local funciona)
- Configuración multi-framework
- Landing page selector

---

## 🔧 Configuración Multi-Framework

### Opción 1: Workflow Consolidado (RECOMENDADO)

Modificar `.github/workflows/deploy.yml` para compilar todos los frameworks:

```yaml
name: Deploy Multi-Framework to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      #############################################
      # BUILD REACT
      #############################################
      - name: Install React dependencies
        run: |
          cd frameworks/react
          npm ci

      - name: Build React
        run: |
          cd frameworks/react
          npm run build
        env:
          # Si React necesita base path específico
          VITE_BASE_URL: /react

      #############################################
      # BUILD ASTRO
      #############################################
      - name: Install Astro dependencies
        run: |
          cd frameworks/astro
          npm ci

      - name: Build Astro
        run: |
          cd frameworks/astro
          npm run build

      #############################################
      # MERGE BUILDS
      #############################################
      - name: Create deployment structure
        run: |
          mkdir -p deploy-output

          # Landing page (crear después)
          # cp -r landing/* deploy-output/

          # React version
          mkdir -p deploy-output/react
          cp -r frameworks/react/dist/* deploy-output/react/

          # Astro version
          mkdir -p deploy-output/astro
          cp -r frameworks/astro/dist/* deploy-output/astro/

          # Shared assets (opcional)
          # cp -r shared/assets deploy-output/assets

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: deploy-output

  deploy:
    runs-on: ubuntu-latest
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Opción 2: Workflows Separados

Crear workflows individuales:
- `.github/workflows/deploy-react.yml`
- `.github/workflows/deploy-astro.yml`

**Ventaja**: Builds independientes
**Desventaja**: Más complejo, pueden sobrescribirse

---

## ⚙️ Configuración de Base Paths

Cada framework necesita saber su subdirectorio:

### React (`frameworks/react/vite.config.js`)

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react/', // ← Base path para GitHub Pages
  // ... resto de config
});
```

### Astro (`frameworks/astro/astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eduvalex.github.io',
  base: '/astro', // ← Ya configurado
});
```

### Vue (Futuro - `frameworks/vue/vite.config.js`)

```javascript
export default defineConfig({
  base: '/vue/',
  // ...
});
```

---

## 🏠 Landing Page (Selector de Frameworks)

Crear `landing/index.html` en la raíz del proyecto:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eduardo Valenzuela - CV Multi-Framework</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .container {
      text-align: center;
      max-width: 800px;
      padding: 2rem;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.9;
    }
    .frameworks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .framework-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      padding: 2rem;
      text-decoration: none;
      color: white;
      transition: all 0.3s;
    }
    .framework-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }
    .framework-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .framework-name {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .framework-desc {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Eduardo Valenzuela</h1>
    <p class="subtitle">Full Stack Developer - Multi-Framework Portfolio</p>

    <p>Este CV está implementado en múltiples frameworks para demostrar diferentes enfoques técnicos. Elige tu favorito:</p>

    <div class="frameworks">
      <a href="/react" class="framework-card">
        <div class="framework-icon">⚛️</div>
        <div class="framework-name">React</div>
        <div class="framework-desc">Interactividad máxima, 35+ animaciones</div>
        <span class="badge">Producción</span>
      </a>

      <a href="/astro" class="framework-card">
        <div class="framework-icon">🚀</div>
        <div class="framework-name">Astro</div>
        <div class="framework-desc">Ultra rápido, SEO optimizado</div>
        <span class="badge">Beta</span>
      </a>

      <a href="/vue" class="framework-card" style="opacity: 0.5; pointer-events: none;">
        <div class="framework-icon">💚</div>
        <div class="framework-name">Vue</div>
        <div class="framework-desc">Reactivity elegante</div>
        <span class="badge">Próximamente</span>
      </a>

      <a href="/angular" class="framework-card" style="opacity: 0.5; pointer-events: none;">
        <div class="framework-icon">🅰️</div>
        <div class="framework-name">Angular</div>
        <div class="framework-desc">Enterprise-ready</div>
        <span class="badge">Planeado</span>
      </a>
    </div>
  </div>
</body>
</html>
```

---

## 📦 Estructura de Deploy Final

```
deploy-output/                        ← Directorio temporal para GitHub Pages
├── index.html                        ← Landing page selector
├── react/                            ← Build de React
│   ├── index.html
│   ├── assets/
│   └── ...
├── astro/                            ← Build de Astro
│   ├── index.html
│   ├── _astro/
│   └── ...
└── vue/                              ← Build de Vue (futuro)
    └── ...
```

---

## 🔄 Workflow de Deploy Local

Para testing antes de push:

```bash
# 1. Build todos los frameworks
cd frameworks/react
npm run build
cd ../..

cd frameworks/astro
npm run build
cd ../..

# 2. Crear estructura de deploy
mkdir -p deploy-test
cp landing/index.html deploy-test/
mkdir -p deploy-test/react
cp -r frameworks/react/dist/* deploy-test/react/
mkdir -p deploy-test/astro
cp -r frameworks/astro/dist/* deploy-test/astro/

# 3. Preview local
cd deploy-test
python -m http.server 8080
# O con npx:
npx serve
```

Luego visita:
- http://localhost:8080 (landing)
- http://localhost:8080/react
- http://localhost:8080/astro

---

## 🚀 Deployment Manual (Emergencias)

Si el workflow falla, deploy manual:

```bash
# 1. Build todo
npm run build  # (configurar este script en package.json raíz)

# 2. Deploy con gh-pages
npm install -D gh-pages
npx gh-pages -d deploy-output
```

O usar el script existente `deploy.js` (modificarlo para multi-framework).

---

## ⚙️ Script de Deploy Automatizado

Crear `scripts/build-all.sh`:

```bash
#!/bin/bash
set -e

echo "🚀 Building all frameworks..."

# Clean
rm -rf deploy-output
mkdir -p deploy-output

# Landing page
echo "📄 Copying landing page..."
cp landing/index.html deploy-output/

# React
echo "⚛️ Building React..."
cd frameworks/react
npm ci
npm run build
cd ../..
mkdir -p deploy-output/react
cp -r frameworks/react/dist/* deploy-output/react/

# Astro
echo "🚀 Building Astro..."
cd frameworks/astro
npm ci
npm run build
cd ../..
mkdir -p deploy-output/astro
cp -r frameworks/astro/dist/* deploy-output/astro/

# Vue (futuro)
# echo "💚 Building Vue..."
# cd frameworks/vue
# npm ci
# npm run build
# cd ../..
# mkdir -p deploy-output/vue
# cp -r frameworks/vue/dist/* deploy-output/vue/

echo "✅ All frameworks built successfully!"
echo "📦 Output in deploy-output/"
```

Uso:
```bash
chmod +x scripts/build-all.sh
./scripts/build-all.sh
```

---

## 🔍 Troubleshooting

### Astro CSS no carga

**Síntoma**: CSS funciona local, no en producción
**Causa**: Base path incorrecto
**Solución**: Verificar `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://eduvalex.github.io',
  base: '/astro', // ← Debe coincidir con subdirectorio
});
```

### React rutas rotas

**Síntoma**: 404 al navegar
**Causa**: Base path no configurado
**Solución**: Verificar `vite.config.js`:

```javascript
export default defineConfig({
  base: '/react/', // ← Slash final importante
});
```

### Assets no cargan

**Síntoma**: Imágenes/fuentes 404
**Causa**: Rutas absolutas en código
**Solución**: Usar rutas relativas o `import.meta.env.BASE_URL`:

```javascript
// React
const baseUrl = import.meta.env.BASE_URL;
<img src={`${baseUrl}image.jpg`} />

// Astro
const baseUrl = import.meta.env.BASE_URL;
<img src={`${baseUrl}image.jpg`} />
```

---

## 📊 Checklist Pre-Deploy

- [ ] Todos los frameworks buildean sin errores
- [ ] Base paths configurados correctamente
- [ ] Landing page creada
- [ ] Assets compartidos copiados
- [ ] Testing local con `serve` o `http-server`
- [ ] Workflow actualizado en `.github/workflows/`
- [ ] Commit y push
- [ ] Verificar deployment en GitHub Actions
- [ ] Verificar URLs en producción

---

## 🎯 Próximos Pasos

1. **Ahora**: Implementar landing page
2. **Esta semana**: Configurar workflow multi-framework
3. **Este mes**: Agregar Vue version
4. **Futuro**: Agregar Angular, Svelte

---

**Última actualización**: 2025-11-13
**Autor**: Eduardo Valenzuela
**Status**: Documentación completa, pendiente implementación
