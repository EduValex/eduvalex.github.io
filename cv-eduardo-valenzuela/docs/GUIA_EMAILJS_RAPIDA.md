# 📧 Guía Rápida: Configurar EmailJS (5 minutos)

## ✅ Checklist

- [ ] Paso 1: Crear cuenta EmailJS
- [ ] Paso 2: Conectar tu Gmail
- [ ] Paso 3: Crear template de email
- [ ] Paso 4: Copiar credenciales
- [ ] Paso 5: Actualizar código
- [ ] Paso 6: Build y deploy
- [ ] Paso 7: Probar formulario

---

## 🚀 PASO 1: Crear cuenta

1. Abre: https://www.emailjs.com/
2. Click **"Sign Up"** (arriba derecha)
3. Opción rápida: **"Sign up with Google"** (usa tu Gmail)
4. Acepta permisos
5. ✅ Ya tienes cuenta

---

## 📮 PASO 2: Conectar tu Gmail (crear servicio)

1. En el dashboard, menú izquierdo: **"Email Services"**
2. Click botón **"Add New Service"**
3. Selecciona **"Gmail"**
4. Click **"Connect Account"**
5. Selecciona tu cuenta de Gmail
6. Autoriza los permisos
7. (Opcional) Dale un nombre: "Portfolio Contact"
8. Click **"Create Service"**

**📋 IMPORTANTE:** Verás un código como `service_abc123`
- **CÓPIALO** y guárdalo (lo necesitarás después)

---

## 📝 PASO 3: Crear template de email

1. Menú izquierdo: **"Email Templates"**
2. Click **"Create New Template"**
3. Llena así:

### Configuración del template:

**Template Name:**
```
Portfolio Contact Form
```

**From Name:**
```
Portfolio - {{name}}
```

**From Email:**
```
{{email}}
```

**Subject:**
```
Nuevo mensaje de {{name}} desde tu Portfolio
```

**Content (Body):**
```
Has recibido un nuevo mensaje desde tu portfolio:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: {{name}}
Email: {{email}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MENSAJE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enviado desde: https://eduvalex.github.io
Fecha: {{reply_to}}
```

4. Click **"Save"** (abajo a la derecha)

**📋 IMPORTANTE:** Verás un código como `template_xyz789`
- **CÓPIALO** y guárdalo

---

## 🔑 PASO 4: Obtener tu Public Key

1. Click en tu nombre/avatar (arriba derecha)
2. Click **"Account"**
3. Pestaña **"General"** (ya debería estar ahí)
4. Busca **"Public Key"** (o "API Keys")

**📋 IMPORTANTE:** Verás un código como `AbC123XyZ_456`
- **CÓPIALO** y guárdalo

---

## 💻 PASO 5: Actualizar el código

Abre el archivo:
```
frameworks/react/src/config/emailjs.js
```

Reemplaza los valores `YOUR_*` con tus credenciales:

**ANTES:**
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
};
```

**DESPUÉS:** (ejemplo con tus valores reales)
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',        // ← Tu Service ID
  TEMPLATE_ID: 'template_xyz789',      // ← Tu Template ID
  PUBLIC_KEY: 'AbC123XyZ_456',         // ← Tu Public Key
};
```

**Guarda el archivo** (Ctrl+S)

---

## 🚀 PASO 6: Build y Deploy

En PowerShell, desde la raíz del proyecto:

```powershell
npm run build
```

Si todo va bien, verás:
```
✓ built in ~10s
```

Ahora deploy:
```powershell
npm run deploy
```

Espera ~2 minutos para que se publique.

---

## ✅ PASO 7: Probar el formulario

1. Abre tu sitio: https://eduvalex.github.io
2. Baja hasta la sección **"Contacto"**
3. Llena el formulario con datos de prueba:
   - Nombre: Tu nombre
   - Email: Tu email
   - Mensaje: "Prueba de formulario"
4. Click **"Enviar Mensaje"**
5. Deberías ver: *"¡Mensaje enviado! Te responderé pronto 🚀"*
6. **Revisa tu Gmail** (el que conectaste)
7. Debería llegar un email con el mensaje

---

## 🎯 Resumen de credenciales

Anota tus 3 credenciales aquí:

```
Service ID:   service_____________
Template ID:  template_____________
Public Key:   _____________________
```

---

## 🆘 Problemas comunes

**"Service ID is invalid"**
- Revisa que copiaste bien el Service ID
- Asegúrate de que el servicio de Gmail esté activo

**No llegan los emails**
- Revisa spam/promociones
- Verifica que el template tenga los campos `{{name}}`, `{{email}}`, `{{message}}`
- Checa la consola del navegador (F12) por errores

**Error al hacer build**
- Asegúrate de guardar el archivo `emailjs.js`
- Verifica que no haya errores de sintaxis (comillas, comas)

---

## 📊 Límites del plan gratuito

- ✅ 200 emails/mes
- ✅ Sin tarjeta de crédito
- ✅ Gratis para siempre

Si necesitas más: $7/mes = 1,000 emails

---

**¿Listo?** Empieza con el Paso 1 y avísame cuando llegues a cada paso si necesitas ayuda.
