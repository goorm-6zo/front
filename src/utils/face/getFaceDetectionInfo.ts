import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';

export const getFaceDetectionInfo = async (
  webcamRef: React.RefObject<Webcam>,
  isVideoLoaded: boolean,
  isModelLoaded: boolean,
): Promise<{
  detection: any;
  video: HTMLVideoElement | null;
}> => {
  console.log('정보 시작');
  if (
    !webcamRef.current ||
    !webcamRef.current.video ||
    !isVideoLoaded ||
    !isModelLoaded
  ) {
    return { detection: null, video: null };
  }

  const video = webcamRef.current.video;

  console.log('비디오:', video);
  const detectionResult = await faceapi
    .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  console.log('정보 중간');

  if (!detectionResult) {
    return { detection: null, video };
  }

  const detection = detectionResult;
  console.log('정보 끝');
  return {
    detection,
    video,
  };
};
