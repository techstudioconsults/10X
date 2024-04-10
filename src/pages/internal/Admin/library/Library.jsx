import searchIcon from "../../../../assets/search-icon.svg";
import printIcon from "../../../../assets/print-icon.png";
import exportIcon from "../../../../assets/Export -icon.png";
import { useFetch } from "../../../../hooks/useFetch";
import { useState } from "react";

const Library = () => {
  const { content: data, error } = useFetch("/api/v1/resources");
  const [activeCourse, setActiveCourse]= useState(true)
  const [activeBooks, setActiveBooks]= useState(false)
  const [activeVideo, setActiveVideo]= useState(false)
  const [activeDraft, setActiveDraft]= useState(false)

  const showActiveCourse = activeCourse ? 'text-[#0027BA]  ' : 'text-[#818181]'
  const showActiveBooks = activeBooks ? 'text-[#0027BA]  ' : 'text-[#818181]'
  const showActiveVideos = activeVideo ? 'text-[#0027BA]  ' : 'text-[#818181]'
  const showActiveDraft = activeDraft ? 'text-[#0027BA]  ' : 'text-[#818181]'
  console.log(data);

  const handleClickAll = ()=>{
setActiveCourse(true)
setActiveBooks(false)
setActiveVideo(false)
setActiveDraft(false)
  }
  const handleClickBooks =()=>{
    setActiveCourse(false)
    setActiveBooks(true)
    setActiveVideo(false)
    setActiveDraft(false)
  }
  const handleClickDraft =()=>{
    setActiveCourse(false)
    setActiveBooks(false)
    setActiveVideo(false)
    setActiveDraft(true)
  }
  const handleClickVideo = ()=>{
    setActiveCourse(false)
    setActiveBooks(false)
    setActiveVideo(true)
    setActiveDraft(false)
  }

  return (
    <div className="w-11/12 mx-auto container">
      <div className="px-0 py-3 flex justify-between items-center ">
        <h1 className="text-2xl text-[#0027BA] font-bold">All Course</h1>
        <div className="flex gap-5 py-8">
          <button className="bg-white border border-[#0226B066] border-1 px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center">
            {" "}
            <img src={exportIcon} alt="" /> Export
          </button>
          <button className="bg-white border border-[#0226B066] border-1 px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center">
            {" "}
            <img src={printIcon} alt="" /> Print
          </button>
          <button className="bg-[#0027BA] text-white px-5 py-2 rounded-md ">
            + Create New Course
          </button>
        </div>
      </div>
      {error && <h1 className="text-red-500 text-center">{error}</h1>}
      <div className="overflow-x-auto">
        <div className="container border-b py-4 my-4 flex gap-10">
          <button onClick={handleClickAll} className={`text-xl  font-semibold ${showActiveCourse}`}>All Courses</button>
          <button onClick={handleClickVideo} className={`text-xl font-semibold  ${showActiveVideos}`}>Video</button>
          <button onClick={handleClickBooks} className={`text-xl font-semibold  ${showActiveBooks}`}>Book</button>
          <button onClick={handleClickDraft} className={`text-xl font-semibold  ${showActiveDraft}`}>Draft</button>
        </div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
              <th className="px-4 py-3  min-w-52  min-w-lg-60">Course Name</th>
              <th className="px-4 py-3  min-w-52  ">Category</th>
              <th className="px-4 py-3  min-w-52 ">Unit Sold</th>
              <th className="px-4 py-3  min-w-52 ">Date</th>
              <th className="px-4 py-3  min-w-52 ">Client</th>
              <th className="px-4 py-3  min-w-52 ">Price</th>
            </tr> 
          </thead>
          <tbody className="">
            {data &&
              data.map((datum) => (
                <tr key={datum.id} className="border-b my-2 ">
                  <td className="px-4 py-3 ">{datum.title}</td>
                  <td
                    className={`px-4 py-3 text-center  min-w-52   ${
                      datum.category === "video"
                        ? "bg-[#CFE6FF] text-[#0D2A4B] "
                        : "bg-[#EEE5FF] text-[#AD70FF]"
                    }`}
                  >
                   {datum.category}
                  </td>
                  <td className="px-4 py-3  min-w-52 ">1200</td>
                  <td className="px-4 py-3  min-w-52 "> {new Date(datum.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3  min-w-52 "></td>
                  <td className="px-4 py-3  min-w-52 ">{datum.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
