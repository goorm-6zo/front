import API from '../../axiosIntance';

export const getConferenceInfo = async (conferenceId: number) => {
  try {
    const response = await API.get(`/admin/conference/${conferenceId}`);
    return response.data;
  } catch (error) {
    console.log('컨퍼런스 조회 실패', error);
  }
};
