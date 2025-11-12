import fs from 'node:fs';
import path from 'node:path';

// Load design tokens (simple parse; if fails we fallback)
let tokens = {};
try {
  const tokenPath = path.resolve(__dirname, '../../shared/styles/design-tokens.json');
  tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf-8'));
} catch (e) {
  console.warn('⚠️ Could not load design-tokens.json, using minimal defaults.');
}

const colorTokens = tokens.colors || {};

export default {
  darkMode: 'class', // we will toggle class 'dark' on <html>
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colorTokens.primary || '#3b82f6',
        'primary-dark': colorTokens.primaryDark || '#2563eb',
        'primary-light': colorTokens.primaryLight || '#60a5fa',
        secondary: colorTokens.secondary || '#8b5cf6',
        'secondary-dark': colorTokens.secondaryDark || '#7c3aed',
        'secondary-light': colorTokens.secondaryLight || '#a78bfa',
        accent: colorTokens.accent || '#06b6d4',
        success: colorTokens.success || '#10b981',
        warning: colorTokens.warning || '#f59e0b',
        error: colorTokens.error || '#ef4444',
      },
      fontFamily: {
        heading: (tokens.typography?.fontFamily?.heading || 'Inter, sans-serif').split(',').map(s => s.trim()),
        body: (tokens.typography?.fontFamily?.body || 'Inter, sans-serif').split(',').map(s => s.trim()),
        mono: (tokens.typography?.fontFamily?.mono || 'Fira Code, monospace').split(',').map(s => s.trim()),
      },
      spacing: tokens.spacing || {},
      borderRadius: tokens.borderRadius || {},
      boxShadow: tokens.shadows || {},
      maxWidth: tokens.maxWidth || {},
      transitionDuration: tokens.transitions ? {
        fast: tokens.transitions.fast,
        normal: tokens.transitions.normal,
        slow: tokens.transitions.slow,
      } : {},
    },
  },
  plugins: [],
};
