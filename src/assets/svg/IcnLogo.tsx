import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnLogo: React.FC<BaseIconProps> = ({
  size = '100%',
  color = '#414244',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 22"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.47362 11.9662L-5.94473e-05 11.9662C-5.97975e-05 15.9728 3.24787 19.2207 7.25439 19.2207L7.25439 15.747C5.16633 15.747 3.47362 14.0543 3.47362 11.9662Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4501 7.58517L25.9063 5.12891C23.0733 2.29587 18.48 2.29587 15.647 5.12891L18.1032 7.58517C19.5797 6.10869 21.9736 6.10869 23.4501 7.58517Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41017 7.71344H10.8838C10.8838 3.70691 7.63592 0.458984 3.62939 0.458984L3.62939 3.93267C5.71746 3.93267 7.41017 5.62538 7.41017 7.71344Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6778 7.71344H18.1514C18.1514 3.70691 14.9035 0.458984 10.897 0.458984V3.93267C12.985 3.93267 14.6777 5.62538 14.6778 7.71344Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4429 7.58558L25.8992 5.12932C28.7322 7.96236 28.7322 12.5556 25.8992 15.3887L23.4429 12.9324C24.9194 11.4559 24.9194 9.06207 23.4429 7.58558Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.098 12.9324L15.6418 15.3887C18.4748 18.2217 23.0681 18.2217 25.9011 15.3887L23.4449 12.9324C21.9684 14.4089 19.5745 14.4089 18.098 12.9324Z"
        fill={color}
      />
      <path
        d="M18.1492 12.8945L18.1492 21.5999L14.7198 21.5999L14.7198 12.8945L18.1492 12.8945Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnLogo;
