// Configuración de EmailJS para la versión Astro
// Usa las mismas credenciales públicas que en React
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_35dui0c',
  TEMPLATE_ID: 'template_dlh2p8t',
  PUBLIC_KEY: 'qZw7aS4i2gCI3Wz2B',
};

export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
  );
};
