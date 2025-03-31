import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function PrivateRoute({ role }: { role: 'USER' | 'ADMIN' }) {
  const { userInfo } = useAuthStore();
  // const location = useLocation();

  if (!userInfo) return <Navigate to="/" replace />;

  // if (!userInfo.phone && location.pathname !== '/authorization/callback') {
  //   return <Navigate to="/authorization/callback" replace />;
  // }

  if (userInfo.role !== role) {
    return (
      <Navigate
        to={userInfo.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard'}
        replace
      />
    );
  }

  return <Outlet />;
}
