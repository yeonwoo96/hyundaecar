import { styled } from "styled-components";

const Container = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;
const BlueStory = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h4 {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;
const BlueMembers = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    margin-bottom: 30px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;
const GrayDiv = styled.div`
  margin-top: 100px;
  background-color: ${(props) => props.theme.whitegray};
  padding: 60px 0;
  .contents {
    box-sizing: border-box;
    margin: auto;
    padding: 30px;
    border: 1px solid #e4dcd3;
    max-width: 1120px;
    display: grid;
    grid-template-columns: 250px 1fr;
    ul {
      li {
        &::before {
          content: "·";
          margin-right: 4px;
        }
      }
    }
    .textDiv {
      margin-left: 70px;
      h5 {
        margin-bottom: 20px;
        font-size: 20px;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
      ul {
        margin-bottom: 20px;
      }
      button {
        border: none;
        background: ${(props) => props.theme.blue};
        color: #fff;
        padding: 14px;
        font-size: 14px;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
      .textDiv {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 1120px) {
    padding: 30px 30px;
  }
`;
const Story = () => {
  return (
    <Container>
      <BlueStory>
        <h4 className="h3">블루멤버스 Story</h4>
        <p>
          블루멤버스는 2007년부터 시작된 현대자동차 오너를 위한 고객 서비스
          입니다.
          <br /> 고객님들의 보다 즐겁고 안전한 자동차 생활을 위해 항상
          노력하겠습니다.
        </p>
      </BlueStory>
      <BlueMembers>
        {" "}
        <img src="/images/members/logo-bluemembers.png" />
        <p>
          블루멤버스 로고는 현대자동차를 드라이빙하는 고객을 상징화하여
          <br /> 고객의 즐거운 자동차 생활을 유지하고 업그레이드 해주는
          현대자동차의 서비스 마인드를 상징합니다.
        </p>
      </BlueMembers>
      <GrayDiv>
        <div className="contents">
          <div className="imgDiv">
            <img src="/images/members/icon-bluemembers-invite-pc.png"></img>
          </div>
          <div className="textDiv">
            <h5 className="h5detail">
              현대닷컴 회원으로 가입하시면 더 많은 블루멤버스 혜택을 이용하실 수
              있습니다.
            </h5>
            <ul>
              <li>블루멤버스 전용 이벤트 제공</li>
              <li>블루멤버스에게 제공되는 다양한 혜택 안내</li>
              <li>기타 특화 서비스 제공</li>
            </ul>
            <button>{"현대 Shop 바로가기 >"}</button>
          </div>
        </div>
      </GrayDiv>
    </Container>
  );
};

export default Story;
