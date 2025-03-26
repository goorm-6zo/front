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
  // size 'xs' => mob: 12, pc: 16
  // size 's' => mob: 16, pc: 20
  // size 'mn' => mob: 20, pc: 24 <- medium-normal
  // size 'me' => mob: 20, pc: 32 <- medium-extraordinary
  // size 'l' => mob: 24, pc: 32
  // size 'xl' => mob: 56, pc: 56
  // size 'xxl' => mob: 102, pc: 102
  size?: 'xs' | 's' | 'mn' | 'me' | 'l' | 'xl' | 'xxl';
  color?: string;
  backgroundColor?: string;
}

export interface IconProps extends BaseIconProps {
  name: IconName;
}
