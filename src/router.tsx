import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import FaceRecognition from './pages/face-recognition/FaceRecognition';
import Login from './pages/login/Login';
import Reservation from './pages/reservation/Reservation';
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/face-recognition', element: <FaceRecognition /> }, // 추가됨
  { path: '/reservation', element: <Reservation /> },
  { path: '/login', element: <Login /> },
]);

export default router;
