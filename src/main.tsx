import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    // Fuente global
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // Títulos
    h1: {
      fontSize: '3rem',   // 48px aprox
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },

    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },

    // Texto normal
    body1: {
      fontSize: '1rem',   // 16px
    },
    body2: {
      fontSize: '0.875rem', // 14px
    },

  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)
