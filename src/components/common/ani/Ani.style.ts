import styled from 'styled-components';
type AniContainerProps = {
  size: number;
};
export const AniContainer = styled.div<AniContainerProps>`
  width: ${({ size }) => `${size}px`};
  aspect-ratio: 1/1;
  background-color: var(--blue-200);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Ani = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
