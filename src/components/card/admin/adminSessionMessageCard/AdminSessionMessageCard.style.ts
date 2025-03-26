import styled from 'styled-components';
import { media } from '../../../../styles/breakpoints';

export const CardContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  padding: var(--spacing-12) var(--spacing-16);
  position: relative;

  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.background.weak : theme.colors.background.white};
  border-radius: var(--radius-12);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${({ $selected, theme }) =>
      $selected
        ? `3px solid ${theme.colors.border.tertiary}`
        : `1px solid ${theme.colors.border.primary}`};
    border-radius: var(--radius-12);
    pointer-events: none;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);

  ${media.desktop} {
    gap: var(--spacing-16);
  }
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
