import API from '../axiosIntance';

export const isEmailAvailable = async (email: string) => {
  try {
    const response = await API.post('/users/check-email', {
      email: email,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('이메일 중복체크 실패', error); // true: 사용 가능 / false: 중복
  }
};
