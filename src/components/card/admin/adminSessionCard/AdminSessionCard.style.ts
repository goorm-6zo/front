import styled from 'styled-components';
interface CardContainerProps {
  $isActive: boolean;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  padding: var(--spacing-12) var(--spacing-16);

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
  width: 100%;
  user-select: none;
`;

export const ContentsContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TagContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;
export const DetailBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  font: var(--font-title-l);
  color: ${({ theme }) => theme.colors.typo.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BtnContainer = styled.h1`
  flex: 1;
  display: flex;
  gap: var(--spacing-8);
  font: var(--font-title-xl);
  color: ${({ theme }) => theme.colors.typo.primary};
`;
