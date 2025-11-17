import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Simple runtime marker for diagnóstico en build estático
console.log('[BOOT] main.jsx ejecutado, intentando montar <App />')

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('[BOOT][ERROR] No se encontró #root en el DOM')
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('[BOOT] Render inicial disparado')
  } catch (err) {
    console.error('[BOOT][FATAL] Falló el render inicial:', err)
  }
}
