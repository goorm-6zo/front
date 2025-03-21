import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
  padding: 20px 0 54px 0;
`;

export const TitleBox = styled.div`
  padding: var(--spacing-20) 0;
  margin-bottom: var(--spacing-24);
`;

export const ReservationTitle = styled.h1`
  padding: var(--spacing-8);
  line-height: 30px;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-36);
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

export const BtnWrapper = styled.div`
  margin-top: auto;
  padding-bottom: 20px;
`;
