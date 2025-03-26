import API from '../../axiosIntance';

export const getQRCode = async (conferenceId: string, sessionId: string) => {
  try {
    const response = await API.get('/admin/qr', {
      params: {
        conferenceId,
        sessionId,
        url: 'https://maskpass-6zo.vercel.app/face-recognition',
      },
    });

    return response.data.data;
  } catch (error) {
    console.log('QR 생성 실패', error);
  }
};
