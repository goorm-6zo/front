import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  state: 'default' | 'disabled';
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-0);
  font: var(--font-title-s);
  border-radius: var(--radius-8);

  width: 90px;
  height: fit-content;

  ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.background.tertiary};
          color: ${theme.colors.typo.white};
          border: none;

          &:active {
            background-color: ${theme.colors.background.tertiaryPressed};
            color: ${theme.colors.typo.weak};
          }

          &:disabled {
            pointer-events: none;  /* 클릭 이벤트 방지 */
            background-color: ${theme.colors.background.secondary};
            color: ${theme.colors.typo.disabled};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.background.white};
          color: ${theme.colors.typo.primary};
          border: 1px solid ${theme.colors.border.secondary};

          &:active {
            background-color: ${theme.colors.background.secondaryPressed};
          }
        `;
      case 'tertiary':
        return `
          font: var(--font-body-s);
          color: ${theme.colors.typo.tertiary};
          width: 132px;
          padding: var(--spacing-16) var(--spacing-0);
          background-color: transparent;
          color: ${theme.colors.typo.tertiary};
          border-radius: 0px;
          border: none;

          &:active {
            color: ${theme.colors.typo.primary};
          }
        `;
      default:
        return '';
    }
  }}
`;
