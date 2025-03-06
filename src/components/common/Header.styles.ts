import styled from 'styled-components';

export const HeaderContainer = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: black;
  padding: 16px;
  text-align: center;
  position: relative;
`;

export const TitleBox = styled.div<{ $titlePosition: 'center' | 'left' }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$titlePosition === 'left' ? 'flex-start' : 'center')};
  position: ${(props) => (props.$titlePosition === 'center' ? 'absolute' : 'static')};
  left: ${(props) => (props.$titlePosition === 'center' ? '50%' : 'auto')};
  transform: ${(props) => (props.$titlePosition === 'center' ? 'translateX(-50%)' : 'none')};
  padding: ${(props) => (props.$titlePosition === 'left' ? '0 16px' : '0')};
`;

export const ButtonWrapper = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
