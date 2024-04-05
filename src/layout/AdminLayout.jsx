
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'
import { useState } from 'react'
import { motion } from "framer-motion";
import revenueLogo from "../assets/10X LOGO.png";
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import {useLocation} from "react-router-dom"

const Adminlayout = () => {
  const {pathname} = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
      <AdminSidebar />
      </div>
      <div>
        {
          // For mobile screens
          isOpen && <motion.div
          className="lg:hidden bg-[#032BF20F] block h-full w-full fixed top-0 z-10 right-0"
          initial={{
            x: -200,
          }}
          animate={{ x: 0 }}
          exit={{ x: -200, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
          <div className='h-screen w-[240px] 2xl:w-[270px] 2xl:relative fixed hidden lg:block bg-[#032BF20F] p-4  shadow-xl'>
        <div className='flex h-full flex-col gap-8'>
            <div className="mt-4">
            <img
            src={revenueLogo}
            className="w-[140px] h-[54px] md:w-[140px] md:h-[54.22px]"
            alt="company-logo"
          />
            </div>
            <hr className="bg-grey h-[1.5px]"/>

            <div className='flex flex-col gap-4'>
                <div className={`flex gap-4 items-center ${pathname === "/admin/home"? "bg-blue text-white" : null} duration-300  rounded-lg h-12 p-3 text-grey font-semibold text-base`}>
                    <FiHome className='text-xl'/>
                    <Link to="/admin/home" className='w-full'>Home</Link>
                </div>
                <div className={`flex gap-4 items-center ${pathname.includes("library") ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}><IoBookOutline  className='text-2xl'/> <Link to="/admin/library" className='w-full'>Library</Link></div>
                <div className='flex gap-4 items-center rounded-lg text-grey h-12 p-3 font-semibold text-base'><LuBook  className='text-xl'/><Link className='w-full'>Create A Course </Link></div>
                <div className={`flex gap-4 items-center ${pathname === "/admin/settings" ? "bg-blue text-white" : null} duration-300 rounded-lg h-12 p-3 text-grey font-semibold text-base`}> <IoSettingsOutline  className='text-xl'/><Link to="/admin/settings" className="w-full">Settings</Link></div>
            </div>
        </div>
    </div>
        </motion.div>
          
        }
      </div>
      <div className='2xl:w-full lg:w-[76.5%] 2xl:max-w-full lg:max-w-[940px] w-full lg:ml-auto xl:pl-0 lg:pl-0'>
      <AdminNavbar setOpen={setIsOpen}/>
      <div className='px-8 2xl:max-w-full mt-4  lg:max-w-[1000px] w-full container mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout