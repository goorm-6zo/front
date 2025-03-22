import React from 'react';
import * as S from './Footer.style';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <S.FooterContainer>{children}</S.FooterContainer>;
};

export default Footer;
