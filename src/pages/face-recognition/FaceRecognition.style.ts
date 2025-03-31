import styled from 'styled-components';

export const FaceDetectionContainer = styled.div`
  position: relative;
`;

export const VideoBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

interface BoxProps {
  $boxWidth: number;
  $boxHeight: number;
  $isFaceInside: boolean;
}
export const ToastBox = styled.span`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// export const Box = styled.div<BoxProps>`
//   position: absolute;
//   width: ${({ $boxWidth }) => `${$boxWidth}px`};
//   height: ${({ $boxHeight }) => `${$boxHeight}px`};
//   border: ${({ $isFaceInside }) =>
//     $isFaceInside ? '3px solid blue' : '3px solid red'};
//   top: 50%;
//   left: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: translate(-50%, -50%);
// `;

export const Box = styled.div<BoxProps>`
  position: absolute;
  width: ${({ $boxWidth }) => `${$boxWidth}px`};
  height: ${({ $boxHeight }) => `${$boxHeight}px`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  &::before,
  &::after,
  > div::before,
  > div::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: ${({ $isFaceInside }) =>
      $isFaceInside ? `3px solid #1466FF` : '3px solid white'};
  }

  &::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  > div::before {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  > div::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
`;
