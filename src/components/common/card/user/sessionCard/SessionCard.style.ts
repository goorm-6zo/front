import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  padding: var(--spacing-12) var(--spacing-16);

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
`;

export const TagContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;

export const TitleWrapper = styled.div`
  font: var(--font-title-xl);
  color: ${({ theme }) => theme.colors.typo.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
