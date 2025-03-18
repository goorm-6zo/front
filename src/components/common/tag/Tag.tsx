import React from 'react';
import * as S from './Tag.style';

export interface TagProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export const Tag = ({ variant = 'primary', children }: TagProps) => {
  return <S.Tag variant={variant}>{children}</S.Tag>;
};
