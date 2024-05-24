// import { useState, useCallback, useMemo } from "react";
// import closeIcon from "../../../../../assets/remove-content.svg";
// import plusIcon from "../../../../../assets/plus-icon.png";
// import { useDropzone } from "react-dropzone";
// import { useFieldArray, useFormContext } from "react-hook-form";

// const CourseContentOne = () => {
//   const { control, formState: { errors }, register, setValue } = useFormContext();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "content",
//   });
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   // const onDrop = useCallback((acceptedFiles) => {
//   //   setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
//   // }, []);

//   const onDrop = useCallback((acceptedFiles, rejectedFiles, event) => {
//     const updatedFiles = [...selectedFiles];
//     acceptedFiles.forEach((file, index) => {
//       const fieldIndex = selectedFiles.length + index;
//       updatedFiles[fieldIndex] = file;
//       setValue(`content.${fieldIndex}.file`, file);
//     });
//     setSelectedFiles(updatedFiles);
//   }, [selectedFiles, setValue]);

//   const removeFile = (index) => {
//     setSelectedFiles((prevFiles) =>
//       prevFiles.filter((_, fileIndex) => fileIndex !== index)
//     );
//   };

//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     open,
//   } = useDropzone({
//     onDrop,
//     accept: {
//       "application/pdf": [],
//       "video/mp4": [],
//       "video/webm": [],
//       "video/*": [],
//     },
//     maxFiles: fields.length, // Limit the number of files based on the number of content items
//   });

//   const dropzoneStyle = useMemo(
//     () => ({
//       borderColor: isDragAccept
//         ? "#00e676"
//         : isDragReject
//         ? "#ff1744"
//         : isDragActive
//         ? "#2196f3"
//         : "#ced4da",
//       borderWidth: "2px",
//       borderRadius: "0.375rem",
//       padding: "0.5rem",
//     }),
//     [isDragAccept, isDragReject, isDragActive]
//   );

//   return (
//     <div>
//       <div className=" grid gap-16 grid-cols-1 lg:grid-cols-2 ">
//         {fields.map((item, index) => (
//       <div key={item.id} className="p-7 rounded-md border shadow-md w-full h-[407px]">
//         <h1 className="py-4 text-[#320f0f] font-medium">CONTENT {`${index + 1}`}</h1>
//         <hr className="my-6 border border-gray-400" />
//           <div  className="flex flex-col gap-5">
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor={`course-title-${index}`}
//                 className="font-semibold text-base text-[#6476BA]"
//               >
//                 Content Name
//               </label>
//               <input
//                 id={`course-title-${index}`}
//                 type="text"
//                 {...register(`content.${index}.title`)}
//                 className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
//                 placeholder="Introduction to Zero Call Close"
//               />
//               {errors.content?.[index]?.title && (
//                 <span className="text-red-500">
//                   {errors.content[index].title.message}
//                 </span>
//               )}
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor={`file-upload-${index}`}
//                 className="font-semibold text-base text-[#6476BA]"
//               >
//                 Upload content file
//               </label>
//               <div className="flex">
//                 <div

//                   {...getRootProps({ style: dropzoneStyle })}
//                   className="flex justify-between w-full bg-[#CFE6FF] rounded-l-md"
//                 >
//                   <input
//                     {...getInputProps()}
//                     id={`file-upload-${index}`}
//                     className="px-3 w-[65%] py-2 h-11 border-2 border-gray-400 border-r-0 rounded-l-md"
//                     placeholder={
//                       selectedFiles[index]
//                         ? selectedFiles[index].name
//                         : "Browse files or drag and drop here"
//                     }
//                     disabled
//                   />
//                   <input
//                     id={`file-upload-${index}`}
//                     type="file"
//                     className="hidden"
//                   />
//                 </div>
//                 <button
//                 type="button"
//                   htmlFor={`file-upload-${index}`}
//                   onClick={open}
//                   className="w-[35%] bg-[#032BF2] h-11 text-white rounded-r-md flex justify-center px-5 items-center gap-2 md:gap-4 cursor-pointer"
//                 >
//                   <img src={plusIcon} alt="" />
//                   <span>Add</span>
//                 </button>
//               </div>
//               {!selectedFiles[index] && (
//                 <p className="text-[#969BAC] font-medium text-sm pt-3">
//                   File Uploaded will appear here
//                 </p>
//               )}
//               {selectedFiles[index] && (
//                 <div className="flex flex-col gap-2 mt-2">
//                   <div className="flex justify-between items-center gap-2 bg-[#CFE6FF] rounded-md p-3 w-72">
//                     <div className="flex justify-between gap-2">
//                       <span className="text-gray-600">
//                         <p>{selectedFiles[index].name.slice(0, 10)}...</p>
//                       </span>
//                       <span className="text-gray-500">
//                         ({(selectedFiles[index].size / 1024 / 1024).toFixed(2)}{" "}
//                         MB)
//                       </span>
//                     </div>
//                     <img
//                       className="cursor-pointer"
//                       onClick={() => removeFile(index)}
//                       src={closeIcon}
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           </div>
//         ))}
//         </div>
//     </div>
//   );
// };

