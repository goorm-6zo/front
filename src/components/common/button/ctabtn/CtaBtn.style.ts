import styled from 'styled-components';

interface ButtonProps {
  $variant: 'primary' | 'secondary' | 'tertiary' | 'kakao';
}

export const StyledButton = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-12);
  padding: var(--spacing-12) var(--spacing-12);
  font: var(--font-title-l);
  border-radius: var(--radius-12);
  cursor: pointer;
  width: 100%;

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.background.primary};
          color: ${theme.colors.typo.white};
          border: none;

          &:active {
            background-color: ${theme.colors.background.primaryPressed};
            color: ${theme.colors.typo.weak};
          }

          &:disabled {
            pointer-events: none;
            background-color: ${theme.colors.background.secondary};
            color: ${theme.colors.typo.disabled};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.background.white};
          color: ${theme.colors.typo.secondary};
          border: 1px solid ${theme.colors.border.secondary};

          &:active {
            background-color: ${theme.colors.background.secondaryPressed};
          }
        `;
      case 'tertiary':
        return `
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.typo.secondary};
          border: none;

          &:active {
            background-color: ${theme.colors.background.secondaryPressed};
          }
        `;
      case 'kakao':
        return `
          background-color: #FEE500;
          color: #191919;
          border: none;
          font-weight: bold;

          &:active {
            background-color: #F9D600;
          }

          &:disabled {
            background-color: #F1E800;
            color: #D1D1D1;
          }
        `;
      default:
        return '';
    }
  }};
`;
