import React from 'react';
import * as S from './Btn.style';

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  state?: 'default' | 'disabled';
  children: React.ReactNode;
};

const Btn: React.FC<BtnProps> = ({
  variant = 'primary',
  state = 'default',
  children,
  ...props
}) => {
  return (
    <S.StyledButton
      variant={variant}
      state={state}
      disabled={state === 'disabled'}
      {...props}
    >
      {children}
    </S.StyledButton>
  );
};

export default Btn;
