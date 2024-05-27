import { formatCurrency } from "../../../../../utils/Currency";
import courseCheck from "../../../../../assets/course-check.png"
import PropTypes from 'prop-types';
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import checkmark from "../../../../../assets/check-icon.svg"
import {Link} from "react-router-dom"
import DeleteCourse from "../../../../../components/Modal/DeleteCourse";


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

const Details = ({ data }) => {
 
  const [open, setOpen] = useState();

  const handleOpen = (value) => setOpen(open === value ? null : value);

  // console.log(data);
  // eslint-disable-next-line react/prop-types
  
  const thumbnail = data?.thumbnail

  console.log(thumbnail);

 
  return (
    // <div> <p>Paystack Details showing clients</p> </div>
    <div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 py-2 ">
        <div>
          {/* // eslint-disable-next-line react/prop-types */}
          <div className=" w-full  lg:w-[500px]  rounded-md">
          <LazyLoadImage effect="blur"  className=" object-cover rounded-xl w-full lg:min-w-[500px]" src={thumbnail} alt="" />
          </div>
          <h1 className="text-2xl py-5">Course Description</h1>
          <p>{data.description}</p>
        </div>
        
        <div  className="grid grid-cols-1 gap-9">
        <div className="border-1 shadow-md border-gray-500 rounded-md p-4 w-[380px]  flex flex-col gap-5">
            <h1 className="text-blue text-2xl font-bold">{formatCurrency(`${data.price}`)}</h1>
            <p>Course Detail</p>
            <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 justify-start" >
             <div className="flex justify-start items-center gap-1 md:gap-4">
              <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base"> 100 clients</p>
             </div>
             <div className="flex justify-start items-center gap-1 md:gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base">9,927 unit sold</p>
             </div>
             <div className="flex justify-start items-center gap-1 md:gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base">{data.content?.length} modules </p>
             </div>
             <div className="flex justify-start items-center gap-1 md:gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base"> 1,567 reviews</p>
             </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <Link to={`/admin/edit-course/${data?._id}`}> <button className=" text-white  bg-blue rounded-md px-10 text-sm  py-3">Edit</button></Link>
              {/* <button className=" border-red-500 border-2 rounded-md py-3 px-10  text-sm text-red-500" onClick={() => handleCourseDelete()}>Delete Icon</button> */}
              <DeleteCourse />
            </div>

          </div>
          <div className="shadow-md border-1 w-[380px] border-gray-500  p-4">
            <div>
            <h1>Course Module</h1>
              <p className="py-3 text-gray-600">{data.content?.length} Modules </p>
            </div>

            <div className="space-y-2">
              {
                data?.content?.map((module, i) => (
                   <div key={module._id} className="">
                     <Accordion  >
                  <AccordionHeader
                    onClick={() => handleOpen(i)}
                    className="text-md px-4 border-2 border-[#0000000D] rounded-lg text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
                  >
                    {module.title} 
                  </AccordionHeader>
                  <AccordionBody className="bg-[#FAFBFF]">
                    <div className="space-y-3 px-4">
                      <div className="flex items-center gap-3">
                       
                      </div>
                      <div className="flex items-center gap-3">
                      
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
                  </div>
                 
                ))
              }
            </div>
              
            </div>

        </div>
        
      </div>
    </div>                      
  );
};

Details.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Details;
