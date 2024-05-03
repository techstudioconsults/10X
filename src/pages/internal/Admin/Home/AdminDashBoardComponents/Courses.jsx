import React from "react";
import course1 from "../../../../../assets/course1.png";
import course2 from "../../../../../assets/course2.png";
import course3 from "../../../../../assets/course3.png";
import { formatCurrency } from "../../../../../utils/Currency";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate()
  return (
    <main className="md:flex items-center justify-between gap-1">
      {/* <section> */}
      <section className="md:flex items-center gap-1">
        <div className="flex items-center border-[rgba(0,0,0,0.1)] border-2 h-24 w-[280px] gap-3 shadow-xl shadow-[#032BF214] p-2 rounded-md">
          {/* Total Earnings */}
          <img src={course1} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Earnings</p>
            <h3 className=" text-blue font-[1000] text-2xl">
              {formatCurrency("362870")}
            </h3>
          </div>
        </div>

        <div className="flex items-center h-24 gap-3 w-[280px] border-[rgba(0,0,0,0.1)] border-2  shadow-xl shadow-[#032BF214] p-2 rounded-md">
          {/* Total Clients */}
          <img src={course2} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Clients</p>
            <h3 className=" text-blue font-[1000] text-2xl">7,876</h3>
          </div>
        </div>
        <div className="flex items-center h-24 gap-3 w-[280px]  border-[rgba(0,0,0,0.1)] border-2 shadow-xl shadow-[#032BF214] p-2 rounded-md">
          {/* Total Clients */}
          <img src={course3} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Courses</p>
            <h3 className=" text-blue font-[1000] text-2xl">396</h3>
          </div>
        </div>
      </section>
      {/* </section> */}
      <button className=" bg-blue text-white h-24 w-full font-semibold rounded-md">
        + Add a Course
      </button>
    </main>
  );
};

export default Courses;
