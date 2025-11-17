/**
 * EMAILJS_CONFIG - Archivo de ejemplo
 * 
 * Copia este archivo a emailjs.js y reemplaza los valores
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_tu_service_id',
  TEMPLATE_ID: 'template_tu_template_id',
  PUBLIC_KEY: 'tu_public_key_aqui',
};

export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  );
};
