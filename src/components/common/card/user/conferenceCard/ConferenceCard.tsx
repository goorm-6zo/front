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
        imageUrl="https://pixabay.com/ko/illustrations/image-8632218/"
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
