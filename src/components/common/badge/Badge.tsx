import React from 'react';
import * as S from './Badge.style';

type BadgeProps = {
  msg?: string;
};
const Badge: React.FC<BadgeProps> = ({ msg = '방문완료' }) => {
  return <S.Badge>{msg}</S.Badge>;
};

export default Badge;
