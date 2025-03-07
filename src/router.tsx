import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import CommonComponentTest from './pages/home/CommonComponentTest';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cct', element: <CommonComponentTest /> },
]);

export default router;
