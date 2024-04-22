import searchIcon from "../../../../assets/search-icon.svg";
import "./Library.css";
import printIcon from "../../../../assets/print-icon.png";
import exportIcon from "../../../../assets/Export -icon.png";
import { useFetch } from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
const Library = () => {
  const { content: data, error } = useFetch("/api/v1/resources");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   setCurrentPage(1); // Reset the current page when the tab changes
  // };

  // const getTabClass = (tab) => {
  //   return activeTab === tab
  //     ? "text-[#0027BA] font-semibold"
  //     : "text-[#818181] font-semibold";
  // };

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

  // The logic for export
  const handleExport = () => {
    const doc = new jsPDF();

    // Add table headers
    const tableHeaders = [
      "Course Name",
      "Category",
      "Unit Sold",
      "Date",
      "Client",
      "Price",
    ];

    // Add table data
    const tableData = data
      .filter((datum) => {
        if (activeTab === "all") return true;
        return datum.category === activeTab;
      })
      .map((datum) => [
        datum.title,
        datum.category,
        "Nill",
        new Date(datum.createdAt).toLocaleDateString(),
        "Nill",
        datum.price,
      ]);

    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
      styles: {
        fillColor: [255, 255, 255],
      },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 20 },
        2: { cellWidth: 20 },
        3: { cellWidth: 20 },
        4: { cellWidth: 20 },
        5: { cellWidth: 20 },
      },
    });

    doc.save(`${getHeadingText()}-courses.pdf`);
  };

  // const handlePrint = () => {
  //   window.print();
  // };

  const navigate = useNavigate();

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter((datum) => {
      if (activeTab === "all") return true;
      return datum.category === activeTab;
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageCount = Math.ceil(
      data.filter((datum) => {
        if (activeTab === "all") return true;
        return datum.category === activeTab;
      }).length / itemsPerPage
    );

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 ${
            currentPage === i
              ? "bg-[#0027BA] text-white"
              : "bg-white text-[#0027BA]"
          } rounded-md`}
        >
          {i}
        </button>
      );
    }

    return <div className="flex justify-center gap-2 my-4">{pages}</div>;
  };

  return (
    <div className="w-full px-6 mx-auto container">
      <div className="px-0 py-3 flex flex-col lg:flex-row justify-evenly lg:justify-between items-center ">
        <h1 className="text-2xl text-[#0027BA] font-bold">
          {" "}
          {getHeadingText()}{" "}
        </h1>
        <div className="flex gap-5 py-8">
          <button
            onClick={handleExport}
            className="bg-white border border-[#0226B066] border-1 px-3 md:px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center"
          >
            {" "}
            <img src={exportIcon} alt="" />{" "}
            <span className="hidden lg:block ">Export</span>
          </button>
          {/* <button onClick={handlePrint} className="bg-white border border-[#0226B066] border-1 px-3 md:px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center">
            {" "}
            <img src={printIcon} alt="" /> <span className="hidden lg:block ">Print</span>
          </button> */}
          <button className="bg-[#0027BA] min-w-20 text-white px-5 py-2 rounded-md ">
            + Create New Course
          </button>
        </div>
      </div>
      {error && <h1 className="text-red-500 text-center">{error}</h1>}
      <div className="">
        {/* <div className="container border-b py-4 my-4 flex gap-4 md:gap-10">
          <button
            onClick={() => handleTabClick("all")}
            className={`text-xl tab ${getTabClass("all")}`}
          >
            All Courses
          </button>
          <button
            onClick={() => handleTabClick("video")}
            className={`text-xl tab ${getTabClass("video")}`}
          >
            Video
          </button>
          <button
            onClick={() => handleTabClick("pdf")}
            className={`text-xl tab ${getTabClass("pdf")}`}
          >
            Books
          </button>
          <button
            onClick={() => handleTabClick("draft")}
            className={`text-xl ${getTabClass("draft")}`}
          >
            Draft
          </button>
        </div> */}
        <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b justify-between border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className: "bg-transparent border-b-2 border-[#0027BA] shadow-none rounded-none",
          }}
        >
          <Tab
            value="all"
            onClick={() => handleTabClick("all")}
            className={`w-1/5 text-base lg:text-xl ${getTabClass("all")}`}
          >
            All Courses
          </Tab>
          <Tab
            value="video"
            onClick={() => handleTabClick("video")}
            className={`w-1/5 text-base lg:text-xl ${getTabClass("video")}`}
          >
            Video
          </Tab>
          <Tab
            value="pdf"
            onClick={() => handleTabClick("pdf")}
            className={`w-1/5 text-base lg:text-xl ${getTabClass("pdf")}`}
          >
            Books
          </Tab>
          <Tab
            value="draft"
            onClick={() => handleTabClick("draft")}
            className={`w-1/5 text-base lg:text-xl ${getTabClass("draft")}`}
          >
            Draft
          </Tab>
        </TabsHeader>
      </Tabs>
        <div className="overflow-x-auto pt-7">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
                <th className="px-4 py-3 min-w-52 min-w-lg-60">Course Name</th>
                <th className="px-4 py-3 min-w-40">Category</th>
                <th className="px-4 py-3 min-w-40">Unit Sold</th>
                <th className="px-4 py-3 min-w-48">Date</th>
                <th className="px-4 py-3 min-w-52">Client</th>
                <th className="px-4 py-3 min-w-48">Price</th>
              </tr>
            </thead>
            <tbody>
  {currentItems.map((datum) => (
    
      <tr key={datum._id} onClick={()=>{
        navigate(`/coursedetail/${datum._id}`)
      }} className="border-b my-2 cursor-pointer">
        <td className="px-3 py-3">
          <span className="text-base text-[#0027BA] border-b border-1 border-[#0027BA] font-semibold">
            {datum.title}
          </span>
        </td>
        <td className={`px-4 py-3 text-center min-w-52`}>
          <div
            className={`my-3 mx-3 rounded ${getCategoryClass(datum.category)}`}
          >
            <p className="p-2">{datum.category}</p>
          </div>
        </td>
        <td className="px-4 py-3 min-w-52 text-[#6072AC]">Nill</td>
        <td className="px-4 py-3 min-w-52 text-[#6072AC]">
          {new Date(datum.createdAt).toLocaleDateString()}
        </td>
        <td className="px-4 py-3 min-w-52 text-[#6072AC]">Nill</td>
        <td className="px-4 py-3 min-w-52 text-[#6072AC]">{datum.price}</td>
      </tr>
  ))}
</tbody>

          </table>
        </div>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Library;
