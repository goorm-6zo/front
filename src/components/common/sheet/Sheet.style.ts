import styled from 'styled-components';

export const SideSheetOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1;
`;

export const SideSheetContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100vh;
  background: white;
  transition: right 0.3s ease;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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
