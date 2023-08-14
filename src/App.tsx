import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Offers from "./pages/offers";
import Service from "./pages/service";
import Shopping from "./pages/shopping";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Shopping" element={<Shopping />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
