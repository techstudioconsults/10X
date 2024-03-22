import rating from "../../assets/rating-Stars.png";
import { useState, useEffect } from "react";
import axios from "axios";
import prev from '../../assets/Pagation-prev.png'
import next from '../../assets/pagination-next.png'
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const Resource = () => {
  const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState([])
  const [books, setBooks] = useState([]);
  const [videos, setVideos] = useState([]);
  const [allResource, setAllResource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [searchParams, setSearchParams] = useState("")

  const maxlength = 30

  const handleSearch =(e)=>{
    e.preventDefault()
    console.log(searchParams);
    
  }


  // const title = item.title.length > maxlength ? slicedTitle = item.title.slice(0, maxlength) + '...' : item.title
  // console.log(content);

  // fetched data 
  useEffect(() => {
    const fetchResource = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${baseUrl}/api/v1/resources`);
        const resourceData = res.data.data;
        if(res.status == 200){
          setLoading(false)
        }
        setContent(resourceData)
        setAllResource(resourceData);
        setBooks(resourceData.filter(item => item.category === "pdf"));
        setVideos(resourceData.filter(item => item.category === "video"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchResource();
  }, [baseUrl]);

    // Logic to get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#FFFFFF]">
      <div className="w-11/12 mx-auto container pb-16 pt-20">
        <div className="py-10 w-5/6 lg:w-full mx-auto ">
          <h1 className="leading-9 text-[32px] lg:text-[56px] font-bold text-[#032BF2] text-center ">
            Training and{" "}
            <span className="text-[32px] lg:text-[56px] font-bold text-[#0027BA] text-center">
              Resources
            </span>
          </h1>
          <div className="w-full">
            <form onSubmit={handleSearch}  className="flex justify-center items-center w-full lg:w-4/5 mx-auto py-8">
              <input
              id="search"
              name="search"
                type="text"
                value={searchParams} onChange={(e) => setSearchParams(e.target.value)}
                placeholder="Search for Anything"
                className="w-full lg:w-3/5 py-3 px-5 rounded-tl-lg rounded-bl-lg rounded-br-none rounded-tr-none font-medium text-[#787878] placeholder-[#787878] bg-[#EBEFFF] outline-none"
              />
              <button className="w-2/6 lg:w-[13%] py-3 px-2 lg:px-5 rounded-tr-lg rounded-br-lg bg-[#032BF2] text-white outline-none border-0 cursor-pointer">
                Filter
              </button>
            </form>

            <div>
              <div className="flex gap-4 justify-between md:justify-center lg:justify-start">
                <button
                  onClick={()=>{
                    setContent(allResource)
                    
                  }}
                  className={`text-white bg-[#032BF2] py-2 px-5 rounded-lg  hover:bg-[#032BF2] duration-500`}
                >
                  All
                </button>
                <button
                  onClick={()=>{
                    setContent(books)
                    
                  }}
                  className="text-[#0027BA] border-[#032BF2] border-2 rounded-lg py-2 px-5 hover:bg-[#032BF2] duration-500 hover:text-white"
                >
                  Book
                </button>
                <button
                  onClick={()=>{
                    setContent(videos)
                  }}
                  className="text-[#0027BA] border-[#032BF2] border-2 rounded-lg py-2 px-5 hover:bg-[#032BF2] duration-500 hover:text-white"
                >
                  Video
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-center items-center gap-x-5 gap-y-10 xl:gap-x-8 xl:gap-y-16 pb-14">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col justify-center items-center bg-[#FFFFFF] drop-shadow-md rounded-2xl"
            >
              <div className="w-full max-w-[298] xl:h-[210px] lg:h-[150px]">
                <img
                  className="w-full object-cover h-full rounded-t-2xl"
                  loading="lazy"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="w-full p-4  xl:p-4 flex flex-col justify-between gap-4">
               <h1 className="text-[#0027BA] font-bold text-xl lg:text-lg text-left ">
                  {item.title.length > maxlength ? item.title.slice(0, maxlength)+ '...' : item.title } 
                </h1>

                <p className="text-[#032BF2] text-left text-2xl font-bold ">
                  NGN {item.price}
                </p>
                <div className="flex gap-3">
                  <p className="text-[#032BF2]">(4.5)</p>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                </div>
                <button className=" border-[#032BF2] border-2 text-[#032BF2] font-semibold text-xl w-full p-3 rounded-lg mb-3">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
        {content.length > itemsPerPage && (
          <ul className="pagination flex justify-center gap-2 items-center">
            {/* Previous button */}
            <li className="page-item flex items-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-link"
              >
                <img src={prev} alt="Previous" />
              </button>
            </li>
            {/* Page numbers */}
            {Array.from({ length: Math.ceil(content.length / itemsPerPage) }).map(
              (_, index) => (
                <li key={index} className="page-item flex items-center">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            {/* Next button */}
            <li className="page-item flex items-center">
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(content.length / itemsPerPage)}
                className="page-link"
              >
                <img src={next} alt="Next" />
              </button>
            </li>
          </ul>
        )}
      </div>
     {loading &&  <SkeletonLoader/>}
      </div>
    </div>
  );
};

export default Resource;
