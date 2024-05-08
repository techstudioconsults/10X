import { useState } from "react";
import uploadFile from "../../../../../assets/file-upload.svg";

function FileDropzone() {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
        Upload Course Thumbnail
      </p>
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ${
          isDragOver ? "bg-gray-200" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <img src={uploadFile} alt="" />
          <p className=" px-4 mb-2 text-lg text-[#787878]">
            Drag and Drop or{" "}
            <span className="font-semibold text-blue">Choose File</span> to
            upload
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            1080 x 1080 (1:1) recommended, up to 2MB
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {file && (
        <div className="mt-4">
          <p>Selected file: {file.name}</p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;