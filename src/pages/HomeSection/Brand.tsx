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
  position: relative;
  margin: auto;
  max-width: 1120px;
  overflow: hidden;
`;
const Slide = styled.div<{ page: number }>`
  transition: transform 1s ease-in-out;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 23.5%);
  gap: 2%;
  @media (max-width: 1023px) {
    transform: translateX(${(props) => props.page * -53}%);
    width: 200%;
    gap: 3%;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 25%);
    transform: translateX(${(props) => props.page * -25}%);
    width: 400%;
    gap: 0;
  }
`;
const Item = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  &:hover {
    .HoverText {
      opacity: 1;
    }
  }
`;
const HoverText = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  gap: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  .h4 {
    font-weight: 600;
  }
  @media (max-width: 1023px) {
    position: relative;
    background: none;
    margin-top: 20px;
    height: auto;
    color: #111;
    opacity: 1;
    top: auto;
  }
`;
const Btn = styled.button`
  position: absolute;
  top: 0;
  color: #fff;
  border: none;
  width: 44px;
  height: 44px;
  top: calc(50% - 22px);
  border-radius: 0;
  font-size: 24px;
  line-height: 1.8;
  background-color: rgba(31, 45, 61, 0.4);
  &.up {
    right: 0;
  }
`;
const Brand = () => {
  const [Slidepage, setSlidePage] = useState(0);
  const pageUp = () => {
    if (windowSize.width >= 767) {
      Slidepage === Items.length / 2 - 1
        ? setSlidePage(0)
        : setSlidePage((cur) => cur + 1);
    } else {
      Slidepage === Items.length - 1
        ? setSlidePage(0)
        : setSlidePage((cur) => cur + 1);
    }
  };
  const pageDown = () => {
    if (windowSize.width >= 767) {
      Slidepage === 0
        ? setSlidePage(Items.length / 2 - 1)
        : setSlidePage((cur) => cur - 1);
    } else {
      Slidepage === 0
        ? setSlidePage(Items.length - 1)
        : setSlidePage((cur) => cur - 1);
    }
  };
  const pageZero = () => setSlidePage(0);
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
  const Items = [
    {
      img: "/images/brands/1",
      title: "엔터테인먼트",
      des: "스파이더 속 아이오닉을 만나보세요",
    },
    {
      img: "/images/brands/2",
      title: "현대 리유니온",
      des: "포니 쿠페 콘셉트 복원 프로젝트",
    },
    {
      img: "/images/brands/3",
      title: "Re:Style 2023",
      des: "지속 가능한 삶의 미래를 그리다",
    },
    {
      img: "/images/brands/4",
      title: "로보틱스",
      des: "당신을 향한 모빌리티",
    },
  ];

  return (
    <Container>
      <Title className="h2">Brand</Title>
      <Des className="gray">
        지속가능한 미래로의 연결을 추구하는 현대자동차의 브랜드 캠페인을
        만나보세요.
      </Des>
      <Wrapper>
        <Slide page={Slidepage}>
          {Items.map((i) => (
            <Item key={i.title}>
              <img
                src={
                  windowSize.width > 1023 ? `${i.img}.jpg` : `${i.img}.1.jpg`
                }
              ></img>
              <HoverText className="HoverText">
                <h4 className="h4">{i.title}</h4>
                <p>{i.des}</p>
              </HoverText>
            </Item>
          ))}
        </Slide>
        {windowSize.width <= 1024 && (
          <div>
            <Btn className="down" onClick={pageDown}>
              {"<"}
            </Btn>
            <Btn className="up" onClick={pageUp}>
              {">"}
            </Btn>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Brand;
