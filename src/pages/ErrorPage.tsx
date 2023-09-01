import { styled } from "styled-components";

const ErrorPage = () => {
  const Container = styled.div`
    margin-top: 220px;
  `;
  return (
    <Container className="h1">
      잘못된 페이지 접근입니다. 주소창을 다시 확인하세요
    </Container>
  );
};

export default ErrorPage;
