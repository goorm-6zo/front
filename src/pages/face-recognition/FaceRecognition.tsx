import { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { useFaceDetection } from '../../hooks/useFaceDetection';
import * as S from './FaceRecognition.style';
import Webcam from 'react-webcam';
import { faceAuthentication } from '../../api/face/faceAuthentication';
import { Toast } from '../../components/common/toast/Toast';
import { faceMsg, ToastState } from '../../constant/faceMsg';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/common/loading/Loading';

const FACE_RECOGNITION_THRESHOLD = 0.35;

const FaceRecognition = () => {
  const capturedFaceDes = useRef<Float32Array | null>(null);
  const webcamRef = useRef<Webcam | null>(null);
  const [faceState, setFaceState] = useState<ToastState>('default');
  const [searchParams] = useSearchParams();
  const conferenceId = Number(searchParams.get('conferenceId'));
  const sessionId = Number(searchParams.get('sessionId'));

  const boxSize =
    window.innerWidth > window.innerHeight
      ? window.innerHeight / 2
      : window.innerWidth / 2;

  // const [videoConstraints, _setVideoConstraints] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  //   facingMode: 'user',
  // });

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
        console.log('특징 거리:', distance);
        console.log('동일한 얼굴입니다. 캡처하지 않음.');
        return null;
      }
    }

    captureImage();
    capturedFaceDes.current = descriptor;
    return true;
  };

  const {
    isLoading,
    isFaceInside,
    isVideoLoaded,
    capturedImage,
    setIsDetecting,
  } = useFaceDetection(webcamRef, handleFaceDetected);

  useEffect(() => {
    const authenticateFace = async () => {
      if (!capturedImage) return;

      console.log('이미지 캠쳐:', capturedImage);

      try {
        setIsDetecting(false);

        const result = await faceAuthentication(
          conferenceId,
          sessionId,
          capturedImage,
        );
        console.log('인증 결과:', result.status);

        if (result.status) {
          setFaceState('success');
        }
      } catch (err) {
        console.error('얼굴 인증 오류:', err);
        setFaceState('error');
      }

      setTimeout(() => {
        setFaceState('default');
        setIsDetecting(true);
      }, 1600);
    };

    authenticateFace();
  }, [capturedImage]);

  return (
    <S.FaceDetectionContainer>
      {isLoading && <Loading />}
      <S.VideoBox>
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />

        {isVideoLoaded && (
          <S.Box
            $boxWidth={boxSize}
            $boxHeight={boxSize}
            $isFaceInside={isFaceInside || faceState === 'success'}
          ></S.Box>
        )}
        {isVideoLoaded && (
          <S.ToastBox>
            <Toast state={faceState}>{faceMsg[faceState].msg}</Toast>
          </S.ToastBox>
        )}
      </S.VideoBox>
      {/* <h2 style={{ color: isFaceInside ? 'green' : 'red' }}>
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
      )} */}
    </S.FaceDetectionContainer>
  );
};

export default FaceRecognition;
