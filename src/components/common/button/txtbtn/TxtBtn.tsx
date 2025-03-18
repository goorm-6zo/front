import React from 'react';
import * as S from './TxtBtn.style';

type TxtBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const TxtBtn: React.FC<TxtBtnProps> = ({ children, ...props }) => {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
};

export default TxtBtn;
