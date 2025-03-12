import API from '../axiosIntance';

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await API.post('/auth/login', data);
    console.log('로그인 성공');
    return response.data;
  } catch (error) {
    console.log('로그인 실패');
  }
};
