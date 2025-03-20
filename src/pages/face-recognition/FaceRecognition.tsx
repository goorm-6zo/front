import { useRef } from 'react';
import * as faceapi from 'face-api.js';
import { useFaceDetection } from '../../hooks/useFaceDetection';
import * as S from './FaceRecognition.style';
import Webcam from 'react-webcam';
const FACE_RECOGNITION_THRESHOLD = 0.6;

const FaceRecognition = () => {
  const capturedFaceDes = useRef<Float32Array | null>(null);
  const webcamRef = useRef<Webcam | null>(null);

  const handleFaceDetected = (
    captureImage: () => void,
    descriptor?: Float32Array,
  ) => {
    if (!descriptor) {
      console.log('얼굴 정보 없음, 비교 불가');
      return null;
    }

    if (capturedFaceDes.current) {
      const distance = faceapi.euclideanDistance(
        capturedFaceDes.current,
        descriptor,
      );

      if (distance < FACE_RECOGNITION_THRESHOLD) {
        console.log('동일한 얼굴입니다. 캡처하지 않음.');
        return null;
      }
    }

    captureImage();
    capturedFaceDes.current = descriptor;
    return true;
  };

  const { isLoading, isFaceInside, isVideoLoaded, capturedImage } =
    useFaceDetection(webcamRef, handleFaceDetected);

  return (
    <S.FaceDetectionContainer>
      {isLoading && <div>Loading...</div>}
      <S.VideoBox>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
        {isVideoLoaded && (
          <S.Box
            $boxWidth={230}
            $boxHeight={230}
            $isFaceInside={isFaceInside}
          ></S.Box>
        )}
      </S.VideoBox>
      <h2 style={{ color: isFaceInside ? 'green' : 'red' }}>
        {isFaceInside
          ? '얼굴이 네모 안에 있습니다!'
          : '얼굴을 네모 안에 맞춰주세요.'}
      </h2>
      {capturedImage && (
        <div>
          <img
            src={capturedImage}
            alt="캡처된 이미지"
            style={{ width: '200px' }}
          />
        </div>
      )}
    </S.FaceDetectionContainer>
  );
};

export default FaceRecognition;
