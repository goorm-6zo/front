import React from 'react';
import * as S from './Img.style';

type ImgProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  imageUrl?: string;
};

const Img: React.FC<ImgProps> = ({ size, imageUrl }) => {
  return (
    <S.ImgContainer size={size}>
      {imageUrl && <S.Img src={imageUrl} alt="프로필 이미지" />}
    </S.ImgContainer>
  );
};

export default Img;
