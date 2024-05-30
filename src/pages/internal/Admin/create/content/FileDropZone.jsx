// import { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import uploadFile from "../../../../../assets/file-upload.svg";
// import { useFormContext } from "react-hook-form";

// function FileDropzone() {
//   const [file, setFile] = useState(null);
//   const { register, formState: { errors } } = useFormContext();

  
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       setFile(acceptedFiles[0]);

//       // Register the thumbnail field with react-hook-form
      
//       register("thumbnail", {
//         value: acceptedFiles[0],
//         validate: {
//           fileSize: (file) =>
//             file && file.size < 5000000 || "File size must be less than 5MB",
            
//         },
//       });
//     },
//     maxFiles: 1,
//     accept: ["image/jpeg", "image/png", "image/gif"]
    
//   });

//   return (
//     <div className="flex flex-col justify-center w-full">
//       <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
//         Upload Course Thumbnail
//       </p>
//       <div
//         {...getRootProps()}
//         className={`flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ${
//           isDragActive ? "bg-gray-200" : ""
//         }`}
//       >
//         <input {...getInputProps()} />
//         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//           <img src={uploadFile} alt="" />
//           <p className=" px-4 mb-2 text-lg text-[#787878]">
//             Drag and Drop or{" "}
//             <span className="font-semibold text-blue">Choose File</span> to
//             upload
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             1080 x 1080 (1:1) recommended, up to 2MB
//           </p>
//         </div>
//       </div>
//       {file && (
//         <div className="mt-4">
//           <p>Selected file: {file.name}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// // export default FileDropzone;



// import { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import uploadFile from "../../../../../assets/file-upload.svg";
// import { useFormContext } from "react-hook-form";

// function FileDropzone() {
//   const { register, setValue, formState: { errors } } = useFormContext();
//   const [file, setFile] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     if (acceptedFiles.length > 0) {
//       const file = acceptedFiles[0];
//       setFile(file);
//       setValue("thumbnail", file, { shouldValidate: true });
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/*",
//     maxFiles: 1,
//   });

//   return (
//     <div className="flex flex-col justify-center w-full">
//       <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
//         Upload Course Thumbnail
//       </p>
//       <div
//         {...getRootProps()}
//         className={`flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ${
//           isDragActive ? "bg-gray-200" : ""
//         }`}
//       >
//         <input {...getInputProps()} {...register("thumbnail", { required: "Thumbnail file is required" })} />
//         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//           <img src={uploadFile} alt="" />
//           <p className=" px-4 mb-2 text-lg text-[#787878]">
//             Drag and Drop or{" "}
//             <span className="font-semibold text-blue">Choose File</span> to
//             upload
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             1080 x 1080 (1:1) recommended, up to 2MB
//           </p>
//         </div>
//       </div>
//       {/* {errors.thumbnail?.type === "required" && (
//         <p className="text-red-500">{errors.thumbnail.message}</p>
//       )} */}
//        {errors.thumbnail && !file && (
//         <p className="text-red-500">{errors.thumbnail.message}</p>
//       )}
//       {file && (
//         <div className="mt-4">
//           <p>Selected file: {file.name}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FileDropzone;





// import { useCallback, useState } from "react";
// import { useDropzone,  } from "react-dropzone";
// import uploadFile from "../../../../../assets/file-upload.svg";
// import { useFormContext } from "react-hook-form";
// import Dropzone from "react-dropzone";

// function FileDropzone() {
//   const { register, setValue, formState: { errors } } = useFormContext();
//   const [file, setFile] = useState(null);


//   return (
//    <Dropzone onDrop={acceptedFiles} >
//     {({getRootProps, getInputProps})=>(
//        <div className="flex flex-col justify-center w-full">
//        <p className="text-[#6476BA] text-left pt-4 pb-3 text-sm font-semibold">
//          Upload Course Thumbnail
//        </p>
//        <div
//          {...getRootProps()}
//          className={`flex flex-col items-center justify-center w-full h-52 border-2 border-[#787878] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ${
//            isDragActive ? "bg-gray-200" : ""
//          }`}
//        >
//          <input {...getInputProps()} {...register("thumbnail", { required: "Thumbnail file is required" })} />
//          <div className="flex flex-col items-center justify-center pt-5 pb-6">
//            <img src={uploadFile} alt="" />
//            <p className=" px-4 mb-2 text-lg text-[#787878]">
//              Drag and Drop or{" "}
//              <span className="font-semibold text-blue">Choose File</span> to
//              upload
//            </p>
//            <p className="text-xs text-gray-500 dark:text-gray-400">
//              1080 x 1080 (1:1) recommended, up to 2MB
//            </p>
//          </div>
//        </div>
//        {/* {errors.thumbnail?.type === "required" && (
//          <p className="text-red-500">{errors.thumbnail.message}</p>
//        )} */}
//         {errors.thumbnail && !file && (
//          <p className="text-red-500">{errors.thumbnail.message}</p>
//        )}
//        {file && (
//          <div className="mt-4">
//            <p>Selected file: {file.name}</p>
//          </div>
//        )}
//      </div>
//     )}
//    </Dropzone>
//   );
// }

// export default FileDropzone;



import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadFile from "../../../../../assets/file-upload.svg";
import { useFormContext } from "react-hook-form";

function FileDropzone() {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [file, setFile] = useState(null);

  
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFile(file);
      setValue("thumbnail", file, { shouldValidate: true });
    }
  }, [setValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
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
        <input {...getInputProps()}  />
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <img src={uploadFile} alt="" />
          <p className="px-4 mb-2 text-lg text-[#787878]">
            Drag and Drop or{" "}
            <span className="font-semibold text-blue">Choose File</span> to upload
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            1080 x 1080 (1:1) recommended, up to 2MB
          </p>
        </div>
      </div>
      {errors.thumbnail  && (
        <p className="text-red-500">{errors.thumbnail.message}</p>
      )}
      {file && (
        <div className="mt-4">
          <p>Selected file: {file.name}</p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
