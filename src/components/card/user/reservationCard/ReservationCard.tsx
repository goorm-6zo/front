import * as S from './ReservationCard.style';
import { Checkbox } from '../../../common/checkbox/Checkbox';

type ReservationCardProps = {
  item: {
    id: number;
    summary: string;
    location: string;
    checked: boolean;
  };
  onToggle: (id: number) => void;
};

const ReservationCard: React.FC<ReservationCardProps> = ({
  item,
  onToggle,
}) => {
  const { summary, location, checked } = item;
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.HeaderWrapper>{summary}</S.HeaderWrapper>
        <S.InfoWrapper>{location}</S.InfoWrapper>
      </S.TextContainer>
      <S.ButtonContainer>
        <Checkbox
          variant="primary"
          label=""
          checked={checked}
          onChange={() => onToggle(item.id)}
        />
      </S.ButtonContainer>
    </S.CardContainer>
  );
};

export default ReservationCard;
