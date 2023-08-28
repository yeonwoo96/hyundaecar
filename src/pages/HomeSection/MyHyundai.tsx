import { useEffect, useState } from "react";
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
  @media (max-width: 1199px) {
    padding: 140px 14px 0;
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
    flex-flow: column;
    gap: 40px;
  }
`;
// 공통
const Slide = styled.div`
  position: relative;
  width: 800px;
  height: 440px;
  border: 1px solid #ccc;
  overflow: hidden;
  @media (max-width: 1199px) {
    width: 100%;
    overflow-x: scroll;
    border: none;
  }
`;
const SlideContents = styled.div<{ page: number }>`
  height: 100%;
  width: 200%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1199px) {
    width: 300%;
    gap: 2%;
  }
  transform: translateX(${(props) => props.page * -800 + "px"});
  transition: transform 1s ease-in-out;
`;
const SlideContent = styled.div<{ bg: string }>`
  box-sizing: border-box;
  padding: 32px 40px 0;
  height: 100%;
  position: relative;
  background: url(${(props) => props.bg}) no-repeat bottom right;
  .title {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .des {
    margin-bottom: 32px;
  }
  .detail {
    display: flex;
    align-items: center;
    fill: ${(props) => props.theme.blue};
    gap: 10px;
    svg {
      font-size: 14px;
    }
    background: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.blue};
  }
  .line {
    position: absolute;
    box-sizing: border-box;
    height: 65%;
    left: 0;
    bottom: 0;
    width: 100%;
    border-right: 1px solid #ccc;
    &.index1,
    &.index3 {
      border: none;
    }
    @media (max-width: 1199px) {
      border: none;
    }
  }
  @media (max-width: 1199px) {
    border: 1px solid #ccc;
  }
  @media (max-width: 767px) {
    background-size: 100%;
  }
`;
const App = styled.div`
  width: 288px;
  height: 440px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 33px 0 0 40px;
  text-align: left;
  background-color: #f6f3f2;
  background: url("/images/myhundai/re_hyundaishop_app.png") no-repeat;
  background-position: 80% 90%;
  .h4 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .des {
    line-height: 1.6;
    font-size: 16px;
    width: 12em;
    margin-bottom: 30px;
  }
  .detail {
    display: flex;
    align-items: center;
    fill: ${(props) => props.theme.blue};
    gap: 10px;
    padding: 0;
    background: none;
    border: none;
    font-weight: 600;
    font-size: 15px;
    color: ${(props) => props.theme.blue};
    &::after {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      background-image: url("/images/myhundai/ico_btn.png");
      background-repeat: no-repeat;
      background-position: 0 -18px;
      margin-left: 6px;
      position: relative;
      bottom: 1px;
    }
  }
  @media (max-width: 1199px) {
    width: 100%;
    height: 200px;
    padding: 20px;
    background-position: 90% 80%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .h4 {
      margin: 0;
    }
    .des {
      line-height: 1.4;
      margin: 0;
    }
    .detail {
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    background-size: 20%;
  }
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  width: 44px;
  height: 44px;
  border: none;
  fill: #fff;
  font-weight: 400;
  font-size: 16px;
  background: #1f2d3d66;
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
      bg: "/images/myhundai/main_myhyundai_home.jpg",
    },
    {
      title: "차고",
      des: "차량정보 및 유지비 관리를 포함한 쉬운 차량 관리",
      bg: "/images/myhundai/main_myhyundai_garage.jpg",
    },
    {
      title: "Shop",
      des: "마이현대 대표 커머스 현대Shop과의 연계",
      bg: "/images/myhundai/main_myhyundai_shop.jpg",
    },
    {
      title: "서비스",
      des: "정비를 포함한 다양한 차량 관련 서비스",
      bg: "/images/myhundai/main_myhyundai_service.jpg",
    },
  ];
  const [SlidePage, setSlidePage] = useState(0);
  const pageUp = () => {
    setSlidePage((cur) => cur + 1);
  };
  const pageDown = () => {
    setSlidePage((cur) => cur - 1);
  };
  const pageZero = () => {
    setSlidePage(0);
  };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      pageZero(), handleResize();
    });
    return window.removeEventListener("resize", () => {
      pageZero(), handleResize();
    });
  }, []);

  return (
    <Container>
      <Title className="h2">myHyundai</Title>
      <Des>
        이제, 단순히 APP을 넘어서 당신의 카라이프를 책임질 ‘라이프 플랫폼
        myHyundai’ 를 만나보세요.
      </Des>
      <Wrapper>
        <Slide>
          <SlideContents page={SlidePage}>
            {SlideContentsData.map((data, index) => (
              <SlideContent bg={data.bg} key={index}>
                <h3 className="h4 title">{data.title}</h3>
                <p className="des gray">{data.des}</p>
                <button className="detail">
                  {`자세히 보기 `}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </button>
                <div className={`line index${index}`}></div>
              </SlideContent>
            ))}
          </SlideContents>

          {windowSize.width > 1200 && SlidePage !== 0 && (
            <Btn className="down" onClick={pageDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </Btn>
          )}
          {windowSize.width > 1200 &&
            SlideContentsData.length / 2 - 1 > SlidePage && (
              <Btn className="up" onClick={pageUp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </Btn>
            )}
        </Slide>
        <App>
          <h3 className="h4">마이현대 APP</h3>
          <p className="des gray">
            당신의 카라이프를 책임질
            <br /> 현대자동차 대표 앱 myHyundai를 만나보세요
          </p>
          <button className="detail">APP 다운로드</button>
        </App>
      </Wrapper>
    </Container>
  );
};

export default MyHyundai;
