import { motion } from "framer-motion";
import { styled } from "styled-components";

const Container = styled.section`
  margin-top: 140px;
`;
const Footer1 = styled.article`
  box-sizing: border-box;
  padding-top: 30px;
  background: ${(props) => props.theme.whitegray};
`;
const Contents1 = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  border: 1px solid #e4dcd3;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-sizing: border-box;
  padding: 30px 40px 20px;
  .h5 {
    margin-bottom: 20px;
    font-weight: 600;
  }
  .ulWrap {
  }
  .BigUl {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    & > li {
      border-right: 1px solid #e4dcd3;
      color: ${(props) => props.theme.blue};
      &:last-of-type {
        border: none;
      }
    }
  }
  .SmallUl {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
    gap: 8px 0;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    li {
      span {
        cursor: pointer;
      }

      display: inline;
    }
  }
`;
const Footer2 = styled.article`
  background: ${(props) => props.theme.black};
  box-sizing: border-box;
  padding: 60px 0;
`;
const Contents2 = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  gap: 18px;
  flex-flow: column;
  align-items: center;
`;
const SnsWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
const Svg = styled(motion.svg)`
  width: 28px;
  height: 28px;
  stroke-width: 8px;
  path {
    fill: #fff;
  }
`;
const pathVar = {
  start: {
    fill: "rgba(255,255,255,1)",
  },
  hover: {
    scale: [1, 1.2, 1],
    transition: { repeat: Infinity },
  },
};
const TextBox = styled.p``;
const Footer = () => {
  return (
    <Container>
      <Footer1>
        <Contents1>
          <h4 className="h5">기업정보 · IR정보 · 지속가능경영</h4>
          <div className="ulWrap">
            <ul className="BigUl">
              <li className="h5">
                기업정보
                <ul className="SmallUl gray">
                  <li>
                    <span>기업이념</span>
                  </li>
                  <li>
                    <span>연혁</span>
                  </li>
                  <li>
                    <span>주요관계사</span>
                  </li>
                  <li>
                    <span>CI</span>
                  </li>
                  <li>
                    <span>수상내역</span>
                  </li>
                </ul>
              </li>
              <li className="h5">
                IR 정보
                <ul className="SmallUl gray">
                  <li>
                    <span>경영정보</span>
                  </li>
                  <li>
                    <span>재무정보</span>
                  </li>
                  <li>
                    <span>판매실적</span>
                  </li>
                  <li>
                    <span>공시/공고</span>
                  </li>
                  <li>
                    <span>주식정보</span>
                  </li>
                  <li>
                    <span>IR활동</span>
                  </li>
                  <li>
                    <span>배당조회</span>
                  </li>
                </ul>
              </li>
              <li className="h5">
                지속가능 경영
                <ul className="SmallUl gray">
                  <li>
                    <span>지속가능 경영</span>
                  </li>
                  <li>
                    <span>CSV 소개</span>
                  </li>
                  <li>
                    <span>스토리</span>
                  </li>
                  <li>
                    <span>지속가능성보고서</span>
                  </li>
                  <li>
                    <span>사회공헌백서</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Contents1>
      </Footer1>
      <Footer2>
        <Contents2>
          <SnsWrap>
            <a target="blank" href="https://www.instagram.com/kite_shin/">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                variants={pathVar}
                initial="start"
                whileHover="hover"
              >
                <motion.path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </Svg>
            </a>
            <a
              target="blank"
              href="https://github.com/yeonwoo96/netflix/tree/master/src"
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 496 512"
                variants={pathVar}
                initial="start"
                whileHover="hover"
              >
                <motion.path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </Svg>
            </a>
            <a target="blank" href="https://velog.io/@kitecow">
              <Svg
                width="192"
                height="192"
                viewBox="0 0 192 192"
                fill="currentColor"
                variants={pathVar}
                initial="start"
                whileHover="hover"
              >
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                  fill="currentColor"
                ></motion.path>
              </Svg>
            </a>
          </SnsWrap>
          <TextBox>copyright © by SHIN YEON WOO</TextBox>
        </Contents2>
      </Footer2>
    </Container>
  );
};

export default Footer;
