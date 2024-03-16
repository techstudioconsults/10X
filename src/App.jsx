import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
