import React, { useState } from "react";
import MyCourses from "../MyCourses";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const MyCoursesComponents = () => {
  const courses = [
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "video",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "book",
      star: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="mt-7">
      {courses.map((c) => (
        <div
          key={c.id}
          className="mb-5 shadow-xl shadow-[#032BF214]   p-3 w-full md:flex  gap-3"
        >
          <div>
            <img
              src={c.image}
              alt={c.title}
              className="w-full md:w-[200px] md:h-[150px] lg:w-[400px] lg:h-[200px] mb-2 md:mb-0 rounded-lg"
            />

            <div className="h-0.5 rounded w-full mt-2 bg-darkBlue" />

            <div className="flex justify-between mt-2 text-[11px] text-[#6476BA]">
              <p>IN PROGRESS</p>
              <p>10% complete</p>
            </div>
          </div>

          <div className=" space-y-3">
            <h1 className=" text-darkBlue font-[650] md:text-lg">{c.title}</h1>
            <p className="  text-[10px] md:max-w-[350px] lg:text-[16px] text-[#6476BA]">
              {c.description}
            </p>

            <div className="mt-1 flex gap-2">
              <p
                className={` text-[10px] bg-[#EEE5FF] w-fit px-3 flex items-center py-0.5 rounded-full capitalize ${
                  c.category === "video"
                    ? "border border-[#AD70FF] text-[#AD70FF]"
                    : "border border-[#1E2C4F] text-[-[#1E2C4F]]"
                }`}
              >
                {c.category}
              </p>
              <p>{c.star}</p>
            </div>

            <button className="text-xs bg-darkBlue w-full md:w-[350px] h-7 md:h-9 mt-2 rounded text-white font-semibold">
              Resume course
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
