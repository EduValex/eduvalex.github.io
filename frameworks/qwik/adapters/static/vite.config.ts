import { defineConfig, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((_ctx): UserConfig => {
  return {
    base: '/qwik/',
    plugins: [
      qwikCity({
        adapter: staticAdapter({
          origin: 'https://eduvalex.github.io',
        }),
        basePathname: '/qwik/',
      }),
      qwikVite(),
      tsconfigPaths({ root: '.' }),
    ],
    resolve: {
      alias: {
        '@shared': '../../shared',
        '@data': '../../shared/data',
        '@assets': '../../shared/assets',
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});
