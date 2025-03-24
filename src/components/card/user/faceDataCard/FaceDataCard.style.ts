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
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider.primary};
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--font-title-m);
  color: ${({ theme }) => theme.colors.typo.secondary};
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-12);
  height: 168px;
`;

export const ContentsTextWrapper = styled.div`
  display: flex;

  font: var(--font-body-l);
  color: ${({ theme }) => theme.colors.typo.tertiary};
`;
