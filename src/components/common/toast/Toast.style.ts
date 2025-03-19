import styled from 'styled-components';
import { ToastProps } from './Toast';

export const Toast = styled.span<ToastProps>`
  display: inline-flex;
  font: var(--font-body-l);
  border-radius: var(--radius-9999);
  padding: var(--spacing-20);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-12);
  color: ${({ theme }) => theme.colors.typo.white};
  background: ${({ theme, state }) =>
    state === 'error'
      ? theme.colors.background.error
      : theme.colors.background.tertiary};
`;
