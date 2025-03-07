import React from 'react';
import * as S from './IconButton.style.ts';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void; // 클릭 이벤트 핸들러
};

const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <S.IconButtonWrapper onClick={onClick}>{children}</S.IconButtonWrapper>
  );
};

export default IconButton;
