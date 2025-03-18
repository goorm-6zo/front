import React from 'react';
import * as S from './IcnBtn.style';

type IcnBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const IcnBtn: React.FC<IcnBtnProps> = ({ children, ...props }) => {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
};

export default IcnBtn;
