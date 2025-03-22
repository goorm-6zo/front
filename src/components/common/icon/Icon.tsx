import React from 'react';
import { IconProps } from './types';
import HamburgerIcon from './HamburgerIcon';
import ArrowDownIcon from './ArrowDownIcon';
import SendIcon from './SendIcon';
import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';
import CloseIcon from './CloseIcon';
import LogoIcon from './LogoIcon';
import RightArrow from './RightArrow';

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  switch (name) {
    case 'logo':
      return <LogoIcon size={size} color={color} />;
    case 'hamburger':
      return <HamburgerIcon size={size} color={color} />;
    case 'arrowdown':
      return <ArrowDownIcon size={size} color={color} />;
    case 'send':
      return <SendIcon size={size} color={color} />;
    case 'error':
      return <ErrorIcon size={size} color={color} />;
    case 'success':
      return <SuccessIcon size={size} color={color} />;
    case 'close':
      return <CloseIcon size={size} color={color} />;
    case 'rightArrow':
      return <RightArrow size={size} color={color} />;
    default:
      return null;
  }
};

export default Icon;
