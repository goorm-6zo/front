import styled from 'styled-components';
import { media } from '../../../../../styles/breakpoints';

export const CardContainer = styled.div`
  display: grid;
  gap: var(--spacing-4);

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-12);
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-28);
  }

  ${media.expanded} {
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

  ${media.mobile} {
    height: 122px;
  }

  ${media.desktop} {
    height: 132px;
  }

  ${media.expanded} {
    height: 132px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCount = styled.div`
  ${media.mobile} {
    font: var(--font-title-xs);
  }

  ${media.desktop} {
    font: var(--font-body-l);
  }

  ${media.expanded} {
    font: var(--font-body-l);
  }
`;

export const EntryCount = styled.div`
  flex-grow: 1;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    font: var(--font-title-l);
  }

  ${media.desktop} {
    font: var(--font-title-xl-2);
  }

  ${media.expanded} {
    font: var(--font-title-xl-2);
  }
`;

export const CornerBox = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
