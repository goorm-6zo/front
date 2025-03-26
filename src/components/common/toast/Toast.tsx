import React from 'react';
import * as S from './Toast.style';
import Icon from '../icon/Icon';
import { useTheme } from 'styled-components';

export interface ToastProps {
  state?: 'default' | 'error';
  children: React.ReactNode;
}

export const Toast = ({ state = 'default', children }: ToastProps) => {
  const theme = useTheme();

  return (
    <>
      {state === 'error' ? (
        <S.Toast state={state}>
          <Icon
            name="fillwarning"
            size="mn"
            color={theme.colors.icon.error}
            backgroundColor={theme.colors.icon.white}
          />
          {children}
        </S.Toast>
      ) : (
        <S.Toast state={state}>
          <Icon
            name="fillsuccess"
            size="mn"
            color={theme.colors.icon.primary}
            backgroundColor={theme.colors.icon.white}
          />
          {children}
        </S.Toast>
      )}
    </>
  );
};
