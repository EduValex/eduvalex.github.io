import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduardo Valenzuela Milla - Full Stack Developer',
  description: 'CV y Portfolio de Eduardo Valenzuela, Desarrollador Full Stack especializado en WordPress, Django, React y más.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })();
          `
        }} />
      </head>
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        {children}
      </body>
    </html>
  )
}
