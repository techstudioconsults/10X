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

// export default FileDropzone;
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadFile from "../../../../../assets/file-upload.svg";
import { useFormContext } from "react-hook-form";
import { CiCamera } from "react-icons/ci";

function FileDropzone() {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [file, setFile] = useState(null);
  const [images, setImages] = useState(null);
  const [profileImage, setProfileImage] = useState("")

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFile(file);
      setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  return (
    <main className="relative overflow-hidden h-56 w-full bg-gray-200 rounded-lg mb-4">
    <div>
      {images && (
        <img
          src={images && images}
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}
    </div>

    <input
      type="file"
      name=""
      id=""
      onChange={handleImageChange}
      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
    />

    <div
      className="flex items-center justify-center top-[45%] left-0 right-0 absolute gap-1 text-sm z-0 cursor-pointer"
      onChange={handleImageChange}
    >
      <button className="flex gap-1 items-center bg-black opacity-[80%] text-white px-5 py-2 rounded-lg border border-white cursor-pointer">
        <CiCamera />
        <p>Replace photo</p>
      </button>
    </div>
  </main>
  );
}

export default FileDropzone;
