import * as S from './Input.style.ts';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'disabled' | 'error';
  disabled?: boolean;
  placeholder?: string;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: 'default' | 'disabled' | 'error';
}

export const Input = ({
  title,
  state = 'default',
  placeholder,
  disabled,
  ...props
}: InputProps) => {
  return (
    <S.StyledInputContainer>
      <S.StyledInputTitle state={state}>
        {title ? title : null}
      </S.StyledInputTitle>
      <S.StyledInput
        state={state}
        {...props}
        disabled={disabled}
        placeholder={placeholder}
      />
    </S.StyledInputContainer>
  );
};

export const Textarea = (props: TextareaProps) => {
  return <S.StyledTextarea {...props} />;
};
