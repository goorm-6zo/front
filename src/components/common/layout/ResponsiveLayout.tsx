import React, { ReactNode } from 'react';
import * as S from './ResponsiveLayout.style';

import Header from '../header/Header';
import Footer from '../footer/Footer';

interface ResponsiveLayoutProps {
  hasHeader?: boolean;
  children: ReactNode;
}

/**
 * 요구사항을 만족하는 반응형 레이아웃 컴포넌트
 * - 320px~768px: 좌우 margin 20px, 가변 너비
 * - 769px~1280px: 좌우 margin 40px, 가변 너비
 * - 1281px 이상: 고정 너비 1200px, 중앙 정렬
 */
const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  hasHeader = true,
  children,
}) => {
  return (
    <S.LayoutWrapper>
      <S.HeaderWrapper>{hasHeader && <Header />}</S.HeaderWrapper>

      <S.MainContentWrapper>
        <S.Container>{children}</S.Container>
      </S.MainContentWrapper>

      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.LayoutWrapper>
  );
};

export default ResponsiveLayout;
