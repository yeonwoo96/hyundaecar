import PageNav from "../common/PageNav";
import Brand from "./HomeSection/Brand";

const BrandPage = () => {
  return (
    <div>
      <PageNav
        page={"브랜드"}
        des={
          "고객님을 위한 스페셜 이벤트는 계속됩니다. 즐거운 행운과 경품을 만나보세요!"
        }
      />
      <Brand />
    </div>
  );
};

export default BrandPage;
