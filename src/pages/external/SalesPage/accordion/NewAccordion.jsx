import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import checkmark from "../../../../assets/check-icon.svg"

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

export function NewAccordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <main className="max-w-[600px]">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Introduction to Zero Call Close
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Identifying and Qualifying Prospects
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
          <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Crafting Compelling Offers
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
          <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Utilizing the Step-by-Step Framework
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
          <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Handling Objections Without Phone Conversations
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
          <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="text-md px-4 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Closing Techniques for Premium Offers
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
          <div className="space-y-3 px-4">
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Master the step-by-step framework</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={checkmark} alt="" />
                <p className="text-[#6476BA] font-medium">Understanding the impact on sales conversation rates</p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </main>
    </>
  );
}
