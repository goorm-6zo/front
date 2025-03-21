import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-top: var(--spacing-20);
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-20);
`;

export const Title = styled.h1`
  font: var(--font-caption-m);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  width: 100%;
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: var(--spacing-8);
`;
