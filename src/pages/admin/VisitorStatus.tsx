import { useLocation, useNavigate } from 'react-router-dom';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import FloatingBtn from '../../components/common/button/floatingbtn/FloatingBtn';
import * as S from './VisitorStatus.style.ts';
import { useEffect, useState } from 'react';
import { getConferenceUserStatus } from '../../api/admin/attend/conferenceUserStatus.ts';
import Table from '../../components/common/table/Table.tsx';

interface ConferenceUserStatusData {
  name: string;
  capacity: number;
  attendedCount: number;
  userAttendances: {
    userId: number;
    userName: string;
    isAttended: boolean;
  }[];
}
const VisitorStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userAttend, setUserAttend] = useState<ConferenceUserStatusData | null>(
    null,
  );

  const conferInfo = { ...location.state };

  const handleNavigate = () => {
    navigate('/admin/message-send');
  };

  useEffect(() => {
    const fetchUserAttendData = async () => {
      try {
        if (conferInfo.sessionId) {
          const data = await getConferenceUserStatus(
            conferInfo.conferenceId,
            conferInfo.sessionId,
          );
          setUserAttend(data);
        } else {
          const data = await getConferenceUserStatus(conferInfo.conferenceId);
          setUserAttend(data);
        }
      } catch (error) {
        console.error('데이터 불러오기 실패', error);
      }
    };
    fetchUserAttendData();
  }, [conferInfo.conferenceId, conferInfo.sessionId]);

  const formattedUserAttend = userAttend?.userAttendances.map((attendance) => ({
    name: attendance.userName,
    present: attendance.isAttended,
  }));

  return (
    <ResponsiveLayout hasHeader={true} hasHeaderIcon={true}>
      <S.TitleContainer>
        <S.Title>행사명</S.Title>
        <S.Description>예매자의 참석 여부 데이터를 볼 수 있어요</S.Description>
      </S.TitleContainer>
      <S.TextContainer>
        예약자: {userAttend?.capacity ?? 0}명
        <S.Line />
        참석자: {userAttend?.attendedCount ?? 0}명
      </S.TextContainer>
      {formattedUserAttend && <Table data={formattedUserAttend} />}
      <S.FloatingBtnContainer>
        <FloatingBtn onClick={handleNavigate}>메시지 보내기</FloatingBtn>
      </S.FloatingBtnContainer>
    </ResponsiveLayout>
  );
};

export default VisitorStatus;
