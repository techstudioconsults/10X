import React, { useState } from "react";
import Profile from "./components/Profile";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // setCurrentPage(1);
  };

  const getTabClass = (tab) => {
    return activeTab === tab
      ? "text-[#0027BA] font-semibold"
      : "text-[#818181] font-semibold";
  };
  return (
    <div className="container w-11/12 py-32 mx-auto">
      <div>
        <h2 className="text-blue text-4xl font-[800] text-center md:text-left">
          Settings
        </h2>

        {/* Tabs */}
        <div className="my-5">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b gap-10 md:gap-5 ms-5 lg:ms-0 mt-6 border-blue-gray-50 bg-transparent p-0 z-0"
              indicatorProps={{
                className:
                  " border-b-2 border-[#0027BA] shadow-none rounded-none",
              }}
            >
              <Tab
                value="profile"
                onClick={() => handleTabClick("profile")}
                className={`w-1/5 text-base lg:text-xl whitespace-nowrap ${getTabClass(
                  "profile"
                )}`}
              >
                Profile
              </Tab>
              <Tab
                value="email"
                onClick={() => handleTabClick("email")}
                className={`w-1/5 text-base lg:text-xl ${getTabClass(
                  "email"
                )}`}
              >
                Email Notification
              </Tab>
            </TabsHeader>
          </Tabs>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default UserSettings;
