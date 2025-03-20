import styled from 'styled-components';

export const AlertContainer = styled.div`
  display: flex;
  padding: var(--spacing-8);
  gap: var(--spacing-8);
  background-color: ${({ theme }) => theme.colors.background.weak};
  border-radius: var(--radius-8);
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--font-body-s);
`;
