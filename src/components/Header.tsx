import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled(motion.div)<{ mousehover: string }>`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  background: ${(props) => (props.mousehover === "" ? null : "#fff")};
`;
const Nav = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  height: 80px;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 13px;
    height: 64px;
    /* 우측 아이콘 버튼들 */
  }
  @media (max-width: 767px) {
    height: 55px;
    padding: 15px;
    /* 우측 아이콘 버튼들 */
  }
`;
// 헤더 상단 y스크롤 진행현황 바
const YbarWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const Ybar = styled(motion.div)`
  height: 4px;
  background: #007fa8;
`;
// 컨텐츠 영역
const InnerWrap = styled.div`
  z-index: 10;
  width: 1400px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// 로고 제위 전체 메뉴 영역
const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  min-width: calc(510px px + 29%);
  @media (min-width: 768px) {
    display: flex;
    width: 76.07%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 82.26%;
    min-width: calc(380px + 38%);
  }
`;
// 중앙 gnb 메뉴
const GNBUl = styled.ul`
  display: flex;
  width: 55%;
  min-width: 460px;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-width: 380px;
    img {
      width: 38px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
// GNB hover시 막대기
const Bar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #002c5f;
`;
const Black = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;
const GNBLi = styled.li`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
`;

const Logo = styled.div`
  svg {
    width: 166px;
    fill: #002c5f;
    @media (max-width: 1024px) {
      width: 362.5%;
    }
  }
  @media (max-width: 1024px) {
    overflow: hidden;
    margin-top: 3px;
    width: 40px;
  }
  @media screen and (max-width: 767px) {
    overflow: hidden;
    display: block;
    width: 35px;
  }
`;
// 우측 유틸 메뉴
const UtilUl = styled.ul`
  .left,
  .right {
    display: flex;
    gap: 10px;
    @media (max-width: 1024px) {
      gap: 4px;
    }
    @media (max-width: 767px) {
      gap: 15px;
    }
  }
  .left,
  .line,
  .mypage {
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: clamp(260px, 40%, 340px);
  }
  button {
    width: 100%;
    height: 100%;
    border: none;
    background-size: cover;
  }
`;
const UtilLi = styled.li`
  /* 우측 아이콘 버튼들 */

  .rbtn {
    width: 26px;
    height: 26px;
    border: none;
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
    }
  }
  .hamburger {
    cursor: pointer;
  }
  .mypage {
    background: url("public/images/w_mypage.png") center;
    background-size: cover;
  }
  .search {
    background: url("public/images/w_search.png") center;
    background-size: cover;
  }
  .menu {
    background: none;
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: end;
    box-sizing: border-box;
    padding: 1.5px 0;
    div {
      width: 100%;
      height: 2px;
      background: #111;
    }
    div:nth-child(2) {
      width: 60%;
    }
  }
  /* 우측 아이콘 버튼들 */
`;
const Line = styled.li`
  width: 1px;
  height: 0.9em;
  background: #999;
`;
const HamOnMenu = styled.div<{ ison: string }>`
  top: 0;
  position: fixed;
  transition: transform 1s ease-in-out;
  transform: translateX(${(props) => (props.ison === "true" ? 0 : "100%")});
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-flow: column;
    gap: 1em;
    align-items: center;
  }
