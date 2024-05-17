import {  createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

export const UserContext = createContext()


const UserProvider = ({children}) => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL
    const [userInfo, setUserInfo] = useState()
    // const [getData, setGetData] = useState()
    const userToken = Cookies.get("userToken")

    const getUserInfo = async () => {
        try {
          const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          console.log(data);
          if (data.success) {
            setUserInfo(data);
           
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        if (userToken) {
            getUserInfo()
        }
      },[userToken])

    const AdminData = {API_URL, userInfo, getUserInfo};
    
    return <UserContext.Provider value={AdminData}>
        {children}
    </UserContext.Provider>
}

export default UserProvider