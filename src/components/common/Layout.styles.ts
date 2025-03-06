import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
`;

export const ContentBox = styled.main`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  min-height: 0;

  & > * {
    flex-shrink: 0;
  }
`;
