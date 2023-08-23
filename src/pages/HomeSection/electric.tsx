import { styled } from "styled-components";
const Container = styled.section`
  margin-top: 140px;
`;
const Wrapper = styled.div`
  max-width: 1640px;
  margin: auto;
  display: grid;
  background: #f7f3f2;
  @media (min-width: 1200px) {
    grid-template-columns: 1.93fr 1fr;
  }
`;
const Title = styled.p`
  text-align: center;
  ${(props) => props.theme.black};
`;
const Des = styled.p`
  color: ${(props) => props.theme.gray};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 16px;
`;
const ImgBox = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextBox = styled.div`
  box-sizing: border-box;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
  span {
    display: inline-block;
  }
  .new {
    background-color: ${(props) => props.theme.sky};
    margin-bottom: 5px;
    padding: 4px;
    font-size: 12px;
  }
  .car-name {
    margin-bottom: 14px;
  }
  .subtitle {
    margin-bottom: 60px;
  }
  .detail-btn {
    background: ${(props) => props.theme.blue};
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: 140px;
    @media (max-width: 1640px) {
      margin-bottom: 30px;
    }
    @media (max-width: 1200px) {
      width: 100%;
      text-align: center;
    }
  }
  .network {
    position: relative;
    h4,
    p,
    button {
      position: relative;
      z-index: 3;
    }
  }
  .h4 {
    margin-bottom: 14px;
  }
  .gray {
    color: ${(props) => props.theme.gray};
    margin-bottom: 30px;
    @media (max-width: 768px) {
      width: 15em;
    }
  }
  .square {
    color: #fff;
  }
  button {
    margin: 0;
    padding: 0;
    margin-right: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.blue};
    background: none;
    border: none;
  }
  .car-art {
    position: absolute;
    bottom: -40%;
    right: 0;
    width: 200px;
    height: 100px;
    z-index: 1;
    @media (max-width: 1200px) {
      bottom: 0;
    }
    @media (max-width: 768px) {
      width: 120px;
      height: 60px;
    }
  }
`;

const Electric = () => {
  return (
    <Container>
      <Title className="h2">전기차</Title>
      <Des>지구 환경을 품은 현대자동차의 미래형 모빌리티를 경험해보세요.</Des>
      <Wrapper>
        <ImgBox>
          <img src="\images\electric\ev_ioniq6.jpg"></img>
        </ImgBox>
        <TextBox>
          <span className="new square">NEW</span>
          <h2 className="car-name h2">아이오닉6</h2>
          <p className="subtitle">내가 만드는 세상</p>
          <span className="detail-btn square ">자세히 보기</span>
          <div className="network">
            <h4 className="h4">충전소&서비스 네트워크</h4>
            <p className="gray ">
              고객님의 계신 곳 근처의 충전소 및 서비스 네트워크를
              안내해드립니다.
            </p>
            <button>{`전기차 >`}</button>
            <button>{`수소전기차 >`}</button>
            <img className="car-art" src="/images/electric/ev_icon_w.jpg"></img>
          </div>
        </TextBox>
      </Wrapper>
    </Container>
  );
};

export default Electric;
