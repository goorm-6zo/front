import styled from 'styled-components';

export const FaceDetectionContainer = styled.div`
  position: relative;
`;

export const VideoBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

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
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;
