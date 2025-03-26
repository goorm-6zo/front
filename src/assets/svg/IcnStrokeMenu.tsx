import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokeMenu: React.FC<BaseIconProps> = ({
  size = '100%',
  color = '#414244',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 18"
      fill="none"
    >
      <path
        d="M1.5 1L20.5 0.999998"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M1.5 9L20.5 9"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M1.5 17L20.5 17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IcnStrokeMenu;
