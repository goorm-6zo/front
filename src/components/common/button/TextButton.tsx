import React from 'react';
import * as S from './TextButton.style.ts';

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <S.TextButtonWrapper onClick={onClick}>{children}</S.TextButtonWrapper>
  );
};

export default TextButton;
