// import FaceDetection from '../../components/face/FaceDetection';

export default function FaceRegistration() {
  const handleFaceDetected = (captureImage: () => void) => {
    console.log('등록 모드: 얼굴 감지됨!');
    captureImage();
  };
  return <></>;
  //   return <FaceDetection onFaceDetected={handleFaceDetected} />;
}
