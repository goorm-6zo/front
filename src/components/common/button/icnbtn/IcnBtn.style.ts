import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  padding-right: var(--spacing-0);
  padding-left: var(--spacing-0);
  padding-top: var(--spacing-0);
  padding-bottom: var(--spacing-0);
  border: none;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
