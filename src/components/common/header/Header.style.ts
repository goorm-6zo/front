import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const HeaderContainer = styled.header`
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
