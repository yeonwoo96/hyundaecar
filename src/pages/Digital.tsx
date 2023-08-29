import PageNav from "../common/PageNav";
import MyHyundai from "./HomeSection/MyHyundai";

const Digital = () => {
  return (
    <div>
      <PageNav
        page={"디지털 / 고객지원"}
        des={
          "고객님을 위한 스페셜 이벤트는 계속됩니다. 즐거운 행운과 경품을 만나보세요!"
        }
      />
      <MyHyundai />
    </div>
  );
};

export default Digital;
