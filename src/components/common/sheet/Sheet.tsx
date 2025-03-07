import React from 'react';
import IconButton from '../button/IconButton';
import * as S from './Sheet.style';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <S.SideSheetOverlay $isOpen={isOpen}>
      <S.SideSheetContainer onClick={(e) => e.stopPropagation()} $isOpen={isOpen}>
        <S.CloseButtonWrapper>
          <IconButton onClick={onClose}>X</IconButton>
        </S.CloseButtonWrapper>
        <S.MenuItem>행사 일정(홈)</S.MenuItem>
        <S.MenuItem>입장 현황</S.MenuItem>
      </S.SideSheetContainer>
    </S.SideSheetOverlay>
  );
};

export default Sheet;
