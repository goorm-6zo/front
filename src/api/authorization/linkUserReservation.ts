import API from '../axiosIntance';

export const linkUserReservation = async (phone: string) => {
  try {
    const response = await API.post(
      '/reservation/link-user',
      {},
      {
        params: { phone },
        withCredentials: true, // 여기에 명시적으로 다시
      },
    );

    return response.data;
  } catch (error) {
    console.log('유저 예약내역 연결 실패', error);
  }
};
