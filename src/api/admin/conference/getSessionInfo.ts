import API from '../../axiosIntance';

export const getSessionInfo = async (
  conferenceId: number,
  sessionId: number,
) => {
  try {
    const response = await API.get(
      `/admin/conference/${conferenceId}/sessions/${sessionId}`,
    );
    return response.data.data;
  } catch (error) {
    console.log('세션 조회 실패', error);
  }
};
