import API from '../axiosIntance';

export const logoutUser = async () => {
  try {
    const response = await API.delete('/auth/logout');

    return response.data.data;
  } catch (error) {
    console.log('로그아웃 실패', error);
  }
};
