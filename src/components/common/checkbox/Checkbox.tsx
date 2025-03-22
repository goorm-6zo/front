import * as S from './Checkbox.style';
import { Icon } from '../icon';
import { useEffect, useState } from 'react';

export interface CheckboxProps {
  variant?: 'primary' | 'secondary';
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

export const Checkbox = ({
  variant = 'primary',
  label,
  checked = false,
  onChange,
}: CheckboxProps) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
        ? 24
        : 20
      : variant === 'primary'
        ? 28
        : 24;

  return (
    <S.CheckboxContainer>
      <S.CheckboxLabel>
        <S.HiddenInput type="checkbox" checked={checked} onChange={onChange} />
        {checked ? (
          <Icon name="success" color="#1466FF" size={iconSize} />
        ) : (
          <Icon name="success" color="#DDDDDF" size={iconSize} />
        )}
      </S.CheckboxLabel>
      <S.CheckboxText>{label}</S.CheckboxText>
    </S.CheckboxContainer>
  );
};
