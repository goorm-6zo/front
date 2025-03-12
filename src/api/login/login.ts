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

export const getUserData = async () => {
  try {
    const response = await API.get('/users');
    console.log('유저 데이터 조회 성공', response.data);
    return response.data;
  } catch (error) {
    console.log('유저 데이터 조회 실패');
  }
};
