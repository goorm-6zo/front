import React from 'react';
import { BaseIconProps } from '../../components/common/icon/types';

const IcnStrokeEdit: React.FC<BaseIconProps> = ({
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
        d="M7.11037 19.5006L7.1057 19.5053H4.57443V16.9647L7.11037 19.5006ZM7.96731 18.6448L5.37536 16.0528L16.5154 4.89002L19.2444 7.38173L7.96731 18.6448ZM3.12769 20.8723H7.84195L20.547 8.16726C20.7553 7.9589 20.8723 7.67635 20.8723 7.38173C20.8723 7.08712 20.7553 6.80456 20.547 6.5962L17.4038 3.45299C17.1955 3.2447 16.9129 3.12769 16.6183 3.12769C16.3237 3.12769 16.0411 3.2447 15.8328 3.45299L3.12769 16.1581V20.8723Z"
        fill={color}
      />
    </svg>
  );
};

export default IcnStrokeEdit;
