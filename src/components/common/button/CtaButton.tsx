import React from 'react';
import * as S from './CtaButton.style.ts';

interface CtaButtonProps {
  children: React.ReactNode; // 버튼 내부 텍스트 or 요소
  onClick?: () => void; // 클릭 이벤트 핸들러
  disabled?: boolean; // 버튼 비활성화 여부
  variant?: 'primary' | 'secondary';
  // 추후 button ratio에 관한 props도 추가해야함
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, onClick, disabled = false, variant }) => {
  return (
    <S.CtaButtonWrapper onClick={onClick} disabled={disabled} $variant={variant}>
      {children}
    </S.CtaButtonWrapper>
  );
};

export default CtaButton;
