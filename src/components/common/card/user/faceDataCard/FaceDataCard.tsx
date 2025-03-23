import { useTheme } from 'styled-components';
import Icon from '../../../icon/Icon';
import * as S from './FaceDataCard.style';
import { Toast } from '../../../toast/Toast';

type FaceDataCardProps = {};

const FaceDataCard: React.FC<FaceDataCardProps> = () => {
  const theme = useTheme();

  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.TextWrapper>내 얼굴 정보 관리하기</S.TextWrapper>
        <Icon name="strokeright" size={20} color={theme.colors.icon.primary} />
      </S.TextContainer>

      <S.ContentsContainer>
        <Icon name="strokeface" size={56} color={theme.colors.icon.secondary} />
        <S.ContentsTextWrapper>얼굴을 등록해주세요.</S.ContentsTextWrapper>
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default FaceDataCard;
