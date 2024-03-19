import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import SalesPage from "./pages/SalesPage/SalesPage";
import ColumnCarousel from "./pages/SalesPage/Carousel/ColumnCarousel";
import Resource from "./pages/Resource/Resource";
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cart" element={<ColumnCarousel />} />
          <Route path="/resource" element={<Resource/>}/>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
