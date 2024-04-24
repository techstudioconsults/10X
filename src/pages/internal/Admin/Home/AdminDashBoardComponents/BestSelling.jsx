import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    units: 185599,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Book",
    units: 185599,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    units: 185599,
  },
];

const BestSelling = () => {
  return (
    <main
      className=" shadow shadow-[#032BF2] p-3 rounded-md w-full "
      style={{ height: "100%", width: "100%" }}
    >
      <div className=" flex items-center w-full justify-between px-3">
        <h1 className="xl:text-lg font-semibold text-darkBlue">
          Best Selling Courses
        </h1>
        <Link to="/all-courses" className="text-xs text-[#3952AC]">
          See All
        </Link>
      </div>



      <table>
        <thead className="w-full text-left table-auto">
          <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
            <th className="px-4 py-3 lg:min-w-[170px] xl:min-w-[207px] "> Course Name</th>
            <th className="px-4 py-3 lg:min-w-[170px] xl:min-w-[207px]  text-center">
              {" "}
              Category
            </th>
            <th className="px-4 py-3 lg:min-w-[170px] xl:min-w-[207px]  text-center">
              {" "}
              Units Sold
            </th>
          </tr>
        </thead>

        <tbody>
          {courses.map((b) => (
            <tr key={b.id}>
              <td className=" text-md text-darkBlue font-semibold underline py-2">
                {b.title}
              </td>
              <td className={`px-4 py-3 text-center w-10`}>
                <div></div>
                <p
                  className={` text-sm bg-[#CFE6FF] px-3 py-1 font-semibold mr-14 w-fit mx-auto rounded-md  ${
                    b.category.toLowerCase() === "book" && "text-[#AD70FF]"
                  }`}
                >
                  {b.category}
                </p>
              </td>

              <td className="p-3 text-sm text-grey text-center">{b.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BestSelling;
