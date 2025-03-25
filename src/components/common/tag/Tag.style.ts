import styled from 'styled-components';
import { TagProps } from './Tag';

export const Tag = styled.span<TagProps>`
  display: block;
  font: var(--font-caption-s);
  padding: var(--spacing-4) var(--spacing-12);
  border-radius: var(--radius-9999);
  text-align: center;
  width: ${({ isEntryStatus }) => (isEntryStatus ? '100%' : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.background.primary};
          color: ${theme.colors.typo.white};
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.background.tertiary};
          color: ${theme.colors.typo.white};
        `;
      case 'tertiary':
        return `
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.typo.primary};
        `;
    }
  }};
`;
