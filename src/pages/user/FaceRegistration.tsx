import { useEffect, useRef, useState } from 'react';
import { useFaceDetection } from '../../hooks/useFaceDetection';
import * as S from './FaceRegistration.style';
import Webcam from 'react-webcam';
import { faceRegister } from '../../api/face/faceRegister';
const FaceRegistration = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [hasCaptured, setHasCaptured] = useState(false);

  const handleFaceDetected = (captureImage: () => void) => {
    if (!hasCaptured) {
      captureImage();
      setHasCaptured(true);
    }
    return false;
  };
  useEffect(() => {
    if (hasCaptured && capturedImage) {
      faceRegister(capturedImage);
    }
  }, [hasCaptured]);

  const { isLoading, isFaceInside, isVideoLoaded, capturedImage } =
    useFaceDetection(webcamRef, handleFaceDetected);

  return (
    <S.FaceDetectionContainer>
      {isLoading && <div>Loading...</div>}
      {!hasCaptured && (
        <>
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
        </>
      )}

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

export default FaceRegistration;
