import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.tsx';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/lightTheme.ts';
// import { darkTheme } from './styles/darkTheme.ts';
import './styles/globalStyle.css';
import AuthProvider from './pages/AuthProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={lightTheme}>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  </ThemeProvider>,
);
