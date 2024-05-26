import "./single.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { Progress } from "@material-tailwind/react";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import ReactPlayer from "react-player";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  CourseContent,
  coursesContent,
} from "./Mycourses-Components/CourseContent";
import { Lesson } from "./Mycourses-Components/Lesson";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { Radio, Typography } from "@material-tailwind/react";
import { Navbar } from "../../../../components/Navbar/Navbar";
import axios from "axios";
import PlayIcon from "./PlayIcon";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-105"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const SingleCourseView = () => {
  const { title, id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courseContent");
  const [currentPage, setCurrentPage] = useState(1);
  const [showProgress, setShowProgress] = useState(true);
  const [singleCourse, setSingleCourse] = useState({});
  const [checkedCourses, setCheckedCourses] = useState({});
  const [currentModule, setCurrentModule] = useState(1);
  const [currentLesson, setCurrentLesson] = useState(1);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleProgressVisibilityChange = () => {
    setShowProgress(!showProgress);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const getTabClass = (tab) => {
    return activeTab === tab
      ? "text-[#0027BA] font-semibold"
      : "text-[#818181] font-semibold";
  };

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const userToken = Cookies.get("userToken");

  const getSingleCourse = async () => {
    const {
      data: { data },
    } = await axios(`${API_URL}/api/v1/course/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    setSingleCourse(data);
    setCheckedCourses({ [data.content[0]._id]: true });
  };

  useEffect(() => {
    getSingleCourse();
  }, [id]);

  const [selectedCourse, setSelectedCourse] = useState(singleCourse[0]);

   useEffect(() => {
     localStorage.setItem("checkedCourses", JSON.stringify(checkedCourses));
   }, [checkedCourses]);

  const handleTitleClick = (course) => {
    setSelectedCourse(course);
    setCheckedCourses((prev) => ({ ...prev, [course?._id]: true }));
    //  localStorage.setItem("checkedCourses", JSON.stringify(checkedCourses));
  };

  return (
    <main>
      <Navbar />
      <section className="pt-24 w-full md:container md:mx-auto">
        {/* mobile design */}
        <main className="lg:hidden">
          <section className="mx-3">
            <div className="flex text-xs justify-between items-center">
              <div className=" text-[#6476BA] flex items-center gap-3  px-2 ">
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <FaArrowLeft />
                </button>
                <p>Back to my courses</p>
              </div>
              <p className="text-[#6476BA] text-xs">MODULE 1, LESSON 1</p>
            </div>

            <h1 className=" text-darkBlue text-xl font-[650] mt-3 max-w-[250px] md:max-w-full  px-2 ">
              {singleCourse?.title}
            </h1>
          </section>

          <div className="flex items-center justify-between bg-[#EBEFFF] px-2 py-1 rounded-lg mt-3 mx-3">
            <h2 className=" text-darkBlue text-[14px] md:text-[17px] font-[650]  max-w-[150px] md:max-w-full">
              {selectedCourse?.title}
            </h2>
            <span className="bg-[#40BF80] py-2 rounded-md text-white px-3 text-sm font-[600]">
              Completed
            </span>
          </div>

          <div className="w-full my-5 bg-black h-[440px]">
            {/* video player */}

            {/* <Player>
              <source
                src={
                  "https://res.cloudinary.com/dgde8cwjk/video/upload/v1716219896/m4n3qogdqkqlqu9yhfkx.mp4"
                }
              />
            </Player> */}

            {/* <ReactPlayer
              // playIcon={"m"}
              light={true}
              controls
              width={"100%"}
              height={"440px"}
              volume={true}
              url={
                "https://res.cloudinary.com/dgde8cwjk/video/upload/v1716219896/m4n3qogdqkqlqu9yhfkx.mp4"
              }
            /> */}

            {selectedCourse && (
              <div className="course-video">
                <ReactPlayer
                  playIcon={<PlayIcon />}
                  light={true}
                  controls
                  width={"100%"}
                  height={"440px"}
                  volume={true}
                  url={selectedCourse?.file}
                />
              </div>
            )}

            {/* video player */}
          </div>

          <section>
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b gap-10 md:gap-5 ms-5 lg:ms-0 mt-6 border-blue-gray-50 bg-transparent p-0 z-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-[#0027BA] shadow-none rounded-none",
                }}
              >
                <Tab
                  value="courseContent"
                  onClick={() => handleTabClick("courseContent")}
                  className={` w-1/3 ms-2 text-base lg:text-xl whitespace-nowrap ${getTabClass(
                    "courseContent"
                  )}`}
                >
                  Course Content
                </Tab>
                <Tab
                  value="lesson"
                  onClick={() => handleTabClick("lesson")}
                  className={`w-1/2 text-base lg:text-xl ${getTabClass(
                    "lesson"
                  )}`}
                >
                  Lesson
                </Tab>
              </TabsHeader>
            </Tabs>
          </section>

          <section>
            {activeTab === "courseContent" && (
              <CourseContent
                singleCourse={singleCourse}
                handleTitleClick={handleTitleClick}
              />
            )}
          </section>
          <section>{activeTab === "lesson" && <Lesson />}</section>
        </main>

        {/* mobile design */}

        {/* large devices */}

        <main className=" w-full justify-between hidden lg:flex">
          <section className="w-[30%]">
            {showProgress && (
              <div>
                <div className="flex justify-between items-center text-sm text-[#6476ba]">
                  <p>COURSE PROGRESS</p>
                  <p>10%</p>
                </div>

                <Progress value={10} color="purple" className="progress" />
              </div>
            )}

            <div className="mt-3">
              <button
                className="text-[13px] flex items-center gap-5"
                onClick={handleProgressVisibilityChange}
              >
                {showProgress ? " Hide course content" : " Show course content"}
                <span>
                  {showProgress ? (
                    <MdKeyboardDoubleArrowUp size={14} />
                  ) : (
                    <MdKeyboardDoubleArrowDown size={14} />
                  )}
                </span>
              </button>
            </div>

            <div className="mt-8">
              {singleCourse?.content?.map((course, i) => (
                <Accordion
                  key={course?.id}
                  open={open === i + 1}
                  icon={<Icon id={i + 1} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(i + 1)}
                    className="text-[16px] text-darkBlue"
                  >
                    {course?.title}
                  </AccordionHeader>

                  <AccordionBody
                    key={i}
                    className={"text-[#6476BA] font-[500]  h-[50px] w-full"}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleTitleClick(course)}
                    >
                      <p> {course?.title}</p>

                      <span>
                        {/* <Radio
                          name="type"
                          defaultChecked
                          checked={!!checkedCourses[course?._id]}
                          onChange={() => {
                            setCheckedCourses((prev) => ({
                              ...prev,
                              [course?._id]: !prev[course?._id],
                            }));

                            console.log("clicked");
                          }}
                          ripple={false}
                          icon={<CheckIcon />}
                          className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                        /> */}
                        <input
                          className="form-checkbox h-5 w-5 text-green-600 rounded-full"
                          type="checkbox"
                          checked={!!checkedCourses[course?._id]}
                          onChange={() => {
                            setCheckedCourses((prev) => ({
                              ...prev,
                              [course?._id]: !prev[course?._id],
                            }));

                            console.log("clicked");
                          }}
                        />
                      </span>
                    </div>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </section>

          <section className="w-[60%]">
            <div className="flex items-center justify-between px-2">
              <p className="text-[#0027BA] font-[650]">{singleCourse.title}</p>
              <p className="text-[#6476BA] text-xs">MODULE 1, LESSON 1</p>
            </div>

            <div className="flex items-center justify-between bg-[#EBEFFF] px-2 py-1 rounded-lg my-6">
              <h2 className=" text-darkBlue text-[14px] md:text-[17px] font-[650]  max-w-[150px] md:max-w-full">
                <h3>{selectedCourse?.title}</h3>
              </h2>
              <span className="bg-[#40BF80] py-2 rounded-md text-white px-3 text-sm font-[600]">
                Completed
              </span>
            </div>

            <div className="w-full my-3 bg-black h-[509px]">
              {/* video player */}
              {/* <Player width={100}>
                <source
                  src={
                    "https://res.cloudinary.com/dgde8cwjk/video/upload/v1716219896/m4n3qogdqkqlqu9yhfkx.mp4"
                  }
                />
              </Player> */}

              {/* <ReactPlayer
                // playIcon={"m"}
                light={true}
                controls
                width={"100%"}
                height={"509px"}
                volume={true}
                url={
                  "https://res.cloudinary.com/dgde8cwjk/video/upload/v1716219896/m4n3qogdqkqlqu9yhfkx.mp4"
                }
              /> */}

              {selectedCourse && (
                <div className="course-video">
                  <ReactPlayer
                    playIcon={<PlayIcon />}
                    light={true}
                    controls
                    width={"100%"}
                    height={"509px"}
                    volume={true}
                    url={selectedCourse?.file}
                  />
                </div>
              )}

              {/* video player */}
            </div>

            <div className="my-7">
              <p className="text-[#33414B] text-[16px]">
                Brand identity design encompasses every graphic design element
                that embodies your brand. After following this comprehensive
                guide, you’ll have the capability to compile a brand book
                containing all the essential identity elements necessary for
                accurately portraying your company to consumers.
              </p>
            </div>
          </section>
        </main>

        {/* large devices */}
      </section>
    </main>
  );
};

export default SingleCourseView;
