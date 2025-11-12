import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Emular __dirname en ESM
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/frameworks/react/', // Ruta correcta en GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Optimizaciones de performance con esbuild (más rápido que terser)
    minify: 'esbuild',
    target: 'es2015',
    rollupOptions: {
      output: {
        // Mejorar cache con nombres de archivos
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'emailjs': ['@emailjs/browser'],
        },
      },
    },
    // Aumentar límite de advertencia de tamaño
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../shared'),
      '@data': path.resolve(__dirname, '../../shared/data'),
      '@tokens': path.resolve(__dirname, '../../shared/styles/design-tokens.json'),
      '@assets': path.resolve(__dirname, '../../shared/assets'),
    },
  },
  // Optimizar servidor de desarrollo
  server: {
    port: 5173,
    open: true,
  },
});
