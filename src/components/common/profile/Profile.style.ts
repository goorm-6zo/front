import styled from 'styled-components';

export const ProfileContainer = styled.div<{ size: 'M' | 'S' }>`
  width: ${({ size }) => (size === 'M' ? 52 : 48)}px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: var(--blue-200);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    width: ${({ size }) => (size === 'M' ? 40 : 36)}px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
