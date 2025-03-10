import { createBrowserRouter } from 'react-router-dom';
import FaceRecognition from './pages/face-recognition/FaceRecognition';
import Login from './pages/login/Login';
import Reservation from './pages/reserve/Reservation';
import ReservationComplete from './pages/reserve/ReservationComplete';
import SignUp from './pages/login/Signup';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ConferenceEdit from './pages/admin/ConferenceEdit';
import DeviceConnect from './pages/admin/DeviceConnect';
import Visitors from './pages/admin/Visitors';
import VisitorStatus from './pages/admin/VisitorStatus';
import MessageSend from './pages/admin/MessageSend';
import MessageHistory from './pages/admin/MessageHistory';
import ConferenceInfo from './pages/user/ConferenceInfo';
import Profile from './pages/user/Profile';
import FaceRegistration from './pages/user/FaceRegistration';

const router = createBrowserRouter([
  {
    path: '/',
    // 전체 레이아웃을 적용하고 싶다면 여기에 Layout 컴포넌트 추가 가능
    children: [
      { path: 'face-recognition', element: <FaceRecognition /> },
      { path: 'reservation', element: <Reservation /> },
      { path: 'complete', element: <ReservationComplete /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },

      {
        path: 'admin',
        children: [
          { path: 'dashboard', element: <AdminDashboard /> },
          { path: 'conference-edit', element: <ConferenceEdit /> },
          { path: 'device-connect', element: <DeviceConnect /> },
          { path: 'visitors', element: <Visitors /> },
          { path: 'visitor-status', element: <VisitorStatus /> },
          { path: 'message-history', element: <MessageHistory /> },
          { path: 'message-send', element: <MessageSend /> },
        ],
      },

      { path: 'dashboard', element: <UserDashboard /> },
      { path: 'conference-info', element: <ConferenceInfo /> },
      { path: 'profile', element: <Profile /> },
      { path: 'face-registration', element: <FaceRegistration /> },
    ],
  },
]);

export default router;
