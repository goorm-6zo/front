import Icon from '../../../icon/Icon';
import Img from '../../../img/Img';
import * as S from './FaceDataCard.style';

type FaceDataCardProps = {};

const FaceDataCard: React.FC<FaceDataCardProps> = () => {
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.TextWrapper>내 얼굴 정보 관리하기</S.TextWrapper>
        <Icon name="strokemenu" />
      </S.TextContainer>

      <S.ContentsContainer>
        <Img size={68} imageUrl="" />
        <S.ContentsTextWrapper>얼굴을 등록해주세요.</S.ContentsTextWrapper>
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default FaceDataCard;
