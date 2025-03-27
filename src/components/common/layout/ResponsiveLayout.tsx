import React, { ReactNode } from 'react';
import Header from '../header/Header';
import * as S from './ResponsiveLayout.style';

interface ResponsiveLayoutProps {
  hasHeader?: boolean;
  hasHeaderIcon?: boolean;
  children: ReactNode;
  hasFooter?: boolean;
}

/**
 * 요구사항을 만족하는 반응형 레이아웃 컴포넌트
 * - 320px~768px: 좌우 margin 20px, 가변 너비
 * - 769px~1280px: 좌우 margin 40px, 가변 너비
 * - 1281px 이상: 고정 너비 1200px, 중앙 정렬
 */
const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  hasHeader = true,
  hasHeaderIcon = false,
  children,
  hasFooter = false,
}) => {
  return (
    <S.LayoutWrapper>
      {hasHeader && (
        <S.HeaderWrapper>
          {hasHeaderIcon ? <Header icon={true} /> : <Header />}
        </S.HeaderWrapper>
      )}
      {hasHeader && <S.MarginTop></S.MarginTop>}
      <S.MainContainer $hasFooter={hasFooter}>{children}</S.MainContainer>
    </S.LayoutWrapper>
  );
};

export default ResponsiveLayout;
