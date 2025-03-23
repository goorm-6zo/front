import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

// 전체 레이아웃 감싸는 컨테이너
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// 헤더 영역
export const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MarginTop = styled.header`
  margin-top: 56px;
`;

// 반응형 컨테이너 - 요구사항에 맞는 마진과 너비를 가짐
export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;

  & * {
    flex-shrink: 0;
  }

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
