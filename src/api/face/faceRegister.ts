import API from '../axiosIntance';

export const faceRegister = async (capturedImage: string) => {
  try {
    // base64에서 순수 이미지 데이터만 추출
    const base64Data = capturedImage.split(',')[1];

    // base64 → Blob
    const byteString = atob(base64Data);
    const byteArray = new Uint8Array(
      Array.from(byteString).map((char) => char.charCodeAt(0)),
    );
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    // Blob → File
    const file = new File([blob], 'face.jpg', { type: 'image/jpeg' });

    // FormData 생성
    const formData = new FormData();
    formData.append('faceImage', file);

    const response = await API.post(`/face/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('얼굴 등록:', response.data);
    return response.data;
  } catch (error) {
    console.error('얼굴 인증 통신 실패:', error);
    throw error;
  }
};
