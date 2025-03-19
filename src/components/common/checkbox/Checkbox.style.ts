import styled from 'styled-components';

export const CheckboxContainer = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-8);
  margin-right: var(--spacing-8);
`;

export const CheckboxLabel = styled.label`
  position: relative;
  user-select: none;
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxText = styled.span`
  font: var(--font-body-m);
  user-select: none;
`;
