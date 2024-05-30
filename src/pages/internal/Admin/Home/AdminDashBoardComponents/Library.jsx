import { useEffect, useState } from "react";
import lib1 from "../../../../../assets/libimg.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";
import useAdminContext from "../../../../../hooks/useAdminContext";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const lib = [
//   { id: crypto.randomUUID(), title: "Digital Marketing", module: 6, img: lib1 },
//   { id: crypto.randomUUID(), title: "Zero Sales Call", module: 9, img: lib1 },
//   { id: crypto.randomUUID(), title: "SEO Optimization", module: 12, img: lib1 },
// ];

const Library = () => {
  const {API_URL} = useAdminContext()
  const [library, setLibrary] = useState()
  const [loading, setLoading] = useState(false)

  const getRandomCourse = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${API_URL}/api/v1/course`);
      // console.log(res.data.data);
  
      if (res.status === 200) {
        setLoading(false)
        // Get three random items from the response data
        const lib = getRandomItems(res.data.data, 3);
        setLibrary(lib);
      }
    } catch (error) {
      setLoading(false)
      console.error("Error fetching courses:", error);
    }
  };
  
  // Helper function to get random items from an array
  const getRandomItems = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  useEffect(()=>{
    getRandomCourse()
  },[])

  // console.log(library);

  return (
    <main className=" overflow-x-auto shadow-xl shadow-[#032BF214] border-[rgba(0,0,0,0.1)] border-2  p-5 rounded-md min-h-[331px] xl:max-h-80 ">
      <div className="flex items-center justify-between">
        <h1 className="xl:text-lg font-semibold text-darkBlue py-2">Library</h1>
      </div>

      <section className=" space-y-6 mt-1">
   
        {library?.map((l) => (
          <div
            key={l._id}
            className="flex items-center gap-5 text-sm text-darkBlue shadow p-2 rounded"
          >
            <LazyLoadImage effect="blur" src={l.thumbnail} alt="" className="w-10 h-10 rounded-md" />
            <div className=" flex-1">
              {loading && <Skeleton/>}
              <h3 className=" underline font-[650]">{l?.title}</h3>
              {/* <p className=" text-xs">{`${l?.content.length}`} Contents</p> */}
            </div>

            <Link to={`/coursedetail/${l._id}`}  className="text-xs">View More</Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Library;


