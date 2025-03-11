import styled from 'styled-components';

export const FaceDetectionContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;
interface BoxProps {
  boxWidth: number;
  boxHeight: number;
  isFaceInside: boolean;
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  width: ${({ boxWidth }) => `${boxWidth}px`};
  height: ${({ boxHeight }) => `${boxHeight}px`};
  border: ${({ isFaceInside }) =>
    isFaceInside ? '3px solid green' : '3px solid red'};
  top: 30%;
  left: 50%;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  transform: 'translate(-50%, -50%)';
`;
