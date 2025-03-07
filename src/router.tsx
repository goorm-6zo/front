import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import FaceRecognition from './pages/face-recognition/FaceRecognition';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/face-recognition', element: <FaceRecognition /> },
  { path: '/login', element: <Login /> },
]);

export default router;
