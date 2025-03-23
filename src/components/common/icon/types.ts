export type IconName =
  | 'filldelete'
  | 'filledit'
  | 'fillsend'
  | 'fillsuccess'
  | 'fillwarning'
  | 'logo'
  | 'strokebottom'
  | 'strokecheck'
  | 'strokeclose'
  | 'strokeedit'
  | 'strokeface'
  | 'strokeleft'
  | 'strokemenu'
  | 'strokeplus'
  | 'strokeright'
  | 'stroketop'
  | 'strokewarning';

export interface BaseIconProps {
  size?: number;
  color?: string;
}

export interface IconProps extends BaseIconProps {
  name: IconName;
}
