import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import data from '@data/cv-data.json';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../../config/emailjs.js';

export function ContactSection() {
  const { personal } = data;
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', message: 'Por favor completa todos los campos' });
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setStatus({ type: 'error', message: 'Por favor ingresa un email válido' });
      return;
    }

    // Verificar que EmailJS esté configurado
    if (!isEmailJSConfigured()) {
      setStatus({ 
        type: 'error', 
        message: 'El formulario aún no está configurado. Por favor contacta directamente por email.' 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        setStatus({ type: 'success', message: '¡Mensaje enviado! Te responderé pronto 🚀' });
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      // Solo loggear en desarrollo
      if (import.meta.env.DEV) {
        console.error('EmailJS error:', error);
      }
      setStatus({ 
        type: 'error', 
        message: 'Hubo un error al enviar el mensaje. Contáctame directamente por email.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-6">
      <h2 className="section-title">Contacto</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Info de contacto */}
        <div className="panel p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Información</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <div>
                <strong className="block text-xs text-slate-500 dark:text-slate-400">Email</strong>
                <a className="text-primary hover:text-primary-light transition-colors" href={`mailto:${personal.email}`}>
                  {personal.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <div>
                <strong className="block text-xs text-slate-500 dark:text-slate-400">Teléfono / WhatsApp</strong>
                <a 
                  href={`https://wa.me/${personal.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1"
                >
                  {personal.phone}
                  <span className="text-xs">💬</span>
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <div>
                <strong className="block text-xs text-slate-500 dark:text-slate-400">Ubicación</strong>
                <a
                  href="https://www.google.com/maps/place/Temuco,+Regi%C3%B3n+de+la+Araucan%C3%ADa,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1"
                >
                  {personal.location}
                  <span className="text-xs">🗺️</span>
                </a>
              </div>
            </li>
          </ul>
          
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <strong className="block text-xs text-slate-500 dark:text-slate-400 mb-3">Redes Sociales</strong>
            <div className="flex flex-wrap gap-3">
              {personal.social.github && (
                <a 
                  href={`https://github.com/${personal.social.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                >
                  <span>💻</span> GitHub
                </a>
              )}
              {personal.social.linkedin && (
                <a 
                  href={`https://linkedin.com/in/${personal.social.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                >
                  <span>💼</span> LinkedIn
                </a>
              )}
              {personal.social.portfolio && (
                <a 
                  href={personal.social.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                >
                  <span>🌐</span> Portfolio
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="panel p-6">
          <h3 className="text-lg font-semibold mb-4">Envíame un mensaje</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg text-sm ${
                status.type === 'success' 
                  ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' 
                  : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  Enviando...
                </>
              ) : (
                <>
                  <span>📨</span>
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
