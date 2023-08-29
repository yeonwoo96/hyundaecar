import PageNav from "../common/PageNav";
import Events from "./HomeSection/Event";

const Purchase = () => {
  return (
    <div>
      <PageNav
        page={"구매/이벤트"}
        des={
          "고객님을 위한 스페셜 이벤트는 계속됩니다. 즐거운 행운과 경품을 만나보세요!"
        }
      />
      <Events />
    </div>
  );
};

export default Purchase;
