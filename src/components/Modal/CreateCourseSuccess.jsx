
import {
    Button,
    Dialog,
  } from "@material-tailwind/react";
  import {Link} from "react-router-dom"
  import successIcon from "../../assets/Success Icon.svg"
  import viewCourseIcon from "../../assets/view-course.svg"

const CreateCourseSuccess = ({open}) => {
  return (
    <div>

<Dialog size="sm" open={open} handler={open} className="flex py-7 px-4 flex-col items-center justify-center gap-2">
    <span className="w-36 h-36">
    <img  className="w-full" src={successIcon} alt="" />
    </span>
      <h2 className="text-blue font-semibold text-2xl text-center">Successfully Published </h2>
      <p className="text-fadedBlue text-center">Your course is now live</p>

      <div className="flex flex-col items-center px-8 justify-center w-full gap-3 pt-4">

    <Link to="/admin/library" className="w-full">
     
    <Button className="bg-blue w-full mx-auto text-center text-white p-3 flex items-center justify-center gap-3 "
        >
            <span className="w-[30px] h-[30px]" ><img className="w-full" src={viewCourseIcon} alt="" /></span>
        View Course
        </Button>
    </Link>
        <Link to="/admin/home">Will do it later</Link>
        </div>
    </Dialog>
    </div>
  )
}

export default CreateCourseSuccess