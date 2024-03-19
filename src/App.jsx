import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Resource from "./pages/Resource/Resource";
import AboutPage from "./pages/About/AboutPage";
import SalesPage from "./pages/SalesPage/SalesPage"
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/sales" element={<SalesPage/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
