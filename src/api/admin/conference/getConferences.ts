import API from '../../axiosIntance';

export const getConferences = async () => {
  try {
    const response = await API.get('/admin/conference');
    return response.data;
  } catch (error) {
    console.log('컨퍼런스 조회 실패', error);
  }
};
