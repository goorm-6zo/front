import { useParams } from 'react-router-dom';
import { getSessionInfo } from '../../api/admin/conference/getSessionInfo';
import { useEffect, useState } from 'react';
import * as S from './AdminConferenceInfo.style';
//components

import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { Input } from '../../components/common/input/Input';

//utils
import { formatTimeRange } from '../../utils/time/timeFormat';
type SessionData = {
  id: number;
  conferenceId: number;
  name: string;
  capacity: number;
  location: string;
  startTime: string;
  endTime: string;
  summary: string;
  speakerName: string;
  speakerOrganization: string;
  speakerImage: string;
  active: boolean;
};
const AdminConferenceInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [sessionData, setSessionData] = useState<SessionData>();
  const [time, setTime] = useState<string>('');
  useEffect(() => {
    const getInfo = async () => {
      const sessionId = Number(id);
      try {
        const res = await getSessionInfo(sessionId);

        if (res) {
          setSessionData(res);
          setTime(formatTimeRange(res.startTime, res.endTime));
        }
        console.log('resL:', res);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getInfo();
  }, []);
  return (
    <ResponsiveLayout>
      <S.TitleBox>
        <S.Title>상세 정보</S.Title>
      </S.TitleBox>
      <S.ContContainer>
        <Input
          title="행사 제목"
          state="disabled"
          placeholder={sessionData?.name}
        />
        <Input
          title="장소"
          state="disabled"
          placeholder={sessionData?.location}
        />
        <Input title="시간" state="disabled" placeholder={time} />
      </S.ContContainer>
    </ResponsiveLayout>
  );
};

export default AdminConferenceInfo;
