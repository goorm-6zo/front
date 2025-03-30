import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../api/login/login';
import { useAuthStore } from '../store/useAuthStore';

export default function useUserData() {
  const { setUserInfo } = useAuthStore();

  const userDataQuery = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const data = await getUserData();
      if (data) {
        setUserInfo(data);
      } else {
        setUserInfo(null);
      }
      return data;
    },
  });

  return {
    userDataQuery,
    refetchUserData: userDataQuery.refetch,
  };
}
