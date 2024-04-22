import rating from "../../../assets/rating-Stars.png";
import { useState, useEffect } from "react";
import axios from "axios";
import prev from "../../../assets/Pagation-prev.png";
import next from "../../../assets/pagination-next.png";
import filterIcon from "../../../assets/filter-Icon.png";
import SkeletonLoader from "../../../components/loader/SkeletonLoader";
import searchIcon from "../../../assets/search-Icon.png";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { formatCurrency } from "../../../utils/Currency";

const Resource = () => {
  const {
    content,
    setContent,
    loading,
    setLoading,
    books,
    allResource,
    videos,
    setFilterClicked,
    error,
    setError,
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults
  } = useFetch("/api/v1/resources");
  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  // const [searchError, setSearchError] = useState('')
 
  

  const navigate = useNavigate();

  // handle search
  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (filterClicked) setLoading(true);
  //     const response = await axios.get(
  //       `${baseUrl}/api/v1/resources?search=${searchTerm}`
  //     );
  //     setSearchResults(response.data.data);
  //     setLoading(false);
  //     setError("");
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //     setLoading(false);
  //     setError("No product fit your search");
  //   }
  // };


    const handleSearch = (e) => {
      e.preventDefault();
      const trimmedSearchTerm = searchTerm.trim();
      if (trimmedSearchTerm !== "") {
        setSearchResults([]); // Clear the searchResults state
        const filteredResults = content.filter((item) =>
          item.title.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
        setError(filteredResults.length === 0 ? "No results found" : "");
      } else {
        setSearchResults([]);
        setError("");
      }
    };



  const showFilterBtn = searchTerm !== "" ? "hidden" : "block";

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems =
  //   searchTerm.trim() !== ""
  //     ? searchResults.slice(indexOfFirstItem, indexOfLastItem)
  //     : content.slice(indexOfFirstItem, indexOfLastItem);

  const currentItems =
  searchTerm.trim() !== ""
    ? searchResults.length > 0
      ? searchResults.slice(indexOfFirstItem, indexOfLastItem)
      : []
    : content.slice(indexOfFirstItem, indexOfLastItem);

  const padding = loading ? "pt-10 pb-0" : "pt-5 pb-5";

  // const activeBtn =

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#FFFFFF]">
      <div className="w-11/12 mx-auto container pb-16 pt-20">
        <div className={`${padding} lg:w-full mx-auto`}>
          <h1 className="leading-9 text-[32px] lg:text-[56px] font-bold text-[#032BF2] text-center ">
            Training and{" "}
            <span className="text-[32px] lg:text-[56px] font-bold text-[#0027BA] text-center">
              Resources
            </span>
          </h1>
          <div className="w-full">
            <form
              onSubmit={handleSearch}
              className="flex justify-center items-center w-full lg:w-4/5 mx-auto py-8"
            >
              <img className="translate-x-10" src={searchIcon} alt="" />
              <input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Anything"
                className="w-full lg:w-3/5 h-12 py-3 ps-11 pe-5 rounded-tl-lg rounded-bl-lg rounded-br-none rounded-tr-none font-medium text-[#787878] placeholder-[#787878] bg-[#EBEFFF] outline-none"
              />
              <button
                onClick={() => setFilterClicked(true)}
                className="w-[41%] lg:w-[13%] py-3 px-2 lg:px-5 rounded-tr-lg rounded-br-lg bg-[#032BF2] text-white outline-none border-0 cursor-pointer flex  justify-evenly h-12"
              >
                <img src={filterIcon} alt="" />
                <span>Filter</span>
              </button>
            </form>

            <div
              className={`${showFilterBtn} flex justify-between items-center`}
            >
              <div className="flex gap-4 justify-between md:justify-center lg:justify-start pb-9">
                <button
                  onClick={() => setContent(allResource)}
                  className={`text-[#0027BA] border-[#032BF2] border-2 py-2 px-5 rounded-lg hover:bg-[#032BF2] duration-500 ${content === allResource ? "bg-[#032BF2] text-white" : ""}`}
                >
                  All
                </button>
                <button
                  onClick={() => setContent(books)}
                  className={`text-[#0027BA] border-[#032BF2] border-2 rounded-lg py-2 px-5 hover:bg-[#032BF2] duration-500 hover:text-white ${content === books ? "bg-[#032BF2] text-white" : ""}`}
                >
                  Book
                </button>
                <button
                  onClick={() => setContent(videos)}
                  className={`text-[#0027BA] border-[#032BF2] border-2 rounded-lg py-2 px-5 hover:bg-[#032BF2] duration-500 hover:text-white ${content === videos ? "bg-[#032BF2] text-white" : ""}`}
                >
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
        {loading && <SkeletonLoader />}
        {error && !loading && !content.length ? (
          <p className="text-red-500">{} </p>
        ) : 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-center items-center gap-x-5 gap-y-10 xl:gap-x-8 xl:gap-y-16 pb-14 ">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="flex hover:border-2 border-[#032BF2] duration-500 cursor-pointer flex-col justify-center items-center bg-[#FFFFFF] drop-shadow-md rounded-2xl"
              onClick={() => navigate("/sales")}
            >
              <div className="w-full max-w-[298] xl:h-[210px] lg:h-[150px]">
                <img
                  className="w-full object-cover h-full rounded-t-2xl"
                  loading="lazy"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="w-full p-4 xl:p-4 flex flex-col justify-between gap-4">
                <h1 className="text-[#0027BA] font-bold text-xl lg:text-lg text-left ">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 20)}...`
                    : item.title}
                </h1>
                <p className="text-[#032BF2] text-left text-2xl font-bold ">
                  {formatCurrency(`${item.price}`)}
                </p>
                <div className="flex gap-3">
                  <p className="text-[#032BF2]">(4.5)</p>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                </div>
                <button className="border-[#032BF2] border-2 text-[#032BF2] hover:bg-[#032BF2] hover:text-white duration-100 font-semibold text-xl w-full p-3 rounded-lg mb-3">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        }
        <div>
          {!loading && content.length > itemsPerPage && (
            <ul className="pagination flex justify-center gap-2 items-center">
              <li className="page-item flex items-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="page-link"
                >
                  <img src={prev} alt="Previous" />
                </button>
              </li>
              {Array.from({
                length: Math.ceil(content.length / itemsPerPage),
              }).map((_, index) => (
                <li key={index} className="page-item flex items-center">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item flex items-center">
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(content.length / itemsPerPage)
                  }
                  className="page-link"
                >
                  <img src={next} alt="Next" />
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resource;
