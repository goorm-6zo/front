import React from 'react';
import { IconProps } from './types';

// Import all icon components
import IcnFillDelete from '../../../assets/svg/IcnFillDelete';
import IcnFillEdit from '../../../assets/svg/IcnFillEdit';
import IcnFillSend from '../../../assets/svg/IcnFillSend';
import IcnFillSuccess from '../../../assets/svg/IcnFillSuccess';
import IcnFillWarning from '../../../assets/svg/IcnFillWarning';
import IcnLogo from '../../../assets/svg/IcnLogo';
import IcnStrokeBottom from '../../../assets/svg/IcnStrokeBottom';
import IcnStrokeCheck from '../../../assets/svg/IcnStrokeCheck';
import IcnStrokeClose from '../../../assets/svg/IcnStrokeClose';
import IcnStrokeEdit from '../../../assets/svg/IcnStrokeEdit';
import IcnStrokeFace from '../../../assets/svg/IcnStrokeFace';
import IcnStrokeLeft from '../../../assets/svg/IcnStrokeLeft';
import IcnStrokeMenu from '../../../assets/svg/IcnStrokeMenu';
import IcnStrokePlus from '../../../assets/svg/IcnStrokePlus';
import IcnStrokeRight from '../../../assets/svg/IcnStrokeRight';
import IcnStrokeTop from '../../../assets/svg/IcnStrokeTop';
import IcnStrokeWarning from '../../../assets/svg/IcnStrokeWarning';

// Icon component mapping
const ICON_COMPONENTS = {
  filldelete: IcnFillDelete,
  filledit: IcnFillEdit,
  fillsend: IcnFillSend,
  fillsuccess: IcnFillSuccess,
  fillwarning: IcnFillWarning,
  logo: IcnLogo,
  strokebottom: IcnStrokeBottom,
  strokecheck: IcnStrokeCheck,
  strokeclose: IcnStrokeClose,
  strokeedit: IcnStrokeEdit,
  strokeface: IcnStrokeFace,
  strokeleft: IcnStrokeLeft,
  strokemenu: IcnStrokeMenu,
  strokeplus: IcnStrokePlus,
  strokeright: IcnStrokeRight,
  stroketop: IcnStrokeTop,
  strokewarning: IcnStrokeWarning,
};

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  const IconComponent = ICON_COMPONENTS[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent size={size} color={color} />;
};

export default Icon;
