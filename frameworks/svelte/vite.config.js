import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Enable Svelte 5 runes mode for modern reactivity
        runes: true,
      },
    }),
  ],
  base: '/svelte/',
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../shared'),
      '@data': path.resolve(__dirname, '../../shared/data'),
      '@assets': path.resolve(__dirname, '../../shared/assets')
    }
  }
});
