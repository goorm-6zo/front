import * as S from './ConferenceCard.style';
import Img from '../../../img/Img';
import React from 'react';

type ConferenceCardProps = {
  title: string;
  date: string;
  place: string;
  imageUrl?: string;
  onClick?: () => void;
};

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  title,
  date,
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
          <S.InfoItem>{date}</S.InfoItem>
          <S.InfoItem>{place}</S.InfoItem>
        </S.InfoTextWrapper>
      </S.TextContainer>
    </S.CardContainer>
  );
};

// 기본 props 설정
ConferenceCard.defaultProps = {
  imageUrl: '',
  onClick: () => {}, // 기본 빈 함수 제공
};

export default ConferenceCard;
