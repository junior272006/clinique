import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import { theme } from './Theme.ts'
import App from './App.tsx'
import '@mantine/core/styles.css'
import Header from './Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
    <Route path='/' index element={<App/>}/>
    <Route path='/header' index element={<Header/>}/>
    </Routes>
    </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
