import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { getMyConference } from '../../api/reserve/getMyConference';
import * as S from './UserDashboard.style';
import ConferenceCard from '../../components/card/user/conferenceCard/ConferenceCard';
import Notify from '../../components/common/notify/Notify';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import Popup from '../../components/common/popup/Popup';
import { useAuthStore } from '../../store/useAuthStore';

interface ConferenceItem {
  conferenceId: number;
  conferenceImageUrl: string;
  conferenceLocation: string;
  conferenceName: string;
  endTime: string;
  startTime: string;
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { userInfo } = useAuthStore();

  // Popup창을 관리하는 상태값
  const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);

  // 다가오는 행사를 담는 상태값
  const [myConferenceList, setMyConferenceList] = useState<
    ConferenceItem[] | null
  >(null);

  // 지난 행사를 담는 상태값
  const [myVisitedConferenceList, setMyVisitedConferenceList] = useState<
    ConferenceItem[] | null
  >(null);

  // useEffect로 컨퍼런스 목록을 모두 불러와 시간에 따라 참여할 행사 / 참여한 행사를 구분
  useEffect(() => {
    const getConference = async () => {
      try {
        const result = await getMyConference();

        const now = new Date();

        const upcoming = result.filter(
          (item: ConferenceItem) => new Date(item.endTime) >= now,
        );

        const visited = result.filter(
          (item: ConferenceItem) => new Date(item.endTime) < now,
        );

        // console.log(result);

        setMyConferenceList(upcoming);
        setMyVisitedConferenceList(visited);
      } catch (error) {
        alert('나의 컨퍼런스 목록 불러오기 실패. 다시 시도해주세요.');
      }
    };

    getConference();
  }, []);

  // 컨퍼런스 카드 클릭 시 전달할 콜백함수
  const onClickConference = (conferenceId: number) => {
    navigate('/conference-info', {
      state: { conferenceId },
    });
  };

  // 팝업을 열고 긍정 CTA를 클릭 시 전달할 콜백함수
  const onContinue = () => {
    navigate('/face-registration');
  };

  // 팝업을 여닫는 콜백함수 (부정 CTA)
  const onClickPopup = () => {
    setisPopupOpen((prev) => !prev);
  };

  return (
    <ResponsiveLayout hasHeaderIcon={true}>
      {isPopupOpen && (
        <Popup type="register" onContinue={onContinue} onClose={onClickPopup} />
      )}
      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>홈</S.PageTitleWrapper>
          {!userInfo?.hasFace && (
            <Notify
              icon="fillwarning"
              color={theme.colors.icon.white}
              backgroundColor={theme.colors.icon.notice}
              onClick={onClickPopup}
            />
          )}
        </S.TopContainer>

        <S.ContentsContainer>
          <S.ConferenceListContainer>
            다가오는 행사
            {myConferenceList && myConferenceList.length > 0 ? (
              myConferenceList.map((elem) => (
                <ConferenceCard
                  key={elem.conferenceId}
                  title={elem.conferenceName}
                  startTime={elem.startTime}
                  endTime={elem.endTime}
                  place={elem.conferenceLocation}
                  imageUrl={elem.conferenceImageUrl}
                  onClick={() => onClickConference(elem.conferenceId)}
                />
              ))
            ) : (
              <S.EmptyContainer>다가오는 행사가 없습니다</S.EmptyContainer>
            )}
          </S.ConferenceListContainer>
          <S.ConferenceListContainer>
            지난 행사
            {myVisitedConferenceList && myVisitedConferenceList.length > 0 ? (
              myVisitedConferenceList.map((elem) => (
                <ConferenceCard
                  key={elem.conferenceId}
                  title={elem.conferenceName}
                  startTime={elem.startTime}
                  endTime={elem.endTime}
                  place={elem.conferenceLocation}
                  imageUrl={elem.conferenceImageUrl}
                  onClick={() => onClickConference(elem.conferenceId)}
                />
              ))
            ) : (
              <S.EmptyContainer>참여한 행사가 없습니다</S.EmptyContainer>
            )}
          </S.ConferenceListContainer>
          {myVisitedConferenceList && myVisitedConferenceList.length >= 3 ? (
            <CtaBtn
              variant="secondary"
              icon="strokebottom"
              onClick={() => console.log('지난 행사를 더 보여주겠음')}
            >
              더보기
            </CtaBtn>
          ) : null}
        </S.ContentsContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default UserDashboard;
