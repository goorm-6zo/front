import API from '../axiosIntance';

export const isEmailAvailable = async (email: string) => {
  try {
    const response = await API.get('/users/check-email', {
      params: {
        email: email,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log('이메일 중복체크 실패', error); // true: 사용 가능 / false: 중복
  }
};
