import { useEffect, useRef, useState } from 'react';
import { useFaceDetection } from '../../hooks/useFaceDetection';
import * as S from './FaceRegistration.style';
import Webcam from 'react-webcam';
import { faceRegister } from '../../api/face/faceRegister';
import { Toast } from '../../components/common/toast/Toast';
import { faceMsg, ToastState } from '../../constant/faceMsg';
import Loading from '../../components/common/loading/Loading';
import { useNavigate } from 'react-router-dom';

const FaceRegistration = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [hasCaptured, setHasCaptured] = useState(false);
  const [faceState, setFaceState] = useState<ToastState>('default');
  const [isCameraVisible, setIsCameraVisible] = useState(true);
  const navigate = useNavigate();

  const handleFaceDetected = (captureImage: () => void) => {
    if (!hasCaptured) {
      captureImage();
      setHasCaptured(true);
    }
    return false;
  };

  const handleFaceRegister = async () => {
    if (!capturedImage) return;
    try {
      const result = await faceRegister(capturedImage);
      console.log('인증 결과:', result.status);
      if (result.status) {
        setFaceState('success');
        setTimeout(() => {
          setIsCameraVisible(false);
        }, 1000);
      }
    } catch (err) {
      console.error('얼굴 인증 오류:', err);
      setFaceState('error');
    }
  };

  useEffect(() => {
    if (capturedImage && hasCaptured) {
      handleFaceRegister();
    }
  }, [hasCaptured]);

  useEffect(() => {
    if (!isCameraVisible) {
      const video = webcamRef.current?.video;
      const stream = video?.srcObject as MediaStream;
      stream?.getTracks().forEach((track) => track.stop());

      navigate('/profile');
    }
  }, [isCameraVisible]);

  const { isLoading, isFaceInside, isVideoLoaded, capturedImage } =
    useFaceDetection(webcamRef, handleFaceDetected);

  return (
    <S.FaceDetectionContainer>
      {isLoading && <Loading />}
      {isCameraVisible && (
        <>
          <S.VideoBox>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              mirrored={true}
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            />
            {isCameraVisible && isVideoLoaded && (
              <S.Box
                $boxWidth={230}
                $boxHeight={230}
                $isFaceInside={isFaceInside}
              ></S.Box>
            )}
            {isCameraVisible && isVideoLoaded && (
              <S.ToastBox>
                <Toast state={faceState}>{faceMsg[faceState].msg}</Toast>
              </S.ToastBox>
            )}
          </S.VideoBox>
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
