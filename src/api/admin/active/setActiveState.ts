import API from '../../axiosIntance';

export const setActiveState = async (sessionId: number) => {
  try {
    const response = await API.put(`/admin/conference/1/sessions/${sessionId}`);
    return response.data;
  } catch (error) {
    console.log('세션 상태 변경 실패', error);
  }
};
