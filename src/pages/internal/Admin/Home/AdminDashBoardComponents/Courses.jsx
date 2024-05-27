import React, { useEffect, useState } from "react";
import course1 from "../../../../../assets/course1.png";
import course2 from "../../../../../assets/course2.png";
import course3 from "../../../../../assets/course3.png";
import { formatCurrency } from "../../../../../utils/Currency";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useAdminContext from "../../../../../hooks/useAdminContext";

const Courses = () => {
  const { API_URL, token } = useAdminContext()
  const [courseAnalytics, setCourseAnalytics]= useState({})

  const analytics = async ()  =>{
  try {
    const {data} = await axios.get(`${API_URL}/api/v1/payment/total-earnings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (data.success) {
      console.log(data.data);
      setCourseAnalytics(data?.data)
    }

  } catch (error) {
    console.log(error);
  }
  }
console.log(courseAnalytics);
  useEffect(()=>{
    analytics()
  },[])

  const navigate = useNavigate()
  return (
    <main className="flex-col flex lg:flex-row items-center justify-between  lg:gap-3">
      {/* <section> */}
      <section className="md:flex items-center gap-5">
        <div className="flex items-center border-[rgba(0,0,0,0.1)] border-2 h-24 w-[321px] gap-4 shadow-xl shadow-[#032BF214] p-4 rounded-md">
          {/* Total Earnings */}
          <img src={course1} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Earnings</p>
            <h3 className=" text-blue font-[1000] text-2xl">
              {formatCurrency(`${courseAnalytics?.totalAmount}`)}
            </h3>
          </div>
        </div>

        <div className="flex items-center h-24 gap-4 xl:w-[250px] border-[rgba(0,0,0,0.1)] border-2  shadow-xl shadow-[#032BF214] p-4 rounded-md">
          {/* Total Clients */}
          <img src={course2} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Clients</p>
            <h3 className=" text-blue font-[1000] text-2xl">{courseAnalytics?.totalUsers}</h3>
          </div>
        </div>
        <div className="flex items-center h-24 gap-4 xl:w-[255px]  border-[rgba(0,0,0,0.1)] border-2 shadow-xl shadow-[#032BF214] p-4 rounded-md">
          {/* Total Clients */}
          <img src={course3} alt="" className="w-14 h-14" />

          <div>
            <p className=" text-sm text-grey ">Total Courses</p>
            <h3 className=" text-blue font-[1000] text-2xl">{courseAnalytics?.totalCourses}</h3>
          </div>
        </div>
      </section>
      {/* </section> */}
      <Link to="/admin/create"><button className=" bg-blue xl:w-64 text-white h-24 w-full font-semibold rounded-md">
        + Add a Course
      </button></Link>
    </main>
  );
};

export default Courses;
