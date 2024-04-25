
import FileDropzone from "./FileDropZone";

const CreateCourseDetails = () => {
  return (
    <div>
      <div className=" mt-8 mb-9 px-6 rounded-lg border shadow-md py-7">
        <h1 className="text-[#A5A5A5] text-sm font-medium ">COURSE DETAILS</h1>

        <hr className=" my-6 border border-gray-400 " />

        <form className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
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
                  value=""
                  name="bordered-radio"
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
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Books
                </label>
              </div>
            </div>
            {/* drag & drop */}
            <FileDropzone />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseDetails;
