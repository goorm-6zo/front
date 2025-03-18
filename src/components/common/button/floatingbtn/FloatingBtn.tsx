import React from 'react';
import * as S from './FloatingBtn.style';
import { Icon } from '../../icon';
import { useTheme } from 'styled-components';

type FloatingBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const FloatingBtn: React.FC<FloatingBtnProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <S.StyledButton {...props}>
      <Icon name="send" color={theme.colors.icon.white} />
      {children}
    </S.StyledButton>
  );
};

export default FloatingBtn;
