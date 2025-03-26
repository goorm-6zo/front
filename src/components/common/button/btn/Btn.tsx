import React from 'react';
import * as S from './Btn.style';

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'blue';
  state?: 'default' | 'disabled';
  isBlue?: boolean;
  children: React.ReactNode;
};

const Btn: React.FC<BtnProps> = ({
  variant = 'primary',
  state = 'default',
  children,
  isBlue,
  ...props
}) => {
  return (
    <S.StyledButton
      variant={variant}
      state={state}
      disabled={state === 'disabled'}
      isBlue={isBlue}
      {...props}
    >
      {children}
    </S.StyledButton>
  );
};

export default Btn;
