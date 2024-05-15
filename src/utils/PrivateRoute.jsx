import { useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate, Outlet } from 'react-router-dom/dist';

const PrivateRoute = () => {
    const userToken = Cookies.get("userToken");
    const navigate = useNavigate()
    useEffect(()=>{
        if(!userToken){
            navigate('/login')
        }
    })
  return userToken ? <Outlet/> : null ;
}

export default PrivateRoute



