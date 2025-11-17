# 📧 Configuración del Formulario de Contacto (EmailJS)

El formulario de contacto usa **EmailJS** para enviar emails sin necesidad de backend.

## Pasos para configurar:

### 1. Crear cuenta gratuita en EmailJS
- Ve a: https://www.emailjs.com/
- Regístrate (gratis hasta 200 emails/mes)

### 2. Crear un servicio de email
1. En el dashboard, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** (ejemplo: `service_abc123`)

### 3. Crear un template de email
1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Usa este contenido:

**Subject:**
```
Nuevo mensaje de {{name}} desde tu Portfolio
```

**Content:**
```
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{name}}
Email: {{email}}

Mensaje:
{{message}}

---
Enviado desde eduvalex.github.io
```

4. Copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a **Account** > **General**
2. Copia tu **Public Key** (ejemplo: `pk_abc123xyz`)

### 5. Actualizar el código
Edita `frameworks/react/src/components/sections/Contact.jsx` y reemplaza:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // ← Pega tu Service ID aquí
  'YOUR_TEMPLATE_ID',     // ← Pega tu Template ID aquí
  formRef.current,
  'YOUR_PUBLIC_KEY'       // ← Pega tu Public Key aquí
);
```

### 6. ¡Listo!
Build y deploy:
```bash
npm run build
npm run deploy
```

## Troubleshooting

**Error: Service ID is invalid**
- Verifica que hayas copiado correctamente el Service ID desde EmailJS

**Emails no llegan:**
- Revisa la carpeta de spam
- Verifica que el template esté configurado correctamente
- Asegúrate de haber verificado tu email en EmailJS

**Límite de 200 emails alcanzado:**
- Upgrade a plan pago ($7/mes para 1,000 emails)
- O usa otra solución como Formspree, Getform, etc.

## Alternativas sin EmailJS

Si prefieres no usar EmailJS, puedes:
1. **Mailto link simple** (abre cliente de email del usuario)
2. **Formspree** (gratis hasta 50 submissions/mes)
3. **Getform** (gratis hasta 50 submissions/mes)
4. **Backend propio** con Nodemailer + Express

---

¿Necesitas ayuda? Revisa la [documentación de EmailJS](https://www.emailjs.com/docs/)
