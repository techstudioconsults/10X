import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/external/Home/Home";
import Resource from "./pages/external/Resource/Resource";
import SalesPage from "./pages/external/SalesPage/SalesPage";
import Login from "./pages/Auth/Login/Login";
import Rootlayout from "./layout/Rootlayout";
import WhatWeDo from "./pages/external/About/WhatWeDO";
import Adminlayout from "./layout/AdminLayout";
import Library from "./pages/internal/Admin/libary/Libary";
import Settings from "./pages/internal/Admin/Settings/Settings";
import Dashboard from "./pages/internal/Admin/Home/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/about" element={<WhatWeDo />} />
            <Route path="/sales" element={<SalesPage />} />
          </Route>

          <Route element={<Adminlayout />}>
            <Route path="/admin/home" element={<Dashboard />} />
            <Route path="/admin/library" element={<Library />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
