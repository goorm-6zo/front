import { useEffect, useState } from 'react';
import { initWebcam, loadModels } from '../utils/face/initAndLoad';
import { getFaceDetectionInfo } from '../utils/face/getFaceDetectionInfo';
import { isFaceInBox } from '../utils/face/isFaceInBox';
import Webcam from 'react-webcam';

export const useFaceDetection = (
  webcamRef: React.RefObject<Webcam>,
  onFaceDetected: (captureImage: () => void, descriptor?: Float32Array) => void,
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
    // console.log('시작');

    const { detection, video } = await getFaceDetectionInfo(
      webcamRef,
      isVideoLoaded,
      isModelLoaded,
    );

    // console.log('끝');
    if (detection && video) {
      const faceBox = detection.detection.box;

      if (isFaceInBox(faceBox, video)) {
        // console.log('얼굴 안에 있음');
        setIsFaceInside(true);
        const currentDescriptor = detection.descriptor;
        onFaceDetected(captureImage, currentDescriptor);
        if (!onFaceDetected) return;
      } else {
        setIsFaceInside(false);
      }
    }
    // console.log('얼굴 감지됨!');

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
