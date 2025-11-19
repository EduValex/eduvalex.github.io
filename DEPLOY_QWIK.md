# 🚀 Deploy de Qwik a GitHub Pages - TODO LISTO

## ✅ Lo que YA está hecho

1. **Build de Qwik configurado** (genera HTML estático)
   - Adapter estático en `frameworks/qwik/adapters/static/vite.config.ts`
   - Script de prerender en `frameworks/qwik/scripts/prerender.mjs`
   - Package.json actualizado: `npm run build` genera `dist/qwik/index.html`

2. **Deploy script actualizado**
   - `deploy.js` ahora incluye Qwik en el paso de build
   - Copia correctamente `frameworks/qwik/dist/qwik` → `deploy-temp/qwik`

3. **Commits pusheados a main**
   - `0c0637d` - feat(qwik): add static prerender + deploy integration
   - `0d3cac1` - fix(deploy): corregir ruta de dist de Qwik a dist/qwik

---

## 🎯 Lo que TIENES que hacer (1 comando)

### Paso único: Deploy

Desde la raíz del proyecto:

```powershell
node deploy.js
```

Este comando:
- ✅ Construye React (raíz `/`)
- ✅ Construye Astro (`/astro/`)
- ✅ Construye Qwik (`/qwik/`) ← **ahora con index.html**
- ✅ Ensambla todo en `deploy-temp/`
- ✅ Publica a la rama `gh-pages`

---

## ⏱️ Después del deploy

1. **Espera 1-2 minutos** (GitHub Pages tarda en actualizar)

2. **Verifica las URLs:**
   - React: https://eduvalex.github.io/
   - Astro: https://eduvalex.github.io/astro/
   - Qwik: https://eduvalex.github.io/qwik/ ← **YA NO 404**

3. **Ctrl+F5** en cada URL para forzar recarga sin caché

---

## 🔍 Verificación de Qwik en producción

Cuando abras https://eduvalex.github.io/qwik/:

### ✅ Debe verse:
- Navbar con idioma/tema
- Hero con tu foto y botones de CV
- Secciones: About, Services, Experience, Projects, Skills, Contact
- Formulario EmailJS funcional
- Iconos emoji en habilidades

### ❌ Si NO se ve:
1. Revisa DevTools (F12) → pestaña Console
2. Busca errores 404 en archivos JS/CSS
3. Verifica que `/qwik/index.html` existe en gh-pages
   - Ve a: https://github.com/eduvalex/eduvalex.github.io/tree/gh-pages/qwik

---

## 📂 Estructura de deploy final

```
deploy-temp/
├── index.html              ← React (raíz)
├── assets/                 ← React assets
├── astro/                  ← Astro build
│   └── index.html
├── qwik/                   ← Qwik build
│   ├── index.html          ← ¡NUEVO! HTML estático
│   ├── build/              ← JS chunks
│   ├── assets/             ← CSS/JSON
│   └── manifest.json
└── shared/                 ← Recursos compartidos
```

---

## 🛟 Si algo sale mal

### Problema: "gh-pages no está instalado"
```powershell
npm install -g gh-pages
```

### Problema: Build de Qwik falla
```powershell
cd frameworks/qwik
npm install
npm run build
# Debe generar dist/qwik/index.html
```

### Problema: Sigue 404 en /qwik/
1. Verifica que el deploy terminó sin errores
2. Revisa la rama gh-pages en GitHub:
   https://github.com/eduvalex/eduvalex.github.io/tree/gh-pages
3. Confirma que existe la carpeta `/qwik/` con `index.html` dentro

---

## 🎉 Siguiente paso

Cuando todo funcione, puedes actualizar el lab/index.html para añadir el link de Qwik a la lista de frameworks.

---

**Última actualización:** 2025-11-18  
**Commits relevantes:** 0c0637d, 0d3cac1
