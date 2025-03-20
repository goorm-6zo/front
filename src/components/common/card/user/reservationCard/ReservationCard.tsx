import * as S from './ReservationCard.style';
import CheckBox from '../../../../reservation/session/CheckBox';
import { Checkbox } from '../../../checkbox/Checkbox';
type ReservationCardProps = {
  item: {
    id: number;
    summary: string;
    location: string;
  };
};

const ReservationCard: React.FC<ReservationCardProps> = ({ item }) => {
  console.log('렌더링 됨');
  const { summary, location } = item;
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.HeaderWrapper>{summary}</S.HeaderWrapper>
        <S.InfoWrapper>{location}</S.InfoWrapper>
      </S.TextContainer>
      <S.ButtonContainer>
        <Checkbox variant="primary" label="" checked={true} />
      </S.ButtonContainer>
    </S.CardContainer>
  );
};

export default ReservationCard;
