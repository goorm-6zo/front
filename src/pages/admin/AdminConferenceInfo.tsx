import { useParams } from 'react-router-dom';
import { getSessionInfo } from '../../api/admin/conference/getSessionInfo';
import { useEffect } from 'react';
const AdminConferenceInfo = () => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const getInfo = async () => {
      const sessionId = Number(id);
      try {
        const res = await getSessionInfo(sessionId);
        console.log('resL:', res);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getInfo();
  }, []);
  return <div>AdminConferenceInfo</div>;
};

export default AdminConferenceInfo;
