import React from 'react';
import * as S from './CtaButton.style.ts';

type CtaButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant,
}) => {
  return (
    <S.CtaButtonWrapper
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
    >
      {children}
    </S.CtaButtonWrapper>
  );
};

export default CtaButton;
