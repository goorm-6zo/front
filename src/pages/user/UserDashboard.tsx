import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { useAuthStore } from '../../store/useAuthStore';
import { getMyConference } from '../../api/reserve/getMyConference';
import * as S from './UserDashboard.style';
import ConferenceCard from '../../components/common/card/user/conferenceCard/ConferenceCard';
import Alert from '../../components/alert/Alert';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';

interface ConferenceItem {
  conferenceId: number;
  conferenceName: string;
  conferenceAt: string;
  conferenceImageUrl: string;
  conferenceLocation: string;
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();

  // 참여할 행사를 담는 상태값
  const [myConferenceList, setMyConferenceList] = useState<
    ConferenceItem[] | null
  >(null);

  // 컨퍼런스 목록을 모두 불러와 시간에 따라 참여할 행사 / 참여한 행사를 구분
  useEffect(() => {
    const getConference = async () => {
      try {
        const result = await getMyConference();
        console.log(result);
        setMyConferenceList(result);
      } catch (error) {
        alert('나의 컨퍼런스 목록 불러오기 실패. 다시 시도해주세요.');
      }
    };

    getConference();
  }, []);

  const onClickConference = (conferenceId: number) => {
    navigate('/conference-info', {
      state: { conferenceId },
    });
  };

  return (
    <ResponsiveLayout>
      <div>
        메인
        <div>유저 정보</div>
        <div>
          <div>이름: {userInfo?.name}</div>
          <div>이메일: {userInfo?.email}</div>
          <div>전화번호: {userInfo?.phone}</div>
        </div>
      </div>
      {/* ------------------------------------------위의 코드를 지워주세요 */}
      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>홈</S.PageTitleWrapper>
          <Alert />
        </S.TopContainer>

        <S.ContentsContainer>
          <S.ConferenceListContainer>
            내가 참여할 행사
            {myConferenceList?.map((elem) => (
              <ConferenceCard
                key={elem.conferenceId}
                title={elem.conferenceName}
                date={elem.conferenceAt}
                place={elem.conferenceLocation}
                imageUrl={elem.conferenceImageUrl}
                onClick={() => onClickConference(elem.conferenceId)}
              />
            ))}
          </S.ConferenceListContainer>
          <S.ConferenceListContainer>
            참여한 행사
            {myConferenceList?.map((elem) => (
              <ConferenceCard
                key={elem.conferenceId}
                title={elem.conferenceName}
                date={elem.conferenceAt}
                place={elem.conferenceLocation}
                imageUrl={elem.conferenceImageUrl}
                onClick={() => onClickConference(elem.conferenceId)}
              />
            ))}
          </S.ConferenceListContainer>
          <CtaBtn
            variant="secondary"
            icon="arrowdown"
            onClick={() => console.log('지난 행사를 더 보여주겠음')}
          >
            더보기
          </CtaBtn>
        </S.ContentsContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default UserDashboard;
