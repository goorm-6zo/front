import React from 'react';
import * as S from './CtaBtn.style';

type CtaBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  state?: 'default' | 'disabled';
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const CtaBtn: React.FC<CtaBtnProps> = ({
  variant = 'primary',
  state = 'default',
  icon,
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
      {children} {icon && <span>{icon}</span>}
    </S.StyledButton>
  );
};

export default CtaBtn;
