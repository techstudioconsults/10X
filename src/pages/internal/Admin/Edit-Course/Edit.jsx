import React, { useState } from "react";

import { CiCamera } from "react-icons/ci";
import { useForm } from "react-hook-form";
import EditComponent from "./Edit-Course-Component/Edit";

const Edit = () => {
  const [profileImage, setProfileImage] = useState("");
  const [images, setImages] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  const handleEditCourse = (data) => {
    const formData = new FormData()
  }

  return (
    <main className=" container mx-auto w-11/12">
      <EditComponent />

      <form className="mt-8">
        <p className="text-sm mt-1 text-grey">COURSE DETAILS</p>
        <hr className="mt-2 text-grey" />

        <div className="flex justify-between items-center  w-full">
          <div className="flex flex-col gap-7 w-[50%]">
            {/* edit-form */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="title"
                className=" text-darkBlue font-[650] text-sm"
              >
                Course Title
              </label>

              <input
                type="text"
                id="title"
                className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-11 w-full px-3 mt-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className=" text-darkBlue font-[650] text-sm"
              >
                Price *
              </label>

              <input
                type="number"
                id="price"
                className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-11 w-full px-3 mt-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className=" text-darkBlue font-[650] text-sm">
                Price *
              </label>

              <div className=" flex gap-7 items-center">
                <div className="flex items-center gap-2 mt-2">
                  <input type="radio" id="video" />
                  <label htmlFor="video" className=" text-xs">
                    Video
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input type="radio" id="book" />
                  <label htmlFor="book" className=" text-xs">
                    Book
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[45%]">
            <h1 className=" text-darkBlue font-[650] text-sm mb-3 mt-10">
              Upload Course Thumbnail
            </h1>
            {/* edit img */}
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
          </div>
        </div>
      </form>
    </main>
  );
};

export default Edit;
