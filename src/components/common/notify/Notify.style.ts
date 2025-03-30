import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const NotifyContainer = styled.div`
  display: flex;
  padding: var(--spacing-8);
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.weak};
  border-radius: var(--radius-8);
  user-select: none;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: var(--spacing-8);
  justify-content: center;
  align-items: center;
  font: var(--font-body-s);

  ${media.desktop} {
    font: var(--font-body-l);
  }
`;
