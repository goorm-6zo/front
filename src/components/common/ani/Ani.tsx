import React from 'react';
import * as S from './Ani.style';

type AniProps = {
  size?: number;
  imageUrl?: string;
};
const Ani: React.FC<AniProps> = ({ size = 130, imageUrl }) => {
  return (
    <S.AniContainer size={size}>
      {imageUrl && <S.Ani src={imageUrl} alt="애니메이션 이미지" />}
    </S.AniContainer>
  );
};

export default Ani;
