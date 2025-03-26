import { useTheme } from 'styled-components';
import Icon from '../icon/Icon';
import { IconName } from '../icon/types';
import * as S from './Notify.style';
import React from 'react';

interface NotifyProps {
  icon: IconName;
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Notify: React.FC<NotifyProps> = ({
  icon,
  children,
  color,
  backgroundColor,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <S.NotifyContainer onClick={onClick}>
      <S.TextWrapper>
        <Icon
          size="l"
          name={icon}
          color={color}
          backgroundColor={backgroundColor}
        />
        {children}
      </S.TextWrapper>
      <Icon name="strokeright" size="s" color={theme.colors.icon.secondary} />
    </S.NotifyContainer>
  );
};

export default Notify;
