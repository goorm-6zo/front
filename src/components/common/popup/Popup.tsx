import React from 'react';
import CtaBtn from '../button/ctabtn/CtaBtn.tsx';
import Icon from '../icon/Icon.tsx';
import * as S from './Popup.style.ts';
import { useTheme } from 'styled-components';
import { popupContents } from './popupContents.ts';

type PopupType = keyof typeof popupContents;

interface PopupProps {
  type: PopupType;
  onContinue: () => void;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ type, onContinue, onClose }) => {
  const theme = useTheme();
  const { icon, title, subtitle } = popupContents[type];

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.ContentWrapper>
          {icon && (
            <Icon
              name="strokeface"
              size="xl"
              color={theme.colors.icon.notice}
            />
          )}
          <S.TextContainer>
            <S.TitleWrapper>{title}</S.TitleWrapper>
            {subtitle && <S.SubtitleWrapper>{subtitle}</S.SubtitleWrapper>}
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
