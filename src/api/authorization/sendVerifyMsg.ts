import API from '../axiosIntance';

export const sendVerifyMsg = async (phone: string) => {
  try {
    const response = await API.post('/users/code', {
      phone: phone,
    });
    console.log('메세지 전송 완료');
    return response.data;
  } catch (error) {
    console.log('유저 인증번호 전송 실패', error);
  }
};
