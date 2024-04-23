import React from "react";
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

      <div className=" mt-8 px-6 rounded-lg border shadow-sm py-12">
        <h1 className="text-[#A5A5A5] text-sm font-medium ">COURSE DETAILS</h1>

        <hr className=" my-6 border border-gray-400" />

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Name your course......"
            />
            <label
              htmlFor="description"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Course Description
            </label>
            <textarea
              rows={3}
              type="text"
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Short course description"
            />
            <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Price *
            </label>
            <input
              type="text"
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="100,000.00"
            />
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
