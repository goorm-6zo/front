import styled from 'styled-components';

type ImgContainerProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
};

const getSize = (size: ImgContainerProps['size']) => {
  switch (size) {
    case 'xs':
      return { width: '68px', height: '68px' };
    case 's':
      return { width: '100px', height: '100px' };
    case 'm':
      return { width: '140px', height: '140px' };
    case 'l':
      return { width: '335px', height: '140px' };
    case 'xl':
      return { width: '294px', height: '294px' };
    default:
      return { width: '68px', height: '68px' };
  }
};

export const ImgContainer = styled.div<ImgContainerProps>`
  ${({ size }) => {
    const { width, height } = getSize(size);
    return `
      width: ${width};
      height: ${height};
    `;
  }}
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
