import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import PrivateRoute from './components/common/PrivateRoute';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/face-recognition', element: <FaceRecognition /> },
  { path: '/reservation', element: <Reservation /> },
  { path: '/complete', element: <ReservationComplete /> },

  {
    path: '/admin',
    element: <PrivateRoute role="ADMIN" />,
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

  {
    path: '/dashboard',
    element: <PrivateRoute role="USER" />,
    children: [{ path: '', element: <UserDashboard /> }],
  },
  {
    path: '/conference-info',
    element: <PrivateRoute role="USER" />,
    children: [{ path: '', element: <ConferenceInfo /> }],
  },
  {
    path: '/profile',
    element: <PrivateRoute role="USER" />,
    children: [{ path: '', element: <Profile /> }],
  },
  {
    path: '/face-registration',
    element: <PrivateRoute role="USER" />,
    children: [{ path: '', element: <FaceRegistration /> }],
  },

  { path: '*', element: <NotFound /> },
]);

export default router;
