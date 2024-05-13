import React from "react";
import {
  Button,
  Dialog,
} from "@material-tailwind/react";
import useUserContext from "../../../hooks/useUserContext";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const  DeleteUser = (userId) => {
    const { API_URL } = useUserContext();
    const userToken = Cookies.get("userToken");
    const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  console.log(userId);
 
  const handleOpen = () => setOpen(!open);

  const handleDeleteUser = async () => {
    try {
        const {data} = await axios.delete(`${API_URL}/api/v1/users/${userId.userId}`, {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        })

        console.log(data);

        if (data.success) {
            setOpen(false)
            navigate("/")

        }
    } catch (error) {
        console.log(error);
    }
  }
 
  return (
    <>
      <button onClick={handleOpen}  className="h-16 md:w-52 w-full bg-[#C9404D] rounded-xl text-lg font-semibold text-white ">
        Delete Account
      </button>
      <Dialog size="xs" open={open} handler={handleOpen} className="flex py-7 px-4 flex-col items-center justify-center gap-4">
      

        <h2 className="text-blue font-[1000] text-2xl text-center">Confirm Delete </h2>
        <p className="text-fadedBlue text-center">This action cannot be reversed</p>

        <div className="flex items-center px-8 justify-center w-full gap-3">

       
        <Button

            onClick={() => handleDeleteUser()}
            className="mr-1 bg-red-700 w-1/2"
          >
            <span>Yes</span>
          </Button>
          <Button onClick={handleOpen} className="bg-blue w-1/2">
            <span>No</span>
          </Button>
          </div>
      </Dialog>
    </>
  );
}

export default DeleteUser