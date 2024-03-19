import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import SalesPage from "./pages/SalesPage/SalesPage";
import ColumnCarousel from "./pages/SalesPage/Carousel/ColumnCarousel";
import Resource from "./pages/Resource/Resource";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cart" element={<ColumnCarousel />} />
          <Route path="/resource" element={<Resource/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
