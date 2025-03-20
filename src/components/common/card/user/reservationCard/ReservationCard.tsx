import * as S from './ReservationCard.style';
import CheckBox from '../../../../reservation/session/CheckBox';

type ReservationCardProps = {};

const ReservationCard: React.FC<ReservationCardProps> = ({}) => {
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.HeaderWrapper>
          메시지 광고 추천 딥러닝 인퍼런스 서버 개선 - Jvm Onnx ...
        </S.HeaderWrapper>
        <S.InfoWrapper>판교 카카오 캠퍼스 4층 A</S.InfoWrapper>
      </S.TextContainer>
      <S.ButtonContainer>
        <CheckBox checked={false} />
      </S.ButtonContainer>
    </S.CardContainer>
  );
};

export default ReservationCard;
