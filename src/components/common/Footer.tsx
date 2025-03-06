import React from 'react';
import * as S from './Footer.styles.ts';

interface FooterProps {
  footerContent?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ footerContent }) => {
  return <S.FooterBox>{footerContent}</S.FooterBox>;
};

export default Footer;