// export default CourseContentOne;

import { useState, useCallback, useMemo } from "react";
import closeIcon from "../../../../../assets/remove-content.svg";
import plusIcon from "../../../../../assets/plus-icon.png";
import { useDropzone } from "react-dropzone";
import { useFieldArray, useFormContext } from "react-hook-form";

const CourseContentOne = () => {
  const {
    control,
    formState: { errors },
    register,
    setValue,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "content",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [showThirdContent, setShowThirdContent] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles, event) => {
      const updatedFiles = [...selectedFiles];
      acceptedFiles.forEach((file, index) => {
        const fieldIndex = selectedFiles.length + index;
        updatedFiles[fieldIndex] = file;
        setValue(`content.${fieldIndex}.file`, file);
      });
      setSelectedFiles(updatedFiles);
    },
    [selectedFiles, setValue]
  );

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
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
    maxFiles: fields.length, // Limit the number of files based on the number of content items
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
      // borderRadius: "0.375rem",
      padding: "0.5rem",
    }),
    [isDragAccept, isDragReject, isDragActive]
  );

  const handleAddSecondContent = () => {
    setShowSecondContent(true);
  };

  const handleAddThirdContent = () => {
    setShowThirdContent(true);
  };

  return (
    <div>
      <div className=" pb-10 grid gap-16 grid-cols-1 lg:grid-cols-2">
        {fields.slice(0, showThirdContent ? 3 : showSecondContent ? 2 : 1).map((item, index) => (
          <div
            key={item.id}
            className="p-7 rounded-md border shadow-md w-full h-[407px]"
          >
            <h1 className="py-4 text-[#320f0f] font-medium">
              CONTENT {`${index + 1}`}
            </h1>
            <hr className="my-6 border border-gray-400" />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`course-title-${index}`}
                  className="font-semibold text-base text-[#6476BA]"
                >
                  Content Name
                </label>
                <input
                  id={`course-title-${index}`}
                  type="text"
                  {...register(`content.${index}.title`)}
                  className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
                  placeholder="Introduction to Zero Call Close"
                />
                {errors.content?.[index]?.title && (
                  <span className="text-red-500">
                    {errors.content[index].title.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor={`file-upload-${index}`}
                  className="font-semibold text-base text-[#6476BA]"
                >
                  Upload content file
                </label>
                <div className="flex">
                  <div
                    {...getRootProps({ style: dropzoneStyle })}
                    className="flex justify-between w-full bg-[#CFE6FF] rounded-l-md border-r-0"
                  >
                    <input
                      {...getInputProps()}
                      id={`file-upload-${index}`}
                      className="px-3 w-[65%] py-2 h-11 border-2 border-gray-400 border-r-0 rounded-l-md"
                      placeholder={
                        selectedFiles[index]
                          ? selectedFiles[index].name
                          : "Browse files or drag and drop here"
                      }
                      disabled
                    />
                    <input
                      id={`file-upload-${index}`}
                      type="file"
                      className="hidden"
                    />
                  </div>
                  <button
                    type="button"
                    htmlFor={`file-upload-${index}`}
                    onClick={open}
                    className="w-[35%] bg-[#032BF2] h-11 text-white rounded-r-md flex justify-center px-5 items-center gap-2 md:gap-4 cursor-pointer"
                  >
                    <img src={plusIcon} alt="" />
                    <span>Add</span>
                  </button>
                </div>
                {!selectedFiles[index] && (
                  <p className="text-[#969BAC] font-medium text-sm pt-3">
                    File Uploaded will appear here
                  </p>
                )}
                {selectedFiles[index] && (
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between items-center gap-2 bg-[#CFE6FF] rounded-md p-3 w-72">
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-600">
                          <p>{selectedFiles[index].name.slice(0, 10)}...</p>
                        </span>
                        <span className="text-gray-500">
                          (
                          {(selectedFiles[index].size / 1024 / 1024).toFixed(2)}{" "}
                          MB)
                        </span>
                      </div>
                      <img
                        className="cursor-pointer"
                        onClick={() => removeFile(index)}
                        src={closeIcon}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {!showSecondContent && (
          <div className="flex justify-center items-center h-full">
            <button
              className="bg-blue px-5 py-3 text-white flex items-center rounded-md gap-4"
              onClick={handleAddSecondContent}
            >
              <span><img src={plusIcon} alt="" /></span>
              Add content
            </button>
          </div>
        )}

      </div>
        {showSecondContent && !showThirdContent && (
          <div className="flex py-10 justify-center items-center h-full">
            <button
              className="bg-blue px-5 py-3 text-white flex items-center justify-center gap-4 rounded-md"
              onClick={handleAddThirdContent}
            >
              <span> <img src={plusIcon} alt="" /> </span>
              Add content 
            </button>
          </div>
        )}
    </div>
  );
};

export default CourseContentOne;
