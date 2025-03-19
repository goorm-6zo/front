import * as S from './Header.style.ts';
import Icon from '../icon/Icon.tsx';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <Icon name="hamburger" />
      <Icon name="hamburger" />
    </S.HeaderContainer>
  );
};

export default Header;
