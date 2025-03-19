import styled from 'styled-components';

export const AniContainer = styled.div`
  width: 158px;
  aspect-ratio: 1/1;
  background-color: var(--blue-200);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  //모바일
  @media (max-width: 768px) {
    width: 130px;
  }
`;
export const Ani = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
