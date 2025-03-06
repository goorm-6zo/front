import React, { ReactNode } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import * as S from './Layout.styles.ts';

interface LayoutProps {
  children: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  titlePosition?: 'center' | 'left';
  title?: string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  footerContent?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  hasHeader = false,
  hasFooter = false,
  titlePosition,
  title,
  leftButton,
  rightButton,
  footerContent,
}) => {
  return (
    <S.LayoutWrapper>
      {hasHeader && (
        <S.HeaderWrapper>
          <Header titlePosition={titlePosition} title={title} leftButton={leftButton} rightButton={rightButton} />
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
