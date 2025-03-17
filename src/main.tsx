import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/lightTheme.ts';
// import { darkTheme } from './styles/darkTheme.ts';
import './styles/globalStyle.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={lightTheme}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>,
);
