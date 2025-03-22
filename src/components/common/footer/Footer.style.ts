import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const FooterBox = styled.footer`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.white};
  position: relative;
  margin: 0 auto;

  ${media.mobile} {
    padding: var(--spacing-16) var(--spacing-20);
  }
  ${media.desktop} {
    max-width: 1280px;
    padding: var(--spacing-16) var(--spacing-80);
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  ${media.mobile} {
    padding: var(--spacing-16) var(--spacing-20) 52px var(--spacing-20);
  }
  ${media.desktop} {
    max-width: 1280px;
    padding: var(--spacing-16) var(--spacing-80);
  }
`;
