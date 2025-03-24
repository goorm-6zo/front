import React from 'react';
import * as S from './SheetBtn.style';

type SheetBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  state: 'on' | 'off';
};

const SheetBtn: React.FC<SheetBtnProps> = ({ children, ...props }) => {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
};

export default SheetBtn;
