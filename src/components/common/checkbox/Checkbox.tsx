import * as S from './Checkbox.style';
import Icon from '../icon/Icon';
import { useTheme } from 'styled-components';

export interface CheckboxProps {
  variant?: 'primary' | 'secondary';
  label?: string;
  checked: boolean;
  onChange?: () => void;
}

export const Checkbox = ({
  variant = 'primary',
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  const theme = useTheme();

  return (
    <S.CheckboxContainer>
      <S.CheckboxLabel>
        <S.CircleInput
          variant={variant}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <S.IconWrapper>
          {variant === 'primary' ? (
            <Icon
              name="strokecheck"
              size="s"
              color={
                checked ? theme.colors.icon.white : theme.colors.icon.secondary
              }
            />
          ) : (
            <Icon
              name="strokecheck"
              size="xs"
              color={
                checked ? theme.colors.icon.white : theme.colors.icon.secondary
              }
            />
          )}
        </S.IconWrapper>
      </S.CheckboxLabel>
      <S.CheckboxText>{label}</S.CheckboxText>
    </S.CheckboxContainer>
  );
};
