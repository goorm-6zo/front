import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { isFaceInBox } from '../../utils/face/isFaceInBox';
import { getFaceDetectionInfo } from '../../utils/face/getFaceDetectionInfo';
import { initWebcam, loadModels } from '../../utils/face/initAndLoad';
interface FaceDetectionCameraProps {
  onFaceDetected: (captureImage: () => void, descriptor?: Float32Array) => void;
}

export const FaceDetectionCamera: React.FC<FaceDetectionCameraProps> = ({
  onFaceDetected,
}) => {
  const webcamRef = useRef<Webcam | null>(null);
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
        setIsVideoLoaded(true);
      }
    };

    init();
  }, []);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  const detectFace = async () => {
    console.log('시작');
    const { detection, video } = await getFaceDetectionInfo(
      webcamRef,
      isVideoLoaded,
      isModelLoaded,
    );

    if (!detection || !video) {
      requestAnimationFrame(detectFace);
      return;
    }

    const faceBox = detection.detection.box;

    if (isFaceInBox(faceBox, video)) {
      setIsFaceInside(true);
      const currentDescriptor = detection.descriptor;
      onFaceDetected(captureImage, currentDescriptor);
    } else {
      setIsFaceInside(false);
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

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={true}
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />
    </div>
  );
};

export default FaceDetectionCamera;
