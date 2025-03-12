import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
`;
export const ReservationTitle = styled.h1`
  padding: 30px 0;
  line-height: 30px;
  font-size: 1.2rem;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
`;

export const BtnWrapper = styled.div`
  margin-top: auto;
  padding-bottom: 20px;
`;
