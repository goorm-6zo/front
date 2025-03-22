export type IconName =
  | 'logo'
  | 'hamburger'
  | 'arrowdown'
  | 'send'
  | 'error'
  | 'success'
  | 'close'
  | 'rightArrow';

export interface BaseIconProps {
  size?: number;
  color?: string;
}

export interface IconProps extends BaseIconProps {
  name: IconName;
}
