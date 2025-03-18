import * as S from './Input.style.ts';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'disabled' | 'error';
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: 'default' | 'disabled' | 'error';
}

export const Input = ({ title, state = 'default', ...props }: InputProps) => {
  return (
    <S.StyledInputContainer>
      <S.StyledInputTitle>{title ? title : null}</S.StyledInputTitle>
      <S.StyledInput state={state} {...props} />
    </S.StyledInputContainer>
  );
};

export const Textarea = (props: TextareaProps) => {
  return <S.StyledTextarea {...props} />;
};
