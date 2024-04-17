import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../../utils/Currency";
import { useFetch } from "../../../../../hooks/useFetch";

const courses = [
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    price: 45000,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Book",
    price: 45000,
  },
  {
    id: crypto.randomUUID(),
    title: "The Zero Call Close",
    category: "Video",
    price: 45000,
  },
];

const Recent = () => {
  const { content: data, error } = useFetch("/api/v1/resources");

  const sliced = data.slice(0, 3)

  console.log(sliced);
  return (
    <main className=" shadow shadow-[#032BF2] p-3 rounded-md">
      <div className=" flex items-center w-full justify-between px-5">
        <h1 className="text-lg font-semibold text-darkBlue">
          Recently Uploaded Courses
        </h1>
        <Link to="/all-courses" className="text-xs text-[#3952AC]">
          See All
        </Link>
      </div>

      <section className="w-full">
        <div className="grid grid-cols-3 place-items-center text-sm bg-[#F8F8F8] py-2 px-3  text-[#7C87AC] font-semibold">
          <p> Course Name</p>
          <p> Category</p>
          <p>Price</p>
        </div>

        <section className=" space-y-3">
          {sliced.map((b) => (
            <div
              key={b.id}
              className="grid grid-cols-3 place-items-center mt-2"
            >
              <p className=" text-md text-darkBlue font-semibold underline whitespace-nowrap ps-3 text-start capitalize">
                {b.title}
              </p>
              <p
                className={` text-sm bg-[#CFE6FF] px-3 py-1 font-semibold ml-3 rounded-md ${
                  b.category.toLowerCase() === "book" && "text-[#AD70FF]"
                }`}
              >
                {b.category}
              </p>
              <p className="p-3 text-sm text-grey">
                {formatCurrency(b.price).substring(0, 10)}
              </p>
            </div>
          ))}
        </section>
        {/* <table className="w-full">
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
              className="p-3 text-sm text-[#7C87AC] font-semibold"
            >
              Price
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
                {formatCurrency(b.price).substring(0, 10)}
              </td>
            </tr>
          ))}
        </table> */}
      </section>
    </main>
  );
};

export default Recent;
