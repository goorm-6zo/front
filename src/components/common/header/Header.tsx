import * as S from './Header.style.ts';
import Icon from '../icon/Icon.tsx';
import IcnBtn from '../button/icnbtn/IcnBtn.tsx';
import Sheet from '../sheet/Sheet.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  icon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ icon }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  // Sheet를 여는 함수
  const openSheet = () => {
    setIsSheetOpen(true);
  };

  // Sheet를 닫는 함수
  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <S.HeaderContainer>
      <IcnBtn onClick={handleClick}>
        <Icon name="logo" size="l" />
      </IcnBtn>
      {icon && (
        <IcnBtn onClick={openSheet}>
          <Icon name="strokemenu" size="mn" />
        </IcnBtn>
      )}

      <Sheet isOpen={isSheetOpen} onClose={closeSheet} />
    </S.HeaderContainer>
  );
};

export default Header;
