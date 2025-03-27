import styled from 'styled-components';
import { media } from '../../styles/breakpoints';
import Btn from '../../components/common/button/btn/Btn';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  padding: var(--spacing-24) var(--spacing-20);
  margin-bottom: var(--spacing-4);

  ${media.desktop} {
    margin-bottom: var(--spacing-36);
  }
`;

export const Title = styled.h1`
  font: var(--font-title-xl-2);

  ${media.desktop} {
    font: var(--font-title-xxl-2);
  }
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: transparent;
  outline: none;
  border: none;
  gap: 9px;
  padding: var(--spacing-12) 0;
  cursor: pointer;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-x;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${media.desktop} {
    padding: var(--spacing-20) 0;
  }
`;

export const Destination = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-20) 0;

  ${media.mobile} {
    margin-top: var(--spacing-12);
  }

  ${media.desktop} {
    margin-top: var(--spacing-20);
  }
`;

export const DestinationLabel = styled.label`
  font: var(--font-title-xl-2);
  margin-right: var(--spacing-20);

  ${media.mobile} {
    font: var(--font-title-l);
  }
`;

export const ImgContainer = styled.div`
  padding-top: var(--spacing-16);
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  padding-bottom: var(--spacing-12);
`;

export const StyledBtn = styled(Btn)`
  max-width: 98px;
  white-space: nowrap;
  flex-grow: 1;

  ${media.desktop} {
    max-width: 108px;
  }
`;

export const BtnDescription = styled.span`
  font: var(--font-body-s);
  color: ${({ theme }) => theme.colors.typo.weak};

  ${media.desktop} {
    font: var(--font-body-l);
  }
`;

export const ImgBox = styled.span`
  display: flex;
  position: relative;
  width: fit-content;

  img {
    border-radius: var(--radius-12);
  }
`;

export const CloseBtn = styled.span`
  display: flex;
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  cursor: pointer;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledToast = styled.div`
  position: fixed;
  bottom: var(--spacing-20);
  left: 50%;
  transform: translateX(-50%);
  padding: var(--spacing-10) var(--spacing-20);
  color: white;
  border-radius: var(--radius-4);
  z-index: 2000;
`;
