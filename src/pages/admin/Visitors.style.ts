import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  padding: var(--spacing-24) var(--spacing-20);
  margin-bottom: var(--spacing-36);
`;

export const Title = styled.h1`
  ${media.mobile} {
    font: var(--font-title-xl-2);
  }

  ${media.desktop} {
    font: var(--font-title-xxl-2);
  }

  ${media.expanded} {
    font: var(--font-title-xxl-2);
  }
`;

export const Description = styled.h2`
  ${media.mobile} {
    font: var(--font-body-m);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }

  ${media.desktop} {
    font: var(--font-body-xl);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }

  ${media.expanded} {
    font: var(--font-body-xl);
    color: ${({ theme }) => theme.colors.typo.tertiary};
  }
`;

export const FloatingBtnContainer = styled.div`
  position: fixed;
  right: var(--spacing-20);
  bottom: var(--spacing-44);
  z-index: 450;

  ${media.desktop} {
    right: var(--spacing-80);
  }

  ${media.expanded} {
    right: calc(var(--spacing-80) * 2);
  }
`;
