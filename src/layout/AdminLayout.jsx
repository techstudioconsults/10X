
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'

const Adminlayout = () => {
  return (
    <div className='flex'>
      <div className='block'>
      <AdminSidebar />
      </div>
      <div className='2xl:w-full lg:w-[80%] 2xl:max-w-full lg:max-w-[1040px] container  w-full lg:ml-auto xl:pl-0 lg:pl-0'>
      <AdminNavbar />
      <div className='px-8 2xl:max-w-full mt-4  lg:max-w-[1000px] w-full container mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout