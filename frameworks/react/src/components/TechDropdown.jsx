import { useEffect } from 'react';

/**
 * TechDropdown (controlled)
 * Props:
 *  - open (boolean): whether menu is visible
 *  - onToggle (function): toggles open state
 * No implicit closing; parent owns the state.
 */
export function TechDropdown({ open = false, onToggle }) {
  // Debug (can be removed later)
  useEffect(() => {
    // console.log('[TechDropdown] open =', open);
  }, [open]);
  // Detectar entorno local multi-dev (React 5173 + Astro en otro puerto)
  const astroDevPort = '4322'; // Port que vimos cuando Astro reubicó
  const isBrowser = typeof window !== 'undefined';
  const isLocalMultiDev = isBrowser && window.location.port === '5173';
  const astroUrl = isLocalMultiDev ? `http://localhost:${astroDevPort}/astro/` : '/astro';

  const frameworks = [
    {
      name: 'Astro',
      url: astroUrl,
      icon: '🚀',
      description: 'SSG ultra-rápido',
      badge: 'Beta',
    },
    {
      name: 'Vue',
      url: '/vue',
      icon: '💚',
      description: 'Composition API',
      badge: 'Próximamente',
      disabled: true,
    },
  ];

  return (
    <div className="relative" data-tech-dropdown={open ? 'open' : 'closed'}>
      {/* Toggle button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (onToggle) onToggle();
        }}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 backdrop-blur text-sm font-medium shadow-sm hover:shadow transition-all"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-base">⚙️</span>
        <span className="hidden sm:inline font-medium">Tech</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-[60] animate-fadeIn" onClick={(e)=>e.stopPropagation()} role="menu" aria-label="Tech menu">
          {/* Current Framework */}
          <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">⚛️</span>
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">
                  Built with React
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Versión actual
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Frameworks */}
          <div className="py-1">
            <div className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Ver en otros frameworks
            </div>
            {frameworks.map((fw) => (
              <a
                key={fw.name}
                href={fw.disabled ? '#' : fw.url}
                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${fw.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer'}`}
                onClick={(e) => {
                  if (fw.disabled) {
                    e.preventDefault();
                    return;
                  }
                  if (onToggle) onToggle();
                }}
              >
                <span className="text-2xl">{fw.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {fw.name}
                    </span>
                    <span
                      className={`
                        text-xs px-2 py-0.5 rounded-full
                        ${fw.badge === 'Beta' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}
                      `}
                    >
                      {fw.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {fw.description}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* About Project Link */}
          <div className="border-t border-slate-200 dark:border-slate-700 mt-1 pt-1">
            <a
              href="/lab"
              className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              <span className="text-lg">💡</span>
              <div className="flex-1">
                <div className="font-medium text-slate-900 dark:text-slate-100">
                  Sobre este proyecto
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Multi-framework portfolio
                </div>
              </div>
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
