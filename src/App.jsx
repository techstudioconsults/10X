import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/external/Home/Home"));
const Resource = lazy(() => import("./pages/external/Resource/Resource"));
const SalesPage = lazy(() => import("./pages/external/Resource/Resource"));
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const WhatWeDo = lazy(() => import("./pages/external/About/WhatWeDO"));
const Library = lazy(() => import("./pages/internal/Admin/library/Library"));
const Settings = lazy(() => import("./pages/internal/Admin/Settings/Settings"));
const Dashboard = lazy(() => import("./pages/internal/Admin/Home/Dashboard"));
const Edit = lazy(() => import("./pages/internal/Admin/Edit-Course/Edit"));
const CourseDetail = lazy(() =>
  import("./pages/internal/Admin/coursedetail/CourseDetail")
);
const Adminlogin = lazy(() => import("./pages/internal/Auth/Adminlogin"));
const CreateCourse = lazy(() =>
  import("./pages/internal/Admin/create/CreateCourse")
);
const MyCourses = lazy(() =>
  import("./pages/internal/user/Mycourses/MyCourses")
);
const SingleCourseView = lazy(() =>
  import("./pages/internal/user/Mycourses/singleCourseView")
);
const UserSettings = lazy(() =>
  import("./pages/internal/user/Usersetting/UserSettings")
);
import Rootlayout from "./layout/Rootlayout";
import Adminlayout from "./layout/AdminLayout";
import PrivateRoute from "./utils/PrivateRoute";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import PageNotFound from "./pages/external/ErrorPage/PageNotFound";
import PageLoader from "./components/loader/PageLoader";



// import Home from "./pages/external/Home/Home";
// import Resource from "./pages/external/Resource/Resource";
// import SalesPage from "./pages/external/SalesPage/SalesPage";
// import Login from "./pages/Auth/Login/Login";
// import WhatWeDo from "./pages/external/About/WhatWeDO";
// import Library from "./pages/internal/Admin/library/Library";
// import Settings from "./pages/internal/Admin/Settings/Settings";
// import Dashboard from "./pages/internal/Admin/Home/Dashboard";
// import Edit from "./pages/internal/Admin/Edit-Course/Edit";
// import CourseDetail from "./pages/internal/Admin/coursedetail/CourseDetail";
// import Adminlogin from "./pages/internal/Auth/Adminlogin";
// import CreateCourse from "./pages/internal/Admin/create/CreateCourse";
// import MyCourses from "./pages/internal/user/Mycourses/MyCourses";
// import SingleCourseView from "./pages/internal/user/Mycourses/singleCourseView";
// import UserSettings from "./pages/internal/user/Usersetting/UserSettings";

function App() {
  return (
    <div>
      <Suspense fallback={<div>
        <PageLoader/>
      </div>}>
        <BrowserRouter>
          <Routes>
            <Route element={<Rootlayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/about" element={<WhatWeDo />} />
              <Route path="/sales/:id" element={<SalesPage />} />
              {/* Private Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/mycourses" element={<MyCourses />} />
              </Route>
              <Route
                path="/mycourses-resume/:title"
                element={<SingleCourseView />}
              />
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
            <Route element={<Adminlayout />}>
              <Route element={<AdminPrivateRoute/>}>
              <Route path="/admin/home" element={<Dashboard />} />
              <Route path="/admin/library" element={<Library />} />
              <Route path="coursedetail/:id" element={<CourseDetail />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/edit-course" element={<Edit />} />
              <Route path="/admin/create" element={<CreateCourse />} />
              </Route>
            </Route>
            <Route path="/admin/login" element={<Adminlogin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>{" "}
      </Suspense>
    </div>
  );
}

export default App;
