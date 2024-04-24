
import Details from "../coursedetail/content/Details";
import CreateCourseDetails from "./content/CreateCourseDetails";
const handleNext = () => {};

const CreateCourse = () => {
  return (
    <div className="w-full  px-6 container">
      <div className=" flex justify-between items-center ">
        <div>
          <h1 className="text-[#0027BA] text-3xl font-bold">
            Create New Course
          </h1>
          <p className="text-[#818181] pt-2">
            Please fill in all the details of your course.
          </p>
        </div>
        <button
          onClick={handleNext}
          className="text-white bg-[#032BF2] w-32 h-12 rounded-lg "
        >
          Next
        </button>
      </div>
      <section>
        <CreateCourseDetails/>
      </section>
    </div>
  );
};

export default CreateCourse;
