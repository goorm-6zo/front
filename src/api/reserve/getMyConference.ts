import API from '../axiosIntance';

export const getMyConference = async () => {
  try {
    const response = await API.get('/reservation/my/conference');

    return response.data.data;
  } catch (error) {
    console.log('컨퍼런스 불러오기 실패', error);
  }
};
