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
`;
const Wrapper = styled.ul`
  margin: auto;
  margin-top: 40px;
  max-width: 1120px;
  height: 432px;
  display: grid;
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 1fr;
    > li:first-child {
      img {
        height: 100%;
      }
      padding-right: 32px;
    }
    > li:nth-child(2),
    > li:nth-child(3) {
      position: relative;
      padding-left: 32px;
      display: flex;
      flex-flow: column;
      justify-content: end;
      img {
        width: 100%;
      }
    }
  }
  > li {
    height: 100%;
  }
  @media (max-width: 1199px) {
    width: 75vw;
    & > li > img {
      width: 100%;
    }
  }
`;
const TextBox = styled.div`
  white-space: nowrap;
  position: absolute;
  top: 0;
`;
const AgeBox = styled.ul<{ select: number }>`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.gray};
  li:nth-child(${(props) => props.select}) {
    color: ${(props) => props.theme.skyblue};
  }
  li {
    text-align: center;
    &::after {
      content: " | ";
      margin-left: 10px;
      color: ${(props) => props.theme.gray};
    }
    &:last-child {
      &::after {
        content: "";
      }
    }
  }
`;
const NO1 = styled.p`
  ${(props) => props.theme.black};
`;
const ImgBox = styled.div`
  display: flex;
  flex-flow: column;
  gap: 14px;
  margin-bottom: 40px;
  img {
    width: 100%;
  }
  .des {
    display: flex;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    gap: 12px;
    margin-bottom: 0;
    &:first-of-type {
      height: 100%;
    }
    .hidden {
      display: none;
    }
  }
`;
const Model = () => {
  const [select, setSelect] = useState(1);

  return (
    <Container>
      <Title className="h2">Model</Title>
      <Des>최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.</Des>
      <Wrapper>
        <li>
          <ImgBox>
            <img src="/images/ranking/ranking1.jpg"></img>
            <p className="des hidden">1위. 디 올 뉴 그랜저 Hybrid</p>
          </ImgBox>
        </li>
        <li>
          <TextBox>
            <AgeBox select={select}>
              <li onClick={() => setSelect(1)}>전체</li>
              <li onClick={() => setSelect(2)}>2~30대</li>
              <li onClick={() => setSelect(3)}>40대</li>
              <li onClick={() => setSelect(4)}>50대</li>
            </AgeBox>
            <NO1 className="h3">1위. 디 올 뉴 그랜저 Hybrid</NO1>
          </TextBox>
          <ImgBox>
            <img src="/images/ranking/ranking2.jpg"></img>
            <p className="des">2위.더 뉴 아반떼</p>
          </ImgBox>
        </li>
        <li>
          <TextBox></TextBox>
          <ImgBox>
            <img src="/images/ranking/ranking3.jpg"></img>
            <p className="des">3위.디 올 뉴 코나 Hybrid</p>
          </ImgBox>
        </li>
      </Wrapper>
    </Container>
  );
};

export default Model;
