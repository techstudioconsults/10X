import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaBell } from "react-icons/fa";

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

export function MobileAccordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  
  return (
    <>
      <main className="w-[343px] max-w-full px-3  mx-auto">
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-md  focus:bg-darkBlue px-3 rounded-2xl shadow-lg focus:text-white"
          >
            <div className="flex items-center gap-5 ms-7 text-blue focus:bg-darkBlue focus:text-white">
              <FaBell size={20} />
              <p className=" ">Marketing Funnels</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </AccordionBody>
        </Accordion>

        <hr className="my-5 bg-blue" />

        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-md  focus:bg-darkBlue px-3 rounded-2xl shadow-lg text-white"
          >
            <div className="flex items-center gap-5 ms-7 text-blue focus:bg-darkBlue focus:text-white">
              <FaBell size={20} />
              <p className="  text-blue focus:text-white">Market Testing</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </AccordionBody>
        </Accordion>
        <hr className="my-5 bg-blue" />

        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-md focus:bg-darkBlue px-3 rounded-2xl shadow-lg text-white"
          >
            <div className="flex items-center gap-5 ms-7 text-blue focus:bg-darkBlue focus:text-white">
              <FaBell size={20} />
              <p className=" ">Automation and Scale</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </AccordionBody>
        </Accordion>
        <hr className="my-5 bg-blue" />
        <Accordion open={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="text-md focus:bg-darkBlue px-3 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-5 ms-7 text-blue focus:bg-darkBlue focus:text-white">
              <FaBell size={20} />
              <p className=" ">Sit At Home</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </AccordionBody>
        </Accordion>
        <hr className="my-5 bg-blue" />
        <Accordion open={open === 5}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="text-md  focus:bg-darkBlue px-3 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-5 ms-7 text-blue focus:bg-darkBlue focus:text-white">
              <FaBell size={20} />
              <p className=" ">Audience Targeting</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </AccordionBody>
        </Accordion>
        <hr className="my-5 bg-blue" />
      </main>
    </>
  );
}
