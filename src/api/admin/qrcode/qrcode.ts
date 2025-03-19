import API from '../../axiosIntance';

export const getQRCode = async () => {
  try {
    const response = await API.get('/admin/qr', {
      params: {
        conferenceId: 1,
        sessionId: 1,
        url: 'https://maskpass-6zo.vercel.app/face-recognition',
      },
    });

    return response.data;
  } catch (error) {
    console.log('QR 생성 실패', error);
  }
};
