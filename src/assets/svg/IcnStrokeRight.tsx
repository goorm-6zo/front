import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokeRight: React.FC<BaseIconProps> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.07841 2.71042L17.1552 11.2968C17.2334 11.3716 17.2955 11.4616 17.3376 11.5612C17.3797 11.6609 17.401 11.7682 17.4 11.8764C17.4005 11.987 17.3791 12.0967 17.3371 12.199C17.2951 12.3014 17.2333 12.3944 17.1552 12.4728C14.0112 15.54 10.9812 18.5004 8.06521 21.354C7.91521 21.4944 7.31521 21.8436 6.85201 21.3252C6.38881 20.8056 6.66961 20.3532 6.85201 20.166L15.3336 11.8764L6.85201 3.88642C6.55681 3.47922 6.58081 3.10362 6.92401 2.75962C7.26801 2.41562 7.65281 2.39842 8.07841 2.71042Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnStrokeRight;
