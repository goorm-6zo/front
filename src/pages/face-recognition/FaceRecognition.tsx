import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FaceDetection from '../../components/face/FaceDetection';

const FaceRecognition = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const conferenceId = params.get('conferenceId');
    const sectionId = params.get('sectionId');

    console.log('conferenceId:', conferenceId);
    console.log('sectionId:', sectionId);
  }, [location.search]);

  return (
    <div>
      <FaceDetection mode="recognize" />
    </div>
  );
};

export default FaceRecognition;
