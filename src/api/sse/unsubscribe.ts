import API from './../axiosIntance';

export const disconnectSSE = async (
  conferenceId: number,
  sessionId?: number,
) => {
    const url = sessionId
    ? `/sse/unsubscribe?conferenceId=${conferenceId}&sessionId=${sessionId}`
    : `/sse/unsubscribe?conferenceId=${conferenceId}`;

  try {
    const response = await API.delete(url);
    console.log(response.data.message);
  } catch (error) {
    console.error('SSE 연결 종료 오류:', error);
  }
};
