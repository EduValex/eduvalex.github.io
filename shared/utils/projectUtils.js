/**
 * Project Utilities - Lógica compartida para categorización y filtrado de proyectos
 * Single Source of Truth para toda la lógica relacionada con proyectos
 */

/**
 * Tecnologías que identifican un proyecto como Full Stack
 */
export const FULLSTACK_KEYS = [
  'Django',
  'Python',
  'Node.js',
  'Express',
  'Ruby on Rails',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'JWT',
  'Celery',
  'Redis',
  'Nuxt.js',
  'Next.js',
  'TypeScript',
  'REST API',
  'GraphQL'
];

/**
 * Tecnologías que identifican un proyecto como WordPress
 */
export const WORDPRESS_KEYS = ['WordPress', 'WooCommerce', 'PHP'];

/**
 * Categorías disponibles
 */
export const CATEGORIES = {
  ALL: 'Todos',
  WORDPRESS: 'WordPress',
  FULLSTACK: 'Full Stack',
  PERSONAL: 'Personal'
};

/**
 * Determina la categoría de un proyecto basándose en sus tecnologías
 * @param {Object} project - Objeto proyecto con propiedades category y technologies
 * @returns {string} Categoría del proyecto
 */
export function getCategory(project) {
  // Si ya tiene categoría explícita, usarla
  if (project.category) {
    return project.category;
  }

  const technologies = project.technologies || [];

  // Verificar si es WordPress
  if (technologies.some(tech => WORDPRESS_KEYS.includes(tech))) {
    return CATEGORIES.WORDPRESS;
  }

  // Verificar si es Full Stack
  if (technologies.some(tech => FULLSTACK_KEYS.includes(tech))) {
    return CATEGORIES.FULLSTACK;
  }

  // Por defecto, Personal
  return CATEGORIES.PERSONAL;
}

/**
 * Verifica si un proyecto pertenece a una categoría
 * Permite que un proyecto esté en múltiples categorías (ej: Full Stack + Personal)
 * @param {Object} project - Objeto proyecto
 * @param {string} category - Categoría a verificar
 * @returns {boolean} true si el proyecto pertenece a la categoría
 */
export function matchesCategory(project, category) {
  if (category === CATEGORIES.ALL) {
    return true;
  }

  // Verificar categoría principal
  const mainCategory = getCategory(project);
  if (mainCategory === category) {
    return true;
  }

  // Si la categoría es Personal, verificar si tiene client: false
  if (category === CATEGORIES.PERSONAL && project.client === false) {
    return true;
  }

  return false;
}

/**
 * Filtra proyectos por categoría
 * @param {Array} projects - Array de proyectos
 * @param {string} category - Categoría a filtrar ('Todos', 'WordPress', 'Full Stack', 'Personal')
 * @returns {Array} Proyectos filtrados
 */
export function filterByCategory(projects, category) {
  if (!projects || !Array.isArray(projects)) {
    return [];
  }

  if (category === CATEGORIES.ALL || !category) {
    return projects;
  }

  return projects.filter(project => matchesCategory(project, category));
}

/**
 * Obtiene todas las categorías únicas de un array de proyectos
 * @param {Array} projects - Array de proyectos
 * @returns {Array} Array de categorías únicas
 */
export function getUniqueCategories(projects) {
  if (!projects || !Array.isArray(projects)) {
    return [CATEGORIES.ALL];
  }

  const categories = new Set([CATEGORIES.ALL]);

  projects.forEach(project => {
    const category = getCategory(project);
    categories.add(category);
  });

  return Array.from(categories);
}

/**
 * Obtiene proyectos destacados
 * @param {Array} projects - Array de proyectos
 * @returns {Array} Proyectos marcados como featured
 */
export function getFeaturedProjects(projects) {
  if (!projects || !Array.isArray(projects)) {
    return [];
  }

  return projects.filter(project => project.featured === true);
}

/**
 * Cuenta proyectos por categoría
 * @param {Array} projects - Array de proyectos
 * @returns {Object} Objeto con conteo por categoría
 */
export function countByCategory(projects) {
  if (!projects || !Array.isArray(projects)) {
    return {};
  }

  const counts = {
    [CATEGORIES.ALL]: projects.length,
    [CATEGORIES.WORDPRESS]: 0,
    [CATEGORIES.FULLSTACK]: 0,
    [CATEGORIES.PERSONAL]: 0
  };

  // Contar cuántos proyectos matchean cada categoría
  projects.forEach(project => {
    if (matchesCategory(project, CATEGORIES.WORDPRESS)) {
      counts[CATEGORIES.WORDPRESS]++;
    }
    if (matchesCategory(project, CATEGORIES.FULLSTACK)) {
      counts[CATEGORIES.FULLSTACK]++;
    }
    if (matchesCategory(project, CATEGORIES.PERSONAL)) {
      counts[CATEGORIES.PERSONAL]++;
    }
  });

  return counts;
}
