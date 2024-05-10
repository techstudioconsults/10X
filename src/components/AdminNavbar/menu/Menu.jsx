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
  
   
 const MenuComp = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove("token")
    navigate("/admin/login")

  }
    return (
      <Menu placement="bottom-end">
        <MenuHandler>
          <button>

        <img src={arrowDown} alt="" />
          </button>
        </MenuHandler>
        <MenuList className="mt-5 py-4">
          <MenuItem onClick={() => handleLogout()}><p className="text-[#9C2631] font-bold text-lg">Log Out</p></MenuItem>
        </MenuList>
      </Menu>
    );
  }

  export default MenuComp