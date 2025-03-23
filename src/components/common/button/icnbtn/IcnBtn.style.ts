import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  padding: var(—spacing-0);
  border: none;
  margin: var(—spacing-0);

  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
