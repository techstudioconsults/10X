import searchIcon from "../../../../assets/search-icon.svg";
import printIcon from "../../../../assets/print-icon.png";
import exportIcon from "../../../../assets/Export -icon.png";

const Libary = () => {
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
      {/* <form action="" className="relative  ">
        <img className=" translate-x-3 translate-y-9" src={searchIcon} alt="" />
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search for Anything....."
          className="w-full lg:w-3/5 max-w-[431px] h-12 py-3 ps-12 pe-5 rounded-tl-lg rounded-bl-lg rounded-br-none rounded-tr-none font-medium text-[#787878] placeholder-[#787878] bg-[#F1F5FE] outline-none"
        />
      </form> */}



    </div>
  );
};

export default Libary;
