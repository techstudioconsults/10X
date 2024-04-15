import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/aboutpage.svg";
import arrowDownRightMobile from "../../../assets/arrow-down-right-mobile.png";
import arrowDownLeftMobile from "../../../assets/arrow-down-left-mobile.png";
import underlineImg from "../../../assets/Vector-underline.png";
import meeting from "../../../assets/meeting.svg";
import clientImg from "../../../assets/client-img.svg";
import successImg from "../../../assets/success-story-img.svg";
import layerImg from "../../../assets/Layer-Img.png";
import layerArrowDown from "../../../assets/layer-arrow-down.png"
import flyIlustration from "../../../assets/fly-illustation.png";
import wavyLine from "../../../assets/wavy-line.png";
import number1 from "../../../assets/number1.svg";
import handshakeImg from "../../../assets/hand-shake.svg";
import nextRight from "../../../assets/next-right.png";
import nextLeft from '../../../assets/next-left.png'
import marketingImg from '../../../assets/marketing.svg'
import nummber2 from "../../../assets/number2.svg";
import number3 from '../../../assets/number3.svg'
import number4 from '../../../assets/number4.svg'
import scaleImg from '../../../assets/scaleImg.svg'
import systemImg from '../../../assets/systemsImg.svg'
import doubleImg from '../../../assets/grouped-imgs.svg'
import wavyPattern from '../../../assets/wavy-pattern-bg-top.svg'

const WhatWeDo = () => {
  return (
    <div className="bg-white ">
      <div className=" w-11/12 mx-auto container pt-24 grid grid-cols-1 items-center gap-6 lg:gap-0 lg:grid-cols-2">
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
        <div className="lg:order-2 ">
          <img className="w-full lg:h-[600px] h-[450px] translate-y-5" src={heroImg} alt="" />
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
           <div className="flex justify-center lg:-translate-y-2 xl:-translate-y-4"> <img src={layerArrowDown} alt="" /></div>
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

      <div className="bg-white pb-14">
        <div className="w-4/5 mx-auto container py-8">
          <div className=" mx-auto w-2/3 xl:w-3/4 2xl:w-2/3 py-4 flex flex-col justify-center items-center">
            <h1 className="text-center px-2 lg:px-14 xl:px-0 2xl:px-0 text-blue text-2xl xl:text-5xl font-bold">
              Principles We Follow to Help You Scale to $100k/mo and Beyond{" "}
            </h1>
            <img className="w-52 -translate-x-9" src={wavyLine} alt="" />
          </div>
          {/* grid layout 1*/}
          <div className="grid grid-cols-1 gap-0 lg:gap-12 lg:grid-cols-2 items-center pt-7">
            <div>
              <div>
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-[#032BF2] text-2xl font-semibold">
                      Offer
                    </h1>
                    <h5 className="text-[#032BF2] text-xl font-medium">
                      Purposeful Offer Design
                    </h5>
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
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex justify-center">
                <img className="translate-y-0 translate-x-0 lg:translate-y-14 lg:-translate-x-8" src={nextRight} alt="" />
              </div>
              <div>
              <img className="hidden lg:block" src={handshakeImg} alt="" />
              </div>
            </div>
          </div>
          {/* grid-layout 2 */}
          <div className="grid grid-cols-1  gap-0 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="order-1 lg:order-2">
              <div>
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-[#032BF2] text-2xl font-semibold">
                    Marketing
                    </h1>
                    <h5 className="text-[#032BF2] text-xl font-medium">
                    Breakeven Marketing Using a Book 
                    </h5>
                  </div>
                  <div className="flex justify-end">
                    <img className="w-20 h-20" src={nummber2} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-[#6476BA] py-4">
              Don’t let your marketing method or budget hold back how fast your business can grow. Let us help you apply the methods we use to sell 50 - 150 books per day while getting ads to pay for themselves!
              </p>
            </div>
            <div className="grid order-2 lg:order-1 grid-cols-1 lg:grid-cols-2">
              <div>
              <img className="hidden lg:block" src={marketingImg} alt="" />
              </div>
              <div className="flex justify-center">
                <img className="translate-y-0 translate-x-0 lg:translate-y-14 lg:-translate-x-8" src={nextLeft} alt="" />
              </div>
            </div>
          </div>

          {/* grid layout */}
          <div className="grid grid-cols-1 gap-0 md:gap-2 lg:gap-12 lg:grid-cols-2 items-center">
            <div>
              <div>
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-[#032BF2] text-2xl font-semibold">
                    Scale
                    </h1>
                    <h5 className="text-[#032BF2] text-xl font-medium">
                    Scale with Automation and Leverage
                    </h5>
                  </div>
                  <div className="flex justify-end">
                    <img className="w-20 h-20" src={number3} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-[#6476BA] py-4">
              Experience massive growth in revenue with less work, less effort, and more automation. Let us help you reduce complexity in your business by developing offers and marketing assets that rapidly add customers and clients with less complexity than ever before.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex justify-center">
                <img className="translate-y-0 translate-x-0 lg:translate-y-14 lg:-translate-x-8" src={nextRight} alt="" />
              </div>
              <div>
              <img className="hidden lg:block" src={scaleImg} alt="" />
              </div>
            </div>
          </div>

           {/* grid-layout 2 */}
           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="order-1 lg:order-2">
              <div>
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <h1 className="text-[#032BF2] text-2xl font-semibold">
                    Systems
                    </h1>
                    <h5 className="text-[#032BF2] text-xl font-medium">
                    We Work You Out of the “Day-to-Day”
                    </h5>
                  </div>
                  <div className="flex justify-end">
                    <img className="w-20 h-20" src={number4} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-[#6476BA] py-4">
              Apply our experience building teams and developing scalable “hands off” marketing, automations, and offer delivery frameworks to build and manage a team that can grow your business without your direct input.
              </p>
            </div>
            <div className="grid order-2 lg:order-1 grid-cols-1 lg:grid-cols-2">
              <div>
              <img className="hidden lg:block" src={systemImg} alt="" />
              </div>
              <div className="flex justify-center">
                <img className="translate-y-14 translate-x-7 hidden" src={nextLeft} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="bg-[#1E2C4F] ">

        <div className="container  w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-5 mb-0 py-6 lg:py-2 lg:mb-48 gap-10 items-center">
          <div className=" py-3 flex flex-col justify-center lg:justify-start gap-4 ">
            <h1 className=" text-white text-2xl lg:text-3xl w-full text-center lg:text-left lg:w-3/5">
            How can 10X Revenue Growth benefit me?
            </h1>
            <p className="text-white text-center lg:text-left">
            We help coaches, experts, and digital course creators replace the unpredictability of static launches with evergreen assets that consistently convert cold prospects into premium clients and customers.
            </p>
           <div className="flex justify-center lg:justify-start">
           <button className="text-[#032BF2] bg-white text-lg font-bold px-2 py-2 rounded-md w-32 ">Get Started</button>
           </div>
          </div>
          <div className="translate-y-0 lg:translate-y-32">
            <img className="" src={doubleImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
