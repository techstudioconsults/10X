import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/About-hero-img.png";
import arrowDownRightMobile from "../../assets/arrow-down-right-mobile.png";
import arrowDownLeftMobile from "../../assets/arrow-down-left-mobile.png";
import underlineImg from "../../assets/Vector-underline.png";
import meeting from "../../assets/meeting.svg";
import clientImg from "../../assets/client-img.svg";
import successImg from "../../assets/success-story-img.svg";
import layerImg from "../../assets/Layer-Img.png";
import flyIlustration from "../../assets/fly-illustation.png";
import wavyLine from "../../assets/wavy-line.png";
import number1 from "../../assets/number1.svg";
import nummber2 from "../../assets/number2.svg";

const WhatWeDo = () => {
  return (
    <div className="bg-white">
      <div className=" w-11/12 mx-auto container pt-24 grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2">
        <div className="pt-10 lg:order-1 flex flex-col gap-5">
          <h1 className="text-3xl lg:text-4xl 2xl:text-7xl font-black text-blue text-center lg:text-start ">
            What We Do at 10X Revenue Growth
          </h1>
          <p className="text-[#6476BA] text-center lg:text-start w-full xl:w-10/12">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className=" border px-9 py-3 border-blue  rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 text-xl">
              Get started Now
            </button>
          </div>
        </div>
        <div className="lg:order-2">
          <img className="w-full" src={heroImg} alt="" />
        </div>
      </div>

      <div>
        <div className="bg-blue relative">
          <div className="w-1/2 mx-auto container py-6 lg:py-11 flex justify-center items-center">
            <h1 className="text-lg lg:text-4xl 2xl:text-5xl text-white font-black text-center ">
              Get every thing working better together with 10x
            </h1>
          </div>
          <div className=" max-h-96 w-9/12 mx-auto container -translate-y-14  lg:-translate-y-14 xl:-translate-y-16 flex justify-between absolute right-0 left-0 ">
            <img className="" src={arrowDownLeftMobile} alt="" />
            <img className="" src={arrowDownRightMobile} alt="" />
          </div>
        </div>
      </div>
      <div className="py-16">
        {/* New section starts here */}
        <div className="w-11/12 mx-auto container relative ">
          <h1 className=" pt-6 pb-2 font-semibold text-3xl text-center text-blue lg:font-bold lg:text-5xl ">
            How We Help Our Clients
          </h1>
          <p className="text-center text-[#6476BA] ">
            We help coaches, experts, and digital course creators replace the
            unpredictability
          </p>
          <div className="w-4/6 mx-auto py-1">
            <img
              src={underlineImg}
              alt=""
              className="translate-x-20 md:translate-x-24 xl:translate-x-60 "
            />
          </div>
        </div>
        {/* section ends here */}
        {/* New Section start here */}
        <div className="w-11/12 lg:w-3/4 mx-auto container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 my-7 items-center p-6 border border-gray-500 border-opacity-25 rounded-md shadow-md">
            <div className="order-2 lg:order-1 flex flex-col gap-4 ">
              <div className="w-full xl:w-4/5 flex flex-col gap-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-blue text-center lg:text-start">
                  3 Keys to Scale to $100k/mo in Revenue and Beyond
                </h1>
                <p className="text-[#6476BA] text-center lg:text-start">
                  We help coaches, experts, and digital course creators replace
                  the unpredictability
                </p>
              </div>
              <div className="flex flex-col items-center lg:flex-row gap-5 ">
                <button className=" border px-9 py-2 border-blue  rounded-lg font-semibold bg-blue text-white hover:bg-light-blue-900 hover:text-white duration-500 w-full md:w-48 lg:w-52 text-xl">
                  Get started
                </button>
                <Link className="text-[#6476BA] text-lg text-center lg:text-start">
                  <u>Scale to $100k Course</u>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img src={meeting} alt="" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 my-7 items-center p-6 border border-gray-500 border-opacity-25 rounded-md shadow-md">
            <div className=" flex justify-center">
              <img src={clientImg} alt="" />
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="w-full xl:w-4/5 flex flex-col gap-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-blue text-center lg:text-start">
                  Clients & Results that Most shaped Our Philosophy & Approach
                </h1>
                <p className="text-[#6476BA] text-center lg:text-start">
                  We help coaches, experts, and digital course creators replace
                  the unpredictability
                </p>
              </div>
              <div className="flex flex-col items-center lg:flex-row gap-5 ">
                <button className=" border px-9 py-2 border-blue  rounded-lg font-semibold bg-blue text-white hover:bg-light-blue-900 hover:text-white duration-500 w-full md:w-48 lg:w-52 text-xl">
                  Get started
                </button>
                <Link className="text-[#6476BA] text-lg text-center lg:text-start">
                  <u>Scale to $100k Course</u>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 my-7 items-center p-6 border border-gray-500 border-opacity-25 rounded-md shadow-md">
            <div className="order-2 lg:order-1 flex flex-col gap-4 ">
              <div className="w-full xl:w-4/5 flex flex-col gap-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-blue text-center lg:text-start">
                  Success Stories from Client Based Businesses
                </h1>
                <p className="text-[#6476BA] text-center lg:text-start">
                  We help coaches, experts, and digital course creators replace
                  the unpredictability
                </p>
              </div>
              <div className="flex flex-col items-center lg:flex-row gap-5 ">
                <button className=" border px-9 py-2 border-blue  rounded-lg font-semibold bg-blue text-white hover:bg-light-blue-900 hover:text-white duration-500 w-full md:w-48 lg:w-52 text-xl">
                  Get started
                </button>
                <Link className="text-[#6476BA] text-lg text-center lg:text-start">
                  <u>Scale to $100k Course</u>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img src={successImg} alt="" />
            </div>
          </div>

          <div className="py-10">
            <img src={layerImg} alt="" />
          </div>
        </div>
        {/* Section ends here */}
      </div>
      <div className="py-8">
        <div className="section-bg py-10 lg:py-14 xl:py-20 2xl:py-36 flex flex-col justify-center items-center">
          <div className="bg-white rounded-lg w-11/12 md:w-4/6 lg:w-5/12 p-5 mx-auto my-8 container max-w-2xl border-black border-2 ">
            <h1 className="text-blue lg:text-3xl font-extrabold text-2xl 2xl:text-4xl px-1 xl:px-8 2xl:px-16 text-center ">
              Want 10X Revenue Growth to Help Scale Your Business?
            </h1>
            <div className="pt-3">
              <div className="flex justify-center ">
                <img className="w-40" src={flyIlustration} alt="" />
              </div>
              <div className="flex  justify-center ">
                <button className=" border px-7 py-2 bg-blue  rounded-lg text-white font-semibold hover:bg-blue hover:text-white duration-500 text-xl">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* another section */}

      <div className="bg-white">
        <div className="w-4/5 mx-auto container py-8">
          <div className=" mx-auto w-2/3 xl:w-3/4 2xl:w-2/3 py-4 flex flex-col justify-center items-center">
            <h1 className="text-center px-2 lg:px-14 xl:px-0 2xl:px-0 text-blue text-2xl xl:text-5xl font-bold">
              Principles We Follow to Help You Scale to $100k/mo and Beyond{" "}
            </h1>
            <img className="w-52 -translate-x-9" src={wavyLine} alt="" />
          </div>
          {/* grid layout */}
          <div className="grid grid-cols-2 items-center">
            <div >
              <div>
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-[#032BF2] text-2xl font-semibold">Offer</h1>
                    <h5 className="text-[#032BF2] text-xl font-medium">Purposeful Offer Design</h5>
                  </div>
                  <div className="flex justify-end">
                    <img className="w-20 h-20" src={number1} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-[#6476BA] py-4">
                After working with thousands of clients since 2007, we’ve
                discovered that the offer itself - what you are selling, who you
                are selling it to, and what the promise is - determines how your
                business grows more than any other component of your business.
              </p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
