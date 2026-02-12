import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Importing browser route
import { BrowserRouter } from 'react-router'

// Importing query client
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Creating client
const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
