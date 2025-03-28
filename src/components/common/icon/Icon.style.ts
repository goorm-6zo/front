import styled from 'styled-components';
import { media } from '../../../styles/breakpoints';

const ICON_SIZES = {
  xs: { mobile: 12, pc: 16 },
  s: { mobile: 16, pc: 20 },
  mn: { mobile: 20, pc: 24 },
  me: { mobile: 20, pc: 32 },
  l: { mobile: 24, pc: 32 },
  xl: { mobile: 56, pc: 56 },
  xxl: { mobile: 102, pc: 102 },
};

export const ResponsiveIcon = styled.div<{ size: keyof typeof ICON_SIZES }>`
  cursor: pointer;
  ${media.mobile} {
    width: ${({ size }) => ICON_SIZES[size].mobile}px;
    height: ${({ size }) => ICON_SIZES[size].mobile}px;
  }

  ${media.desktop} {
    width: ${({ size }) => ICON_SIZES[size].pc}px;
    height: ${({ size }) => ICON_SIZES[size].pc}px;
  }
`;
