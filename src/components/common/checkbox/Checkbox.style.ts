import styled from 'styled-components';
import { CheckboxProps } from './Checkbox';

export const CheckboxContainer = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  gap: var(--spacing-8);
  user-select: none;
  justify-content: center;
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CustomCheckbox = styled.span<CheckboxProps>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: ${({ checked, theme }) =>
    checked
      ? `2px solid ${theme.colors.border.tertiary}`
      : `2px solid ${theme.colors.border.primary}`};
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:active {
    border: ${({ theme }) => theme.colors.border.primaryPressed};
    background: ${({ checked, theme }) =>
      checked
        ? theme.colors.background.primaryPressed
        : theme.colors.background.secondaryPressed};
  }
`;

export const CheckboxLabel = styled.span`
  font: var(--font-body-l);
`;
