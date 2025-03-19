import React from 'react';
import * as S from './Toast.style';
import { Icon } from '../icon';

export interface ToastProps {
  state?: 'default' | 'error';
  children: React.ReactNode;
}

export const Toast = ({ state = 'default', children }: ToastProps) => {
  return (
    <>
      {state === 'error' ? (
        <S.Toast state={state}>
          <Icon name="error" size={20} color="white" />
          {children}
        </S.Toast>
      ) : (
        <S.Toast state={state}>
          <Icon name="success" size={20} color="white" />
          {children}
        </S.Toast>
      )}
    </>
  );
};
