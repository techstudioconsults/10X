import React from "react";

const EditComponent = () => {
  return (
    <main>
      <section className="flex justify-between">
        <div>
          <h1 className=" text-darkBlue font-[650] text-2xl">Edit Course</h1>
          <p className="text-sm mt-1 text-grey">
            Please fill in all the details of your course
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button className=" border-2 border-darkBlue rounded-md font-[650] text-darkBlue h-11 w-24">
            Discard
          </button>
          <button className="  bg-darkBlue rounded-md font-[650] text-white h-11 w-24">
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default EditComponent;
