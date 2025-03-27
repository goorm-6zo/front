import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInputContainer = styled.div<InputProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-0) var(--spacing-12);
`;

export const StyledInputTitle = styled.div<InputProps>`
  font: var(--font-title-l);
  margin-bottom: var(--spacing-2);
  color: ${({ state, theme }) =>
    state === 'disabled'
      ? theme.colors.typo.secondary
      : theme.colors.typo.primary};
`;

export const StyledInput = styled.input<InputProps>`
  font: var(--font-body-m);
  border: none;
  outline: none;
  padding: var(--spacing-16) var(--spacing-4);
  background-color: transparent;
  border-radius: 0px;
  &:focus {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.border.primaryPressed};
  }
  ${({ state, theme }) => {
    switch (state) {
      case 'error':
        return `
          border-bottom: 1px solid ${theme.colors.border.error};
        `;
      case 'disabled':
        return `
          pointer-events: none;
          color: ${theme.colors.typo.disabled};
          border-bottom: 1px solid ${theme.colors.border.disabled};
        `;
      default:
        return `
          border-bottom: 1px solid ${theme.colors.border.primary};
        `;
    }
  }}
`;

export const StyledTextarea = styled.textarea`
  display: flex;
  width: 100%;
  padding: var(--spacing-16);
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-16);
  font-size: 16px;
  resize: none;
  min-height: 232px;
  font: var(--font-body-m);
  color: ${({ theme }) => theme.colors.typo.primary};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.border.primaryPressed};
  }
`;
