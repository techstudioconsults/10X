/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Radio, Typography } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const coursesContent = [
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Introduction to Zero Call...",
    subtitle: [
      "Master step-by-step framew...",
      "Master step-by-step framew...",
      "Master step-by-step framew...",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-105"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const CourseContent = ({ singleCourse, handleTitleClick }) => {
  const [open, setOpen] = useState(0);
 const [checkedCourses, setCheckedCourses] = useState({});
  

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <main className="w-11/12 container mx-auto my-3">
      {singleCourse?.content?.map((course, i) => (
        <Accordion
          key={course._id}
          open={open === i + 1}
          icon={<Icon id={i + 1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(i + 1)}
            className="text-[16px] text-darkBlue"
          >
            {course.title}
          </AccordionHeader>

          <AccordionBody
            key={i}
            className={"text-[#6476BA] font-[500]  h-[50px] w-full"}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleTitleClick(course)}
            >
              <p> {course.title}</p>

              <span>
                {/* <Radio
                  name="type"
                  defaultChecked
                  ripple={false}
                  icon={<CheckIcon />}
                  className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                /> */}
                <input
                  className="form-checkbox h-5 w-5 text-green-600 rounded-full"
                  type="checkbox"
                  checked={!!checkedCourses[course?._id]}
                  onChange={() => {
                    setCheckedCourses((prev) => ({
                      ...prev,
                      [course?._id]: !prev[course?._id],
                    }));

                    console.log("clicked");
                  }}
                />
              </span>
            </div>
          </AccordionBody>
        </Accordion>
      ))}
    </main>
  );
};
