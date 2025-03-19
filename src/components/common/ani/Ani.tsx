import React from 'react';
import * as S from './Ani.style';
type AniProps = {
  imageUrl?: string;
};
const Ani: React.FC<AniProps> = ({ imageUrl }) => {
  return (
    <S.AniContainer>
      {imageUrl && <S.Ani src={imageUrl} alt="애니메이션 이미지" />}
    </S.AniContainer>
  );
};

export default Ani;
