import { styled } from "styled-components";
import Banner from "../components/Banner";

const Container = styled.section`
  height: 200vh;
`;
const Home = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Home;
