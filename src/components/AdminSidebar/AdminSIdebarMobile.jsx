import React from 'react'
import { motion } from "framer-motion";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import {useLocation} from "react-router-dom"
import { IoCloseCircle } from "react-icons/io5";

const AdminSIdebarMobile = ({setIsOpen}) => {
    const {pathname} = useLocation()
  return (
    <motion.div
          className="bg-white 2xl:hidden block h-full md:w-2/5 shadow-md p-3 w-3/4 fixed top-0 z-50 left-0"
          initial={{
            x: -200,
          }}
          animate={{ x: 0 }}
          exit={{ x: -200, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
        
        <div className='flex h-full flex-col gap-8'>
            <div className="mt-4 flex justify-between">
            <img
            src={revenueLogo}
            className="w-[140px] h-[54px] md:w-[140px] md:h-[54.22px]"
            alt="company-logo"
          />

          <div><span className='text-3xl text-blue cursor-pointer' onClick={() => setIsOpen(false)}><IoCloseCircle /></span></div>
            </div>
            <hr className="bg-grey h-[1.5px]"/>

            <div className='flex flex-col gap-4' onClick={() => setIsOpen(false)}>
                <div className={`flex gap-4 items-center ${pathname === "/admin/home"? "bg-blue text-white" : null} duration-300  rounded-lg h-12 p-3 text-grey font-semibold text-base`}>
                    <FiHome className='text-xl'/>
                    <Link to="/admin/home" className='w-full'>Home</Link>
                </div>
                <div className={`flex gap-4 items-center ${pathname.includes("library") ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}><IoBookOutline  className='text-2xl'/> <Link to="/admin/library" className='w-full'>Library</Link></div>
                <div className='flex gap-4 items-center rounded-lg text-grey h-12 p-3 font-semibold text-base'><LuBook  className='text-xl'/><Link className='w-full'>Create A Course </Link></div>
                <div className={`flex gap-4 items-center ${pathname === "/admin/settings" ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}> <IoSettingsOutline  className='text-xl'/><Link to="/admin/settings" className="w-full">Settings</Link></div>
            </div>
        </div>
    
        </motion.div>
  )
}

export default AdminSIdebarMobile