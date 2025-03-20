import styled from 'styled-components';

export const CardContainer = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0);
  padding: var(--spacing-16) var(--spacing-16);

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-16) var(--spacing-2);

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider.primary};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--font-title-m);
  color: ${({ theme }) => theme.colors.typo.secondary};
`;

export const ContentsTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--font-body-m);
  color: ${({ theme }) => theme.colors.typo.primary};
`;
