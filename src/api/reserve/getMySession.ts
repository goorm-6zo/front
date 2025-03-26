import API from '../axiosIntance';

export const getMySession = async (id: number) => {
  try {
    const response = await API.get(`/attend`, {
      params: {
        conferenceId: id,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log('세션 불러오기 실패', error);
  }
};
