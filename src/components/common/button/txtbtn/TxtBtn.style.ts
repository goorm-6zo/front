import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-2);
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.typo.primary};
  margin: var(--spacing-4) var(--spacing-8);
  font: var(--font-caption-s);

  width: fit-content;
  height: fit-content;
`;
