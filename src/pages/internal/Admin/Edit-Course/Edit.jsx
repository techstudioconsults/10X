import React, { useState } from "react";
import EditComponent from "../../../../components/admin/Edit-Course/Edit";

const Edit = () => {
  const [profileImage, setProfileImage] = useState("");
  const [images, setImages] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <main className=" container mx-auto w-11/12">
      <EditComponent />

      <section className="mt-10">
        <p className="text-sm mt-1 text-grey">COURSE DETAILS</p>
        <hr className="mt-2 text-grey" />

        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <label htmlFor="" className=" text-darkBlue font-[650] text-sm">
                Course Title
              </label>

              <input
                type="text"
                className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-9 w-full px-3 mt-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className=" text-darkBlue font-[650] text-sm">
                Price *
              </label>

              <input
                type="number"
                className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-9 w-full px-3 mt-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className=" text-darkBlue font-[650] text-sm">
                Price *
              </label>

              <div className=" flex gap-7 items-center">
                <div className="flex items-center gap-2 mt-2">
                  <input type="radio" />
                  <label htmlFor="" className=" text-xs">
                    Video
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input type="radio" />
                  <label htmlFor="" className=" text-xs">
                    Book
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Edit;
