import PageNav from "../common/PageNav";
import Model from "./HomeSection/Model";
import Electric from "./HomeSection/electric";

const Shop = () => {
  return (
    <div>
      <PageNav
        page={"Shop"}
        des={
          "고객님을 위한 스페셜 이벤트는 계속됩니다. 즐거운 행운과 경품을 만나보세요!"
        }
      />
      <Model />
      <Electric />
    </div>
  );
};

export default Shop;
