import React, { ReactNode } from 'react';
import Header from '../header/Header.tsx';
import Footer from '../footer/Footer.tsx';
import * as S from './Layout.style.ts';

interface LayoutProps {
  children: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  footerContent?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  hasHeader = false,
  hasFooter = false,
  footerContent,
}) => {
  return (
    <S.LayoutWrapper>
      {hasHeader && (
        <S.HeaderWrapper>
          <Header />
        </S.HeaderWrapper>
      )}
      <S.ContentBox>{children}</S.ContentBox>
      {hasFooter && (
        <S.FooterWrapper>
          <Footer footerContent={footerContent} />
        </S.FooterWrapper>
      )}
    </S.LayoutWrapper>
  );
};

export default Layout;
