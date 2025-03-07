import styled from 'styled-components';
const Home = () => {
  return (
    <Div>
      <span>h1태그입니다.</span>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid blue;
  padding: 5px;
  box-sizing: border-box;
`;
