import styled from 'styled-components';

interface StyledButtonProps {
  state: 'on' | 'off';
}

export const StyledButton = styled.button<StyledButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--spacing-20) var(--spacing-24);
  font: var(--font-title-xl);
  margin: var(--spacing-0) var(--spacing-20);
  border: none;
  border-radius: var(--radius-12);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.typo.primary};
  ${({ state, theme }) =>
    state === 'on'
      ? `
      background-color: ${theme.colors.background.secondary};
    `
      : `
      background-color: ${theme.colors.background.white};
    `};
`;
