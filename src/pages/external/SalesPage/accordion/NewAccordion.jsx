import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import checkmark from "../../../../assets/check-icon.svg";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "-rotate-90" : ""
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

export function NewAccordions({ single }) {
  const [open, setOpen] = useState(0);

  
  return (
    <>
      <main className="max-w-[600px]">
        {single?.content?.map((course, i) => (
          <Accordion
            key={course?.id}
            // open={open === i + 1}
            // icon={<Icon id={i + 1} open={open} />}
          >
            <AccordionHeader
              // onClick={() => handleOpen(i + 1)}
              className="text-[16px]  text-darkBlue"
            >
              {course?.title}
            </AccordionHeader>

            <AccordionBody
              key={i}
              className={"text-[#6476BA] font-[500]  h-[50px] w-full"}
            >
              <div className="flex items-center">
                <img src={checkmark} alt="" /> <p> {course?.title}</p>
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </main>
    </>
  );
}
