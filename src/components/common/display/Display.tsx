import React from 'react';
import * as S from './Display.style.ts';

export interface DisplayProps {
  children: React.ReactNode;
  height?: 'auto' | '100%'; // 100%는 화면 전체를 채울 때 사용
  padding?: string;
  contentPosition?: 'center' | null; // Display 컴포넌트 내에서 콘텐츠의 위치를 지정
  textAlign?: 'center' | 'left';
  gap?: string;
}

const Display: React.FC<DisplayProps> = ({ children, height, padding, contentPosition, textAlign, gap }) => {
  return (
    <S.DisplayBox
      $textAlign={textAlign}
      $padding={padding}
      height={height}
      $contentPosition={contentPosition}
      $gap={gap}
    >
      {children}
    </S.DisplayBox>
  );
};

export default Display;
