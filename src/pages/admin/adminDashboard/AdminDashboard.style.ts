import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
export const TitleBox = styled.div`
  padding: var(--spacing-20) 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.typo.primary};
  font-weight: 600;
  font-size: 22px;
`;
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.typo.tertiary};
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-12);
`;
