import React from "react";
import uploadFile from "../../../../../assets/file-upload.svg";
function FileDropzone() {
  return (
    <div className="flex flex-col justify-center w-full">
      <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
        Upload Course Thumbnail
      </p>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg> */}
          <img src={uploadFile} alt="" />
          <p className="mb-2 text-lg text-[#787878] ">
            Drag and Drop or{" "}
            <span className="font-semibold text-blue"> Choose File</span> to
            upload
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            1080 x 1080 (1:1) recommended, up to 2MB
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}

export default FileDropzone;
