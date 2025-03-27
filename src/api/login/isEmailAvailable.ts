import API from '../axiosIntance';

export const isEmailAvailable = async (email: string): Promise<boolean> => {
  const res = await API.post('/auth/check-email', { email });
  return res.data.available; // true: 사용 가능 / false: 중복
};
