import React from 'react'
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import {useLocation} from "react-router-dom"



const AdminSidebar = () => {
  const {pathname} = useLocation()
  return (
    
    <div className='h-screen 2xl:w-1/5 lg:w-1/4  fixed hidden lg:block bg-[#032BF20F] p-4  shadow-xl'>
        <div className='flex h-full flex-col gap-10'>
            <div className="mt-3 ">
         <Link to="/">
         <img
            src={revenueLogo}
            className="w-[140px] h-[54px] md:w-[140px] md:h-[54.22px]"
            alt="company-logo"
          /></Link>
            <hr className="bg-[rgba(150, 155, 172, 1)] h-[1.5px] mt-9"/>
            </div>

            <div className='flex flex-col gap-4'>
                <div className={`flex gap-4 items-center ${pathname === "/admin/home"? "bg-blue text-white" : null} duration-300  rounded-lg h-12 p-3 text-grey font-semibold text-base`}>
                    <FiHome className='text-xl'/>
                    <Link to="/admin/home" className='w-full'>Home</Link>
                </div>
                <div className='flex gap-4 items-center rounded-lg text-grey h-12 p-3 font-semibold text-base'><LuBook  className='text-xl'/><Link className='w-full'>Create A Course </Link></div>
                <div className={`flex gap-4 items-center ${pathname.includes("library") ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}><IoBookOutline  className='text-2xl'/> <Link to="/admin/library" className='w-full'>Library</Link></div>
                <div className={`flex gap-4 items-center ${pathname === "/admin/settings" ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}> <IoSettingsOutline  className='text-xl'/><Link to="/admin/settings" className="w-full">Settings</Link></div>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar