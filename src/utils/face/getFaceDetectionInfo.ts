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
  if (
    !webcamRef.current ||
    !webcamRef.current.video ||
    !isVideoLoaded ||
    !isModelLoaded
  ) {
    return { detection: null, video: null };
  }

  const video = webcamRef.current.video;

  const detectionResult = await faceapi
    .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detectionResult) {
    return { detection: null, video };
  }

  const detection = detectionResult;
  return {
    detection,
    video,
  };
};
