import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);

  & > * {
    flex-shrink: 0;
  }
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  padding: var(--spacing-20) var(--spacing-0);
  font: var(--font-title-xl);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

export const AgreeCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-16);
  margin-top: 68px;
  padding: var(--spacing-12) var(--spacing-0);
`;

export const AgreeAllWrapper = styled.div`
  padding: var(--spacing-12) var(--spacing-0);
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider.primary};
`;

export const AgreeAllContainer = styled.div`
  padding: var(--spacing-0) var(--spacing-20);
`;

export const AgreePortionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-20);
  gap: var(--spacing-12);
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-28);
`;

export const ErrorMsgWrapper = styled.div`
  display: block;
`;

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.typo.error};
  padding-bottom: var(--spacing-8) 0;
  font: var(--font-caption-s);
  text-align: end;
`;
