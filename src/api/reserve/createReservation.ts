import API from '../axiosIntance';

type ReservationData = {
  conferenceId: number;
  sessionIds: number[];
  name: string;
  phone: string;
};

export const createReservation = async ({
  conferenceId,
  sessionIds,
  name,
  phone,
}: ReservationData) => {
  try {
    const response = await API.post('/reservation/temp', {
      conferenceId,
      sessionIds,
      name,
      phone,
    });

    return response.data;
  } catch (error) {
    console.log('생성 실패', error);
  }
};
