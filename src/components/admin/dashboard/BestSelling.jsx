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
    <main className=" shadow shadow-[#032BF2] p-3 rounded-md w-full ">
      <div className=" flex items-center w-full justify-between px-5">
        <h1 className="xl:text-lg font-semibold text-darkBlue">
          Best Selling Courses
        </h1>
        <Link to="/all-courses" className="text-xs text-[#3952AC]">
          See All
        </Link>
      </div>

      <section className="w-full">
        <table className="w-full">
          <tr className="bg-[#F8F8F8]">
            <th
              align="left"
              className="p-3 text-sm text-[#7C87AC] font-semibold"
            >
              Course Name
            </th>
            <th
              align="left"
              className="p-3 text-sm text-[#7C87AC] font-semibold"
            >
              Category
            </th>
            <th
              align="left"
              className="p-2 text-sm text-[#7C87AC] font-semibold"
            >
              Units Sold
            </th>
          </tr>

          {courses.map((b) => (
            <tr key={b.id}>
              <td className="p-3 text-md text-darkBlue font-semibold underline">
                {b.title}
              </td>

              <td
                align="center"
                className={`m-5 text-sm bg-[#CFE6FF] w-1 font-semibold rounded-md  ${
                  b.category.toLowerCase() === "book" && "text-[#AD70FF]"
                }`}
              >
                {b.category}
              </td>
              <td className="p-3 text-sm text-grey">
                {b.units}
                {/* {formatCurrency(b.price).substring(0, 10)} */}
              </td>
            </tr>
          ))}
        </table>
      </section>
    </main>
  );
};

export default BestSelling;
