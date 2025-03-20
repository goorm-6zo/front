import React from 'react';
import { BaseIconProps } from './types';

const LogoIcon: React.FC<BaseIconProps> = ({ size = 24, color = '#000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 22"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.47362 11.9672L-5.94473e-05 11.9672C-5.97975e-05 15.9737 3.24787 19.2217 7.25439 19.2217L7.25439 15.748C5.16633 15.748 3.47362 14.0553 3.47362 11.9672Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.4501 7.58614L25.9063 5.12988C23.0733 2.29684 18.48 2.29684 15.647 5.12988L18.1032 7.58615C19.5797 6.10967 21.9736 6.10966 23.4501 7.58614Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.41017 7.71442H10.8838C10.8838 3.70789 7.63592 0.459961 3.62939 0.459961L3.62939 3.93365C5.71746 3.93365 7.41017 5.62635 7.41017 7.71442Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6778 7.71442H18.1514C18.1514 3.70789 14.9035 0.459961 10.897 0.459961V3.93365C12.985 3.93365 14.6777 5.62635 14.6778 7.71442Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.4427 7.58461L25.8989 5.12835C28.732 7.96139 28.732 12.5547 25.8989 15.3877L23.4427 12.9314C24.9191 11.4549 24.9191 9.06109 23.4427 7.58461Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.0978 12.9324L15.6415 15.3887C18.4746 18.2217 23.0678 18.2217 25.9009 15.3887L23.4446 12.9324C21.9681 14.4089 19.5743 14.4089 18.0978 12.9324Z"
        fill={color}
      />
      <path
        d="M18.1489 12.8945L18.1489 21.5999L14.7195 21.5999L14.7195 12.8945L18.1489 12.8945Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
