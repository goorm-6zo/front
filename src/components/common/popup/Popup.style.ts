import styled from 'styled-components';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PopupContent = styled.div`
  background: ${({ theme }) => theme.colors.background.white};
  padding: var(--spacing-44) var(--spacing-20) var(--spacing-24)
    var(--spacing-20);
  border-radius: var(--radius-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-28);
  width: 282px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: var(--spacing-12);
`;
