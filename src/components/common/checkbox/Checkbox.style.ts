import { media } from '../../../styles/breakpoints';
import styled from 'styled-components';

export interface StyledCircleProps {
  variant: 'primary' | 'secondary';
}

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
  width: 24px;
  height: 24px;
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

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }

  ${media.desktop} {
    width: 24px;
    height: 24px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const CheckboxText = styled.span`
  font: var(--font-body-m);
  user-select: none;
`;
