import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: var(--spacing-0);
  padding: var(--spacing-12) var(--spacing-16);
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const TextContainer = styled.div`
  display: flex;
  gap: var(--spacing-12);
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.typo.primary};
  display: flex;
  font: var(--font-title-l);
`;

export const InfoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.typo.secondary};
  display: flex;
  font: var(--font-body-s);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
`;
