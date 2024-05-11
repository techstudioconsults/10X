import { useState, useCallback, useMemo } from "react";
import closeIcon from "../../../../../assets/remove-content.svg";
import plusIcon from "../../../../../assets/plus-icon.png";
import { useDropzone } from "react-dropzone";

const CourseContentTwo = ({setShowTwo, showTwo}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);


  const toggleContent = () => {
    setShowTwo(!showTwo);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  }, []);

  const removeFile = () => {
    console.log("clicked");
    const updatedFiles = [];
    updatedFiles.splice(1);
    setSelectedFiles(updatedFiles);
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
      "video/mp4": [],
      "video/webm": [],
      "video/*": [],
    },
  });

  const dropzoneStyle = useMemo(
    () => ({
      borderColor: isDragAccept
        ? "#00e676"
        : isDragReject
        ? "#ff1744"
        : isDragActive
        ? "#2196f3"
        : "#ced4da",
      borderWidth: "2px",
      borderRightRadiem: "0rem",
      borderLeftRadiem: "0.375rem",
      padding: "0.5rem", // Tailwind's p-2
    }),
    [isDragAccept, isDragReject, isDragActive]
  );

  return (
    <div>
      <div className="p-7 rounded-md border shadow-md w-full h-[407px]">
      <div className="flex justify-between">
                 {" "}
                 <h1 className="py-4 text-[#A5A5A5] font-medium ">CONTENT 2</h1>
                 <img
                  className="cursor-pointer"
                   onClick={toggleContent}
                   src={closeIcon}
                   alt=""
                 />{" "}
             </div>
        <hr className=" my-6 border border-gray-400 " />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              Content Name
            </label>
            <input
              type="text"
              className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
              placeholder="Introduction to Zero Call Close"
            />
          </div>
          {/* <div className='flex flex-col gap-1'>
              <label
                htmlFor="course-title"
                className=" font-semibold text-base text-[#6476BA]"
              >
                Upload content file
              </label>
              <div className='flex w-full '>
                <input
                  type="text"
                  className="px-3 w-[65%] py-2 h-[48px] border-2 border-gray-400 border-r-0 rounded-l-md"
                  placeholder="Browser files or drag and drop here"
                />
              <button className='w-[35%] bg-[#032BF2] text-white rounded-r-md flex justify-center items-center gap-4'> <img src={plusIcon} alt="" /> <span>Add</span></button>
              </div>
              <p className='text-[#969BAC] font-medium text-sm pt-3'>Files Uploaded will appear here</p>
            </div> */}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              Upload content file
            </label>
            <div className="flex ">
              <div
                {...getRootProps({ style: dropzoneStyle })}
                className="flex justify-between w-full bg-[#CFE6FF] rounded-l-md"
              >
                <input
                  {...getInputProps()}
                  className="px-3 w-[65%] py-2 h-11 border-2 border-gray-400 border-r-0 rounded-l-md"
                  placeholder={
                    selectedFiles.length > 0
                      ? "Browse files or drag and drop here"
                      : "Browse files or drag and drop here"
                  }
                />
                <input id="file-upload" type="file" className="hidden" />
              </div>
              <button
                htmlFor="file-upload"
                onClick={open}
                className="w-[35%] bg-[#032BF2] h-11 text-white rounded-r-md flex justify-center px-5  items-center gap-2 md:gap-4 cursor-pointer"
              >
                <img src={plusIcon} alt="" />
                <span>Add</span>
              </button>
            </div>
            <p className="text-[#969BAC] font-medium text-sm pt-3">
              {selectedFiles.length > 0
                ? ""
                : " File Uploaded will appear here"}
            </p>
            {selectedFiles.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-2 bg-[#CFE6FF] rounded-md p-3 w-72"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        <p>{file.name.slice(0, 10)}...</p>
                      </span>
                      <span className="text-gray-500">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <img
                      className="cursor-pointer"
                      onClick={removeFile}
                      src={closeIcon}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentTwo;
