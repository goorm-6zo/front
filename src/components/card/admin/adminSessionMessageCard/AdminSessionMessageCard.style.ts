import styled from 'styled-components';

export const CardContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  padding: var(--spacing-12) var(--spacing-16);

  border: ${({ $selected, theme }) =>
    $selected
      ? `2px solid ${theme.colors.border.tertiary}`
      : `1px solid ${theme.colors.border.primary}`};
  border-radius: var(--radius-12);
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.background.weak : theme.colors.background.white};
  transition:
    background-color 0.3s,
    border-color 0.3s;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
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

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  font: var(--font-title-l);
  color: ${({ theme }) => theme.colors.typo.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
