import API from '../../axiosIntance';

export interface SendMessageProps {
  conferenceId: number;
  sessionId?: number;
  formData: FormData;
}

export const sendMessage = async ({
  conferenceId,
  sessionId,
  formData,
}: SendMessageProps) => {
  try {
    const response = await API.post(`/notices/${conferenceId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        sessionId,
      },
    });
    console.log('메시지 전송 성공');
    return response;
  } catch (error: any) {
    console.error(
      '메시지 전송 실패',
      error.response ? error.response.data : error.message,
    );
  }
};
