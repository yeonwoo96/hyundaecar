import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Purchase from "./pages/Purchase";
import Service from "./pages/service";
import Digital from "./pages/Digital";
import BrandPage from "./pages/BrandPage";
import Shop from "./pages/Shop";
import Story from "./pages/ServiceSection/Story";
import History from "./pages/ServiceSection/History";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Purchase" element={<Purchase />}></Route>
        {/* 구매 이벤트 */}
        <Route path="/Service/:id" element={<Service />}>
          <Route path="history" element={<History />}></Route>
          <Route path="story" element={<Story />}></Route>
        </Route>
        {/* 서비스 멤버십 */}
        <Route path="/Digital" element={<Digital />}></Route>
        {/*  디지털*/}
        <Route path="/BrandPage" element={<BrandPage />}></Route>
        {/* 브랜드*/}
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
        {/* 샵 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
