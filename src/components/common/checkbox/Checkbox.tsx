import React from 'react';
import * as S from './Checkbox.style';
import { Icon } from '../icon';

export interface CheckboxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  checked: boolean;
  onChange?: () => void;
}

export const Checkbox = ({
  checked = false,
  onChange,
  children,
}: CheckboxProps) => {
  return (
    <S.CheckboxContainer>
      <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} />
      <S.CustomCheckbox checked={checked}>
        {checked && <Icon name="success" />}
      </S.CustomCheckbox>
      <S.CheckboxLabel>{children}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};
