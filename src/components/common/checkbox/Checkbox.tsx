import * as S from './Checkbox.style';
import Icon from '../icon/Icon';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';

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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize =
    viewportWidth <= 768
      ? variant === 'primary'
        ? 16
        : 12
      : variant === 'primary'
        ? 20
        : 16;

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
          <Icon
            name="strokecheck"
            size={iconSize}
            color={
              checked ? theme.colors.icon.white : theme.colors.icon.secondary
            }
          />
        </S.IconWrapper>
      </S.CheckboxLabel>
      <S.CheckboxText>{label}</S.CheckboxText>
    </S.CheckboxContainer>
  );
};
