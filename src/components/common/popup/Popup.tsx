import React from 'react';
import CtaBtn from '../button/ctabtn/CtaBtn.tsx';
import Icon from '../icon/Icon.tsx';
import * as S from './Popup.style.ts';

interface PopupProps {
  onContinue: () => void;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onContinue, onClose }) => {
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.ContentWrapper>
          <Icon name="hamburger" size={56} />
          얼굴을 재등록하시겠습니까?
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <CtaBtn onClick={onClose} variant="tertiary">
            아니오
          </CtaBtn>
          <CtaBtn onClick={onContinue}>예</CtaBtn>
        </S.ButtonWrapper>
      </S.PopupContent>
    </S.PopupOverlay>
  );
};

export default Popup;
