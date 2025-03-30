import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  padding: var(--spacing-20) var(--spacing-0);
  font: var(--font-title-xl);
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  user-select: none;
  cursor: auto;
`;
