import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

// 반응형 컨테이너 - 요구사항에 맞는 마진과 너비를 가짐
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  /* 모바일 (320px-768px): 좌우 마진 20px */
  padding: var(--spacing-0) var(--spacing-20);
  box-sizing: border-box;

  /* 데스크톱 (769px-1280px): 좌우 마진 80px */
  ${media.desktopLayout} {
    padding: var(--spacing-0) var(--spacing-80);
  }

  /* 무한 width에 대해 (1281px 이상): 고정 너비 1200px + 중앙 정렬 */
  ${media.expandedLayout} {
    max-width: 1120px;
    padding: var(--spacing-0);
  }
`;

// 전체 레이아웃 감싸는 컨테이너
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// 헤더 영역
export const HeaderWrapper = styled.header`
  width: 100%;
`;

// 메인 콘텐츠 영역
export const MainContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 푸터 영역
export const FooterWrapper = styled.footer`
  width: 100%;
`;
