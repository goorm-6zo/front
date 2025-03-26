import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleBox = styled.div`
  padding: var(--spacing-20) 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--spacing-4);
`;
export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.typo.primary};
  font-weight: 600;
  font-size: 22px;
`;
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.typo.tertiary};
`;

export const QRContainer = styled.div`
  padding: 0 var(--spacing-20);
  display: flex;
  align-items: center;
  justify-content: center;
`;
