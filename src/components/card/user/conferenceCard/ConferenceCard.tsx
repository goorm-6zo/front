import * as S from './ConferenceCard.style';
import Img from '../../../common/img/Img';
import React from 'react';

const formatDate = (isoString1: string, isoString2: string) => {
  const date1 = new Date(isoString1);
  const date2 = new Date(isoString2);
  const yyyy = date1.getFullYear();
  const mm = String(date1.getMonth() + 1).padStart(2, '0');
  const dd = String(date1.getDate()).padStart(2, '0');
  const dd2 = String(date2.getDate()).padStart(2, '0');

  return `${yyyy}.${mm}.${dd}-${dd2}`;
};

type ConferenceCardProps = {
  title: string;
  startTime: string;
  endTime: string;
  place: string;
  imageUrl?: string;
  onClick?: () => void;
};

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  title,
  startTime,
  endTime,
  place,
  imageUrl,
  onClick,
}) => {
  return (
    <S.CardContainer onClick={onClick}>
      {imageUrl && <Img size={100} imageUrl={imageUrl} />}
      <S.TextContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <S.InfoTextWrapper>
          <S.InfoItem>{formatDate(startTime, endTime)}</S.InfoItem>
          <S.InfoItem>{place}</S.InfoItem>
        </S.InfoTextWrapper>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default ConferenceCard;
