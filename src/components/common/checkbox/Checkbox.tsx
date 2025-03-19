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
        {checked && (
          <Icon name="success" />
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="17"
          //     height="16"
          //     viewBox="0 0 17 16"
          //     fill="none"
          //   >
          //     <rect
          //       x="0.5"
          //       width="16"
          //       height="16"
          //       fill={checked ? '#00E6FF' : 'transparent'}
          //     />
          //   </svg>
        )}
      </S.CustomCheckbox>
      <S.CheckboxLabel>{children}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};
