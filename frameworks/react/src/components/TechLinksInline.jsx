import React from 'react';

export function TechLinksInline() {
  const astroDevPort = '4322';
  const isBrowser = typeof window !== 'undefined';
  const isLocalMultiDev = isBrowser && window.location.port === '5173';
  const astroUrl = isLocalMultiDev ? `http://localhost:${astroDevPort}/astro/` : '/astro';

  return (
    <div className="flex items-center gap-2">
      <a
        href={astroUrl}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-all"
        title="Ver versión Astro"
      >
        <span>🚀</span>
        <span className="hidden sm:inline">Astro</span>
      </a>
      <a
        href="/lab"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-all"
        title="Sobre este proyecto"
      >
        <span>💡</span>
        <span className="hidden sm:inline">Lab</span>
      </a>
    </div>
  );
}
