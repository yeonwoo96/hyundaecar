import { styled } from "styled-components";
import PageNav from "../common/PageNav";
import { Link, useParams } from "react-router-dom";
import Story from "./ServiceSection/Story";
import History from "./ServiceSection/History";

const LinkWrap = styled.div<{ param: string | undefined }>`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  a {
    padding: 20px;
    text-align: center;
    color: #fff;
    background: #000;
    text-decoration: none;
    &.story {
      background: ${(props) =>
        props.param === "story" ? "white" : props.theme.black};
      color: ${(props) =>
        props.param !== "story" ? "white" : props.theme.black};
    }
    &.history {
      background: ${(props) =>
        props.param === "history" ? "white" : props.theme.black};
      color: ${(props) =>
        props.param !== "history" ? "white" : props.theme.black};
    }
  }
`;
const Bot = styled.div`
  margin: auto;
  margin-top: 100px;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
`;
const Service = () => {
  const param = useParams();
  console.log(param.id);
  return (
    <div>
      <PageNav
        page={"블루멤버스 소개"}
        des={
          "현대자동차 오너를 위한 블루멤버스의 이야기와 역사를 한눈에 알아보시기 바랍니다."
        }
      />
      <LinkWrap param={param.id}>
        <Link to="/service/story" className="story">
          블루멤버스 Story
        </Link>
        <Link to="/service/history" className="history">
          블루멤버스 History
        </Link>
      </LinkWrap>
      {param.id === "story" ? (
        <Story />
      ) : param.id === "history" ? (
        <History />
      ) : (
        <h2 className="h2">잘못된 링크입니다.</h2>
      )}
      <Bot>
        <div>
          <img src="/images/members/bluemembers-linkbanner04-pc.png"></img>
        </div>
        <div>
          <img src="/images/members/bluemembers-linkbanner02-01-pc.png"></img>
        </div>
        <div>
          <img src="/images/members/bluemembers-linkbanner03-pc.png"></img>
        </div>
      </Bot>
    </div>
  );
};

export default Service;
