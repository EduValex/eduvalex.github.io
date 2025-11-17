import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://eduvalex.github.io',
  // Importante: como la versión Astro se publica bajo /astro,
  // necesitamos ajustar el base para que los assets se resuelvan correctamente.
  base: '/astro/',
});
