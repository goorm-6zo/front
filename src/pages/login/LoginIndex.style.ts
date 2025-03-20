import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 96vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 140px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-bottom: 30px;
`;

export const TextContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; 
`;

export const Line = styled.div`
  height: 10px;
  border-right: 1px solid #eeeff0;
  margin-left: 4px;
  margin-right: 4px;
`;
