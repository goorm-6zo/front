import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  padding: var(--spacing-24) var(--spacing-20);
  margin-bottom: var(--spacing-36);
`;

export const Title = styled.h1`
  ${({ theme }) => theme.media.mobile} {
    font: var(--font-title-xl-2);
  }

  ${({ theme }) => theme.media.desktop} {
    font: var(--font-title-xxl-2);
  }

  ${({ theme }) => theme.media.expanded} {
    font: var(--font-title-xxl-2);
  }
`;

export const Description = styled.h2`
  ${({ theme }) => theme.media.mobile} {
    font: var(--font-body-m);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }

  ${({ theme }) => theme.media.desktop} {
    font: var(--font-body-xl);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }

  ${({ theme }) => theme.media.expanded} {
    font: var(--font-body-xl);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }
`;
