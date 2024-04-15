import { Link } from "react-router-dom"
import prevPage from "../../../../assets/prev-page-btn.png"
import shareIcon from "../../../../assets/share-icon.png"


const CourseDetail = () => {

    
  return (
   <div className="w-11/12 mx-auto container">
    <Link className="text-gray-500 flex gap-2 items-center" to="/admin/library">
    <img src={prevPage} alt="" />
    Back to all course
    </Link>
   <div className="flex flex-col gap-4 lg:flex-row justify-between py-12">
   <div>
        <h1 className="text-3xl font-bold text-[#0027BA]">The Zero Call Close</h1>
        <p className="text-[#787878] pt-1">Zero Sales Call course details and activities</p>
    </div>
    <button className=" hidden lg:flex gap-2 w-28 border-2 items-center px-3 border-[rgba(2, 38, 176, 0.4)] rounded-md bg-white text-[#0027BA] h-12 "> <img src={shareIcon} alt="share icon img" /> Share</button>

   </div>

   <div>
    
   </div>
   </div>
  )
}

export default CourseDetail