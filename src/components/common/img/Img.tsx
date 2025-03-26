import React from 'react';
import * as S from './Img.style';

type ImgProps = {
  size: 294 | 168 | 140 | 128 | 100 | 80 | 68;
  imageUrl?: string;
  alt?: string;
};

const Img: React.FC<ImgProps> = ({ size, imageUrl }) => {
  return (
    <S.ImgContainer size={size}>
      {imageUrl && <S.Img src={imageUrl} alt="이미지 컴포넌트" />}
    </S.ImgContainer>
  );
};

export default Img;
