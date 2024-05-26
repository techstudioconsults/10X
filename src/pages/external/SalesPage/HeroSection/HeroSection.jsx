import buyNow from "../../../../assets/page1.png";
import specialArrow from "../../../../assets/special-arrow.svg";
import whiteArrow from "../../../../assets/arrow-white.png";
import salesMan from "../../../../assets/salesman.svg";
import arrow from "../../../../assets/arrow-left.svg";
import darkBg from "../../../../assets/dark-bg.svg";
import "./Hero.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AddWishList } from "../../../internal/user/Mycourses/wishlist/AddWishList";
import { useFetch } from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const HeroSection = () => {
  const userToken = Cookies.get("userToken");

  const { id } = useParams();
  //  console.log(id);
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);
  // console.log(single);

  return (
    <div>
      <div className="sales-hero-img mt-10  rounded-sm flex w-full">
        <div className="flex items-center justify-center py-8  relative lg:w-3/5 md:w-8/12   w-full">
          <div className="h-full w-full absolute inset-0">
            <img src={darkBg} className="h-full w-full  " alt="" />
          </div>
          <div className="text-white z-10 grid gap-3 w-5/6">
            <p className="flex items-center gap-2 mb-10 text-lg font-semibold">
              <Link to="/resource" className="flex items-center gap-2">
                <img src={arrow} alt="" /> Resources Hub
              </Link>
            </p>

            <h2 className="font-[1000] md:text-5xl text-3xl md:text-start text-center">
              {/* The Zero Call Close */}
              {single?.title}
            </h2>
            <p className="md:text-xl text-lg md:text-start text-center">
              {/* Close 40% Of Prospects Without Phone Calls The Zero Call Close"
              offers you a game changing solution for life. */}
              {single?.description}
            </p>
            <div className="md:flex items-center gap-6 mt-5">
              <button className="h-16 lg:w-56 w-40 md:m-0 mx-auto bg-blue rounded-lg text-lg font-semibold">
                Get the Course
              </button>
              {/* <img
                src={whiteArrow}
                className="self-end md:block h-12 hidden translate-y-3"
                alt=""
              /> */}

              {userToken && (
                <div className="mt-2 md:mt-0">
                  <AddWishList id={single._id} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-5/12 h-full md:block hidden">
          <img src={salesMan} className="w-full h-full " alt="" />
        </div>
      </div>
      <div className="grid w-11/12 container mx-auto lg:grid-cols-3 md:grid-cols-2 justify-center gap-2 pt-8">
        <div className="bg-[#FAFBFF] flex flex-col gap-3 rounded-lg shadow-xl border border-[#032BF214] shadow-[#032BF214] max-w-[440px] p-6 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-[1000] text-[#032BF2]">
            40%
          </h1>
          <h3 className="text-[28px] font-semibold text-[#0027BA]">
            Conversions
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
        <div className="bg-[#FAFBFF] flex flex-col gap-2  rounded-lg shadow-xl border border-[#032BF214] shadow-[#032BF214] max-w-[440px] p-6  text-center md:text-start">
          <h1 className="text-4xl md:text-5xl tracking-tight font-[1000] text-[#032BF2]">
            NGN 1M+
          </h1>
          <h3 className="text-[28px]  font-semibold text-[#0027BA]">
            Value Increment
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
        <div className="bg-[#FAFBFF] flex flex-col lg:col-span-1 md:col-span-2 place-self-center gap-2 rounded-lg shadow-xl border border-[#032BF214]  shadow-[#032BF214] max-w-[440px] h-full p-6 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl tracking-tight font-[1000] text-[#032BF2]">
            No More
          </h1>
          <h3 className="text-[28px] font-semibold  text-[#0027BA]">Anxiety</h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
