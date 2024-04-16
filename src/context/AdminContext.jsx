import {  createContext } from "react";

export const AdminContext = createContext()


const AdminProvider = ({children}) => {

    const AdminData = {};


    return <AdminContext.Provider value={AdminData}>
        {children}
    </AdminContext.Provider>
}

export default AdminProvider