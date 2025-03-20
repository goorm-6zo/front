// import { useEffect, useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// import * as S from './FaceDetection.style';
// import { initWebcam, loadModels } from '../../utils/face/initAndLoad';
// import { getFaceDetection } from '../../utils/face/getFaceDetectionInfo';
// import { isFaceInBox } from '../../utils/face/isFaceInBox';

// const BOX_WIDTH = 230;
// const BOX_HEIGHT = 230;

// interface FaceDetectionProps {
//   onFaceDetected: (captureImage: () => void, descriptor?: Float32Array) => void;
// }

// export default function FaceDetection({ onFaceDetected }: FaceDetectionProps) {
//   const webcamRef = useRef<Webcam | null>(null);
//   const [isModelLoaded, setIsModelLoaded] = useState(false);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isFaceInside, setIsFaceInside] = useState<boolean>(false);

//   useEffect(() => {
//     const init = async () => {
//       const modelStatus = await loadModels();
//       if (modelStatus) {
//         setIsModelLoaded(true);
//       }
//       const webCamState = await initWebcam();
//       if (webCamState) setIsVideoLoaded(true);
//     };

//     init();
//   }, []);

//   const detectFace = async () => {
//     const { detection, video } = await getFaceDetection(
//       webcamRef,
//       isVideoLoaded,
//       isModelLoaded,
//     );

//     if (!detection || !video) return;

//     console.log('얼굴 감지됨!');
//     const faceBox = detection.detection.box;

//     if (isFaceInBox(faceBox, video)) {
//       setIsFaceInside(true);

//       const currentDescriptor = detection.descriptor;

//       onFaceDetected(captureImage, currentDescriptor);
//     } else {
//       setIsFaceInside(false);
//     }

//     requestAnimationFrame(detectFace);
//   };

//   useEffect(() => {
//     if (isModelLoaded && isVideoLoaded) {
//       setIsLoading(false);
//       detectFace();
//     }
//   }, [isModelLoaded, isVideoLoaded]);

//   const captureImage = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//     }
//   };

//   return (
//     <S.FaceDetectionContainer>
//       {isLoading && <div>Loading...</div>}
//       <S.VideoBox>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           mirrored={true}
//           style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
//         />
//         {isVideoLoaded && (
//           <S.Box
//             boxWidth={BOX_WIDTH}
//             boxHeight={BOX_HEIGHT}
//             isFaceInside={isFaceInside}
//           ></S.Box>
//         )}
//       </S.VideoBox>
//       <h2 style={{ color: isFaceInside ? 'green' : 'red' }}>
//         {isFaceInside
//           ? '얼굴이 네모 안에 있습니다!'
//           : '얼굴을 네모 안에 맞춰주세요.'}
//       </h2>
//       {capturedImage && (
//         <div>
//           <img
//             src={capturedImage}
//             alt="캡처된 이미지"
//             style={{ width: '200px' }}
//           />
//         </div>
//       )}
//     </S.FaceDetectionContainer>
//   );
// }
