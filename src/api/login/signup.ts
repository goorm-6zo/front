import API from '../axiosIntance';

type UserData = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export const signup = async (userData: UserData) => {
  try {
    const response = await API.post('/users/signup', userData);
    console.log('회원가입 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};
