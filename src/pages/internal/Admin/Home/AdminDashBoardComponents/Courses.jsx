import React, { useEffect, useState } from "react";
import course1 from "../../../../../assets/course1.png";
import course2 from "../../../../../assets/course2.png";
import course3 from "../../../../../assets/course3.png";
import { formatCurrency } from "../../../../../utils/Currency";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useAdminContext from "../../../../../hooks/useAdminContext";

const Courses = () => {
  const { API_URL, token } = useAdminContext();
  const [courseAnalytics, setCourseAnalytics] = useState({});

  const analytics = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/payment/total-earnings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        console.log(data.data);
        setCourseAnalytics(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(courseAnalytics);
  useEffect(() => {
    analytics();
  }, []);

  const navigate = useNavigate();

  return (
    <main className="overflow-x-auto">
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-3 lg:gap-4 xl:gap-7 ">
          <div className="flex items-center border-[rgba(0,0,0,0.1)] border-2 h-24 w-full lg:w-[270px] xl:w-[321px] 2xl:w-[300px] gap-4 shadow-xl shadow-[#032BF214] p-4 rounded-md">
            <img src={course1} alt="" className="md:hidden lg:block w-14 h-14" />
            <div>
              <p className="text-sm text-gray-500">Total Earnings</p>
              <h3 className="text-blue font-[1000] lg:text-xl xl:text-2xl">
                {formatCurrency(`${courseAnalytics?.totalAmount}`)}
              </h3>
            </div>
          </div>
          <div className="flex items-center h-24 gap-4 w-full lg:w-[200px] 2xl:w-[220px] border-[rgba(0,0,0,0.1)] border-2 shadow-xl shadow-[#032BF214] p-4 rounded-md">
            <img src={course2} alt="" className=" md:hidden lg:block  w-14 h-14" />
            <div>
              <p className="text-sm text-gray-500">Total Clients</p>
              <h3 className="text-blue font-[1000] text-2xl">
                {courseAnalytics?.totalUsers}
              </h3>
            </div>
          </div>
          <div className="flex items-center h-24 gap-4 w-full lg:w-[210px] 2xl:w-[220px] border-[rgba(0,0,0,0.1)] border-2 shadow-xl shadow-[#032BF214] p-4 rounded-md">
            <img src={course3} alt="" className=" md:hidden lg:block  w-14 h-14" />
            <div>
              <p className="text-sm text-gray-500">Total Courses</p>
              <h3 className="text-blue font-[1000] text-2xl">
                {courseAnalytics?.totalCourses}
              </h3>
            </div>
          </div>
      <Link className="w-full lg:w-40 xl:w-64" to="/admin/create">
        <button className="bg-blue  lg:w-40 xl:w-64 text-white h-24 w-full font-semibold rounded-md mt-4 md:mt-0 lg:mt-0">
          + Add a Course
        </button>
      </Link>
        </div>
      </section>
    </main>
  );
};

export default Courses;