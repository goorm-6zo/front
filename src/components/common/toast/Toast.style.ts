import styled from 'styled-components';
import { ToastProps } from './Toast';

export const Toast = styled.span<ToastProps>`
  display: inline-flex;
  font: var(--font-body-l);
  border-radius: var(--radius-9999);
  padding: var(--spacing-8) var(--spacing-16);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-12);
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.typo.white};
  background: ${({ theme, state }) =>
    state === 'error'
      ? theme.colors.background.error
      : state === 'success'
        ? theme.colors.background.primary
        : theme.colors.background.tertiary};
`;
