import React from 'react';
import * as S from './Footer.style';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>{children}</S.FooterWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
