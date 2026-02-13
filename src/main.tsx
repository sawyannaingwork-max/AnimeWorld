import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// @ts-expect-error Swiper CSS modules don't declare side effects in type definitions
import 'swiper/css';
// @ts-expect-error Swiper CSS modules don't declare side effects in type definitions
import 'swiper/css/pagination';
// @ts-expect-error Swiper CSS modules don't declare side effects in type definitions
import 'swiper/css/navigation';



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
