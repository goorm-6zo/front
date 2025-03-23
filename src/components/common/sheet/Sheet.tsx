import React from 'react';
import IconButton from '../button/IconButton';
import * as S from './Sheet.style';
import Icon from '../icon/Icon';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <S.SideSheetOverlay $isOpen={isOpen}>
      <S.SideSheetContainer
        onClick={(e) => e.stopPropagation()}
        $isOpen={isOpen}
      >
        <S.CloseButtonWrapper>
          <IconButton onClick={onClose}>
            <Icon name="strokeclose" />
          </IconButton>
        </S.CloseButtonWrapper>
        <S.MenuItem>HOME</S.MenuItem>
        <S.MenuItem>MY</S.MenuItem>
      </S.SideSheetContainer>
    </S.SideSheetOverlay>
  );
};

export default Sheet;
