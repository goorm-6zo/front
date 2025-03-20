import { useEffect, useState } from 'react';
import { initWebcam, loadModels } from '../utils/face/initAndLoad';
import { getFaceDetectionInfo } from '../utils/face/getFaceDetectionInfo';
import { isFaceInBox } from '../utils/face/isFaceInBox';
import Webcam from 'react-webcam';

export const useFaceDetection = (
  webcamRef: React.RefObject<Webcam>,
  onFaceDetected: (
    captureImage: () => void,
    descriptor?: Float32Array,
  ) => boolean | null,
) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFaceInside, setIsFaceInside] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const modelStatus = await loadModels();
      const webCamState = await initWebcam();
      if (modelStatus && webCamState) {
        setIsModelLoaded(true);
      }
      const videoElement = webcamRef.current?.video;
      if (videoElement) {
        videoElement.addEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };

    init();
  }, []);

  useEffect(() => {}, []);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  const detectFace = async () => {
    const { detection, video } = await getFaceDetectionInfo(
      webcamRef,
      isVideoLoaded,
      isModelLoaded,
    );

    if (detection && video) {
      const faceBox = detection.detection.box;

      if (isFaceInBox(faceBox, video)) {
        setIsFaceInside(true);
        const currentDescriptor = detection.descriptor;

        const shouldContinue = onFaceDetected(captureImage, currentDescriptor);

        if (shouldContinue === false) {
          console.log('촬영 완료, 감지 종료');
          return;
        }
      } else {
        setIsFaceInside(false);
      }
    }

    requestAnimationFrame(detectFace);
  };

  useEffect(() => {
    if (isModelLoaded && isVideoLoaded) {
      setIsLoading(false);
      console.log('얼굴 인식 시작!');
      detectFace();
    }
  }, [isModelLoaded, isVideoLoaded]);

  return {
    isLoading,
    isFaceInside,
    isVideoLoaded,
    capturedImage,
  };
};
