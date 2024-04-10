
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'
import { useState } from 'react'
import AdminSIdebarMobile from '../components/AdminSidebar/AdminSIdebarMobile'


const Adminlayout = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
      <AdminSidebar />
      </div>
      <div>
        {
          // For mobile screens
          isOpen && <AdminSIdebarMobile setIsOpen={setIsOpen}/>
          
        }
      </div>
      <div className='2xl:w-full 2xl:max-w-full  w-full 2xl:pl-0 lg:pl-[240px]'>
        <div className='fixed top-0 right-0 2xl:pl-[270px] lg:pl-[240px] z-30 w-full'>

      <AdminNavbar setOpen={setIsOpen}/>
        </div>
      <div className='px-2 2xl:max-w-full 2xl:pl-[270px] mt-32  lg:max-w-[1000px] w-full container mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout