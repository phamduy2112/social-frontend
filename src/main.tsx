import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './App.tsx'
import { ToastProvider } from '@radix-ui/react-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastProvider />

  </StrictMode>,
)
