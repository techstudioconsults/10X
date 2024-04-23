import { Link } from "react-router-dom"
import prevPage from "../../../../assets/prev-page-btn.png"
import shareIcon from "../../../../assets/share-icon.png"
import React from "react"
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react"
import Details from "./content/Details"
import { useParams } from "react-router-dom"
import { useFetch } from "../../../../hooks/useFetch"
import ShareButton from "./content/ShareButton"
import Overview from "./content/Overview"

const CourseDetail = () => {
  const { id } = useParams()
  console.log(id);
  const { single, error, loading } = useFetch(`/api/v1/resources/${id}`);
  console.log(single);
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <div className="w-11/12 mx-auto container">
      <Link className="text-gray-500 flex gap-2 items-center" to="/admin/library">
        <img src={prevPage} alt="" /> Back to all course
      </Link>
      <div className="flex flex-col gap-4 lg:flex-row justify-between py-12">
        <div>
          <h1 className="text-3xl font-bold text-[#0027BA]">{single.title}</h1>
          <p className="text-[#787878] pt-1">{single.description}</p>
        </div>
        <ShareButton />
      </div>
      <div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: "bg-transparent border-b-2 border-[#0027BA] shadow-none rounded-none",
            }}
          >
            <Tab
              value="overview"
              onClick={() => setActiveTab("overview")}
              className={`w-1/6 text-lg font-bold ${activeTab === "overview" ? "text-[#0027BA]  " : "text-gray-600"}`}
            >
              Overview
            </Tab>
            <Tab
              value="coursedetail"
              onClick={() => setActiveTab("coursedetail")}
              className={`w-1/6 text-lg font-bold ${activeTab === "coursedetail" ? "text-[#0027BA] " : " text-gray-600"}`}
            >
              Course Detail
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel className="px-0" value="overview">
              <Overview/>
            </TabPanel>
            <TabPanel className="px-0" value="coursedetail">
              <Details data={single} />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  )
}

export default CourseDetail