import * as S from './Header.style.ts';
import Icon from '../icon/Icon.tsx';
import IcnBtn from '../button/icnbtn/IcnBtn.tsx';
import Sheet from '../sheet/Sheet.tsx';
import { useState } from 'react';

interface HeaderProps {
  icon?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ icon }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
      <Icon name="logo" />
      {icon && (
        <IcnBtn onClick={openSheet}>
          <Icon name="strokemenu" size={20} />
        </IcnBtn>
      )}

      <Sheet isOpen={isSheetOpen} onClose={closeSheet} />
    </S.HeaderContainer>
  );
};

export default Header;
