import { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadFile from "../../../../../assets/file-upload.svg";

function FileDropzone() {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    maxFiles: 1,
    accept: "image/*",
  });

  return (
    <div className="flex flex-col justify-center w-full">
      <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
        Upload Course Thumbnail
      </p>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ${
          isDragActive ? "bg-gray-200" : ""
        }`}
      >
        <input {...getInputProps()} />
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
      </div>
      {file && (
        <div className="mt-4">
          <p>Selected file: {file.name}</p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;