import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    // Button,
  } from "@material-tailwind/react";
  import arrowDown from "../../../assets/arrow-down.svg";
  import Cookies from "js-cookie";
  import { useNavigate } from "react-router-dom";
  import { Link, } from "react-router-dom";
  
  
   
 const MenuComp = (getToken) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove("userToken")
    navigate("/")
    window.location.reload()

  }
    return (
      <Menu placement="bottom-end">
        <MenuHandler>
          <button>

        <img src={arrowDown} alt="" />
          </button>
        </MenuHandler>
        <MenuList className="mt-5 py-4">\
        <Link to="/settings" className="outline-none border-none">
        
          <MenuItem className="outline-none border-none"><p className="text-blue font-bold text-lg">Settings</p></MenuItem>
        </Link>
          <MenuItem onClick={() => handleLogout()}><p className="text-[#9C2631] font-bold text-lg">Log Out</p></MenuItem>
        </MenuList>
      </Menu>
    );
  }

  export default MenuComp