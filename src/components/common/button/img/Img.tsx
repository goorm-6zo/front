import React from 'react';
import * as S from './Img.style';

type ImgProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  imageUrl?: string;
};

const Img: React.FC<ImgProps> = ({ size, imageUrl }) => {
  return (
    <S.ImgContainer size={size}>
      {imageUrl && <S.Img src={imageUrl} alt="이미지 컴포넌트" />}
    </S.ImgContainer>
  );
};

export default Img;
