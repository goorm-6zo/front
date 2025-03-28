import { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

//얼굴 인식 utils
import { initWebcam, loadModels } from '../utils/face/initAndLoad';
import { getFaceDetectionInfo } from '../utils/face/getFaceDetectionInfo';
import { isFaceInBox } from '../utils/face/isFaceInBox';

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

  //모델 및 웹캠 초기화
  useEffect(() => {
    const init = async () => {
      const modelStatus = await loadModels();
      const webCamState = await initWebcam();
      if (modelStatus && webCamState) {
        setIsModelLoaded(true);
      }
      // const videoElement = webcamRef.current?.video;
      // if (videoElement) {
      //   videoElement.addEventListener('loadeddata', () => {
      //     setIsVideoLoaded(true);
      //   });
      // }

      console.log('로드댐');
    };

    init();
  }, []);

  useEffect(() => {
    const videoElement = webcamRef.current?.video;
    const handleLoaded = () => setIsVideoLoaded(true);

    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoaded);
      }
    };
  }, [webcamRef.current?.video]);

  // 얼굴 캡쳐
  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  //얼굴 인식 및 캡쳐
  const [isDetecting, setIsDetecting] = useState(true);

  const detectFace = async () => {
    if (!isDetecting) return;

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

        if (shouldContinue === false) return;
      } else {
        setIsFaceInside(false);
      }
    }

    requestAnimationFrame(detectFace);
  };

  useEffect(() => {
    if (isModelLoaded && isVideoLoaded && isDetecting) {
      setIsLoading(false);
      detectFace();
    }
  }, [isModelLoaded, isVideoLoaded, isDetecting]);

  return {
    isLoading,
    isFaceInside,
    isVideoLoaded,
    capturedImage,
    setIsDetecting,
  };
};
