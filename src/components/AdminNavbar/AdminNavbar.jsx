import React from "react";
import search from "../../assets/search-icon.svg"
import bell from "../../assets/notification-bell.svg"
import admin from "../../assets/admin-img.svg"
import arrowDown from "../../assets/arrow-down.svg"
import {useLocation} from "react-router-dom"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const AdminNavbar = ({setOpen}) => {
  const {pathname} = useLocation()
  const handleLocationSwitch = () => {
    let text = ""
    if(pathname === "/admin/home") {
      text ="Welcome Back, Eric"
      return text
    }
    if(pathname.includes("/library")) {
      text= "Library"
      return text
    }

    if(pathname.includes("/admin/coursedetail")){
      text = "Course Hub"
      return text
    }
   

    if (pathname.includes("/coursehub")) {
      text = "Course Hub"
      return text
    }

    if(pathname.includes('coursedetail/')){
      text = "Course Hub"
      return text
    }

    if (pathname === "/admin/settings") {
      text = "Settings"
      return text
    }

  }
  return (
    <div className="shadow-[#032BF20F]  shadow-md bg-white 2xl:w-4/5 w-full absolute right-0">
      <div className="py-6 h-[91px] flex items-center mx-auto  w-full ">
      <div className="2xl:hidden block"><span className="text-3xl text-darkBlue cursor-pointer" onClick={() => setOpen(true)}><PiDotsThreeOutlineVerticalFill /></span></div>
      <div className="flex lg:px-8 px-3 container w-full mx-auto justify-between items-center">
      <div>
        <h2 className="text-blue font-semibold lg:text-xl text-base">{handleLocationSwitch()}</h2>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-3">
          <img src={search} alt="" />
          <img src={bell} alt="" />
          </div>

          <div className="flex gap-3 items-center">
            <img src={admin} className=" w-8 h-8 rounded-full object-cover" alt="" />
            <div className="hidden md:block">
              <p className=" font-semibold text-blue ">Eric T</p>
              <p className="text-blue text-xs">Admin</p>
            </div>
            <img src={arrowDown} alt="" />
          </div>
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default AdminNavbar;
