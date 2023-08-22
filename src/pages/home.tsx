import { styled } from "styled-components";
import Banner from "../components/Banner";
import Model from "./HomeSection/Model";

const Container = styled.section`
  height: 200vh;
`;
const Home = () => {
  return (
    <Container>
      <Banner />
      <Model />
      {/* <Electric/>
      <MyHyundae/>
      <Brand/>
      <Event/> */}
    </Container>
  );
};

export default Home;
