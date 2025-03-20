import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const NameItem = styled.div`
  font: var(--font-title-s);
  color: ${({ theme }) => theme.colors.typo.primary};
`;

export const InfoItem = styled.div`
  font: var(--font-caption-s);
  color: ${({ theme }) => theme.colors.typo.secondary};
`;
