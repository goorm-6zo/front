import API from '../../axiosIntance';

export const getConferenceInfo = async (conferenceId: number) => {
  try {
    const response = await API.get(`/conference/${conferenceId}`);
    return response.data.data;
  } catch (error) {
    console.log('컨퍼런스 조회 실패', error);
  }
};
