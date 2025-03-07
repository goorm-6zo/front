import React from 'react';
import * as S from './TextButton.style.ts';

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void; // 클릭 이벤트 핸들러
};

const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <S.TextButtonWrapper onClick={onClick}>{children}</S.TextButtonWrapper>
  );
};

export default TextButton;
