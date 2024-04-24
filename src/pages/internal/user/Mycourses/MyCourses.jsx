import React, { useState } from "react";
import { MyCoursesComponents } from "./Mycourses-Components/MyCoursesComponents";
import { useFetch } from "../../../../hooks/useFetch";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import WishList from "./WishList";

const MyCourses = () => {
  const { content: data, error } = useFetch("/api/v1/resources");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const getTabClass = (tab) => {
    return activeTab === tab
      ? "text-[#0027BA] font-semibold"
      : "text-[#818181] font-semibold";
  };

  const sliced = data.slice(0, 2);

  const courses = [
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "video",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "book",
      star: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <main className="pt-28 w-11/12 md:container md:mx-auto mx-3">
      {/* <MyCoursesComponents /> */}

      <main>
        <h1 className=" text-[46px] text-darkBlue font-[650]">My Courses</h1>

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b gap-10 md:gap-5 ms-5 lg:ms-0 mt-6 border-blue-gray-50 bg-transparent p-0 z-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-[#0027BA] shadow-none rounded-none",
            }}
          >
            <Tab
              value="all"
              onClick={() => handleTabClick("all")}
              className={`w-1/5 text-base lg:text-xl whitespace-nowrap ${getTabClass(
                "all"
              )}`}
            >
              All Courses
            </Tab>
            <Tab
              value="wishList"
              onClick={() => handleTabClick("wishList")}
              className={`w-1/5 text-base lg:text-xl ${getTabClass(
                "wishList"
              )}`}
            >
              WishList
            </Tab>
          </TabsHeader>
        </Tabs>
      </main>

      {activeTab === "all" && (
        <section className="mt-7">
          {courses.map((c) => (
            <div
              key={c.id}
              className="mb-5 shadow-xl shadow-[#032BF214]   p-3 w-full md:flex  gap-3"
            >
              <div>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full md:w-[200px] md:h-[150px] lg:w-[400px] lg:h-[200px] mb-2 md:mb-0 rounded-lg"
                />

                <div className="h-0.5 rounded w-full mt-2 bg-darkBlue" />

                <div className="flex justify-between mt-2 text-[11px] text-[#6476BA]">
                  <p>IN PROGRESS</p>
                  <p>10% complete</p>
                </div>
              </div>

              <div className=" space-y-3">
                <h1 className=" text-darkBlue font-[650] md:text-lg">
                  {c.title}
                </h1>
                <p className="  text-[10px] md:max-w-[350px] lg:text-[16px] text-[#6476BA]">
                  {c.description}
                </p>

                <div className="mt-1 flex gap-2">
                  <p
                    className={` text-[10px] bg-[#EEE5FF] w-fit px-3 flex items-center py-0.5 rounded-full capitalize ${
                      c.category === "video"
                        ? "border border-[#AD70FF] text-[#AD70FF]"
                        : "border border-[#1E2C4F] text-[-[#1E2C4F]]"
                    }`}
                  >
                    {c.category}
                  </p>
                  <p>{c.star}</p>
                </div>

                <button className="text-xs bg-darkBlue w-full md:w-[350px] h-7 md:h-9 mt-2 rounded text-white font-semibold">
                  Resume course
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {activeTab === "wishList" && (
        <section>
          <WishList />
        </section>
      )}
    </main>
  );
};

export default MyCourses;
