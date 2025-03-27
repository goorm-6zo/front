import API from '../axiosIntance';

export const isPhoneVerified = async (phone: string) => {
  try {
    const response = await API.post('/users/code', {
      params: {
        phone: phone,
      },
    });

    return response.data;
  } catch (error) {
    console.log('유저 인증번호 전송 실패', error);
  }
};
