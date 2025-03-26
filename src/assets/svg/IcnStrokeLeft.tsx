import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokeLeft: React.FC<BaseIconProps> = ({
  size = '100%',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.921 2.65451L6.84418 11.2968C6.76594 11.3716 6.70386 11.4616 6.66175 11.5612C6.61965 11.6609 6.59842 11.7682 6.59938 11.8764C6.5989 11.987 6.62027 12.0967 6.66228 12.199C6.70429 12.3014 6.76611 12.3944 6.84418 12.4728C9.98818 15.54 13.0182 18.5004 15.9342 21.354C16.0842 21.4944 16.6842 21.8436 17.1474 21.3252C17.6106 20.8056 17.3298 20.3532 17.1474 20.166L8.66578 11.8764L17.1474 3.83051C17.4426 3.42331 17.4186 3.04771 17.0754 2.70371C16.7314 2.35971 16.3466 2.34251 15.921 2.65451Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnStrokeLeft;
