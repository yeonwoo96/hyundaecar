import { useState } from "react";
import { styled } from "styled-components";
const Container = styled.section`
  max-width: 1400px;
  margin: auto;
  padding-top: 140px;
  color: ${(props) => props.theme.black};
  @media (max-width: 1199px) {
    box-sizing: border-box;
    padding: 140px 32px 0;
    .hide-1200 {
      display: none;
    }
  }
`;

const Title = styled.p`
  text-align: center;
  ${(props) => props.theme.black};
`;
const Des = styled.p`
  color: ${(props) => props.theme.gray};
  text-align: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 16px;
  width: 22em;
`;
const Wrapper = styled.div`
  margin: auto;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1199px) {
  }
`;
const Slide = styled.div`
  position: relative;
  width: 800px;
  height: 440px;
  border: 1px solid #181818;
  overflow: hidden;
`;
const SlideContents = styled.div<{ page: number }>`
  height: 100%;
  width: 200%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transform: translateX(${(props) => props.page * -800 + "px"});
  transition: transform 1s ease-in-out;
`;
const SlideContent = styled.div<{ bg: string }>`
  height: 100%;
  border-right: 1px solid #000;
  background: url(${(props) => props.bg}) no-repeat bottom;
`;
const App = styled.div`
  width: 288px;
  height: 440px;
  border: 1px solid #181818;
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  &.down {
    left: 0;
  }
  &.up {
    right: 0;
  }
`;
const MyHyundai = () => {
  const SlideContentsData = [
    {
      title: "홈",
      des: "보유 차량 정보에 따른 맞춤 정보형 UI 통해 제공",
      bg: "public/images/myhundai/main_myhyundai_home.jpg",
    },
    {
      title: "차고",
      des: "차량정보 및 유지비 관리를 포함한 쉬운 차량 관리",
      bg: "public/images/myhundai/main_myhyundai_garage.jpg",
    },
    {
      title: "Shop",
      des: "마이현대 대표 커머스 현대Shop과의 연계",
      bg: "public/images/myhundai/main_myhyundai_shop.jpg",
    },
    {
      title: "서비스",
      des: "정비를 포함한 다양한 차량 관련 서비스",
      bg: "public/images/myhundai/main_myhyundai_service.jpg",
    },
  ];
  const [SlidePage, setSlidePage] = useState(0);
  const pageUp = () => {
    if (SlideContentsData.length / 2 - 1 > SlidePage) {
      setSlidePage((cur) => cur + 1);
      console.log(SlidePage);
    } else {
      setSlidePage(0);
      console.log(SlidePage);
    }
  };
  const pageDown = () => {
    if (0 === SlidePage) {
      setSlidePage(SlideContentsData.length / 2 - 1);
      console.log(SlidePage);
    } else {
      setSlidePage((cur) => cur - 1);
      console.log(SlidePage);
    }
  };
  return (
    <Container>
      <Title className="h2">myHyundai</Title>
      <Des>
        이제, 단순히 APP을 넘어서 당신의 카라이프를 책임질 ‘라이프 플랫폼
        myHyundai’ 를 만나보세요.
      </Des>
      <Wrapper>
        <Slide>
          <SlideContents onClick={pageUp} page={SlidePage}>
            {SlideContentsData.map((data) => (
              <SlideContent bg={data.bg}>
                <h3 className="h3">{data.title}</h3>
                <p className="des">{data.des}</p>
                <button>자세히 보기</button>
              </SlideContent>
            ))}
          </SlideContents>
          <Btn className="down" onClick={pageDown}>
            {"<"}
          </Btn>
          <Btn className="up" onClick={pageUp}>
            {">"}
          </Btn>
        </Slide>
        <App></App>
      </Wrapper>
    </Container>
  );
};

export default MyHyundai;
