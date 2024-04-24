import React, { useState } from "react";
import MyCourses from "../MyCourses";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const MyCoursesComponents = () => {
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

  const getCategoryClass = (category) => {
    return category === "video"
      ? "bg-[#CFE6FF] text-[#0D2A4B]"
      : "bg-[#EEE5FF] text-[#AD70FF]";
  };

  const getHeadingText = () => {
    switch (activeTab) {
      case "video":
        return "Video ";
      case "pdf":
        return "Books";
      case "draft":
        return "Draft ";
      default:
        return "All Courses";
    }
  };

  return (
    <main className="pt-28 w-11/12 container mx-auto">
      <h1 className=" text-[46px] text-darkBlue font-[650]">My Courses</h1>

      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b gap-10 ms-5 lg:ms-0 mt-6 border-blue-gray-50 bg-transparent p-0 z-0"
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
            className={`w-1/5 text-base lg:text-xl ${getTabClass("wishList")}`}
          >
            WishList
          </Tab>
        </TabsHeader>
      </Tabs>


    
    </main>
  );
};
