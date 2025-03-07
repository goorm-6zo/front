import React from 'react';
import * as S from './Header.style.ts';

interface HeaderProps {
  titlePosition?: 'center' | 'left';
  title?: string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ titlePosition = 'center', title, leftButton, rightButton }) => {
  return (
    <S.HeaderContainer>
      {titlePosition === 'center' && <S.ButtonWrapper>{leftButton}</S.ButtonWrapper>}

      <S.TitleBox $titlePosition={titlePosition}>{title}</S.TitleBox>

      {rightButton && <S.ButtonWrapper>{rightButton}</S.ButtonWrapper>}
    </S.HeaderContainer>
  );
};

export default Header;
