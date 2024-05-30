
import {
    Button,
    Dialog,
  } from "@material-tailwind/react";
  import {Link} from "react-router-dom"
  import successIcon from "../../assets/Success Icon.svg"
  import viewCourseIcon from "../../assets/view-course.svg"

const SubscriptionModal = ({open, setOpen}) => {

    const closeModal = ()=>{
        setOpen(false)
    }
  return (
    <div>

<Dialog size="sm" open={open} handler={open} className="flex py-7 px-4 flex-col items-center justify-center gap-2">
    <span className="w-36 h-36">
    <img  className="w-full" src={successIcon} alt="" />
    </span>
      <h2 className="text-blue font-semibold text-2xl text-center">Successfully Subscribed </h2>
      <p className="text-fadedBlue text-center">You're now on the list to receive the latest news, updates, and exclusive content straight to your inbox.</p>

      <div className="flex flex-col items-center px-8 justify-center w-full gap-3 pt-4">

     
    <Button onClick={closeModal} className="bg-blue w-full mx-auto text-center text-white p-3 flex items-center justify-center gap-3 "> Continue </Button>
    
       
        </div>
    </Dialog>
    </div>
  )
}

export default SubscriptionModal