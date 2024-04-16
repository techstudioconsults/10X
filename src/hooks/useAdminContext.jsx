import { useContext } from "react"
import { AdminContext } from "../context/AdminContext"

const useAdminContext = () => useContext(AdminContext)

export default useAdminContext