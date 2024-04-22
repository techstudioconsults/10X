import {  createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AdminContext = createContext()


const AdminProvider = ({children}) => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL
    const [userInfo, setUserInfo] = useState()
    const token = Cookies.get("token")


    const getUser = async () => {
        try {
          const {data} = await axios.get(`${API_URL}/api/v1/auth/me`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          } )
    
          setUserInfo(data)
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getUser()
      }, [token])

    const AdminData = {API_URL, getUser, userInfo, token};

    


    return <AdminContext.Provider value={AdminData}>
        {children}
    </AdminContext.Provider>
}

export default AdminProvider