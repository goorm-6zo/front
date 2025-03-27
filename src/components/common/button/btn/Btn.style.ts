import styled from 'styled-components';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'blue';
  state: 'default' | 'disabled';
  isBlue?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-0);
  font: var(--font-title-s);
  border-radius: var(--radius-8);
  width: 89px;

  ${({ theme, variant, isBlue }) => {
    switch (variant) {
      case 'primary':
        return `
              background-color: ${
                isBlue
                  ? theme.colors.background.primary
                  : theme.colors.background.tertiary
              };
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
          color: ${theme.colors.typo.true};
          background-color: ${theme.colors.background.white};
          border: 1px solid ${theme.colors.border.tertiary};

          &:active {
            background-color: ${theme.colors.background.weak};
          }
        `;
      case 'quaternary':
        return `
          font: var(--font-body-s);
          color: ${theme.colors.typo.tertiary};
          width: 132px;
          padding: var(--spacing-16) var(--spacing-0);
          background-color: transparent;
          border-radius: 0px;
          border: none;

          &:active {
            color: ${theme.colors.typo.primary};
          }
        `;

      default:
        return '';
    }
  }};
`;
