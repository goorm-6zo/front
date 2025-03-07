import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import FaceRecognition from './pages/face-recognition/FaceRecognition';
import CommonComponentTest from './pages/CommonComponentTest';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/face-recognition', element: <FaceRecognition /> }, // 추가됨
  { path: '/cct', element: <CommonComponentTest /> }, // main merge시 삭제 예정
]);

export default router;
