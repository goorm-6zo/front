import React from 'react';
import CtaBtn from '../button/ctabtn/CtaBtn.tsx';
import Icon from '../icon/Icon.tsx';
import * as S from './Popup.style.ts';
import { useTheme } from 'styled-components';

interface PopupProps {
  onContinue: () => void;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onContinue, onClose }) => {
  const theme = useTheme();
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.ContentWrapper>
          <Icon name="strokeface" size={56} color={theme.colors.icon.notice} />
          <S.TextContainer>
            <S.TitleWrapper>얼굴 데이터를 등록하시겠습니까?</S.TitleWrapper>
            <S.SubtitleWrapper>
              안심하세요! 사진이 아닌 특정 정보만 저장됩니다.
            </S.SubtitleWrapper>
          </S.TextContainer>
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
