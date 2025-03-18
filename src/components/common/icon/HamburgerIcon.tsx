import React from 'react';
import { BaseIconProps } from './types';

const HamburgerIcon: React.FC<BaseIconProps> = ({
  size = 24,
  color = '#000',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M5 17H19M5 12H19M5 7H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
