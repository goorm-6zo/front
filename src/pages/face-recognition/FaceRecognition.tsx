import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

interface IBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

const BOX_WIDTH = 230;
const BOX_HEIGHT = 230;
const FACE_RECOGNITION_THRESHOLD = 0.6;
const DISTANCE_THRESHOLD = 50;

const FaceRecognition = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFaceInside, setIsFaceInside] = useState<boolean>(false);
  const capturedFaceDes = useRef<Float32Array | null>(null);

  const initWebcam = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('웹캠 활성화 완료!');
    } catch (error) {
      console.error('웹캠 접근 불가:', error);
    }
  };

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      ]);
      console.log('모델 로드 완료');
      setIsModelLoaded(true);
    } catch (error) {
      console.error('모델 로드 실패:', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      await Promise.all([initWebcam(), loadModels()]);
    };

    init();
  }, []);

  const detectFace = async () => {
    if (!webcamRef.current || !webcamRef.current.video || !isVideoLoaded || !isModelLoaded) return;

    const video = webcamRef.current.video;

    const detection = await faceapi
      .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detection) {
      // console.log("얼굴 감지됨!");
      const faceBox = detection.detection.box;

      if (isFaceInBox(faceBox, video)) {
        setIsFaceInside(true);
        const currentDescriptor = detection.descriptor;

        // 이전에 캡처한 얼굴과 현재 얼굴 비교
        if (capturedFaceDes.current) {
          const distance = faceapi.euclideanDistance(capturedFaceDes.current, currentDescriptor);

          // 두 얼굴이 같으면 캡처 x
          if (distance < FACE_RECOGNITION_THRESHOLD) {
            console.log('얼굴이 동일하여 캡처하지 않음');
            requestAnimationFrame(detectFace);
            return;
          }
        }

        // 새로운 얼굴이 감지되면 캡처
        captureImage();
        capturedFaceDes.current = currentDescriptor;
      } else {
        setIsFaceInside(false);
      }
    }

    requestAnimationFrame(detectFace);
  };

  useEffect(() => {
    if (isModelLoaded && isVideoLoaded) {
      detectFace();
    }
  }, [isModelLoaded, isVideoLoaded]);

  const isFaceInBox = (box: IBox, videoElement: HTMLVideoElement) => {
    const videoWidth = videoElement.videoWidth;
    const videoHeight = videoElement.videoHeight;

    // 박스웹캠 화면에 맞게 계산
    const boxX = (videoWidth - BOX_WIDTH) / 2;
    const boxY = (videoHeight - BOX_HEIGHT) / 2;

    // 얼굴의 중심
    const faceCenterX = box.x + box.width / 2;
    const faceCenterY = box.y + box.height / 2;

    // 박스의 중심
    const boxCenterX = boxX + BOX_WIDTH / 2;
    const boxCenterY = boxY + BOX_HEIGHT / 2;

    // 얼굴의 중심과 박스의 중심 간의 차이를 계산
    const distanceX = Math.abs(faceCenterX - boxCenterX);
    const distanceY = Math.abs(faceCenterY - boxCenterY);

    return distanceX < DISTANCE_THRESHOLD && distanceY < DISTANCE_THRESHOLD;
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  useEffect(() => {
    const videoElement = webcamRef.current?.video;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        console.log('width:', videoElement.videoWidth);
        console.log('height:', videoElement.videoHeight);
        setIsVideoLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (isModelLoaded && isVideoLoaded) {
      setIsLoading(false);
      detectFace();
    }
  }, [isModelLoaded, isVideoLoaded]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div style={{ position: 'relative' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          style={{ width: '100vw', height: '100vh' }}
        />
        {isVideoLoaded && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${BOX_WIDTH}px`,
              height: `${BOX_HEIGHT}px`,
              border: `3px solid ${isFaceInside ? 'green' : 'red'}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        )}
      </div>
      <h2 style={{ color: isFaceInside ? 'green' : 'red' }}>
        {isFaceInside ? '얼굴이 네모 안에 있습니다!' : '얼굴을 네모 안에 맞춰주세요.'}
      </h2>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="캡처된 이미지" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
