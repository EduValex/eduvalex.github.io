// Datos del CV - copiados desde shared/data/cv-data.json
export const cvData = {
  personal: {
    name: "Eduardo Valenzuela Milla",
    title: "FullStack Developer | Plataformas E-Commerce",
    email: "valenzuela.edo@gmail.com",
    phone: "+56929646969",
    location: "Temuco, Araucanía, Chile",
    photo: "/shared/assets/images/profile.jpg",
    tagline: "Desarrollador Full Stack apasionado por la construcción de soluciones digitales",
    social: {
      github: "eduvalex",
      linkedin: "eduardo-valenzuela-milla",
      twitter: "",
      portfolio: "https://eduvalex.github.io"
    }
  },

  about: {
    es: "Mi camino en tecnología comenzó en la Universidad de La Frontera (UFRO) en Temuco, Chile, donde descubrí mi pasión por transformar ideas en soluciones digitales. Durante mi formación, realicé prácticas profesionales que marcaron mi carrera: primero en Anaconda Web, donde me sumergí en el desarrollo PHP con Yii Framework, y luego en EnLaNubeLab, donde construí una aplicación web completa con Ruby on Rails para catalogar hierbas medicinales.\n\nComo freelance, expandí mi stack desarrollando una aplicación de gestión para abogados con Python y Django. Sin embargo, en 2018 decidí explorar otra de mis pasiones: fundé Escuela Nómade Yoga, donde combino mi rol como instructor de yoga certificado con el emprendimiento. La escuela sigue activa hasta hoy.\n\nEn 2022 retomé la tecnología con fuerza, co-fundando Valex Marketing, una agencia especializada en desarrollo WordPress y SEO. Gestionamos proyectos para clientes corporativos, e-commerce y startups, entregando soluciones web completas con mantenimiento continuo.\n\nParalelamente, trabajé de forma remota para Grant Solutions en España, desarrollando y manteniendo sitios WordPress empresariales con integraciones avanzadas. Mis habilidades se consolidaron a través de pruebas técnicas complejas: creé un plugin WordPress profesional con React y Google Drive API, un sistema de sorteos Full Stack con Django y Nuxt.js, y actualmente desarrollo un SaaS multi-tenant para restaurantes.\n\nHoy combino lo mejor de ambos mundos: ayudo a empresas a crecer digitalmente mientras mantengo mi conexión con el bienestar a través del yoga. Mi enfoque siempre es el mismo: código limpio, soluciones escalables y compromiso real con cada proyecto.",
    en: "My journey in technology began at Universidad de La Frontera (UFRO) in Temuco, Chile, where I discovered my passion for turning ideas into digital solutions. During my studies, I completed professional internships that shaped my career: first at Anaconda Web, diving into PHP development with Yii Framework, and then at EnLaNubeLab, where I built a complete web application with Ruby on Rails for cataloging medicinal herbs.\n\nAs a freelancer, I expanded my stack by developing a management application for lawyers using Python and Django. However, in 2018 I decided to explore another passion: I founded Escuela Nómade Yoga, where I combine my role as a certified yoga instructor with entrepreneurship. The school remains active today.\n\nIn 2022 I returned to technology full force, co-founding Valex Marketing, an agency specialized in WordPress development and SEO. We manage projects for corporate clients, e-commerce, and startups, delivering complete web solutions with ongoing maintenance.\n\nSimultaneously, I worked remotely for Grant Solutions in Spain, developing and maintaining enterprise WordPress sites with advanced integrations. My skills were consolidated through complex technical challenges: I created a professional WordPress plugin with React and Google Drive API, a Full Stack raffle system with Django and Nuxt.js, and I'm currently developing a multi-tenant SaaS for restaurants.\n\nToday I combine the best of both worlds: helping businesses grow digitally while maintaining my connection to wellness through yoga. My approach remains constant: clean code, scalable solutions, and genuine commitment to every project."
  },

  services: [
    {
      icon: '🛠️',
      titleES: 'Desarrollo Web & Apps',
      titleEN: 'Web & App Development',
      descES: 'Sitios web corporativos, e-commerce, landing pages y aplicaciones web full-stack con React, Django, Rails y WordPress. Responsive, rápidos y optimizados para conversión.',
      descEN: 'Corporate websites, e-commerce, landing pages and full-stack web applications with React, Django, Rails and WordPress. Responsive, fast and conversion-optimized.',
      tags: ['React', 'WordPress', 'Django', 'E-Commerce', 'SaaS']
    },
    {
      icon: '🔍',
      titleES: 'Auditorías SEO',
      titleEN: 'SEO Audits',
      descES: 'Análisis técnico completo de SEO on-page, velocidad de carga, estructura del sitio, Core Web Vitals y estrategia de keywords con reportes detallados y plan de acción.',
      descEN: 'Complete technical SEO on-page analysis, page speed, site structure, Core Web Vitals and keyword strategy with detailed reports and action plan.',
      tags: ['SEO On-Page', 'PageSpeed', 'Analytics', 'SEMrush']
    },
    {
      icon: '🤖',
      titleES: 'Asistentes IA Personalizados',
      titleEN: 'Custom AI Assistants',
      descES: 'Diseño e integración de chatbots inteligentes con ChatGPT, Claude AI y modelos custom para automatización, atención al cliente 24/7 y workflows empresariales.',
      descEN: 'Design and integration of intelligent chatbots with ChatGPT, Claude AI and custom models for automation, 24/7 customer service and business workflows.',
      tags: ['ChatGPT', 'Claude AI', 'Automation', 'Webhooks']
    },
    {
      icon: '🔌',
      titleES: 'Integraciones & Plugins',
      titleEN: 'Integrations & Plugins',
      descES: 'Desarrollo de plugins WordPress personalizados, conexiones con APIs externas (Google, Instagram, Drive), pasarelas de pago y automatizaciones con webhooks.',
      descEN: 'Custom WordPress plugin development, external API connections (Google, Instagram, Drive), payment gateways and webhook automations.',
      tags: ['WordPress Plugins', 'APIs', 'Google Drive', 'Webhooks']
    }
  ],

  experience: [
    {
      company: "Valex Marketing",
      position: "Co-Fundador & Desarrollador Web Full Stack",
      period: "Abr 2022 - Actualidad",
      location: "Temuco, Chile (Híbrido)",
      description: "Co-fundé agencia de marketing digital especializada en desarrollo web, SEO y estrategias digitales. Desarrollo completo de sitios WordPress para clientes corporativos, e-commerce, y startups.",
      technologies: ["WordPress", "WooCommerce", "React", "SEO", "PHP", "MySQL"]
    },
    {
      company: "Grant Solutions",
      position: "Desarrollo Web",
      period: "Feb 2025 - Jul 2025",
      location: "España (Remoto)",
      description: "Desarrollé y mantuve múltiples sitios web para clientes utilizando WordPress, integrando Zoho CRM.",
      technologies: ["WordPress", "Zoho CRM", "SEO", "PHP"]
    },
    {
      company: "Escuela Nómade Yoga",
      position: "Fundador & Instructor Certificado",
      period: "Jun 2018 - Actualidad",
      location: "Temuco, Chile",
      description: "Fundé escuela de yoga especializada en formación de profesores y clases regulares. Gestiono marketing digital, plataforma web y operaciones del negocio.",
      technologies: ["WordPress", "Google Analytics", "Redes Sociales"]
    }
  ],

  projects: [
    {
      name: "Plugin WordPress con React & Google Drive",
      description: "Sistema de gestión documental con integración a Google Drive API. Permite subir, visualizar y gestionar archivos desde WordPress con interfaz React moderna.",
      technologies: ["WordPress", "React", "Google Drive API", "REST API", "PHP"],
      category: "WordPress"
    },
    {
      name: "Sistema de Sorteos Full Stack",
      description: "Plataforma completa para gestión de sorteos online con panel admin, sistema de participantes, validación de datos y generación automática de ganadores.",
      technologies: ["Django", "Nuxt.js", "PostgreSQL", "REST APIs", "Celery"],
      category: "Full Stack"
    },
    {
      name: "SaaS Multi-Tenant para Restaurantes",
      description: "Sistema de gestión integral para restaurantes con múltiples locales. Incluye gestión de menús, pedidos, inventario y reportes en tiempo real.",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "Celery", "JWT"],
      category: "Full Stack",
      link: ""
    },
    {
      name: "Dadneo Capital",
      description: "Sitio corporativo para firma de inversiones con diseño premium, integraciones de contacto y optimización SEO.",
      technologies: ["WordPress", "SEO", "Google Analytics"],
      category: "WordPress",
      link: "https://dadneocapital.com"
    },
    {
      name: "CreaSmile",
      description: "E-commerce con catálogo de 300+ productos, integración con compras públicas del Estado, gestión de inventario y pasarela de pago.",
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      category: "WordPress",
      link: "https://creasmile.cl"
    }
  ],

  skills: {
    "Frontend": ["React", "Next.js", "Vue", "Astro", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Django", "Python", "PHP", "Ruby on Rails"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "DevOps & Tools": ["Git", "Docker", "Vercel", "Railway", "GitHub Actions"],
    "CMS & E-Commerce": ["WordPress", "WooCommerce"],
    "SEO & Marketing": ["SEO On-Page", "Google Analytics", "PageSpeed", "SEMrush"]
  }
}
