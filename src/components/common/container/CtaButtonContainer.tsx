import React from 'react';
import * as S from './CtaButtonContainer.style.ts';

interface CtaButtonContainer {
  children: React.ReactNode;
}

const CtaButtonContainer: React.FC<CtaButtonContainer> = ({ children }) => {
  return <S.CtaButtonContainer>{children}</S.CtaButtonContainer>;
};

export default CtaButtonContainer;
