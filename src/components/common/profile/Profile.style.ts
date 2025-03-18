import styled from 'styled-components';

export const ProfileContainer = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: var(--blue-200);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: inline-block;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
