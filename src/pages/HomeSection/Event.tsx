import { useEffect, useState } from "react";
import { styled } from "styled-components";
const Container = styled.section`
  margin-top: 140px;
`;
const Wrapper = styled.div`
  position: relative;
  max-width: 1640px;
  overflow: hidden;
  margin: auto;
  box-sizing: border-box;
  @media (max-width: 1640px) {
    margin: 0 32px 0;
  }
  @media (max-width: 767px) {
    margin: 0 14px 0;
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
const Slide = styled.div<{ page: number }>`
  width: 200%;
  display: grid;
  grid-template-columns: repeat(6, 15.833333%);
  grid-gap: 1.25%;
  transform: translateX(${(props) => props.page * -51.25}%);
  transition: transform 1s ease-in-out;
  @media (max-width: 1023px) {
    width: 300%;
    grid-template-columns: repeat(6, 15%);
    grid-gap: 3.3333%;
    transform: translateX(${(props) => props.page * -36.6666}%);
  }
  @media (max-width: 767px) {
    width: 600%;
    grid-template-columns: repeat(6, 16.6666%);
    grid-gap: 0;
    transform: translateX(${(props) => props.page * -16.6666}%);
  }
`;
const Item = styled.div`
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  .h4 {
    font-weight: 600;
    margin-bottom: 14px;
  }
  .des {
    margin-bottom: 12px;
  }
  margin-bottom: 24px;
`;
const Circles = styled.ul`
  margin-top: 30px;
  justify-content: center;
  display: flex;
  gap: 10px;
`;
const Circle = styled.li<{ page: number; index: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.index === props.page ? props.theme.skyblue : props.theme.gray};
`;
const Events = () => {
  const [Slidepage, setSlidePage] = useState(0);
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
      setSlidePage(0);
      handleResize();
    });
    return window.removeEventListener("resize", () => {
      setSlidePage(0);
      handleResize();
    });
  }, []);

  const SlideContents = [
    {
      img: "/images/events/event-ev-all-day-driving-experience-2023-allday-dx-banner-739x489.png",
      title: "전기차 All day Driving eXperience",
      des: "드라이빙라운지에서 전기차를 충분히 경험해보세요!",
      date: "2023-08-21 ~ 2023-12-31",
    },
    {
      img: "/images/events/event-driving-drawing-create-your-casper-banner-739x489.jpg",
      title: "캐스퍼 그리기 대회 시즌2",
      des: "Create your CASPER, 이벤트 참여하고 캐스퍼 받아가세요!",
      date: "2023-08-18 ~ 2023-09-17",
    },
    {
      img: "images/events/event-launching-the-all-new-santa-fe-bluelink-steraming-service-banner-739x489.jpg",
      title: "디 올 뉴 싼타페 블루링크 스트리밍 서비스 런칭 기념 이벤트",
      des: "새롭게 태어난 싼타페와 함께 블루링크 스트리밍 서비스를 만나보세요!",
      date: "2023-08-18 ~ 2023-09-17",
    },
    {
      img: "/images/events/event-hyundaishop-launching-h-licensed-accessories-banner-739x489 (1).png",
      title: "H Licensed Accessories",
      des: "응원 댓글 달고 스탠바이미 Go 받자!",
      date: "2023-08-16 ~ 2023-08-31",
    },
    {
      img: "/images/events/event-hmc-avante-kona-august-special-buying-program-banner-739x489.jpg",
      title: "아반떼, 코나 8월 특별 금융 프로그램",
      des: "지금이 딱! 무이자로 아반떼,코나 살 기회",
      date: "2023-08-21 ~ 2023-08-31",
    },
    {
      img: "/images/events/event-hc-purchase-benefits-202308-banner-739x489.jpg",
      title: "8월 신차 구매 혜택",
      des: "Hyundai Mobility 카드만의 구매 프로그램",
      date: "2023-08-01 ~ 2023-08-31",
    },
  ];
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
    &.right {
      right: 0;
    }
  `;
  const pageUp = () => {
    if (windowSize.width > 1023) {
      Slidepage === SlideContents.length / 3 - 1
        ? setSlidePage(0)
        : setSlidePage((cur) => cur + 1);
    } else if (windowSize.width > 767) {
      Slidepage === SlideContents.length / 2 - 1
        ? setSlidePage(0)
        : setSlidePage((cur) => cur + 1);
    } else {
      Slidepage === SlideContents.length - 1
        ? setSlidePage(0)
        : setSlidePage((cur) => cur + 1);
    }
  };
  const pageDown = () => {
    if (windowSize.width > 1023) {
      Slidepage === 0
        ? setSlidePage(SlideContents.length / 3 - 1)
        : setSlidePage((cur) => cur - 1);
    } else if (windowSize.width > 767) {
      Slidepage === 0
        ? setSlidePage(SlideContents.length / 2 - 1)
        : setSlidePage((cur) => cur - 1);
    } else {
      Slidepage === 0
        ? setSlidePage(SlideContents.length - 1)
        : setSlidePage((cur) => cur - 1);
    }
  };
  return (
    <Container>
      <Title className="h2">Events</Title>
      <Des>
        고객님을 위한 스페셜한 이벤트를 통해 즐거운 행운과 경품을 만나보세요.
      </Des>
      <Wrapper>
        <Slide page={Slidepage}>
          {SlideContents.map((item) => (
            <Item key={item.title}>
              <img src={item.img}></img>
              <h4 className="h4">{item.title}</h4>
              <p className="des gray">{item.des}</p>
              <p className="date gray">{item.date}</p>
            </Item>
          ))}
        </Slide>
        <Btn className="left down" onClick={pageDown}>
          {"<"}
        </Btn>
        <Btn className="right up" onClick={pageUp}>
          {">"}
        </Btn>
      </Wrapper>
      <Circles>
        {windowSize.width > 1023
          ? [0, 1].map((index) => (
              <Circle key={index} index={index} page={Slidepage} />
            ))
          : windowSize.width > 767
          ? [0, 1, 2].map((index) => (
              <Circle key={index} index={index} page={Slidepage} />
            ))
          : [0, 1, 2, 3, 4, 5].map((index) => (
              <Circle key={index} index={index} page={Slidepage} />
            ))}
      </Circles>
    </Container>
  );
};

export default Events;
