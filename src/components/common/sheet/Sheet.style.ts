import styled from 'styled-components';

export const SideSheetOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.opacityBlack};
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1;
`;

export const SideSheetContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  width: 264px;
  height: 100vh;
  background: white;
  transition: right 0.3s ease;
  display: flex;
  align-items: flex-end;
  gap: 125px;
  flex-direction: column;
  z-index: 2;
  height: 100%;
`;

export const CloseButtonWrapper = styled.div`
  padding: var(--spacing-16);
  position: relative;
`;

export const ContentsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 70%;
  position: relative;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: #007bff;
  }
`;

export const BottomButtonWrapper = styled.div`
  display: flex;
`;
