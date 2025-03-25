import API from '../../axiosIntance';

export const getSessionInfo = async (sessionId: number) => {
  try {
    const response = await API.get(`/admin/conference/1/sessions/${sessionId}`);
    return response.data;
  } catch (error) {
    console.log('세션 조회 실패', error);
  }
};
