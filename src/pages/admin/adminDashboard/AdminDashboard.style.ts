import styled from 'styled-components';
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ConferenceCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardInfo = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;
