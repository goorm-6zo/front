import * as S from './ConferenceCard.style';
import Img from '../../../img/Img';

type ConferenceCardProps = {
  title: string;
  date: number;
  place: string;
};

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  title,
  date,
  place,
}) => {
  return (
    <S.CardContainer>
      <Img
        size={100}
        imageUrl="https://cdn.pixabay.com/photo/2025/02/19/07/41/animal-9417081_960_720.jpg"
      />
      <S.TextContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <S.InfoTextWrapper>
          <S.InfoItem>{date}</S.InfoItem>
          <S.InfoItem>{place}</S.InfoItem>
        </S.InfoTextWrapper>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default ConferenceCard;
