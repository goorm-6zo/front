import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokeTop: React.FC<BaseIconProps> = ({
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
        d="M21.7142 15.9053L12.6869 6.82848C12.6121 6.75024 12.5221 6.68816 12.4224 6.64605C12.3227 6.60395 12.2155 6.58272 12.1073 6.58368C11.9966 6.58319 11.887 6.60457 11.7847 6.64658C11.6823 6.68859 11.5893 6.75041 11.5109 6.82848C8.44368 9.97248 5.48327 13.0025 2.62967 15.9185C2.48927 16.0685 2.14007 16.6685 2.65847 17.1317C3.17807 17.5949 3.63047 17.3141 3.81767 17.1317L12.1073 8.65008L20.5382 17.1317C20.9454 17.4269 21.321 17.4029 21.665 17.0597C22.009 16.7157 22.0262 16.3309 21.7142 15.9053Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnStrokeTop;
