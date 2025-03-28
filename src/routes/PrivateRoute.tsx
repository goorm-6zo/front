import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function PrivateRoute({ role }: { role: 'USER' | 'ADMIN' }) {
  const { userInfo } = useAuthStore();
  const location = useLocation();

  if (!userInfo) return <Navigate to="/" replace />;

  if (!userInfo.phone && location.pathname !== '/authorization/callback') {
    return <Navigate to="/authorization/callback?hasPhone=false" replace />;
  }

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
