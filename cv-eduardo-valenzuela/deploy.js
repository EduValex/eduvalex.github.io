#!/usr/bin/env node

/**
 * Build and Deploy Script
 * Builds React app and deploys everything to gh-pages branch
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build and deploy process...\n');

// Step 1: Build React
console.log('📦 Building React app...');
try {
  execSync('cd frameworks/react && npm run build', { stdio: 'inherit' });
  console.log('✅ React build completed\n');
} catch (error) {
  console.error('❌ React build failed');
  process.exit(1);
}

// Step 2: Create deploy directory
const deployDir = path.join(__dirname, 'deploy-temp');
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true });
}
fs.mkdirSync(deployDir);
console.log('📁 Created temporary deploy directory\n');

// Step 3: Copy files to deploy directory
console.log('📋 Copying files...');

// Copy React build to root
const reactDist = path.join(__dirname, 'frameworks/react/dist');
fs.cpSync(reactDist, deployDir, { recursive: true });

// Copy shared assets
const sharedAssets = path.join(__dirname, 'shared/assets');
const sharedDeploy = path.join(deployDir, 'shared/assets');
if (fs.existsSync(sharedAssets)) {
  fs.cpSync(sharedAssets, sharedDeploy, { recursive: true });
}

// Copy shared data (cv-data.json)
const sharedData = path.join(__dirname, 'shared/data');
const dataDeploy = path.join(deployDir, 'shared/data');
if (fs.existsSync(sharedData)) {
  fs.cpSync(sharedData, dataDeploy, { recursive: true });
}

console.log('✅ Files copied\n');

// Step 4: Deploy to gh-pages
console.log('🚀 Deploying to GitHub Pages...');
try {
  execSync(`npx gh-pages -d deploy-temp -b gh-pages`, { stdio: 'inherit' });
  console.log('✅ Deployment completed\n');
} catch (error) {
  console.error('❌ Deployment failed');
  process.exit(1);
}

// Step 5: Cleanup
console.log('🧹 Cleaning up...');
fs.rmSync(deployDir, { recursive: true });
console.log('✅ Cleanup completed\n');

console.log('🎉 All done! Your site will be live at https://eduvalex.github.io in a few minutes.');
