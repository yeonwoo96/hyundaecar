import { styled } from "styled-components";

const Container = styled.section`
  margin: auto;
  margin-top: 100px;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  div {
    img {
      width: 100%;
    }
    cursor: pointer;
  }
  h5 {
    text-align: center;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    padding: 0 30px;
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const Bot = () => {
  return (
    <Container>
      <div>
        <img src="/images/members/bluemembers-linkbanner04-pc.png"></img>
        <h5 className="h5">블루멤버스 스토리</h5>
      </div>
      <div>
        <img src="/images/members/bluemembers-linkbanner02-01-pc.png"></img>
        <h5 className="h5">Hyundai Mobile 카드 안내</h5>
      </div>
      <div>
        <img src="/images/members/bluemembers-linkbanner03-pc.png"></img>
        <h5 className="h5">블루멤버스 카드 재발급</h5>
      </div>
    </Container>
  );
};

export default Bot;
