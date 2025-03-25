import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  padding: var(--spacing-16) var(--spacing-0);
  font: var(--font-title-xl);
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
`;

export const ConferenceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  font: var(--font-title-l);
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--font-body-m);
  color: ${({ theme }) => theme.colors.typo.disabled};
`;
