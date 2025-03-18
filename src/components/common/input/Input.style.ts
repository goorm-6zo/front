import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-12);
`;

export const StyledInputTitle = styled.div`
  font: var(--font-title-l);
  margin-bottom: var(--spacing-2);
`;

export const StyledInput = styled.input<InputProps>`
  font: var(--font-body-m);
  border: none;
  outline: none;
  padding: var(--spacing-16) var(--spacing-4);
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
  padding: var(--spacing-16);
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-16);
  font-size: 16px;
  resize: none;
  min-height: 100px;
  font: var(--font-body-m);
  color: ${({ theme }) => theme.colors.typo.primary};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.border.primaryPressed};
  }
`;
