import { useParams } from 'react-router-dom';
import { getSessionInfo } from '../../api/admin/conference/getSessionInfo';
import { useEffect, useState } from 'react';
import * as S from './AdminConferenceInfo.style';
//components

import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { Input } from '../../components/common/input/Input';

//utils
import { formatTimeRange } from '../../utils/time/timeFormat';
import Profile from '../../components/common/profile/Profile';

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
  speakerStatus: boolean;
  active: boolean;
};
const AdminConferenceInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [sessionData, setSessionData] = useState<SessionData>();
  const [time, setTime] = useState<string>('');
  const conferenceId = 1;
  useEffect(() => {
    const getInfo = async () => {
      const sessionId = Number(id);
      try {
        const res = await getSessionInfo(conferenceId, sessionId);

        if (res) {
          setSessionData(res);
          setTime(formatTimeRange(res.startTime, res.endTime));
        }
        console.log('세션 정보:', res);
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
        {sessionData?.speakerStatus && (
          <>
            <Input
              title="강연자 소속"
              state="disabled"
              placeholder={sessionData?.speakerOrganization}
            />
            <S.ProfileBox>
              <Input
                title="강연자 이름"
                state="disabled"
                placeholder={sessionData?.speakerName}
              />
              <Profile size="L" />
            </S.ProfileBox>
          </>
        )}
      </S.ContContainer>
    </ResponsiveLayout>
  );
};

export default AdminConferenceInfo;
