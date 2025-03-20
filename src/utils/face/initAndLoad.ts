import * as faceapi from 'face-api.js';

export const initWebcam = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ video: true });
    console.log('웹캠 활성화 완료!');
    return true;
  } catch (error) {
    console.error('웹캠 접근 불가:', error);
    return false;
  }
};

export const loadModels = async () => {
  try {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    ]);
    console.log('모델 로드 완료');
    return true;
  } catch (error) {
    console.error('모델 로드 실패:', error);
    return false;
  }
};
