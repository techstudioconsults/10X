import { useState } from "react";
// import closeIcon from "../../../../../assets/remove-content.svg";
import plusIcon from "../../../../../assets/plus-icon.png";
import CourseContentTwo from "./CourseContentTwo";
import CourseContentThree from "./CourseContentThree";
import CourseContentOne from "./CourseContentOne";

const CourseContent = ({ loading, onSubmit }) => {
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const toggleContent = () => {
    setShowTwo(!showTwo);
  };

  const toggleThree = () => {
    setShowThree(!showThree);
  };
   



  return (
    <div>
      {/* Header Section */}
      <div className=" flex flex-col md:flex-row justify-between md:items-center gap-6 ">
        <div>
          <h1 className="text-[#0027BA] text-center md:text-start text-3xl font-bold">
            Fill in course content
          </h1>
          <p className="text-[#818181] text-center md:text-start pt-1 md:pt-2 text-base md:text-lg ">
            Please fill in all the details of your course.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="text-[#032BF2] text- font-bold border-[#032BF2] border-2 bg-white w-32 h-12 rounded-lg ">
            Save as Draft
          </button>
          <button
            type="submit"
            onClick={onSubmit}
            className="text-white bg-[#032BF2] w-32 h-12 rounded-lg "
          >
            {loading ? "loading..." : "Publish"}
          </button>
        </div>
      </div>

      <hr className=" my-6 border border-gray-400 " />

      {/* Content Section */}
      <CourseContentOne />
      {/* <div className="relative pb-24 grid grid-cols-1 lg:grid-col"> */}
      {/* Content 1 */}

      {/* Content 2 */}
      {/* <div className="">
          {showTwo && (
            <CourseContentTwo showTwo={showTwo} setShowTwo={setShowTwo}/>
          )}
          {!showTwo && (
         <div className="flex justify-center w-full">
              <button
             onClick={toggleContent}
             className="text-white bg-[#032BF2] mb-4 w-[191px] rounded-lg py-2 flex justify-center items-center gap-4  "
           >
             {" "}
             <img src={plusIcon} alt="" />
             <span> Add Content</span>
           </button>
         </div>
          )}
        </div>  */}
      {/* Content 3 */}
      {/* {showThree && (
          <CourseContentThree showThree={showThree} setShowThree={setShowThree}/>
        )} */}
      {/* {showTwo && !showThree && (
          <div className="absolute bottom-0 w-full flex py-2 justify-around">
            <button
              onClick={toggleThree}
              className="text-white bg-[#032BF2] mb-4 md:mb-1 w-[191px] rounded-lg py-2 flex justify-center items-center gap-4  "
            >
              {" "}
              <img src={plusIcon} alt="" />
              <span> Add Content</span>
            </button>
          </div>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default CourseContent;
