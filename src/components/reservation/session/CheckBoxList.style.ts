import styled from 'styled-components';
export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  overflow: auto;
  gap: var(--spacing-8);
  padding: var(--spacing-12);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: var(--radius-16);
  &::-webkit-scrollbar {
    display: none;
  }
`;
