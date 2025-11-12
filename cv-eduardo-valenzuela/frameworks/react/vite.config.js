import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/frameworks/react/', // Ruta correcta en GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../shared'),
      '@data': path.resolve(__dirname, '../../shared/data'),
      '@tokens': path.resolve(__dirname, '../../shared/styles/design-tokens.json'),
      '@assets': path.resolve(__dirname, '../../shared/assets'),
    },
  },
});
