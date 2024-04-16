
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'
import { useState } from 'react'
import AdminSIdebarMobile from '../components/AdminSidebar/AdminSIdebarMobile'


const Adminlayout = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex w-full'>
      {/* sidebar */}
      <div className='2xl:block hidden w-1/5 '>
      <AdminSidebar />
      </div>
      <div>
        {
          // For mobile screens
          isOpen && <AdminSIdebarMobile setIsOpen={setIsOpen}/>
          
        }
      </div>

      {/* content */}
      <div className=' 2xl:w-4/5 w-full  mx-auto container'>
        <div className='fixed  top-0 right-0  mx-auto   z-30 w-full'>

      <AdminNavbar setOpen={setIsOpen}/>
        </div>
      <div className='px-2 mt-32 w-full mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout