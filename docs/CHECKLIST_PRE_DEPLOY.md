# ✅ Checklist Pre-Deploy

Usa esta lista antes de hacer deploy para asegurarte de que todo esté listo.

## 📋 Configuración Básica

- [ ] **Git inicializado**: `git init` (si es primera vez)
- [ ] **Remote configurado**: `git remote add origin https://github.com/eduvalex/eduvalex.github.io.git`
- [ ] **Branch main**: `git branch -M main`

## 📝 Contenido

- [ ] **Datos actualizados**: Revisar `shared/data/cv-data.json`
  - [ ] Información personal correcta
  - [ ] Email: `valenzuela.edo@gmail.com`
  - [ ] Experiencia actualizada
  - [ ] Proyectos completos
  - [ ] Skills actuales

## 🔧 Configuración

- [ ] **EmailJS configurado**: `frameworks/react/src/config/emailjs.js`
  - [ ] Service ID reemplazado
  - [ ] Template ID reemplazado
  - [ ] Public Key reemplazado
  - [ ] Formulario probado localmente

## 🎨 Assets (opcional por ahora)

- [ ] **Foto de perfil**: `shared/assets/images/profile.jpg`
- [ ] **CV PDF**: `shared/assets/cv-eduardo-valenzuela.pdf`
- [ ] **Imágenes de proyectos**: `shared/assets/images/projects/`
- [ ] **Favicon personalizado**: Reemplazar `/vite.svg`

## 🧪 Testing Local

- [ ] **Build exitoso**: `npm run build` sin errores
- [ ] **Preview funcional**: `npm run preview` y revisar en navegador
- [ ] **Dark mode funciona**: Toggle entre claro/oscuro
- [ ] **Formulario funciona**: Enviar mensaje de prueba
- [ ] **Links funcionan**: GitHub, LinkedIn, etc.
- [ ] **Responsive**: Revisar en mobile (F12 > Toggle device toolbar)

## 🚀 Deploy

- [ ] **Primer commit**: `git add . && git commit -m "Initial deploy"`
- [ ] **Push a GitHub**: `git push -u origin main`
- [ ] **GitHub Pages configurado**:
  - Settings → Pages
  - Source: Deploy from a branch
  - Branch: gh-pages / (root)
- [ ] **Deploy ejecutado**: `npm run deploy`
- [ ] **Sitio verificado**: Esperar 2 min y abrir https://eduvalex.github.io

## 🔍 Post-Deploy Checklist

- [ ] **Sitio carga correctamente**
- [ ] **SEO visible**: Ver preview al compartir en LinkedIn/Twitter
- [ ] **Formulario funciona en producción**
- [ ] **Analytics configurado** (opcional)
- [ ] **Performance verificado**: Lighthouse en Chrome DevTools

## 📱 Share & Promote

- [ ] **Agregar a LinkedIn**: Skills → Portfolio/Website
- [ ] **Actualizar GitHub profile**: Pin el repositorio
- [ ] **README de GitHub**: Mejorar presentación
- [ ] **Twitter/X**: Compartir tu nuevo portfolio
- [ ] **Dev.to / Hashnode**: Escribir artículo sobre el proceso

---

## 🆘 Si algo falla

### Build falla
```bash
cd frameworks/react
npm install
npm run build
```

### Deploy falla
```bash
# Verificar que gh-pages esté instalado
npm install --save-dev gh-pages

# Intentar de nuevo
npm run deploy
```

### Sitio no carga
1. Verificar Settings → Pages en GitHub
2. Branch debe ser `gh-pages`
3. Esperar 2-3 minutos más
4. Limpiar cache del navegador (Ctrl+Shift+R)

### Formulario no funciona
1. Verificar credenciales EmailJS
2. Revisar consola del navegador (F12)
3. Probar en modo incógnito

---

**💡 Tip:** Haz un checklist de esta lista y márcala paso a paso antes del deploy final.
