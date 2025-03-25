import styled from 'styled-components';
import { media } from '../../../../styles/breakpoints';

export const StyledButton = styled.button`
  display: inline-flex;
  gap: var(--spacing-8);
  justify-content: center;
  align-items: center;
  padding: var(--spacing-16) var(--spacing-24);
  border: none;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.typo.white};
  font: var(--font-title-l);
  border-radius: var(--radius-9999);
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.colors.background.primaryPressed};
    color: ${({ theme }) => theme.colors.typo.weak};
  }

  ${media.mobile} {
    padding: var(--spacing-16) var(--spacing-24);
  }
  ${media.desktop} {
    padding: var(--spacing-20) var(--spacing-28);
  }
  ${media.expanded} {
    padding: var(--spacing-20) var(--spacing-28);
  }
`;
