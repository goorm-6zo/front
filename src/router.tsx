import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import FaceRecognition from './pages/face-recognition/FaceRecognition';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/face-recognition', element: <FaceRecognition /> }, // 추가됨
]);

export default router;
