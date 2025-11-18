#!/usr/bin/env node
/**
 * assemble.js
 * Construye React y Astro y arma una carpeta deploy-test para preview local estático.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const log = (msg) => console.log(msg);

log('🔧 Ensamblando build multi-framework (React + Astro + Vue + Qwik + Solid + Vanilla)...');

// Build React
try {
  log('⚛️ Construyendo React...');
  execSync('cd frameworks/react && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ React OK');
} catch (e) {
  console.error('❌ Falló build React');
  process.exit(1);
}

// Build Astro
try {
  log('🪐 Construyendo Astro...');
  const astroNodeModules = path.join(rootDir, 'frameworks/astro/node_modules');
  if (!fs.existsSync(astroNodeModules)) {
    execSync('cd frameworks/astro && npm install', { cwd: rootDir, stdio: 'inherit' });
  }
  execSync('cd frameworks/astro && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ Astro OK');
} catch (e) {
  console.error('❌ Falló build Astro');
  process.exit(1);
}

// Build Vue
try {
  log('💚 Construyendo Vue...');
  const vueNodeModules = path.join(rootDir, 'frameworks/vue/node_modules');
  if (!fs.existsSync(vueNodeModules)) {
    execSync('cd frameworks/vue && npm install', { cwd: rootDir, stdio: 'inherit' });
  }
  execSync('cd frameworks/vue && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ Vue OK');
} catch (e) {
  console.error('❌ Falló build Vue');
  process.exit(1);
}

// Build Qwik
try {
  log('⚡ Construyendo Qwik...');
  const qwikNodeModules = path.join(rootDir, 'frameworks/qwik/node_modules');
  if (!fs.existsSync(qwikNodeModules)) {
    execSync('cd frameworks/qwik && npm install', { cwd: rootDir, stdio: 'inherit' });
  }
  execSync('cd frameworks/qwik && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ Qwik OK');
} catch (e) {
  console.error('❌ Falló build Qwik');
  process.exit(1);
}

// Build Solid
try {
  log('🔷 Construyendo Solid...');
  const solidNodeModules = path.join(rootDir, 'frameworks/solid/node_modules');
  if (!fs.existsSync(solidNodeModules)) {
    execSync('cd frameworks/solid && npm install', { cwd: rootDir, stdio: 'inherit' });
  }
  execSync('cd frameworks/solid && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ Solid OK');
} catch (e) {
  console.error('❌ Falló build Solid');
  process.exit(1);
}

// Build Vanilla
try {
  log('⚡ Construyendo Vanilla...');
  const vanillaNodeModules = path.join(rootDir, 'frameworks/vanilla/node_modules');
  if (!fs.existsSync(vanillaNodeModules)) {
    execSync('cd frameworks/vanilla && npm install', { cwd: rootDir, stdio: 'inherit' });
  }
  execSync('cd frameworks/vanilla && npm run build', { cwd: rootDir, stdio: 'inherit' });
  log('✅ Vanilla OK');
} catch (e) {
  console.error('❌ Falló build Vanilla');
  process.exit(1);
}

const deployTest = path.join(rootDir, 'deploy-test');
if (fs.existsSync(deployTest)) {
  fs.rmSync(deployTest, { recursive: true });
}
fs.mkdirSync(deployTest);

log('📁 Copiando artefactos a deploy-test...');

// React root
fs.cpSync(path.join(rootDir, 'frameworks/react/dist'), deployTest, { recursive: true });

// Astro under /astro
const astroDist = path.join(rootDir, 'frameworks/astro/dist');
if (fs.existsSync(astroDist)) {
  fs.cpSync(astroDist, path.join(deployTest, 'astro'), { recursive: true });
}

// Vue under /vue
const vueDist = path.join(rootDir, 'frameworks/vue/dist');
if (fs.existsSync(vueDist)) {
  fs.cpSync(vueDist, path.join(deployTest, 'vue'), { recursive: true });
}

// Qwik under /qwik
const qwikDist = path.join(rootDir, 'frameworks/qwik/dist/qwik');
if (fs.existsSync(qwikDist)) {
  fs.cpSync(qwikDist, path.join(deployTest, 'qwik'), { recursive: true });
}

// Solid under /solid
const solidDist = path.join(rootDir, 'frameworks/solid/dist');
if (fs.existsSync(solidDist)) {
  fs.cpSync(solidDist, path.join(deployTest, 'solid'), { recursive: true });
}

// Vanilla under /vanilla
const vanillaDist = path.join(rootDir, 'frameworks/vanilla/dist');
if (fs.existsSync(vanillaDist)) {
  fs.cpSync(vanillaDist, path.join(deployTest, 'vanilla'), { recursive: true });
}

// Shared assets & data
const sharedAssets = path.join(rootDir, 'shared/assets');
if (fs.existsSync(sharedAssets)) {
  fs.cpSync(sharedAssets, path.join(deployTest, 'shared/assets'), { recursive: true });
}
const sharedData = path.join(rootDir, 'shared/data');
if (fs.existsSync(sharedData)) {
  fs.cpSync(sharedData, path.join(deployTest, 'shared/data'), { recursive: true });
}

// Lab page
const labPage = path.join(rootDir, 'lab');
if (fs.existsSync(labPage)) {
  fs.cpSync(labPage, path.join(deployTest, 'lab'), { recursive: true });
}

log('✅ Ensamblado completo. Usa "npm run preview:all" para servir en http://localhost:3000');
