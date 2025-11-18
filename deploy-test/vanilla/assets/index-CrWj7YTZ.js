(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&c(e)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();const A={name:"Eduardo Valenzuela Milla",email:"valenzuela.edo@gmail.com",phone:"+56929646969",location:"Temuco, Araucanía, Chile",social:{github:"eduvalex",linkedin:"eduardo-valenzuela-milla"}},I={es:`Mi camino en tecnología comenzó en la Universidad de La Frontera (UFRO) en Temuco, Chile, donde descubrí mi pasión por transformar ideas en soluciones digitales. Durante mi formación, realicé prácticas profesionales que marcaron mi carrera: primero en Anaconda Web, donde me sumergí en el desarrollo PHP con Yii Framework, y luego en EnLaNubeLab, donde construí una aplicación web completa con Ruby on Rails para catalogar hierbas medicinales.

Como freelance, expandí mi stack desarrollando una aplicación de gestión para abogados con Python y Django. Sin embargo, en 2018 decidí explorar otra de mis pasiones: fundé Escuela Nómade Yoga, donde combino mi rol como instructor de yoga certificado con el emprendimiento. La escuela sigue activa hasta hoy.

En 2022 retomé la tecnología con fuerza, co-fundando Valex Marketing, una agencia especializada en desarrollo WordPress y SEO. Gestionamos proyectos para clientes corporativos, e-commerce y startups, entregando soluciones web completas con mantenimiento continuo.

Paralelamente, trabajé de forma remota para Grant Solutions en España, desarrollando y manteniendo sitios WordPress empresariales con integraciones avanzadas. Mis habilidades se consolidaron a través de pruebas técnicas complejas: creé un plugin WordPress profesional con React y Google Drive API, un sistema de sorteos Full Stack con Django y Nuxt.js, y actualmente desarrollo un SaaS multi-tenant para restaurantes.

Hoy combino lo mejor de ambos mundos: ayudo a empresas a crecer digitalmente mientras mantengo mi conexión con el bienestar a través del yoga. Mi enfoque siempre es el mismo: código limpio, soluciones escalables y compromiso real con cada proyecto.`,en:`My journey in technology began at Universidad de La Frontera (UFRO) in Temuco, Chile, where I discovered my passion for turning ideas into digital solutions. During my studies, I completed professional internships that shaped my career: first at Anaconda Web, diving into PHP development with Yii Framework, and then at EnLaNubeLab, where I built a complete web application with Ruby on Rails for cataloging medicinal herbs.

As a freelancer, I expanded my stack by developing a management application for lawyers using Python and Django. However, in 2018 I decided to explore another passion: I founded Escuela Nómade Yoga, where I combine my role as a certified yoga instructor with entrepreneurship. The school remains active today.

In 2022 I returned to technology full force, co-founding Valex Marketing, an agency specialized in WordPress development and SEO. We manage projects for corporate clients, e-commerce, and startups, delivering complete web solutions with ongoing maintenance.

Simultaneously, I worked remotely for Grant Solutions in Spain, developing and maintaining enterprise WordPress sites with advanced integrations. My skills were consolidated through complex technical challenges: I created a professional WordPress plugin with React and Google Drive API, a Full Stack raffle system with Django and Nuxt.js, and I'm currently developing a multi-tenant SaaS for restaurants.

Today I combine the best of both worlds: helping businesses grow digitally while maintaining my connection to wellness through yoga. My approach remains constant: clean code, scalable solutions, and genuine commitment to every project.`},j=[{company:"Valex Marketing",position:"Co-Fundador & Desarrollador Web Full Stack",period:"Abr 2022 - Actualidad",location:"Temuco, Chile (Híbrido)",description:"Co-fundé agencia de marketing digital especializada en desarrollo web, SEO y estrategias digitales. Desarrollo completo de sitios WordPress para clientes corporativos, e-commerce, y startups. Gestión de proyectos web desde concepto hasta deployment, mantención mensual y reportes de posicionamiento SEO.",technologies:["WordPress","WooCommerce","React","SEO","PHP","MySQL","Google Analytics"],achievements:["Desarrollé 10+ sitios web corporativos para clientes (Dadneo Capital, Cerveza Mala Junta, CreaSmile, CreaBord, Espacio Amuleto)","Gestión de catálogo digital de 300+ productos para CreaSmile con integración a compras públicas del Estado","Implementé integraciones con Instagram API, Google Reviews, y sistemas de gestión de contenido autoadministrables","Servicio de mantención mensual y reportes SEO para cartera de clientes corporativos"]},{company:"Grant Solutions",position:"Desarrollo Web",period:"Feb 2025 - Jul 2025",location:"España (Remoto)",description:"Desarrollé y mantuve múltiples sitios web para clientes utilizando WordPress, integrando Zoho CRM para mejorar la gestión de relaciones con clientes.",technologies:["WordPress","Zoho CRM","SEO","PHP"],achievements:["Integración exitosa de Zoho CRM en múltiples sitios web","Optimización SEO On-Page para aumentar visibilidad de clientes","Mantenimiento y actualización de portafolio de sitios corporativos"]},{company:"Enlanubelab",position:"Desarrollador de WordPress",period:"Abr 2015 - Dic 2015",location:"Temuco, Araucanía, Chile",description:"Desarrollo de aplicación web full-stack con Ruby on Rails para catálogo de hierbas medicinales y mantenimiento de sitios WordPress.",technologies:["Ruby on Rails","WordPress","PHP","MySQL"],achievements:["Desarrollé aplicación web full-stack con Ruby on Rails desde concepto hasta despliegue","Mantuve más de 12 sitios de clientes basados en WordPress","Aseguré correcto funcionamiento y actualización de plataformas"]},{company:"Anacondaweb",position:"Alumno Practicante",period:"Ene 2014 - Mar 2014",location:"Temuco, Araucanía, Chile",description:"Colaboré en el desarrollo de Intranet corporativa con PHP y Yii Framework, digitalizando procesos internos de la empresa.",technologies:["PHP","Yii Framework","MySQL","JavaScript"],achievements:["Contribuí al desarrollo de Intranet corporativa con Yii Framework","Ayudé a digitalizar y centralizar procesos internos","Mejoré la eficiencia del equipo mediante soluciones web"]}],x=[{name:"CV Multi-Framework Portfolio",description:"Portfolio interactivo que se puede visualizar en múltiples frameworks (React, Vue, Vanilla JS) con una única fuente de datos",longDescription:"Proyecto arquitectónico que demuestra versatilidad técnica mediante la implementación del mismo CV en diferentes tecnologías. Utiliza principio de Single Source of Truth con datos centralizados en JSON, deploy automatizado con GitHub Actions y diseño responsive con Tailwind CSS.",image:"/shared/assets/images/projects/cv-multi.jpg",technologies:["React","Vue.js","Vite","Tailwind CSS","GitHub Pages","JavaScript"],github:"https://github.com/eduvalex/eduvalex.github.io",demo:"https://eduvalex.github.io",featured:!0,category:"Personal",client:!1},{name:"Dadneo Capital - Venture Capital",description:"Sitio corporativo WordPress para firma de capital emprendedor con 20+ años de experiencia, gestión de fondos VC e inversionistas ángeles",longDescription:"Desarrollo completo de sitio corporativo para Dadneo Capital, firma especializada en venture capital y asesorías a startups. Implementé diseño moderno y profesional, sección de servicios (Fondos VC, Asesorías 1:1, Valorizaciones), integración de blog corporativo, formularios de contacto avanzados, y optimización SEO. El sitio comunica experiencia de 20+ años en la industria, gestión de fondos, inversionistas ángeles y portfolio de startups invertidas. Cliente destacado de Valex Marketing con testimonial 5 estrellas.",image:"/shared/assets/images/projects/dadneo.jpg",technologies:["WordPress","PHP","SEO","MySQL","JavaScript","CSS","Google Analytics"],github:"",demo:"https://dadneo.capital",featured:!0,category:"WordPress",client:!0},{name:"Cerveza Mala Junta - E-Commerce",description:"Sitio WordPress para cervecería artesanal de La Araucanía con catálogo de productos, integración Instagram y sistema de pedidos B2B",longDescription:"Desarrollo completo de sitio web para Cerveza Mala Junta, cervecería artesanal familiar de Labranza. Implementé catálogo de cervezas artesanales (APA, Witbier, Stout) con fichas técnicas detalladas, historia de la empresa, misión y visión, integración con feed de Instagram para mantener contenido vigente, formularios de contacto para eventos y pedidos B2B (pubs/bares), sección de ingredientes premium, y diseño responsive. Sistema autoadministrable que permite al cliente capacitado mantener el sitio. Entregado en menos de 1 mes.",image:"/shared/assets/images/projects/malajunta.jpg",technologies:["WordPress","PHP","Instagram API","SEO","MySQL","JavaScript","CSS"],github:"",demo:"https://www.cervezamalajunta.cl",featured:!0,category:"WordPress",client:!0},{name:"creasmile.cl - Catálogo Corporativo",description:"Plataforma WordPress para empresa de regalos corporativos y papelería gráfica con 15 años de trayectoria, optimización SEO y catálogo digital",longDescription:"Desarrollo y administración completa de sitio corporativo para Creasmile, empresa de La Araucanía especializada en regalos corporativos, papelería gráfica y soportes publicitarios. Implementé catálogo digital de productos (bolígrafos, bolsas TNT, soportes gráficos), integración con compras públicas del Estado, slider de productos destacados, sección de clientes corporativos (UFRO, instituciones públicas), formularios de contacto y sistema de gestión de contenido autoadministrable. Optimización SEO On-Page completa y reducción de tiempo de carga en más de 50% mediante lazy loading y optimización de imágenes.",image:"/shared/assets/images/projects/creasmile.jpg",technologies:["WordPress","PHP","SEO","MySQL","JavaScript","CSS","Google Drive API"],github:"",demo:"https://creasmile.cl",featured:!0,category:"WordPress",client:!0},{name:"creabord.cl - Catálogo de Bordados",description:"Sitio WordPress de catálogo para bordados personalizados y ropa corporativa, con integración Instagram y formularios de cotización",longDescription:"Desarrollo y gestión completa del sitio web para CreaBord, empresa especializada en bordados personalizados y ropa corporativa (jockeys, parkas, chaquetas, poleras). Implementé catálogo de productos por categorías, sistema de productos destacados, galería de trabajos realizados con feed de Instagram, sección de clientes corporativos, formularios de contacto y solicitud de cotización, optimización de imágenes de bordados y diseño responsive. Administración de contenido y mantenimiento continuo del sitio.",image:"/shared/assets/images/projects/creabord.jpg",technologies:["WordPress","PHP","Instagram API","SEO","MySQL","JavaScript","CSS"],github:"",demo:"https://creabord.cl",featured:!0,category:"WordPress",client:!0},{name:"Plugin WordPress Personalizado",description:"Plugin WordPress para prueba técnica WPMUDEV con integración de Google Drive API y React",longDescription:"Plugin WordPress profesional desarrollado como prueba técnica. Incluye interfaz React moderna con i18n, sistema completo de autenticación OAuth 2.0 con Google Drive API, manejo de archivos (upload/download/list), dark mode, REST API endpoints, y procesamiento en background. Implementa WPCS (WordPress Coding Standards), arquitectura PSR-4, y optimización de paquetes.",image:"/shared/assets/images/projects/wp-plugin.jpg",technologies:["WordPress","React","PHP","Google Drive API","OAuth 2.0","REST API","Webpack","SCSS"],github:"https://github.com/EduValex/wpmudev-plugin-test",demo:"",featured:!0,category:"WordPress",client:!1,type:"Prueba Técnica"},{name:"Sorteo San Valentín - CTS Turismo",description:"Sistema Full Stack de gestión de sorteos con autenticación JWT, verificación de email, panel admin y procesamiento asíncrono con Celery",longDescription:"Sistema Full Stack para gestionar sorteos con registro de participantes, verificación de email mediante tokens, y panel administrativo. Backend Django REST con autenticación JWT, procesamiento asíncrono de emails con Celery + Redis (modo síncrono fallback), suite completa de 40+ tests unitarios y de integración. Frontend Nuxt.js 3 con TypeScript, Tailwind CSS, SweetAlert2 y efectos confetti. Implementa arquitectura desacoplada, graceful degradation para emails, y flujo completo desde registro hasta notificación de ganadores.",image:"/shared/assets/images/projects/sorteo-sv.jpg",technologies:["Django","Python","Nuxt.js","TypeScript","Celery","Redis","PostgreSQL","JWT","Tailwind CSS","REST API"],github:"https://github.com/EduValex/sorteo-san-valentin",demo:"https://sorteo-san-valentin.vercel.app",featured:!0,category:"Full Stack",client:!1,type:"Prueba Técnica"},{name:"SaaS Restaurante - Sistema de Gestión",description:"Sistema Full Stack SaaS para gestión de productos y pedidos de restaurante con CRUD completo, control de stock en tiempo real y transacciones",longDescription:"Sistema de gestión de restaurante desarrollado como prueba técnica para Neural Code AI. Backend Node.js + Express con PostgreSQL, implementa CRUD completo de productos, gestión de pedidos con transacciones para integridad de datos, control automático de stock, y validaciones de negocio. Frontend React SPA con React Router, notificaciones toast, formato de moneda CLP localizado, y diseño responsive con Bootstrap 5. Arquitectura RESTful API con controladores organizados, manejo de errores robusto, y lógica de carrito de compras en tiempo real.",image:"/shared/assets/images/projects/saas-restaurant.jpg",technologies:["React","Node.js","Express","PostgreSQL","Bootstrap","React Router","CORS","REST API"],github:"",demo:"",featured:!0,category:"Full Stack",client:!1,type:"Personal"},{name:"Catálogo de Hierbas Medicinales",description:"Aplicación web full-stack con Ruby on Rails para catálogo interactivo de plantas medicinales",longDescription:"Desarrollé aplicación web completa desde concepto inicial hasta despliegue. Sistema CRUD con Ruby on Rails, base de datos PostgreSQL, autenticación de usuarios y panel de administración. Diseño responsive y búsqueda avanzada de plantas.",image:"/shared/assets/images/projects/hierbas.jpg",technologies:["Ruby on Rails","PostgreSQL","Bootstrap","JavaScript","Heroku"],github:"",demo:"",featured:!1,category:"Full Stack",client:!1,type:"Prueba Técnica"}],k={frontend:[{name:"React.js",level:90},{name:"JavaScript/ES6+",level:95},{name:"HTML/CSS",level:95},{name:"Tailwind CSS",level:85},{name:"Bootstrap",level:80},{name:"WordPress",level:90},{name:"Shopify",level:80},{name:"Angular",level:70},{name:"Vue.js",level:75}],backend:[{name:"Node.js",level:90},{name:"Express",level:90},{name:"Python",level:85},{name:"Django",level:85},{name:"Flask",level:80},{name:"Ruby on Rails",level:85},{name:"PHP",level:90},{name:"Yii Framework",level:75}],tools:{databases:[{name:"PostgreSQL",level:85},{name:"MySQL",level:85},{name:"MongoDB",level:85}],seoAnalytics:[{name:"SEO",level:85},{name:"SEO Audits",level:85},{name:"SEMrush",level:80},{name:"Google Analytics",level:85},{name:"Google Search Console",level:80},{name:"PageSpeed Insights",level:80},{name:"Google Trends",level:75}],devTools:[{name:"Git",level:90},{name:"GitHub",level:90},{name:"REST APIs",level:90},{name:"Postman",level:85},{name:"Docker",level:70},{name:"AWS",level:65},{name:"Wix",level:70},{name:"Beaver Builder",level:70}]},ai:[{name:"ChatGPT",level:95},{name:"Claude AI",level:95},{name:"GitHub Copilot",level:90},{name:"Google Gemini",level:85},{name:"Loveable AI",level:80},{name:"Grok",level:80},{name:"Asistentes IA Personalizados",level:85}]},s={personal:A,about:I,experience:j,projects:x,skills:k};let p="es",u="dark";const D=[{icon:"🛠️",titleES:"Desarrollo Web & Apps",titleEN:"Web & App Development",descES:"Sitios web corporativos, e-commerce, landing pages y aplicaciones web full-stack con React, Django, Rails y WordPress.",descEN:"Corporate websites, e-commerce, landing pages and full-stack web applications with React, Django, Rails and WordPress.",tags:["React","WordPress","Django","E-Commerce","SaaS"]},{icon:"🔍",titleES:"Auditorías SEO",titleEN:"SEO Audits",descES:"Análisis técnico completo de SEO on-page, velocidad de carga, estructura del sitio y Core Web Vitals.",descEN:"Complete technical SEO on-page analysis, page speed, site structure and Core Web Vitals.",tags:["SEO On-Page","PageSpeed","Analytics","SEMrush"]},{icon:"🤖",titleES:"Asistentes IA Personalizados",titleEN:"Custom AI Assistants",descES:"Diseño e integración de chatbots inteligentes con ChatGPT, Claude AI y modelos custom para automatización.",descEN:"Design and integration of intelligent chatbots with ChatGPT, Claude AI and custom models for automation.",tags:["ChatGPT","Claude AI","Automation","Webhooks"]},{icon:"🔌",titleES:"Integraciones & Plugins",titleEN:"Integrations & Plugins",descES:"Desarrollo de plugins WordPress personalizados, conexiones con APIs externas y pasarelas de pago.",descEN:"Custom WordPress plugin development, external API connections and payment gateways.",tags:["WordPress Plugins","APIs","Google Drive","Webhooks"]}],C={HTML:"🌐",CSS:"🎨",JavaScript:"⚡","JavaScript/ES6+":"⚡",TypeScript:"📘",React:"⚛️","React.js":"⚛️","Vue.js":"💚",Angular:"🅰️","Tailwind CSS":"🎨",Bootstrap:"🅱️",WordPress:"📰",Shopify:"🛒","Node.js":"🟢",Express:"⚡",Python:"🐍",Django:"🎸",Flask:"🔶","Ruby on Rails":"💎",Ruby:"💎",PHP:"🐘",PostgreSQL:"🐘",MySQL:"🐬",MongoDB:"🍃",Git:"🔀",Docker:"🐳",ChatGPT:"🤖","GitHub Copilot":"🤖",GitHub:"🐱","Google Gemini":"✨",Jira:"📋",Trello:"📋",Postman:"📮",SEMrush:"📊",Wix:"🌐","Google Analytics":"📊","Google Search Console":"🔍","PageSpeed Insights":"⚡",Vercel:"▲",Render:"🚀",Railway:"🚂",Heroku:"🟣","REST API":"🔗","REST APIs":"🔗",SEO:"🔍","SEO Audits":"🧪","Yii Framework":"🎴","Zoho CRM":"📇",AWS:"☁️","Claude AI":"🤖","Loveable AI":"💖",Monday:"📋","HTML/CSS":"🎨","Google Trends":"📈","Asistentes IA Personalizados":"🛠️",Grok:"🤖","Beaver Builder":"🦫"},v=o=>C[o]?`<span style="margin-right:4px">${C[o]}</span>`:"";function R(){p=localStorage.getItem("vanilla-lang")||"es",u=localStorage.getItem("vanilla-theme")||"dark",document.body.classList.toggle("light",u==="light"),document.getElementById("theme-toggle").textContent=u==="light"?"☀️":"🌙",T(),w(),$()}function T(){document.getElementById("theme-toggle").addEventListener("click",()=>{u=u==="dark"?"light":"dark",localStorage.setItem("vanilla-theme",u),document.body.classList.toggle("light",u==="light"),document.getElementById("theme-toggle").textContent=u==="light"?"☀️":"🌙",document.getElementById("navbar").classList.toggle("light",u==="light")}),document.querySelectorAll(".lang-toggle button").forEach(o=>{o.addEventListener("click",()=>{p=o.dataset.lang,localStorage.setItem("vanilla-lang",p),document.querySelectorAll(".lang-toggle button").forEach(a=>a.classList.remove("active")),o.classList.add("active"),document.querySelectorAll(".menu-links a").forEach(a=>{const l=a.querySelector(".text");l&&a.dataset.langEs&&a.dataset.langEn&&(l.textContent=p==="es"?a.dataset.langEs:a.dataset.langEn)}),w()})}),document.querySelectorAll(".lang-toggle button").forEach(o=>{o.classList.toggle("active",o.dataset.lang===p)}),document.querySelectorAll(".menu-links a").forEach(o=>{const a=o.querySelector(".text");a&&o.dataset.langEs&&o.dataset.langEn&&(a.textContent=p==="es"?o.dataset.langEs:o.dataset.langEn)}),document.getElementById("navbar").classList.toggle("light",u==="light")}function w(){var l,c,i,n;const o=document.getElementById("app"),a=(e,g)=>p==="es"?e:g;o.innerHTML=`
    <!-- Hero -->
    <section class="panel reveal">
      <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <img src="/favicon.ico" alt="Eduardo Valenzuela" style="width: 90px; height: 90px; border-radius: 18px; object-fit: cover; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,.3);" />
        <div style="flex: 1;">
          <h1>${a(`Hola, soy ${s.personal.name}`,`Hi, I'm ${s.personal.name}`)}</h1>
          <small>${s.personal.location}</small>
        </div>
      </div>
      <p style="margin-top: 1rem;">
        ${a("Desarrollador Full‑Stack. Aquí tienes mi CV en PDF listo para descargar.","Full‑Stack Developer. Here's my resume in PDF ready to download.")}
      </p>
      <p style="margin-top: 1.25rem;">
        <a class="btn" href="/CV-Eduardo-Valenzuela.pdf" download>
          ${a("📄 Descargar CV","📄 Download Resume")}
        </a>
        <a class="btn secondary" href="#contact" style="margin-left: 0.75rem;">
          ${a("💬 Contacto","💬 Contact")}
        </a>
      </p>
    </section>

    <!-- About -->
    <section id="about" class="panel reveal">
      <h2>
        <span>👨‍💻</span>
        <span>${a("Sobre mí","About Me")}</span>
      </h2>
  ${(p==="es"?(l=s.about)==null?void 0:l.es:(c=s.about)==null?void 0:c.en).split(`

`).map(e=>`<p>${e}</p>`).join("")}
    </section>

    <!-- Services -->
    <section id="services" class="panel reveal">
      <div style="text-align: center; max-width: 650px; margin: 0 auto 2rem;">
        <h2 style="justify-content: center;">
          <span>🚀</span>
          <span>${a("Servicios","Services")}</span>
        </h2>
        <p style="color: #94a3b8; font-size: 0.95rem;">
          ${a("Soluciones digitales completas para hacer crecer tu negocio","Complete digital solutions to grow your business")}
        </p>
      </div>
      <div class="grid">
        ${D.map(e=>`
          <div class="service">
            <div class="icon-box">${e.icon}</div>
            <h3>${p==="es"?e.titleES:e.titleEN}</h3>
            <p>${p==="es"?e.descES:e.descEN}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              ${e.tags.map(g=>`<span class="badge">${g}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="panel reveal">
      <h2>
        <span>💼</span>
        <span>${a("Experiencia","Experience")}</span>
      </h2>
      <div class="grid-2">
        ${s.experience.map(e=>`
          <div class="exp-card">
            <h3>${e.position}</h3>
            <small>${e.company} • ${e.period}</small>
            <p>${e.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
              ${e.technologies.map(g=>`<span class="badge">${g}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="panel reveal">
      <h2>
        <span>🎨</span>
        <span>${a("Proyectos Destacados","Featured Projects")}</span>
      </h2>
        <!-- Filtros por categoría -->
        <div class="panel" style="padding:.5rem .75rem; margin-bottom:1rem;">
          <div style="display:flex; flex-wrap:wrap; gap:.5rem;" id="proj-filters"></div>
        </div>
      <div class="grid">
        ${s.projects.map(e=>`
          <div class="proj-card">
            <h3>${e.name}</h3>
            <small>${e.year}</small>
            <p>${e.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
              ${e.technologies.map(g=>`<span class="badge">${g}</span>`).join("")}
            </div>
            <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
              ${e.demo?`<a href="${e.demo}" target="_blank" rel="noopener" class="btn" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">${a("🌐 Ver Demo","🌐 View Demo")}</a>`:""}
              ${e.github?`<a href="${e.github}" target="_blank" rel="noopener" class="btn secondary" style="padding: 0.5rem 0.9rem; font-size: 0.85rem;">${a("💻 Código","💻 Code")}</a>`:""}
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="panel reveal">
      <h2>
        <span>⚡</span>
        <span>${a("Habilidades","Skills")}</span>
      </h2>
      <div class="grid-skills">
        <article class="panel">
          <h3>Frontend</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.frontend.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
        <article class="panel">
          <h3>Backend</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.backend.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
        <article class="panel">
          <h3>${a("Herramientas · Bases de datos","Tools · Databases")}</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.tools.databases.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
        <article class="panel">
          <h3>SEO & Analytics</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.tools.seoAnalytics.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
        <article class="panel">
          <h3>${a("Herramientas · Dev & Deploy","Tools · Dev & Deploy")}</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.tools.devTools.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
        <article class="panel">
          <h3>IA</h3>
          <div class="badges" style="margin-top:.75rem">
            ${s.skills.ai.map(e=>`<span class="badge" title="${e.level}%">${v(e.name)}${e.name}</span>`).join("")}
          </div>
        </article>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="panel reveal">
      <h2>
        <span>📧</span>
        <span>${a("Contacto","Contact")}</span>
      </h2>
      <div class="grid-2">
        <div>
          <h3 style="margin-bottom: 1rem;">${a("¿Hablamos?","Let's talk?")}</h3>
          <p>${a("Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, envíame un mensaje.","If you have a project in mind or just want to chat about technology, send me a message.")}</p>
          <ul class="contact-info">
            <li>
              <span class="icon">📧</span>
              <div class="detail">
                <strong>Email</strong>
                <a href="mailto:${s.personal.email}">${s.personal.email}</a>
              </div>
            </li>
            <li>
              <span class="icon">📱</span>
              <div class="detail">
                <strong>${a("Teléfono","Phone")}</strong>
                <a href="tel:${s.personal.phone}">${s.personal.phone}</a>
              </div>
            </li>
            <li>
              <span class="icon">💼</span>
              <div class="detail">
                <strong>LinkedIn</strong>
                <a href="${`https://www.linkedin.com/in/${s.personal.social.linkedin}`}" target="_blank" rel="noopener">${a("Ver perfil","View profile")}</a>
              </div>
            </li>
            <li>
              <span class="icon">💻</span>
              <div class="detail">
                <strong>GitHub</strong>
                <a href="${`https://github.com/${s.personal.social.github}`}" target="_blank" rel="noopener">@${(n=(i=s.personal)==null?void 0:i.social)==null?void 0:n.github}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <form id="contact-form">
            <div class="field">
              <label for="name" class="label">${a("Nombre *","Name *")}</label>
              <input id="name" name="name" type="text" class="input" required />
            </div>
            <div class="field">
              <label for="email" class="label">Email *</label>
              <input id="email" name="email" type="email" class="input" placeholder="tu@email.com" required />
            </div>
            <div class="field">
              <label for="message" class="label">${a("Mensaje *","Message *")}</label>
              <textarea id="message" name="message" class="textarea" required></textarea>
            </div>
            <div id="form-status"></div>
            <button type="submit" class="btn" style="margin-top: 0.5rem;">
              ${a("📨 Enviar Mensaje","📨 Send Message")}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="text-align: center; padding: 2rem 0; color: #64748b; font-size: 0.85rem;">
      <p>© 2025 Eduardo Valenzuela — ${a("Hecho con","Built with")} ⚡ Vanilla JS</p>
      <p style="margin-top: 0.5rem;">
        <a href="/" style="margin-right: 1rem;">⚛️ React</a>
        <a href="/astro/" style="margin-right: 1rem;">⭐ Astro</a>
        <a href="/vue/" style="margin-right: 1rem;">💚 Vue</a>
        <a href="/svelte/" style="margin-right: 1rem;">🧡 Svelte</a>
        <a href="/solid/">🔷 Solid</a>
      </p>
    </footer>
  `,L(),$(),W()}function W(){const o=["Django","Python","Node.js","Express","Ruby on Rails","PostgreSQL","JWT","Celery","Redis","Nuxt.js"],a=r=>{if(r.category)return r.category;const d=r.technologies||[];return d.includes("WordPress")||d.includes("WooCommerce")?"WordPress":o.some(h=>d.includes(h))?"Full Stack":"Personal"},l=["Todos","Full Stack","WordPress","Personal"].filter(r=>r==="Todos"?s.projects.length>0:s.projects.some(d=>a(d)===r)),c={Todos:"🗂️",WordPress:"🧩","Full Stack":"🧰",Personal:"⭐"},i=r=>r==="Todos"?s.projects.length:s.projects.filter(d=>a(d)===r).length;let n="Todos";const e=document.getElementById("proj-filters"),g=()=>{e.innerHTML=l.map(r=>`
      <button class="badge ${n===r?"active":""}" data-cat="${r}" aria-selected="${n===r}">
        <span style="margin-right:.35rem;">${c[r]||"🏷️"}</span>
        ${r}
        <span style="margin-left:.5rem; opacity:.8;">${i(r)}</span>
      </button>`).join("")},f=()=>{const r=n==="Todos"?s.projects:s.projects.filter(m=>a(m)===n),d={"Full Stack":0,WordPress:1,Personal:2},h=[...r].sort((m,y)=>{if(n==="Todos"){const P=d[a(m)]??99,E=d[a(y)]??99;if(P!==E)return P-E}return Number(y.featured)-Number(m.featured)});document.querySelector("#projects + .grid, section#projects + .grid");const b=document.querySelector("section#projects"),S=b==null?void 0:b.querySelector(".grid");S&&(S.innerHTML=h.map(m=>`
      <div class="proj-card">
        <h3>${m.name}</h3>
        <small>${m.year||""}</small>
        <p>${m.description}</p>
        <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem;">
          ${(m.technologies||[]).map(y=>`<span class="badge">${y}</span>`).join("")}
        </div>
        <div style="display:flex; gap:.75rem; margin-top:1rem; flex-wrap:wrap;">
          ${m.demo?`<a href="${m.demo}" target="_blank" rel="noopener" class="btn" style="padding:.5rem .9rem; font-size:.85rem;">${t("🌐 Ver Demo","🌐 View Demo")}</a>`:""}
          ${m.github?`<a href="${m.github}" target="_blank" rel="noopener" class="btn secondary" style="padding:.5rem .9rem; font-size:.85rem;">${t("💻 Código","💻 Code")}</a>`:""}
        </div>
      </div>
    `).join(""))};g(),f(),e.addEventListener("click",r=>{const d=r.target.closest("button[data-cat]");d&&(n=d.getAttribute("data-cat"),g(),f())})}function L(){const o=document.getElementById("contact-form"),a=document.getElementById("form-status");o.addEventListener("submit",async l=>{l.preventDefault();const c=o.querySelector('button[type="submit"]'),i=c.textContent;c.disabled=!0,c.textContent="⏳...",a.innerHTML="";try{if((await emailjs.send("service_35dui0c","template_dlh2p8t",{from_name:o.name.value,from_email:o.email.value,message:o.message.value},"qZw7aS4i2gCI3Wz2B")).text==="OK")a.innerHTML=`<div class="alert success">${p==="es"?"¡Mensaje enviado! Te responderé pronto 🚀":"Message sent! I'll reply soon 🚀"}</div>`,o.reset();else throw new Error("EmailJS error")}catch(n){console.error("EmailJS error:",n),a.innerHTML=`<div class="alert error">${p==="es"?"Hubo un error al enviar. Intenta nuevamente.":"There was an error sending. Please try again."}</div>`}finally{c.disabled=!1,c.textContent=i}})}function $(){const o=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&(l.target.classList.add("visible"),o.unobserve(l.target))})},{threshold:.1});document.querySelectorAll(".reveal").forEach(a=>{a.classList.remove("visible"),o.observe(a)})}R();
