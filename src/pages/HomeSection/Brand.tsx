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
  img {
    width: 100%;
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
      title: "엔터테인먼트",
      des: "스파이더 속 아이오닉을 만나보세요",
    },
    {
      img: "/images/brands/3",
      title: "엔터테인먼트",
      des: "스파이더 속 아이오닉을 만나보세요",
    },
    {
      img: "/images/brands/4",
      title: "엔터테인먼트",
      des: "스파이더 속 아이오닉을 만나보세요",
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
            <Item>
              <img
                src={
                  windowSize.width > 1023 ? `${i.img}.jpg` : `${i.img}.1.jpg`
                }
              ></img>
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
