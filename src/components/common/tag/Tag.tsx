import React from 'react';
import * as S from './Tag.style';

export interface TagProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  isEntryStatus?: boolean;
}

export const Tag = ({
  variant = 'primary',
  children,
  isEntryStatus,
}: TagProps) => {
  return (
    <S.Tag variant={variant} isEntryStatus={isEntryStatus}>
      {children}
    </S.Tag>
  );
};
