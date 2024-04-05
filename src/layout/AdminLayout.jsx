
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
      <div className='2xl:w-full lg:w-[76.5%] 2xl:max-w-full lg:max-w-[960px] w-full lg:ml-auto xl:pl-0 lg:pl-0'>
      <AdminNavbar setOpen={setIsOpen}/>
      <div className='px-2 2xl:max-w-full mt-4  lg:max-w-[1000px] w-full container mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout