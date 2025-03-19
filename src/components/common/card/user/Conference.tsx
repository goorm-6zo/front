import * as S from './Conference.style';

type ConferenceProps = {
  title: string;
  date: number;
  place: string;
};

const Conference: React.FC<ConferenceProps> = ({ title, date, place }) => {
  return (
    <S.CardContainer>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'var(--blue-200)',
        }}
      ></div>
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

export default Conference;
