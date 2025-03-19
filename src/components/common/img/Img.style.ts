import styled from 'styled-components';

type ImgContainerProps = {
  size: 294 | 168 | 140 | 128 | 100 | 80 | 68;
};

export const ImgContainer = styled.div<ImgContainerProps>`
  width: ${({ size }) => size};
  aspect-ratio: 1/1;
  background-color: var(--blue-100);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-block;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
