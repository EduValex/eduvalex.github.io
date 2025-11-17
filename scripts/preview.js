#!/usr/bin/env node
/**
 * preview.js
 * Servidor estático con fallback para preview de build multi-framework.
 * Rutas soportadas:
 *   /                -> React index.html
 *   /astro           -> astro/index.html
 *   /astro/...       -> archivos dentro de astro/
 *   /lab             -> lab/index.html (si existe)
 *   /lab/...         -> archivos dentro de lab/
 * Fallback SPA: cualquier ruta HTML desconocida vuelve a index.html (React).
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const deployDir = path.join(rootDir, 'deploy-test');

const port = 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 internal error');
      return;
    }
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

function serveIndex(res) {
  const indexPath = path.join(deployDir, 'index.html');
  if (!exists(indexPath)) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('index.html missing');
    return;
  }
  sendFile(res, indexPath);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURI(req.url.split('?')[0]);
  if (urlPath.endsWith('/') && urlPath !== '/') urlPath = urlPath.slice(0, -1);

  // Rutas Astro
  if (urlPath === '/astro') {
    const astroIndex = path.join(deployDir, 'astro', 'index.html');
    return exists(astroIndex) ? sendFile(res, astroIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/astro/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const astroIndex = path.join(deployDir, 'astro', 'index.html');
    if (exists(astroIndex)) return sendFile(res, astroIndex);
    return serveIndex(res);
  }

  // Rutas Vue
  if (urlPath === '/vue') {
    const vueIndex = path.join(deployDir, 'vue', 'index.html');
    return exists(vueIndex) ? sendFile(res, vueIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/vue/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const vueIndex = path.join(deployDir, 'vue', 'index.html');
    if (exists(vueIndex)) return sendFile(res, vueIndex);
    return serveIndex(res);
  }

  // Rutas Svelte
  if (urlPath === '/svelte') {
    const svelteIndex = path.join(deployDir, 'svelte', 'index.html');
    return exists(svelteIndex) ? sendFile(res, svelteIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/svelte/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const svelteIndex = path.join(deployDir, 'svelte', 'index.html');
    if (exists(svelteIndex)) return sendFile(res, svelteIndex);
    return serveIndex(res);
  }

  // Rutas Solid
  if (urlPath === '/solid') {
    const solidIndex = path.join(deployDir, 'solid', 'index.html');
    return exists(solidIndex) ? sendFile(res, solidIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/solid/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const solidIndex = path.join(deployDir, 'solid', 'index.html');
    if (exists(solidIndex)) return sendFile(res, solidIndex);
    return serveIndex(res);
  }

  // Rutas Vanilla
  if (urlPath === '/vanilla') {
    const vanillaIndex = path.join(deployDir, 'vanilla', 'index.html');
    return exists(vanillaIndex) ? sendFile(res, vanillaIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/vanilla/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const vanillaIndex = path.join(deployDir, 'vanilla', 'index.html');
    if (exists(vanillaIndex)) return sendFile(res, vanillaIndex);
    return serveIndex(res);
  }

  // Rutas Lab
  if (urlPath === '/lab') {
    const labIndex = path.join(deployDir, 'lab', 'index.html');
    return exists(labIndex) ? sendFile(res, labIndex) : serveIndex(res);
  }
  if (urlPath.startsWith('/lab/')) {
    const candidate = path.join(deployDir, urlPath);
    if (exists(candidate)) return sendFile(res, candidate);
    const labIndex = path.join(deployDir, 'lab', 'index.html');
    if (exists(labIndex)) return sendFile(res, labIndex);
    return serveIndex(res);
  }

  // Asset directo
  const direct = path.join(deployDir, urlPath.slice(1));
  if (exists(direct) && path.extname(direct)) {
    return sendFile(res, direct);
  }

  // Root o fallback SPA
  if (urlPath === '/' || !path.extname(urlPath)) {
    return serveIndex(res);
  }

  // Fallback final a index
  serveIndex(res);
});

server.listen(port, () => {
  console.log(`🚀 Preview multi-framework listo en http://localhost:${port}`);
  console.log('Rutas: / (React) | /astro (Astro) | /vue (Vue) | /svelte (Svelte) | /solid (Solid) | /vanilla (Vanilla) | /lab (Lab)');
});
