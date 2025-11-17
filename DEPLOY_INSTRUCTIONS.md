# 🚀 Pasos para Deploy en eduvalex.github.io

## 1. Crear el repositorio en GitHub

Ve a https://github.com/new y crea un repositorio con el nombre exacto:
```
eduvalex.github.io
```

**IMPORTANTE**: 
- ✅ El nombre DEBE ser exactamente `eduvalex.github.io`
- ✅ Puede ser público o privado
- ❌ NO inicialices con README (ya tenemos uno)

## 2. Conectar tu proyecto local con GitHub

Ejecuta estos comandos en la terminal desde la raíz del proyecto:

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: CV multi-framework setup"

# Agregar el remote
git remote add origin https://github.com/eduvalex/eduvalex.github.io.git

# Cambiar a branch main (si estás en master)
git branch -M main

# Push inicial
git push -u origin main
```

## 3. Configurar GitHub Pages

Publicaremos con la rama `gh-pages` usando el script de deploy incluido.

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (arriba a la derecha)
3. En el menú lateral, click en **Pages**
4. En **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/** (root)
5. Guarda la configuración

## 4. Hacer el primer deploy

Desde la raíz del proyecto, ejecuta:

```bash
npm run build
npm run deploy
```

Esto compila React y publica el contenido en la rama `gh-pages`. En ~1-2 minutos tu sitio estará disponible en:

https://eduvalex.github.io

## 5. Verificar el deploy

- Ve a la pestaña **Actions** en tu repositorio
- Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
- Cuando termine (✅ verde), tu sitio estará live

## 6. Futuros cambios

Para publicar nuevas versiones:

```bash
# Hacer cambios en tu código
npm run build
npm run deploy
```

## Estructura de URLs

- **Página principal**: https://eduvalex.github.io
- **Assets**: https://eduvalex.github.io/assets/...
- **Imágenes**: https://eduvalex.github.io/shared/assets/images/...

## Troubleshooting

### Si el sitio no carga:
1. Verifica en Settings > Pages que esté configurado "Deploy from a branch" con `gh-pages / (root)`
2. Revisa que la rama `gh-pages` exista y tenga contenido (pestaña Branches)
3. Vuelve a ejecutar `npm run deploy` y espera ~2 minutos

### Si las imágenes no cargan:
1. Verifica que las rutas en cv-data.json sean relativas
2. Asegúrate de que las imágenes estén en shared/assets/images/

### Si el dark mode no funciona:
1. Verifica que theme.js se esté cargando correctamente
2. Chequea la consola del navegador por errores

---

**¡Tu CV estará online en eduvalex.github.io!** 🚀
