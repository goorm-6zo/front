import API from '../axiosIntance';

export const isPhoneVerified = async (phone: string, code: string) => {
  try {
    const response = await API.post('/users/verify', {
      params: {
        phone: phone,
        code: code,
      },
    });

    return response.data;
  } catch (error) {
    console.log('유저 전화번호 인증 실패', error);
  }
};
