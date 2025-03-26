import { useTheme } from 'styled-components';
import Icon from '../../../common/icon/Icon';
import * as S from './FaceDataCard.style';
import Popup from '../../../common/popup/Popup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TxtBtn from '../../../common/button/txtbtn/TxtBtn';
import IcnBtn from '../../../common/button/icnbtn/IcnBtn';

type FaceDataCardProps = {
  isFaceExist: boolean;
};

const FaceDataCard: React.FC<FaceDataCardProps> = ({ isFaceExist }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);
  const [isState, setIsState] = useState<
    'register' | 'reRegister' | 'deleteInfo'
  >('register');

  const handleDeleteFace = () => {
    console.log('얼굴 데이터를 삭제합니다.');
    setIsState(`deleteInfo`);
    onClickPopup();
  };

  const handleRegisterFace = () => {
    console.log('얼굴 데이터를 등록합니다 / 재등록.');

    // 여기서 얼굴 데이터 있는지 없는지 받아와서,,, 아래의 선택적 setIsState
    setIsState(`register`);
    onClickPopup();
  };

  const onContinue = () => {
    navigate('/face-registration');
  };

  const onClickPopup = () => {
    setisPopupOpen((prev) => !prev);
  };

  return (
    <S.CardContainer>
      {isPopupOpen && (
        <Popup
          type={isState}
          onContinue={onContinue}
          onClose={handleRegisterFace}
        />
      )}
      <S.TextContainer>
        <S.TextWrapper>내 얼굴 정보 관리하기</S.TextWrapper>
        <IcnBtn onClick={handleRegisterFace}>
          <Icon name="strokeplus" size="mn" color={theme.colors.icon.primary} />
        </IcnBtn>
      </S.TextContainer>

      <S.ContentsContainer>
        <S.MainContentsContainer>
          <Icon
            name="strokeface"
            size="xl"
            color={
              isFaceExist
                ? theme.colors.icon.notice
                : theme.colors.icon.secondary
            }
          />
          <S.ContentsTextWrapper isFaceExist={isFaceExist}>
            {isFaceExist
              ? '얼굴 등록이 완료되었습니다.'
              : '얼굴을 등록해 주세요.'}
          </S.ContentsTextWrapper>
        </S.MainContentsContainer>

        {isFaceExist && (
          <S.TxtBtnWrapper>
            <TxtBtn onClick={handleDeleteFace}>삭제하기</TxtBtn>
          </S.TxtBtnWrapper>
        )}
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default FaceDataCard;
