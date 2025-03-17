import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../api/login/login';

export default function useUserData() {
  const userDataQuery = useQuery({
    queryKey: ['userData'],
    queryFn: getUserData,
  });

  return {
    userDataQuery,
  };
}
