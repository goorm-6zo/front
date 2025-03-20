import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function PrivateRoute({ role }: { role: 'USER' | 'ADMIN' }) {
  const { userInfo } = useAuthStore();

  if (!userInfo) return <Navigate to="/" replace />;
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
