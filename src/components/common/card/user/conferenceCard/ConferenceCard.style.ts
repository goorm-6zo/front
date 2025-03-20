import styled from 'styled-components';

export const CardContainer = styled.div`
  flex: 1;
  display: flex;
  gap: var(--spacing-16);
  padding: var(--spacing-12) var(--spacing-16);

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleWrapper = styled.h1`
  font: var(--font-title-xl);
  color: ${({ theme }) => theme.colors.typo.primary};
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const InfoItem = styled.div`
  font: var(--font-caption-s);
  color: ${({ theme }) => theme.colors.typo.secondary};
`;
