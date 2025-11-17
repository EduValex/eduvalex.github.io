/**
 * Configuración de EmailJS
 * 
 * INSTRUCCIONES:
 * 1. Regístrate en https://www.emailjs.com/
 * 2. Crea un servicio de email (Gmail recomendado)
 * 3. Crea un template de email
 * 4. Reemplaza los valores YOUR_* con tus credenciales reales
 */

export const EMAILJS_CONFIG = {
  // Service ID - El ID de tu servicio de Gmail
  SERVICE_ID: 'service_35dui0c',
  
  // Template ID - El ID de tu template "Contact Us"
  TEMPLATE_ID: 'template_dlh2p8t',
  
  // Public Key - Exactamente como aparece en Account > General
  PUBLIC_KEY: 'qZw7aS4i2gCI3Wz2B',
};

// Validar que las credenciales estén configuradas
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  );
};
