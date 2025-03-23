import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokePlus: React.FC<BaseIconProps> = ({
  size = 24,
  color = '#414244',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.28784 12H19.7122M12 4.28784V19.7122"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IcnStrokePlus;
