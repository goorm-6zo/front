import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  padding: var(--spacing-16) var(--spacing-0);
  font: var(--font-title-xl);
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-36);
`;

export const SessionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  font: var(--font-title-l);
`;
