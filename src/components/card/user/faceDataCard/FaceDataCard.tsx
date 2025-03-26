import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useAuthStore } from '../../../../store/useAuthStore';

import { faceDelete } from '../../../../api/face/faceDelete';

import Icon from '../../../common/icon/Icon';
import Popup from '../../../common/popup/Popup';
import TxtBtn from '../../../common/button/txtbtn/TxtBtn';
import IcnBtn from '../../../common/button/icnbtn/IcnBtn';
import * as S from './FaceDataCard.style';

const FaceDataCard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupState, setPopupState] = useState<
    'register' | 'reRegister' | 'deleteInfo'
  >('register');

  const hasFace = userInfo?.hasFace;

  const openPopupWithState = (state: typeof popupState) => {
    setPopupState(state);
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const onContinue = () => {
    navigate('/face-registration');
  };

  const onDelete = () => {
    // 수정 - 요거 잘 작동하는지 확인해봐야함
    faceDelete();
  };

  return (
    <S.CardContainer>
      {isPopupOpen && (
        <Popup
          type={popupState}
          onContinue={onContinue}
          onClose={popupState === 'deleteInfo' ? onDelete : closePopup}
        />
      )}

      <S.TextContainer>
        <S.TextWrapper>내 얼굴 정보 관리하기</S.TextWrapper>
        <IcnBtn
          onClick={() =>
            openPopupWithState(hasFace ? 'reRegister' : 'register')
          }
        >
          <Icon name="strokeplus" size="mn" color={theme.colors.icon.primary} />
        </IcnBtn>
      </S.TextContainer>

      <S.ContentsContainer>
        <S.MainContentsContainer>
          <Icon
            name="strokeface"
            size="xl"
            color={
              hasFace ? theme.colors.icon.notice : theme.colors.icon.secondary
            }
          />
          <S.ContentsTextWrapper $hasFace={hasFace}>
            {hasFace ? '얼굴 등록이 완료되었습니다.' : '얼굴을 등록해 주세요.'}
          </S.ContentsTextWrapper>
        </S.MainContentsContainer>

        {hasFace && (
          <S.TxtBtnWrapper>
            <TxtBtn onClick={() => openPopupWithState('deleteInfo')}>
              삭제하기
            </TxtBtn>
          </S.TxtBtnWrapper>
        )}
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default FaceDataCard;
