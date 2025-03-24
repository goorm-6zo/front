import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMySession } from '../../api/reserve/getMySession';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import ConferenceCard from '../../components/card/user/conferenceCard/ConferenceCard';
import SessionCard from '../../components/card/user/sessionCard/SessionCard';
import * as S from './UserDashboard.style';

// 컨퍼런스 정보를 위한 인터페이스
interface ConferenceInfo {
  conferenceId: number;
  conferenceImageUrl: string;
  conferenceLocation: string;
  conferenceName: string;
  startTime: string;
  endTime: string;
}

// 세션 정보를 위한 인터페이스
interface SessionInfo {
  id: number;
  location: string;
  name: string;
  speakerImage: string | null;
  speakerName: string;
  speakerOrganization: string;
  startTime: string;
  endTime: string;
}

const UserDashboard = () => {
  const location = useLocation();
  const { conferenceId } = location.state || {};

  // 참여할 컨퍼런스 정보를 담는 상태값
  const [myConference, setMyConference] = useState<ConferenceInfo | null>(null);

  // 참여할 세션 목록를 담는 상태값
  const [mySessionList, setMySessionList] = useState<SessionInfo[] | null>(
    null,
  );

  // 컨퍼런스 목록을 모두 불러와 시간에 따라 참여할 행사 / 참여한 행사를 구분
  useEffect(() => {
    const getConferenceInfo = async () => {
      try {
        const result = await getMySession(conferenceId);
        console.log(result);
        console.log(result.sessions);

        // 컨퍼런스 정보
        setMyConference(result);

        // 세션 목록 설정
        setMySessionList(result.sessions);
      } catch (error) {
        alert('선택한 컨퍼런스의 세션 목록 불러오기 실패. 다시 시도해주세요.');
      }
    };

    getConferenceInfo();
  }, [conferenceId]); // conferenceId를 의존성 배열에 추가

  return (
    <ResponsiveLayout>
      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>예매 내역</S.PageTitleWrapper>
        </S.TopContainer>

        <S.ContentsContainer>
          {/* 컨퍼런스 정보 표시 */}
          {myConference && (
            <S.ConferenceListContainer>
              <ConferenceCard
                title={myConference.conferenceName}
                date={myConference.startTime}
                place={myConference.conferenceLocation}
                imageUrl={myConference.conferenceImageUrl}
              />
            </S.ConferenceListContainer>
          )}

          {/* 세션 목록 표시 */}
          <S.ConferenceListContainer>
            <h3>예매한 세션</h3>
            {mySessionList?.map((elem) => (
              <SessionCard
                key={elem.id}
                startTime={elem.startTime}
                endTime={elem.endTime}
                location={elem.location}
                title={elem.name}
                // speakerImage={session.speakerImage}
                speakerName={elem.speakerName}
                speakerOrganization={elem.speakerOrganization}
              />
            ))}
          </S.ConferenceListContainer>
        </S.ContentsContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default UserDashboard;
