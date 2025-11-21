import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import HorizonFont from './fonts/Horizon-PersonalUse.otf';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },

  typography: {
    // Fuente global
    fontFamily: '"Roboto", sans-serif',

    // Títulos
    h1: {
      fontFamily: '"Horizon"', 
      fontSize: '4rem',
      letterSpacing: '0.1em',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
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
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* 3. DEFINICIÓN CSS DE LA FUENTE */
        @font-face {
          font-family: 'Horizon';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${HorizonFont}) format('opentype'); /* Importante: format('opentype') para .otf */
        }
      `,
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