`;
// const Svg = styled.svg``;
// const Path = styled.path``;
const Header = () => {
  const [HamOn, setHamOn] = useState(false);
  const navigate = useNavigate();
  const [barLocation, setBarLocation] = useState("");
  const barMove = (location: string) => {
    setBarLocation(location);
    console.log(location);
  };
  const { scrollY, scrollYProgress } = useScroll();
  // 헤더 상단 페이지 진행상황 바 Ybar의 width
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Nav의 배경화면 맨 상단에서만 투명하게 함

  const background = useTransform(scrollY, [0, 1], ["", "hsla(0,0%,100%,.9)"]);
  const backdropFilter = useTransform(scrollY, [0, 1], ["", "blur(5px)"]);
  return (
    // GNB가 mousehover 되었는지 알려주는 props, hover되면 background:#fff
    <>
      <Container
        style={{ background, backdropFilter }}
        mousehover={barLocation}
      >
        <YbarWrap>
          <Ybar style={{ width }}></Ybar>
        </YbarWrap>
        <Nav>
          <InnerWrap>
            <Logo>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 166 23"
                className="logo color-blue"
              >
                <g className="text">
                  <polygon
                    points="63.76,3.22 63.76,9.47 56.68,9.47 56.68,3.22 52.78,3.22 52.78,19.61 56.68,19.61 56.68,13.02 63.76,13.02 63.76,19.61 67.66,19.61 67.66,3.22 67.46,3.22"
                    className="st0"
                  ></polygon>{" "}
                  <polygon
                    points="81.96,3.22 77.87,9.71 73.8,3.22 69.19,3.22 75.93,13.93 75.93,19.61 79.83,19.61 79.83,13.93 86.56,3.22 86.2,3.22"
                    className="st0"
                  ></polygon>{" "}
                  <path
                    d="M99.11,3.22v12.01c0,0.46-0.34,0.82-0.83,0.82h-6.25V3.22h-3.9v16.39h11.53c1.03,0,1.85-0.3,2.45-0.9c0.6-0.6,0.9-1.42,0.9-2.45V3.22h-0.19H99.11z"
                    className="st0"
                  ></path>{" "}
                  <path
                    d="M118.15,3.22h-11.53v16.39h3.9V6.77h6.26c0.5,0,0.83,0.39,0.83,0.82v12.02h3.9V6.57c0-1.03-0.3-1.85-0.9-2.45 C119.99,3.53,119.17,3.22,118.15,3.22z"
                    className="st0"
                  ></path>{" "}
                  <path
                    d="M136.64,3.22h-11.53v16.39h11.53c1.02,0,1.84-0.3,2.44-0.9c0.6-0.6,0.9-1.42,0.9-2.45V6.57
      c0-1.03-0.3-1.85-0.9-2.45C138.48,3.53,137.66,3.22,136.64,3.22z M136.09,7.62v7.59c0,0.44-0.32,0.85-0.83,0.85h-6.25V6.77h6.23 C135.75,6.77,136.09,7.13,136.09,7.62z"
                    className="st0"
                  ></path>{" "}
                  <path
                    d="M146.78,3.22c-1.02,0-1.85,0.3-2.45,0.9c-0.6,0.6-0.9,1.42-0.9,2.45v13.04h3.89v-5.07h7.08v5.07h3.9V3.22 H146.78z M154.41,6.77v4.22h-7.08V7.6c0-0.4,0.31-0.83,0.83-0.83H154.41z"
                    className="st0"
                  ></path>{" "}
                  <rect
                    x="162.1"
                    y="3.22"
                    width="3.9"
                    height="16.39"
                    className="st0"
                  ></rect>
                </g>{" "}
                <g className="logo">
                  <path
                    d="M22.29,22.83c12.31,0,22.29-5.11,22.29-11.42C44.59,5.11,34.61,0,22.29,0C9.98,0,0,5.11,0,11.41 C0,17.72,9.98,22.83,22.29,22.83z M26.49,17.23c-0.37,0.86-1.01,2.7-2.48,3.44c-0.44,0.22-0.99,0.33-1.49,0.34 c-0.11,0-0.19,0-0.22,0c-4.12,0-7.94-0.57-11.15-1.55c-0.03-0.01-0.1-0.04-0.12-0.05c-0.3-0.1-0.45-0.24-0.45-0.4 c0-0.15,0.08-0.26,0.18-0.36c0.04-0.05,0.11-0.1,0.2-0.18c0.74-0.62,2.97-2.23,7.17-3.84c1.47-0.56,3.31-1.26,5.25-1.67 C24.51,12.72,28.7,12.08,26.49,17.23z M37.75,5.72c0.08-0.14,0.19-0.25,0.38-0.27c0.1-0.01,0.25,0.02,0.46,0.15 c2.62,1.61,4.17,3.62,4.17,5.8c0,3.94-5.06,7.32-12.3,8.8c-0.47,0.09-0.77,0.09-0.88-0.03c-0.07-0.07-0.09-0.2,0-0.35 c0.05-0.08,0.1-0.15,0.19-0.27c3.94-4.65,6.94-11.5,7.8-13.48C37.64,5.95,37.7,5.81,37.75,5.72z M18.16,5.58 c0.37-0.86,1.01-2.7,2.48-3.43c0.45-0.22,0.99-0.33,1.49-0.34c0.11,0,0.19,0,0.22,0c4.12,0,7.94,0.57,11.15,1.55 c0.02,0.01,0.1,0.04,0.12,0.04c0.3,0.1,0.45,0.23,0.45,0.4c0,0.15-0.08,0.26-0.18,0.36c-0.05,0.04-0.11,0.1-0.2,0.18 c-0.74,0.62-2.97,2.23-7.17,3.84c-1.47,0.56-3.32,1.26-5.24,1.67C20.14,10.09,15.95,10.73,18.16,5.58z M14.12,2.61 c0.47-0.09,0.77-0.09,0.88,0.03c0.06,0.07,0.08,0.2,0,0.35c-0.05,0.08-0.1,0.16-0.19,0.27c-3.94,4.65-6.94,11.5-7.8,13.48 c-0.06,0.14-0.13,0.27-0.18,0.36c-0.08,0.14-0.18,0.26-0.37,0.27c-0.11,0.01-0.25-0.02-0.47-0.15 c-2.62-1.61-4.17-3.62-4.17-5.8C1.82,7.48,6.88,4.09,14.12,2.61z"
                    className="st0"
                  ></path>
                </g>
              </svg>
            </Logo>
            <Menu>
              <GNBUl>
                <GNBLi
                  onMouseOver={() => {
                    barMove("model");
                  }}
                  onClick={() => navigate("")}
                >
                  모델
                  {barLocation === "model" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
                <GNBLi
                  onMouseOver={() => {
                    barMove("purchase");
                  }}
                  onClick={() => navigate("/Purchase")}
                >
                  구매/이벤트
                  {barLocation === "purchase" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
                <GNBLi
                  onMouseOver={() => {
                    barMove("service");
                  }}
                  onClick={() => navigate("/Service/story")}
                >
                  서비스/멤버십
                  {barLocation === "service" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
                <GNBLi
                  onMouseOver={() => {
                    barMove("digital");
                  }}
                  onClick={() => navigate("/Digital")}
                >
                  디지털/고객지원
                  {barLocation === "digital" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
                <GNBLi
                  onMouseOver={() => {
                    barMove("brand");
                  }}
                  onClick={() => navigate("/BrandPage")}
                >
                  브랜드
                  {barLocation === "brand" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
                <GNBLi
                  onMouseOver={() => {
                    barMove("shop");
                  }}
                  onClick={() => navigate("/Shop")}
                >
                  <img src="/images/hyundai_shop_logo.png"></img>
                  {barLocation === "shop" && (
                    <Bar className="bar" layoutId="bar" />
                  )}
                </GNBLi>
              </GNBUl>
              <UtilUl>
                <div className="left">
                  <UtilLi>전기·수소차 보조금 조회</UtilLi>
                  <UtilLi>KR</UtilLi>
                </div>
                <Line className="line"></Line>
                <div className="right">
                  <UtilLi>
                    <button className="rbtn mypage"></button>
                  </UtilLi>
                  <UtilLi>
                    <button className="rbtn search"></button>
                  </UtilLi>
                  <UtilLi>
                    <button
                      className="rbtn menu hamburger"
                      onClick={() => setHamOn((cur) => !cur)}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </button>
                  </UtilLi>
                </div>
              </UtilUl>
            </Menu>
          </InnerWrap>
        </Nav>
        <HamOnMenu ison={HamOn.toString()}>
          <ul className="h3" onClick={() => setHamOn(false)}>
            <li onClick={() => navigate("")}>모델</li>
            <li onClick={() => navigate("/Purchase")}>구매/이벤트</li>
            <li onClick={() => navigate("/Service")}>서비스/멤버십</li>
            <li onClick={() => navigate("/Digital")}>디지털/고객지원</li>
            <li onClick={() => navigate("/BrandPage")}>브랜드</li>
            <li onClick={() => navigate("/Shop")}>샵</li>
          </ul>
        </HamOnMenu>
      </Container>
      {barLocation !== "" && (
        <Black
          onMouseOver={() => {
            barMove("");
          }}
        ></Black>
      )}
    </>
  );
};

export default Header;
