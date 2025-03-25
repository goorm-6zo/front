import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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
  ${media.desktop} {
    padding: var(--spacing-0) var(--spacing-80);
  }

  /* 무한 width에 대해 (1281px 이상): 고정 너비 1200px + 중앙 정렬 */
  ${media.expanded} {
    max-width: 1120px;
    padding: var(--spacing-0);
  }
`;
