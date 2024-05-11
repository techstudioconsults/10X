import {  createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext()


const UserProvider = ({children}) => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL

    const AdminData = {API_URL};
    
    return <UserContext.Provider value={AdminData}>
        {children}
    </UserContext.Provider>
}

export default UserProvider