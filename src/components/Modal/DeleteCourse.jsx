import React from 'react'
import {
    Button,
    Dialog,
  } from "@material-tailwind/react";
  import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useAdminContext from '../../hooks/useAdminContext';

const DeleteCourse = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { API_URL, token } = useAdminContext();
  const [open, setOpen] = React.useState(false);
  const handleCourseDelete = async () => {
    try {
      const {data} = await axios.delete(`${API_URL}/api/v1/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      console.log(data);

      if(data.success) {

          navigate("/admin/library")
      }

    } catch (error) {
      console.log(error);
    }
  }
  const handleOpen = () => setOpen(!open);
  return (
    <div>
        <>
      <button onClick={handleOpen}  className=" border-red-500 border-2 rounded-md py-3 px-10  text-sm text-red-500 ">
        Delete Account
      </button>
      <Dialog size="xs" open={open} handler={handleOpen} className="flex py-7 px-4 flex-col items-center justify-center gap-4">
      

        <h2 className="text-blue font-[1000] text-2xl text-center">Confirm Delete </h2>
        <p className="text-fadedBlue text-center">This action cannot be reversed</p>

        <div className="flex items-center px-8 justify-center w-full gap-3">

       
        <Button

            onClick={() => handleCourseDelete()}
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
    </div>
  )
}

export default DeleteCourse