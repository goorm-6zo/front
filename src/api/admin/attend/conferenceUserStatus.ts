import API from '../../axiosIntance';

export const getConferenceUserStatus = async (
  conferenceId: number,
  sessionId?: number,
) => {
  try {
    const response = await API.get(`/attend/users`, {
      params: {
        conferenceId,
        ...(sessionId && { sessionId }),
      },
    });
    return response.data.data;
  } catch (error) {
    console.log('컨퍼런스 참가자 상세 조회 실패', error);
  }
};
