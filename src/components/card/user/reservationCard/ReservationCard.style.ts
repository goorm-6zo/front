import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: var(--spacing-0);
  padding: var(--spacing-12) var(--spacing-16);
  justify-content: space-between;
  min-height: 88px;

  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: var(--radius-12);
  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.typo.primary};
  display: block;
  width: 90%;
  font: var(--font-title-l);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.typo.secondary};
  display: flex;
  font: var(--font-body-s);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
  flex-shrink: 0;
`;
