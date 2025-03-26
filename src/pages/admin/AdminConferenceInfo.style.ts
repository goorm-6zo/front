import styled from 'styled-components';
export const TitleBox = styled.div`
  padding: var(--spacing-20) 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.typo.primary};
  font-weight: 600;
  font-size: 22px;
`;

export const ContContainer = styled.div`
  padding: var(--spacing-24) var(--spacing-12);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: var(--radius-12);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
`;
export const ProfileBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
