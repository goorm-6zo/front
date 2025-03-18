import React from 'react';
import * as S from './FloatingBtn.style';
import { Icon } from '../../icon';

type FloatingBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const FloatingBtn: React.FC<FloatingBtnProps> = ({ children, ...props }) => {
  return (
    <S.StyledButton {...props}>
      <Icon name="send" color="white" />
      {children}
    </S.StyledButton>
  );
};

export default FloatingBtn;
