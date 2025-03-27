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

export const MainContainer = styled.div<{ $hasFooter: boolean }>`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  margin-bottom: ${({ $hasFooter }) => ($hasFooter ? '111.2px' : '0')};

  & * {
    flex-shrink: 0;
  }

  padding: var(--spacing-0) var(--spacing-20);

  ${media.desktop} {
    padding: var(--spacing-0) var(--spacing-80);
  }

  ${media.expanded} {
    max-width: 1120px;
    padding: var(--spacing-0);
  }
`;
