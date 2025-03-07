import styled from 'styled-components';

interface CtaButtonWrapperProps {
  $variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const CtaButtonWrapper = styled.button<CtaButtonWrapperProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  border: ${(props) => (props.$variant === 'primary' ? 'none' : '1px solid #333')};
  background-color: ${(props) => (props.$variant === 'primary' ? '#333' : 'white')};
  color: ${(props) => (props.$variant === 'primary' ? 'white' : '#333')};

  /* 비활성화된 상태 */
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
