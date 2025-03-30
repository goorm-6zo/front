import API from '../axiosIntance';

export const faceDelete = async () => {
  try {
    const response = await API.delete('/face/delete');

    return response.data.data;
  } catch (error) {
    console.log('등록한 얼굴 삭제 실패', error);
    throw new Error('Face deletion failed');
  }
};
