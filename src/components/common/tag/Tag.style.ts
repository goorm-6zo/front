import styled from 'styled-components';
import { TagProps } from './Tag';

export const Tag = styled.span<TagProps>`
  display: inline-flex;
  font: var(--font-caption-s);
  padding: var(--spacing-4) var(--spacing-12);
  border-radius: var(--radius-9999);

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.background.primary};
          color: ${theme.colors.typo.white};
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.typo.primary};
        `;
      case 'tertiary':
        return `
          background-color: ${theme.colors.background.tertiary};
          color: ${theme.colors.typo.white};
        `;
    }
  }};
`;
