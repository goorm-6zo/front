import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  state: 'default' | 'pressed' | 'disabled';
}

export const StyledButton = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  font: var(--font-title-l);
  border-radius: var(--radius-12);
  cursor: ${({ state }) => (state === 'disabled' ? 'not-allowed' : 'pointer')};
  opacity: ${({ state }) => (state === 'disabled' ? '0.5' : '1')};
  transition:
    background-color 0.2s ease,
    border 0.2s ease;

  ${({ theme, variant, state }) => {
    const isPressed = state === 'pressed';

    switch (variant) {
      case 'primary':
        return `
          background-color: ${
            state === 'disabled'
              ? theme.colors.background.secondary
              : isPressed
                ? theme.colors.background.primaryPressed
                : theme.colors.background.primary
          };
          color: ${
            state === 'disabled'
              ? theme.colors.typo.disabled
              : isPressed
                ? theme.colors.typo.weak
                : theme.colors.typo.white
          };
          border: none;

          &:active {
            background-color: ${theme.colors.background.primaryPressed};
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
          background-color: ${
            state === 'disabled'
              ? theme.colors.background.secondaryPressed
              : isPressed
                ? theme.colors.background.secondaryPressed
                : theme.colors.background.white
          };
          color: ${theme.colors.typo.secondary};
          border: 1px solid ${theme.colors.border.secondary};

          &:active {
            background-color: ${theme.colors.background.secondaryPressed};
          }

          &:disabled {
            pointer-events: none;  /* 클릭 이벤트 방지 */
            background-color: ${theme.colors.background.secondaryPressed};
            color: ${theme.colors.typo.disabled};
          }
        `;
      case 'tertiary':
        return `
          background-color: ${
            state === 'disabled'
              ? theme.colors.background.secondaryPressed
              : isPressed
                ? theme.colors.background.secondaryPressed
                : theme.colors.background.secondary
          };
          color: ${theme.colors.typo.secondary};
          border: none;

          &:active {
            background-color: ${theme.colors.background.secondaryPressed};
          }

          &:disabled {
            pointer-events: none;  /* 클릭 이벤트 방지 */
            background-color: ${theme.colors.background.secondaryPressed};
            color: ${theme.colors.typo.disabled};
          }
        `;
      default:
        return '';
    }
  }}
`;
