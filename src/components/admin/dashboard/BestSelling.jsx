import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    units: 185599,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Book",
    units: 185599,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    units: 185599,
  },
];

const BestSelling = () => {
  return (
    <main className=" shadow shadow-[#032BF2] p-3 rounded-md w-full ">
      <div className=" flex items-center w-full justify-between px-3">
        <h1 className="xl:text-lg font-semibold text-darkBlue">
          Best Selling Courses
        </h1>
        <Link to="/all-courses" className="text-xs text-[#3952AC]">
          See All
        </Link>
      </div>

      <section className="w-full">
        <div className="flex justify-between items-center text-sm bg-[#F8F8F8] py-2 px-3  text-[#7C87AC] font-semibold">
          <p> Course Name</p>
          <p> Category</p>
          <p> Units Sold</p>
        </div>

        <section className=" space-y-3">
          {courses.map((b) => (
            <div key={b.id} className="flex justify-between items-center mt-2">
              <p className=" text-md text-darkBlue font-semibold underline">
                {b.title}
              </p>
              <p
                className={` text-sm bg-[#CFE6FF] px-3 py-1 font-semibold mr-14 rounded-md  ${
                  b.category.toLowerCase() === "book" && "text-[#AD70FF]"
                }`}
              >
                {b.category}
              </p>
              <p className="p-3 text-sm text-grey">{b.units}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default BestSelling;
