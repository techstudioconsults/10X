import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [userInfo, setUserInfo] = useState();
  const [course, setCourse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const userToken = Cookies.get("userToken");
  let decode = null;

  if (userToken) {
    decode = jwtDecode(userToken);
  }

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      // console.log(data);
      if (data.success) {
        setUserInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPaidCourses = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await axios(`${API_URL}/api/v1/users/${decode?.id}/course`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setCourse(data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.log(error?.message);
      setLoading(false);
      setError(`${error?.message} Please check your internet connection ⚠️`);
    }
  };

  useEffect(() => {
    if (userToken) {
      getUserInfo();
      getPaidCourses();
    }
  }, [userToken]);

  const AdminData = { API_URL, userInfo, getUserInfo };

  return (
    <UserContext.Provider value={{ AdminData, course, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
