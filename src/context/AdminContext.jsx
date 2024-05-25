import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [userInfo, setUserInfo] = useState();
  const [bestSellingCourse, setBestSellingCourse] = useState();
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");
  console.log(token);
  let decoded = null;
  if (token) {
    decoded = jwtDecode(token);
    console.log(decoded);
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const bestSelling = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/course/top-selling`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      if (data.success) {
        setLoading(false)
        setBestSellingCourse(data.data);
        console.log("good");
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getUser();
    bestSelling();
  }, [token]);

  const AdminData = { API_URL, getUser, userInfo, token, bestSellingCourse, loading };

  return (
    <AdminContext.Provider value={AdminData}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
