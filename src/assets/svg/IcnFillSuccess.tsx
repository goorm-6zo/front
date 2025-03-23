import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnFillSuccess: React.FC<BaseIconProps> = ({
  size = 24,
  color = '#ffffff',
  backgroundColor = '#414244',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="21"
        rx="10.5"
        fill={backgroundColor}
      />
      <path
        d="M8.91323 14.1542L16.435 6.63245C16.6125 6.45495 16.8196 6.3662 17.0562 6.3662C17.2929 6.3662 17.5 6.45495 17.6775 6.63245C17.855 6.80996 17.9438 7.02089 17.9438 7.26526C17.9438 7.50962 17.855 7.72026 17.6775 7.89717L9.53449 16.0624C9.35699 16.2399 9.1499 16.3286 8.91323 16.3286C8.67656 16.3286 8.46947 16.2399 8.29196 16.0624L4.47562 12.246C4.29812 12.0685 4.21291 11.8579 4.22001 11.6141C4.22711 11.3703 4.31971 11.1594 4.49781 10.9813C4.6759 10.8032 4.88684 10.7145 5.13061 10.7151C5.37438 10.7156 5.58502 10.8044 5.76253 10.9813L8.91323 14.1542Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnFillSuccess;
