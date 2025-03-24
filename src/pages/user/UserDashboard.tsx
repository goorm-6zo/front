import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { useAuthStore } from '../../store/useAuthStore';
import { getMyConference } from '../../api/reserve/getMyConference';
import * as S from './UserDashboard.style';
import ConferenceCard from '../../components/card/user/conferenceCard/ConferenceCard';
import Notify from '../../components/common/notify/Notify';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import Popup from '../../components/common/popup/Popup';

interface ConferenceItem {
  conferenceId: number;
  conferenceImageUrl: string;
  conferenceLocation: string;
  conferenceName: string;
  startTime: string;
  endTime: string;
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  const theme = useTheme();

  // Popup창을 관리하는 상태값
  const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);

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

  const onContinue = () => {
    navigate('/face-registration');
  };

  const onClickPopup = () => {
    setisPopupOpen((prev) => !prev);
  };

  return (
    <ResponsiveLayout>
      {isPopupOpen && (
        <Popup type="register" onContinue={onContinue} onClose={onClickPopup} />
      )}
      {/* ------------------------------------------위의 코드를 지워주세요 */}
      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>홈</S.PageTitleWrapper>
          <Notify
            icon="fillwarning"
            color={theme.colors.icon.white}
            backgroundColor={theme.colors.icon.notice}
            onClick={onClickPopup}
          />
        </S.TopContainer>

        <S.ContentsContainer>
          <S.ConferenceListContainer>
            다가오는 행사
            {myConferenceList && myConferenceList.length > 0 ? (
              myConferenceList.map((elem) => (
                <ConferenceCard
                  key={elem.conferenceId}
                  title={elem.conferenceName}
                  date={elem.startTime}
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
            {myConferenceList && myConferenceList.length > 0 ? (
              myConferenceList.map((elem) => (
                <ConferenceCard
                  key={elem.conferenceId}
                  title={elem.conferenceName}
                  date={elem.startTime}
                  place={elem.conferenceLocation}
                  imageUrl={elem.conferenceImageUrl}
                  onClick={() => onClickConference(elem.conferenceId)}
                />
              ))
            ) : (
              <S.EmptyContainer>참여한 행사가 없습니다</S.EmptyContainer>
            )}
          </S.ConferenceListContainer>
          {myConferenceList && myConferenceList.length > 0 ? (
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
