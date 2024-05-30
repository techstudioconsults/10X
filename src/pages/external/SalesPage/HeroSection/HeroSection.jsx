import buyNow from "../../../../assets/page1.png";
import specialArrow from "../../../../assets/special-arrow.svg";
import whiteArrow from "../../../../assets/arrow-white.png";
import salesMan from "../../../../assets/salesman.svg";
import arrow from "../../../../assets/arrow-left.svg";
import darkBg from "../../../../assets/dark-bg.svg";
import salesBg from "../../../../assets/salespage-Background.svg"
import "./Hero.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AddWishList } from "../../../internal/user/Mycourses/wishlist/AddWishList";
import { useFetch } from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUserContext from "../../../../hooks/useUserContext";
import axios from "axios"
import { useEffect, useState } from "react";
import AccessModal from "../../../../components/Modal/AccessModal";

const HeroSection = () => {
  const { id } = useParams();
  const {API_URL} = useUserContext()
  const userToken = Cookies.get("userToken");
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);
  const [isloading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [showError, setShowError] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [formError, setFormError] = useState("")
  // console.log(API_URL);
  const {register, handleSubmit, formState : {errors} } = useForm()
  //  console.log(id);
  // console.log(single);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("buyagain");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (data)=>{
    console.log(data);
    setIsLoading(true)
    try {
      const res = await axios.post(`${API_URL}/api/v1/subscribe/freeacess`, data )
      console.log(res);
      if(res.status == 201){
        setIsLoading(false)
        setOpen(true)
        // console.log("gooooood");
      }
    } catch (error) {
      setIsLoading(false)
      // setFormError(error.response.data.error)
      showErrorForFewSeconds(error.response.data.error);
      console.log(error.response.data.error);
      // setFormError(
    }
  }


  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const showErrorForFewSeconds = (error) => {
    setFormError(error);
    setShowError(true);
    const timeoutId = setTimeout(() => {
      setShowError(false);
    }, 3000); // 3 seconds
    setTimeoutId(timeoutId);
  };


  return (
    <div>
      <AccessModal open={open} setOpen={setOpen} />
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

            <h2 className=" text-2xl  lg:text-4xl font-medium md:text-start text-center">
              {/* The Zero Call Close */}
              {/* {single?.title} */}
              Discover and Implement the Proven 3-Step Blueprint That Catapulted My Business from Zero to N100M in Annual Sales!
            </h2>
            <p className="md:text-xl text-lg md:text-start text-center">
              {/* Close 40% Of Prospects Without Phone Calls The Zero Call Close"
              offers you a game changing solution for life. */}
              {/* {single?.description} */}
            </p>
            <div className="flex  flex-col md:flex-row items-center w-full mx-auto gap-4 md:gap-6 mt-5">

          {!userToken &&     <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center gap-4" >
             <div className="grid grid-cols-1 relative">
             <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder=" john@gmail.com "
                className={` outline-none rounded-lg py-3 px-4 min-w-64 text-gray-800 h-14 w-full bg-[#FAFBFF] ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
              <p className="text-red-500 absolute -bottom-7  ">{errors.email.message}</p>
            )} 
            {/* {formError && <p className="text-red-500 absolute -bottom-14 ">{formError}</p>} */}
            {showError && (
      <p className="text-red-500 absolute -bottom-14 ">{formError}</p>
    )}

             </div>
                <button className="h-14 lg:w-56 min-w-64 lg:min-w-56 md:m-0 mx-auto bg-blue rounded-lg text-lg font-semibold" >{isloading ? "loading..." : "Get Instant Access"} </button>
              </form>}

             {userToken &&  <button
              onClick={handleScrollToForm}
                className="h-16 lg:w-56 w-40 md:m-0 mx-auto bg-blue rounded-lg text-lg font-semibold"
              >
                Get the Course
              </button>}
            {!userToken &&   <img
                src={whiteArrow}
                className="self-end md:block h-12 hidden translate-y-3"
                alt=""
              />}

              {userToken && (
                <div className="mt-2 md:mt-0">
                  <AddWishList id={single._id} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-5/12 h-full md:block hidden">
          {/* <img src={salesMan} className="w-full h-full " alt="" /> */}
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
