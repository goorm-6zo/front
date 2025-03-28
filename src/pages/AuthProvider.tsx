import Loading from '../components/common/loading/Loading';
import useUserData from '../hooks/useUserData';
import { useAuthStore } from '../store/useAuthStore';
import { ReactNode, useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { setUserInfo } = useAuthStore();
  const { userDataQuery } = useUserData();

  useEffect(() => {
    if (userDataQuery.data) {
      setUserInfo(userDataQuery.data);
    }
  }, [userDataQuery.data, setUserInfo]);

  if (userDataQuery.isLoading) {
    return <Loading />;
  }

  return children;
}
