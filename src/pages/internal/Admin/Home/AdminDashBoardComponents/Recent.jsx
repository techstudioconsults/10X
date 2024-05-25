import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../../utils/Currency";
import { useFetch } from "../../../../../hooks/useFetch";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Recent = () => {
  const { content: data, error, loading } = useFetch("/api/v1/course");

  const sliced = data.slice(0, 3);

  console.log(sliced);
  return (
    <main className="shadow-xl shadow-[#032BF214] border-2 border-[rgba(0,0,0,0.1)] h-[331px] p-5 rounded-md">
      <div className=" flex items-center w-full justify-between ">
        <h1 className="text-lg font-semibold text-darkBlue py-3">
          Recently Uploaded Courses
        </h1>
      </div>
      <table className="w-full">
        <thead className="w-full text-left table-auto">
          <tr className="bg-[#F8F8F8]  text-[#7C87AC] font-medium">
            <th className="px-3 py-2 min-w-40 xl:min-w-full "> Course Name</th>
            <th className="px-4 py-2  xl:min-w-full  xl:text-center">
              {" "}
              Category
            </th>
            <th className="px-4 py-2 min-w-40 text-center"> Price</th>
          </tr>
        </thead>

      {loading && <tbody>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
          <tr  className="border-b m">
            <td className="py-5">
              <Skeleton/>
            </td>
            <td>
            <Skeleton/>            
            </td>
            <td>
            <Skeleton/>            
            </td>
          </tr>
         
          </tbody>}
        <tbody>
          {sliced.map((b) => (
            <tr className="border-b" key={b.id}>
              <td className=" text-md text-darkBlue font-semibold underline px-3 py-4">
                {b.title}
              </td>
              <td className={`px-4 py-3 text-center w-10`}>
                <div></div>
                <p
                  className={` text-sm bg-[#CFE6FF] px-3 py-1 font-semibold  w-20 mx-auto rounded-md text-center ${
                    b.category.toLowerCase() === "book" && "text-[#AD70FF]"
                  }`}
                >
                  {b.category}
                </p>
              </td>

              <td className="p-3 text-sm text-grey text-center">
                {" "}
                {formatCurrency(b.price).substring(0, 10)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Recent;
