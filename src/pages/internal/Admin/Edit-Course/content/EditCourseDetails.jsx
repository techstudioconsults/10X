
import Thumbnail from "./Thumbnail";
import propTypes from 'prop-types'
import { useNavigate, useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form"


const EditCourseDetails = ({setShowNext, courseDetails}) => {
  // const { handleSubmit } = useFormContext();
  const navigate = useNavigate()
  const {id} = useParams()

  const { register,  formState: { errors } } = useFormContext();
  const handleNext = ()=>{
    setShowNext(true)
  }
  return (
    <div>
            <div className=" flex justify-between items-center gap-5">
            <div>
          <h1 className=" text-darkBlue font-[650] text-2xl">Edit Course</h1>
          <p className="text-sm mt-1 text-grey">
            Please fill in all the details of your course
          </p>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={() => navigate(`/coursedetail/${id}`)} className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-11 w-24">
            Discard
          </button>
          <button onClick={handleNext} className="  bg-darkBlue rounded-md font-[650] text-white h-11 w-24">
            Next
          </button>
        </div>
        
      </div>
      <div className=" mt-8 mb-9 px-6 rounded-lg border shadow-md py-7">
        <h1 className="text-[#A5A5A5] text-sm font-medium ">COURSE DETAILS</h1>

        <hr className=" my-6 border border-gray-400 " />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Course Title
            </label>
            <input
              type="text"
              id="course-title"
              {...register("title", { required: "Course title is required" })}
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Name your course......"
              // defaultValue={courseDetails?.data?.title}
            />
            {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            <label
              htmlFor="description"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Course Description 
            </label>
            <textarea
            id="description"
              rows={3}
              type="text"
              {...register("description", { required: "Course description is required" })}
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Short course description"
            />
            {errors.description && <span className="text-red-500">{errors.description.message}</span>}

            <label
              htmlFor="price"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Price *
            </label>
            <input
            id="price"
            placeholder="100,000.00"
            {...register("price", { required: "Price is required" })}
              type="text"
              className="px-3 py-4 border-2 border-gray-400 rounded-md "
          
            />
            {errors.price && <span className="text-red-500">{errors.price.message}</span>}
          </div>
          <div>
            <label
              className="font-semibold text-base text-[#6476BA]"
              htmlFor="category"
            >
              Course category{" "}
            </label>
            <div className="grid grid-cols-2 gap-10 w-72 py-3">
              <div className="flex items-center ps-4  shadow border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  {...register("category")}
                  value="video"
                  name="bordered-radio"
                  checked={courseDetails?.category === "video"}
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300   "
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Video
                </label>
              </div>
              <div className="flex items-center ps-4 border shadow border-gray-200 rounded dark:border-gray-700">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  {...register("category")}
                  value="book"
                  name="bordered-radio"
                  checked={courseDetails?.category === "book"}
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Book
                </label>
              </div>
            </div>
            {/* drag & drop */}
            <Thumbnail course={courseDetails}/>
          </div>
          {/* <button type="submit">submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default EditCourseDetails;

EditCourseDetails.propTypes = {
setShowNext: propTypes.bool,
}
