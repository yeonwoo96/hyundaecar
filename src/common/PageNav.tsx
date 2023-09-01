import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;

  background: url("/images/common/common-ht01-background-cloud-image-w.jpg");
  margin-top: 80px;
  @media (max-width: 1024px) {
    margin-top: 64px;
    /* 우측 아이콘 버튼들 */
  }
  @media (max-width: 767px) {
    margin-top: 55px;
    /* 우측 아이콘 버튼들 */
  }
`;
const NavWrapper = styled.div`
  width: 1120px;
  margin: auto;
  font-size: 12px;
  height: auto;
  .nav {
    box-sizing: border-box;
    padding: 30px 0;
    @media (max-width: 1180px) {
      padding: 30px;
    }
    span {
      margin: 0 4px;
    }
  }
  @media (max-width: 1180px) {
    width: 100%;
    .nav {
      box-sizing: border-box;
      padding: 30px;
    }
  }
`;
const DesWrapper = styled.div`
  padding: 30px;
  margin: 0 30px;
  background: rgba(246, 243, 242, 0.7);
  text-align: center;
  h1 {
    margin-bottom: 40px;
  }
`;
interface IPageNav {
  page: string;
  des: string;
}
const PageNav = ({ page, des }: IPageNav) => {
  return (
    <Container>
      <NavWrapper>
        <p className="nav">
          홈 <span>{">"}</span> {page}
        </p>
      </NavWrapper>
      <DesWrapper>
        <h1 className="h2">{page}</h1>
        <p>{des}</p>
      </DesWrapper>
    </Container>
  );
};

export default PageNav;
