import API from '../../axiosIntance';

export const getConferenceInfo = async () => {
  try {
    const response = await API.get('/admin/conference/1');
    return response.data;
  } catch (error) {
    console.log('컨퍼런스 조회 실패', error);
  }
};
