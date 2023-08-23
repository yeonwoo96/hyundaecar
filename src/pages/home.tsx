import { styled } from "styled-components";
import Banner from "../components/Banner";
import Model from "./HomeSection/Model";
import Electric from "./HomeSection/electric";
import MyHyundai from "./HomeSection/MyHyundai";
import Brand from "./HomeSection/Brand";
import Events from "./HomeSection/Event";

const Container = styled.section``;
const Home = () => {
  return (
    <Container>
      <Banner />
      <Model />
      <Electric />
      <MyHyundai />
      <Brand />
      <Events />
    </Container>
  );
};

export default Home;
