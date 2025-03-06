import styled from 'styled-components';
import { DisplayProps } from './Display';

export const DisplayBox = styled.div<
  Omit<DisplayProps, 'textAlign' | 'contentPosition' | 'padding' | 'gap'> & {
    $textAlign?: 'center' | 'left';
    $contentPosition?: 'center' | null;
    $padding?: string;
    $gap?: string;
  }
>`
  background-color: #ebebeb;
  color: black;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '0px'};
  padding: ${(props) => props.$padding || '0px'};
  text-align: ${(props) => props.$textAlign || 'center'};
  height: ${(props) => props.height};

  align-items: ${(props) => (props.$contentPosition === 'center' ? 'center' : 'stretch')};
  justify-content: ${(props) => (props.$contentPosition === 'center' ? 'center' : 'flex-start')};
`;
