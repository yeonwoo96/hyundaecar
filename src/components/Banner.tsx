import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import { useState } from "react";
const Container = styled.section`
  height: 100vh;
  background: url("public/images/main_kv_bg_w.jpg");
  background-size: cover;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    height: 80vh;
  }
  @media (max-width: 767px) {
    height: 162.5vw;
  }
`;
const CarBox = styled(motion.div)`
  position: absolute;
  /* border: 1px solid #000; */
  width: 1400px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CarBoxVar = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};
const TextBox = styled.div`
  position: absolute;
  top: 17%;
  left: 10%;
`;
const Title = styled.p`
  margin-bottom: 24px;
`;
const Des = styled.p``;
const Car = styled(motion.img)`
  position: relative;
  z-index: 1;
  top: 20px;
  @media (max-width: 1024px) {
    width: 800px;
    top: 40px;
  }
  @media (max-width: 767px) {
    width: 120%;
    top: 16vw;
  }
`;
const CarVar = {
  initial: {
    x: "80vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Button = styled.button`
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  &.lbtn {
    left: 0;
  }
  &.rbtn {
    right: 0;
  }
  &.btn {
    @media (max-width: 767px) {
      font-size: 3vw;
    }
  }
`;
// 배너 Index 원
const CircleWrap = styled.div`
  position: absolute;
  bottom: 10vh;
  display: flex;
  gap: 20px;
`;
const Circle = styled.div<{ index: number; visible: number }>`
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.index === props.visible ? "#007fa8" : "rgba(0, 0, 0, 0.1)"};
  border-radius: 50%;
`;
const Banner = () => {
  const Cars = [
    {
      Car: "santafe",
      title: "The all-new SANTA FE",
      description: " 일상과 일상 사이를 열다",
    },
    {
      Car: "sonata",
      title: "SONATA The Edge",
      description: "익숙함도 완전히 새롭게",
    },
    {
      Car: "avante",
      title: "The new AVANTE N",
      description: "Never just drive",
    },
    {
      Car: "casper",
      title: "CASPER",
      description: "case by CASPER",
    },
  ];
  const [visible, setVisible] = useState(0);
  const upClick = () => {
    if (visible === Cars.length - 1) {
      setVisible(0);
    } else {
      setVisible((cur) => cur + 1);
    }
  };
  const downClick = () => {
    if (visible === 0) {
      setVisible(Cars.length - 1);
    } else {
      setVisible((cur) => cur - 1);
    }
  };
  return (
    <Container>
      <AnimatePresence>
        {Cars.map(
          (i) =>
            Cars[visible] === i && (
              <CarBox
                variants={CarBoxVar}
                initial="initial"
                animate="animate"
                exit="exit"
                key={i.Car}
              >
                <TextBox>
                  <Title className="h3">{i.title}</Title>
                  <Des className="h4">{i.description}</Des>
                </TextBox>
                <Car src={`/images/${i.Car}.png`} variants={CarVar}></Car>
              </CarBox>
            )
        )}
      </AnimatePresence>

      <Button onClick={downClick} className="btn lbtn h4">
        {`<${
          visible !== 0 ? Cars[visible - 1].title : Cars[Cars.length - 1].title
        }`}
      </Button>
      <Button onClick={upClick} className="btn rbtn h4">
        {`${
          visible !== Cars.length - 1 ? Cars[visible + 1].title : Cars[0].title
        }>`}
      </Button>
      <CircleWrap>
        {Cars.map((i, index) => (
          <Circle
            key={i.Car}
            onClick={() => setVisible(index)}
            index={index}
            visible={visible}
          />
        ))}
      </CircleWrap>
    </Container>
  );
};

export default Banner;
