import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Resource from "./pages/Resource/Resource";
import AboutPage from "./pages/About/AboutPage";
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource/>}/>
          <Route path="/about" element={<AboutPage/>}/>
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
