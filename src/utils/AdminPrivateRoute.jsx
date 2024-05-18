import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, Outlet } from "react-router-dom/dist";

const AdminPrivateRoute = () => {
  const adminToken = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!adminToken) {
      navigate("/admin/login");
    }
  });
  return adminToken ? <Outlet /> : null;
};

export default AdminPrivateRoute;
