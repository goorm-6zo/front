import React from 'react';
import * as S from './CtaBtn.style';
import Icon from '../../icon/Icon';
import { IconName } from '../../icon';
import { useTheme } from 'styled-components';

type CtaBtnProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'variant'
> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'kakao';
  icon?: IconName;
  children: React.ReactNode;
};

const CtaBtn: React.FC<CtaBtnProps> = ({
  variant = 'primary',
  icon,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <S.StyledButton $variant={variant} {...props}>
      {variant === 'kakao' ? (
        <>
          <img src="/src/assets/images/kakao-logo.svg" />
          {children}
        </>
      ) : (
        <>
          {children}
          {icon && (
            <Icon size={20} name={icon} color={theme.colors.typo.secondary} />
          )}
        </>
      )}
    </S.StyledButton>
  );
};

export default CtaBtn;
