import { useTheme } from 'styled-components';
import Icon from '../../../common/icon/Icon';
import * as S from './FaceDataCard.style';
import Popup from '../../../common/popup/Popup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FaceDataCardProps = {};

const FaceDataCard: React.FC<FaceDataCardProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);

  const onContinue = () => {
    navigate('/face-registration');
  };

  const onClickPopup = () => {
    setisPopupOpen((prev) => !prev);
  };

  return (
    <S.CardContainer onClick={onClickPopup}>
      {isPopupOpen && (
        <Popup type="register" onContinue={onContinue} onClose={onClickPopup} />
      )}
      <S.TextContainer>
        <S.TextWrapper>내 얼굴 정보 관리하기</S.TextWrapper>
        <Icon name="strokeplus" size={20} color={theme.colors.icon.primary} />
      </S.TextContainer>

      <S.ContentsContainer>
        <Icon name="strokeface" size={56} color={theme.colors.icon.secondary} />
        <S.ContentsTextWrapper>얼굴을 등록해주세요.</S.ContentsTextWrapper>
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default FaceDataCard;
