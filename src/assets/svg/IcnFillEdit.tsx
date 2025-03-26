import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnFillEdit: React.FC<BaseIconProps> = ({
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
        d="M7.54568 20.7957H3.01642V16.5738L7.54568 20.7957ZM8.32737 20.2581L3.68502 15.8981L16.3216 3.5337C16.5326 3.3228 16.8187 3.20432 17.117 3.20432C17.4153 3.20432 17.7014 3.3228 17.9124 3.5337L20.6542 6.34055C20.8651 6.55152 20.9836 6.83762 20.9836 7.13593C20.9836 7.43424 20.8651 7.72033 20.6542 7.9313L8.32737 20.2581Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnFillEdit;
