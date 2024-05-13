import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./pages/external/Home/Home"));
const Resource = lazy(() => import("./pages/external/Resource/Resource"));
const SalesPage = lazy(() => import("./pages/external/SalesPage/SalesPage"));
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Rootlayout = lazy(() => import("./layout/Rootlayout"));
const WhatWeDo = lazy(() => import("./pages/external/About/WhatWeDO"));
const Adminlayout = lazy(() => import("./layout/AdminLayout"));
const Library = lazy(() => import("./pages/internal/Admin/library/Library"));
const Settings = lazy(() => import("./pages/internal/Admin/Settings/Settings"));
const Dashboard = lazy(() => import("./pages/internal/Admin/Home/Dashboard"));
const Edit = lazy(() => import("./pages/internal/Admin/Edit-Course/Edit"));
const CourseDetail = lazy(() => import("./pages/internal/Admin/coursedetail/CourseDetail"));
const Adminlogin = lazy(() => import("./pages/internal/Auth/Adminlogin"));
const CreateCourse = lazy(() => import("./pages/internal/Admin/create/CreateCourse"));
const MyCourses = lazy(() => import("./pages/internal/user/Mycourses/MyCourses"));
const SingleCourseView = lazy(() => import("./pages/internal/user/Mycourses/singleCourseView"));
const UserSettings = lazy(() => import("./pages/internal/user/Usersetting/UserSettings"));

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/about" element={<WhatWeDo />} />
            <Route path="/sales/:id" element={<SalesPage />} />
            <Route path="/settings" element={<UserSettings />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route
              path="/mycourses-resume/:title"
              element={<SingleCourseView />}
            />
          </Route>

          <Route element={<Adminlayout />}>
            <Route path="/admin/home" element={<Dashboard />} />
            <Route path="/admin/library" element={<Library />} />
            <Route path="coursedetail/:id" element={<CourseDetail />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/edit-course" element={<Edit />} />
            <Route path="/admin/create" element={<CreateCourse />} />
          </Route>
          <Route path="/admin/login" element={<Adminlogin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 