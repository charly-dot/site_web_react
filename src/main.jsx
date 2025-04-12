import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Maine from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
createRoot(document.getElementById('acceul')).render(
  <StrictMode>
    <Maine />
  </StrictMode>,
)
