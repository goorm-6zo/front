import { media } from '../../../styles/breakpoints';
import styled, { css } from 'styled-components';

export interface StyledCircleProps {
  variant: 'primary' | 'secondary';
}

const sizeStyles = {
  mobile: {
    primary: css`
      width: 24px;
      height: 24px;
    `,
    secondary: css`
      width: 20px;
      height: 20px;
    `,
  },
  desktop: {
    primary: css`
      width: 28px;
      height: 28px;
    `,
    secondary: css`
      width: 24px;
      height: 24px;
    `,
  },
};

export const CheckboxContainer = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-8);
  margin-right: var(--spacing-8);
`;

export const CheckboxLabel = styled.label`
  position: relative;
  user-select: none;
  cursor: pointer;
`;

export const CircleInput = styled.input<StyledCircleProps>`
  appearance: none;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.border.primary}`};
  background-color: ${({ theme }) => theme.colors.background.white};

  &:active {
    background-color: ${({ theme }) =>
      theme.colors.background.secondaryPressed};
    border: ${({ theme }) => `1px solid ${theme.colors.border.primaryPressed}`};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.icon.notice};
    border: ${({ theme }) => `1px solid ${theme.colors.icon.notice}`};
  }

  ${({ variant }) => sizeStyles.mobile[variant]};

  ${media.desktop} {
    ${({ variant }) => sizeStyles.desktop[variant]};
  }
`;

export const IconWrapper = styled.div``;

export const CheckboxText = styled.span`
  font: var(--font-body-m);
  user-select: none;
`;
