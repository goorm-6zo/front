export type IconName =
  | 'hamburger'
  | 'arrowdown'
  | 'send'
  | 'error'
  | 'success'
  | 'close';

export interface BaseIconProps {
  size?: number;
  color?: string;
}

export interface IconProps extends BaseIconProps {
  name: IconName;
}
