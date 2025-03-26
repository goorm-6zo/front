import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useAuthStore } from '../../store/useAuthStore';

import { getMyConference } from '../../api/reserve/getMyConference';

import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import ConferenceCard from '../../components/card/user/conferenceCard/ConferenceCard';
import Notify from '../../components/common/notify/Notify';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import Popup from '../../components/common/popup/Popup';
import * as S from './UserDashboard.style';

interface ConferenceItem {
  conferenceId: number;
  conferenceImageUrl: string;
  conferenceLocation: string;
  conferenceName: string;
  endTime: string;
  startTime: string;
}

const UserDashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [myConferenceList, setMyConferenceList] = useState<
    ConferenceItem[] | null
  >(null);
  const [myVisitedConferenceList, setMyVisitedConferenceList] = useState<
    ConferenceItem[] | null
  >(null);
  const [showAllVisited, setShowAllVisited] = useState(false);

  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const handleMoreClick = () => setShowAllVisited(true);
  const onContinue = () => navigate('/face-registration');

  const onClickConference = (conferenceId: number) => {
    navigate('/conference-info', { state: { conferenceId } });
  };

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const result = await getMyConference();
        const now = new Date();

        setMyConferenceList(
          result.filter(
            (item: ConferenceItem) => new Date(item.endTime) >= now,
          ),
        );
        setMyVisitedConferenceList(
          result.filter((item: ConferenceItem) => new Date(item.endTime) < now),
        );
      } catch (error) {
        alert('나의 컨퍼런스 목록 불러오기 실패. 다시 시도해주세요.');
      }
    };

    fetchConferences();
  }, []);

  return (
    <ResponsiveLayout hasHeaderIcon>
      {isPopupOpen && (
        <Popup type="register" onContinue={onContinue} onClose={togglePopup} />
      )}

      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>홈</S.PageTitleWrapper>
          {!userInfo?.hasFace && (
            <Notify
              icon="fillwarning"
              color={theme.colors.icon.white}
              backgroundColor={theme.colors.icon.notice}
              onClick={togglePopup}
            />
          )}
        </S.TopContainer>

        <S.ContentsContainer>
          {/* 다가오는 행사 */}
          <S.ConferenceListContainer>
            다가오는 행사
            {myConferenceList && myConferenceList.length > 0 ? (
              myConferenceList.map((item) => (
                <ConferenceCard
                  key={item.conferenceId}
                  title={item.conferenceName}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  place={item.conferenceLocation}
                  imageUrl={item.conferenceImageUrl}
                  onClick={() => onClickConference(item.conferenceId)}
                />
              ))
            ) : (
              <S.EmptyContainer>다가오는 행사가 없습니다</S.EmptyContainer>
            )}
          </S.ConferenceListContainer>

          {/* 지난 행사 */}
          <S.ConferenceListContainer>
            지난 행사
            {myVisitedConferenceList && myVisitedConferenceList.length > 0 ? (
              (showAllVisited
                ? myVisitedConferenceList
                : myVisitedConferenceList.slice(0, 2)
              ).map((item) => (
                <ConferenceCard
                  key={item.conferenceId}
                  title={item.conferenceName}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  place={item.conferenceLocation}
                  imageUrl={item.conferenceImageUrl}
                  onClick={() => onClickConference(item.conferenceId)}
                />
              ))
            ) : (
              <S.EmptyContainer>참여한 행사가 없습니다</S.EmptyContainer>
            )}
          </S.ConferenceListContainer>

          {/* 더보기 버튼 */}
          {myVisitedConferenceList &&
            myVisitedConferenceList.length > 2 &&
            !showAllVisited && (
              <CtaBtn
                variant="secondary"
                icon="strokebottom"
                onClick={handleMoreClick}
              >
                더보기
              </CtaBtn>
            )}
        </S.ContentsContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default UserDashboard;
