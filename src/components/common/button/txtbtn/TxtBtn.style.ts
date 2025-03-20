import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-2);
  border: none;
  margin: var(--spacing-4) var(--spacing-8);
  font: var(--font-caption-s);
  background-color: white;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.typo.tertiary};

  width: fit-content;
  height: fit-content;
`;
