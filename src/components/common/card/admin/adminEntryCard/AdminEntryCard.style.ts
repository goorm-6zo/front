import styled from 'styled-components';
import { media } from '../../../../../styles/breakpoints';

export const CardContainer = styled.div`
  display: grid;
  gap: var(--spacing-4);

  ${media.mobileLayout} {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-12);
  }

  ${media.desktopLayout} {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-28);
  }

  ${media.expandedLayout} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.white};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--spacing-12);
  padding: var(--spacing-12) var(--spacing-16);
  gap: var(--spacing-4);

  ${({ theme }) => theme.media.mobile} {
    height: 122px;
  }

  ${({ theme }) => theme.media.desktop} {
    height: 132px;
  }

  ${({ theme }) => theme.media.expanded} {
    height: 132px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCount = styled.div`
  ${({ theme }) => theme.media.mobile} {
    font: var(--font-title-xs);
  }

  ${({ theme }) => theme.media.desktop} {
    font: var(--font-body-l);
  }

  ${({ theme }) => theme.media.expanded} {
    font: var(--font-body-l);
  }
`;

export const EntryCount = styled.div`
  flex-grow: 1;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    font: var(--font-title-l);
  }

  ${({ theme }) => theme.media.desktop} {
    font: var(--font-title-xl-2);
  }

  ${({ theme }) => theme.media.expanded} {
    font: var(--font-title-xl-2);
  }
`;

export const CornerBox = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
