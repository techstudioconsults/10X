
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'

const Adminlayout = () => {
  return (
    <div className='flex'>
      <div className='block'>
      <AdminSidebar />
      </div>
      <div className=' '>
      <AdminNavbar />
      <div className='px-3 mt-4 container mx-auto'>

        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Adminlayout