import { useEffect, useState } from "react";
import heroImg from "../../../assets/heroImg.png";
import first from "../../../assets/first.png";
import second from "../../../assets/second.png";
import trust from "../../../assets/trust.png";
import com from "../../../assets/com.png";
import flower from "../../../assets/flower.png";
import flowerR from "../../../assets/flowerR.png";
import b from "../../../assets/b.png";
import marketing from "../../../assets/marketting.png";
import one from "../../../assets/one.png";
import stop from "../../../assets/stop.png";
import award from "../../../assets/award.png";
import mcompanies from "../../../assets/mCompanies.png";
// import mobpic from "../../assets/mobpic.png";
import assit from "../../../assets/assit.png";
import white from "../../../assets/white.png";
import { Link, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { ChangeText } from "../../../components/Reusable/ChangeText";
import { Sliders } from "../../../components/Reusable/Slider";
import { Accordions } from "../../../components/Reusable/Accordion";
import { MobileAccordions } from "../../../components/Reusable/MobileAccordion";
import { AssistSlider } from "../../../components/Reusable/AssitSlider";
import { FirstCardSlider } from "../../../components/Reusable/FirstCardSlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Home = () => {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location.pathname])
  const [funnels, setFunnels] = useState(true);
  const [testing, setTesting] = useState(false);
  const [scale, setScale] = useState(false);
  const [home, setHome] = useState(false);
  const [targeting, setTargeting] = useState(false);

  const handleFunnel = () => {
    setFunnels(true);
    setTesting(false);
    setScale(false);
    setHome(false);
    setTargeting(false);
  };

  const handleTesting = () => {
    setFunnels(false);
    setTesting(true);
    setScale(false);
    setHome(false);
    setTargeting(false);
  };

  const handleScale = () => {
    setFunnels(false);
    setTesting(false);
    setScale(true);
    setHome(false);
    setTargeting(false);
  };

  const handleHome = () => {
    setFunnels(false);
    setTesting(false);
    setScale(false);
    setHome(true);
    setTargeting(false);
  };

  const handleTargeting = () => {
    setFunnels(false);
    setTesting(false);
    setScale(false);
    setHome(false);
    setTargeting(true);
  };

  return (
    <main className="mb-5 bg-white pt-20">
      <section className="hero-img relative pt-10">
        <div className="md:h-[150px]">
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-[1000] mx-auto max-w-[300px] md:max-w-[500px] lg:max-w-[600px] text-blue  lg:leading-[77px]">
            Fueling Clients to <span className="text-darkBlue">7+ Figures</span>{" "}
            and Beyond!
          </h1>
        </div>

        <section className=" relative left-0 right-0 md:w-[844px] mx-auto max-w-full">
          <LazyLoadImage
            src={heroImg}
            // effect="blur"
            alt=""
            className="w-[343px] h-[329px] md:w-[744px] md:h-[744px] mx-auto  left-0 right-0 relative hidden md:block"
          />

          <div className=" absolute hidden  top-10 bottom-[50%] md:flex justify-between items-center left-3 right-3">
            <LazyLoadImage src={first} alt="" className="w-[123px] h-[118px]" />
            <LazyLoadImage src={second} alt="" className="w-[123px] h-[118px]" />
          </div>
          <LazyLoadImage
            src={com}
            className="absolute top-[45%] left-14 right-14 hidden md:block h-[64px] w-[696px] object-cover"
            alt=""
          />
          <LazyLoadImage
            src={trust}
            className="absolute top-[38%] left-[38%] hidden md:block"
            alt=""
          />
          <div className=" absolute -bottom-14 hidden md:block left-0 right-0">
            <LazyLoadImage src={white} alt="" className=" h-[300px] w-[900px]" />
          </div>
        </section>

        <div className="text-center ms-5 hero-img-div2 absolute left-0 right-5  bottom-[35%] md:bottom-[55%] lg:bottom-[55%]">
         <Link to="/resource">
         <button className="bg-white h-[51px]  w-[196px] md:w-[220px] md:h-[59px] text-md md:text-[20px] mx-auto text-center shadow text-[#214672] font-semibold rounded-xl client border border-blue hover:bg-blue hover:text-white duration-500">
            Become a Client
          </button></Link>
        </div>

        <LazyLoadImage effect="blur" src={mcompanies} alt="" className="w-full  md:hidden mt-[120px]" />
      </section>

      <div className="text-center mt-8 mb-16">
        <h1 className="text-3xl lg:text-[45px] font-[650] max-w-[300px] md:max-w-[700px] mx-auto text-blue h-[62px]">
          Everything your <span className=" text-darkBlue">business</span> needs
        </h1>

        <p className=" text-sm max-w-[300px] md:max-w-[630px] mx-auto my-3 text-blue h-[40px]">
          We help coaches, experts, and digital course creators replace the
          unpredictability of static launches with evergreen assets that
          consistently convert cold prospects into premium clients and
          customers.
        </p>
      </div>

      <section className="md:hidden">
        <MobileAccordions />

        <Link to="/about" className="border border-darkBlue py-3 px-10 rounded-lg font-[650] text-blue flex justify-center w-fit mx-auto">
          Learn More
        </Link>
      </section>

      <section className="text-center py-14 assist mt-14 md:hidden">
        {/* assisting slider */}
        <h1 className="text-white text-[24px] font-[650] max-w-[250px] mx-auto">
          Assisting enterprises and customers
        </h1>
        {/* <AssistSlider /> */}

        <div className="slider w-[300px] mx-auto  p-5 max-w-full rounded-xl mt-3 bg-white">
          {/* 1 */}
          <p className="text-[#002F6C] font-[650] text-lg ">
            Companies Mentoring
          </p>

          <p className=" text-sm text-gray-600 font-medium">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches.
          </p>
          <div className="flex justify-center gap-3 mt-5">
            <p className=" text-6xl font-black">875</p>
            <p className=" text-gray-600 mt-8">Work</p>
          </div>
        </div>

        <div className="slider w-[300px] mx-auto  p-5 max-w-full rounded-xl my-5 bg-white">
          {/* 2 */}
          <p className="text-[#002F6C] font-[650] text-lg ">
            Companies Mentoring
          </p>

          <p className=" text-sm text-gray-600 font-medium">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches.
          </p>
          <div className="flex justify-center gap-3 mt-5">
            <p className=" text-6xl font-black">875</p>
            <p className=" text-gray-600 mt-8">Work</p>
          </div>
        </div>

        <div className="slider w-[300px] mx-auto  p-5 max-w-full rounded-xl mt-3 bg-white">
          {/* 3 */}
          <p className="text-[#002F6C] font-[650] text-lg ">
            Companies Mentoring
          </p>

          <p className=" text-sm text-gray-600 font-medium">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches.
          </p>
          <div className="flex justify-center gap-3 mt-5">
            <p className=" text-6xl font-black">875</p>
            <p className=" text-gray-600 mt-8">Work</p>
          </div>
        </div>
      </section>

      <section className="text-center my-20 relative md:hidden">
        <h1 className="text-2xl max-w-[300px] mx-auto text-blue font-semibold">
          How can 10X <span className=" text-darkBlue">Revenue Growth</span>{" "}
          benefit me?
        </h1>

        <p className="text-gray-600 mt-4 text-sm max-w-[300px] mx-auto font-medium">
          We help coaches, experts, and digital course creators replace the
          unpredictability of static launches with evergreen assets that
          consistently convert cold prospects into premium clients and
          customers.
        </p>

        <div className=" relative left-0 right-0">
          <FirstCardSlider />
        </div>

        {/* <div className=" absolute -bottom-24 flex justify-between left-0 right-0">
          <img src={flower} className="w-[172px] h-[200px]" alt="" />
          <img
            src={flowerR}
            className="w-[172px] h-[200px] right-0 absolute"
            alt=""
          />
        </div> */}
      </section>

      <div className="assist mt-28 h-[267px] w-full flex justify-center items-center flex-col md:hidden">
        <h1 className="font-[540] text-white text-3xl max-w-[300px] text-center">
          Stop wasting time and money on the wrong marketing funnels
        </h1>

        <Link to="/about" className="bg-white py-3 px-10 rounded-lg font-[650] text-blue flex justify-center w-fit mx-auto mt-5">
          Resource
        </Link>
      </div>

      <section className="hidden md:flex justify-center items-center gap-10 md:my-10 h-[483px]">
        <div>
          <ul className="text-white">
            <li className="">
              <button
                className={`${
                  funnels === true ? "bg-darkBlue text-white" : "bg-white"
                } focus:bg-darkBlue w-[240px] h-[46px] rounded-lg flex justify-start gap-5 items-center font-[650] mt-3 text-blue focus:text-white px-3 text-sm`}
                onClick={handleFunnel}
              >
                <span className="me-5">
                  <FaBell size={20} />
                </span>
                Marketing Funnels
              </button>
              <hr className="mt-3 bg-black w-[200px] mx-auto" />
            </li>

            <li>
              <button
                className=" focus:bg-darkBlue w-[240px] h-[46px] rounded-lg flex justify-start gap-5 items-center font-[650] mt-3 text-blue focus:text-white white px-3 text-sm"
                onClick={handleTesting}
              >
                <span className="me-5">
                  <FaBell size={20} />
                </span>
                Marketing Testings
              </button>
              <hr className="mt-3 w-[200px] mx-auto" />
            </li>

            <li>
              <button
                className=" focus:bg-darkBlue w-[240px] h-[46px] rounded-lg flex justify-start gap-10 items-center font-[650] mt-3 text-blue focus:text-white white px-3 text-sm"
                onClick={handleScale}
              >
                <span>
                  <FaBell size={20} />
                </span>
                Automation and Scale
              </button>
              <hr className="mt-3 w-[200px] mx-auto" />
            </li>

            <li>
              <button
                className=" focus:bg-darkBlue w-[240px] h-[46px] rounded-lg flex justify-start gap-10 items-center font-[650] mt-3 text-blue focus:text-white  px-3 text-sm"
                onClick={handleHome}
              >
                <span className="">
                  <FaBell size={20} />
                </span>
                Sit At Home
              </button>
              <hr className="mt-3 w-[200px] " />
            </li>

            <li>
              <button
                className=" focus:bg-darkBlue w-[240px] h-[46px] rounded-lg flex justify-start gap-10 items-center font-[650] mt-3 text-blue focus:text-white px-3 text-sm"
                onClick={handleTargeting}
              >
                <span className="">
                  <FaBell size={20} />
                </span>
                Audience Targeting
              </button>
              <hr className="mt-3 w-[200px] " />
            </li>
          </ul>
        </div>

        <section className="bg-purple-900 rounded-xl mt-5 md:mt-0 relative">
          <img src={b} alt="" className=" relative h-[400px]" />

          <div className="absolute top-[20%] left-6">
            <ChangeText
              funnels={funnels}
              testing={testing}
              scale={scale}
              home={home}
              targeting={targeting}
            />
          </div>

          <div className=" absolute bottom-[1%] right-0">
            <img src={marketing} alt="" className="w-[200px] lg:w-[300px]" />
          </div>
        </section>
      </section>

      <section className="assisting-bg   md:h-[300px] ">
        <div className="hidden   my-7 h-[100px] md:h-[308px]  w-full md:flex justify-start gap-20 items-center container mx-auto">
          <div>
            <img
              src={assit}
              alt=""
              className=" h-[500px] w-[317px] object-contain"
            />
            {/* assisting img */}
          </div>
          <section className="flex justify-end items-center gap-3 mx-5 ">
            <div className="bg-white w-[130px] h-[126px] lg:w-[170px] lg:h-[150px] xl:w-[250px] xl:h-[176px] flex justify-center items-center flex-col rounded-xl">
              <h1 className="font-[650] text-xs xl:text-lg text-center text-[#002F6C]">
                Companies Mentoring
              </h1>
              <p className="text-[48px] font-[860]">875</p>
              <p className=" text-gray-600">Work</p>
            </div>

            <div className="bg-white w-[130px] h-[126px] lg:w-[170px] lg:h-[150px] xl:w-[250px] xl:h-[176px] flex justify-center items-center flex-col rounded-xl">
              <h1 className="font-[650] text-xs xl:text-lg text-center text-[#002F6C]">
                Companies Mentoring
              </h1>
              <p className="text-[48px] font-[860]">6k+</p>
              <p className=" text-gray-600">Customers</p>
            </div>

            <div className="bg-white w-[130px] h-[126px] lg:w-[170px] lg:h-[150px] xl:w-[250px] xl:h-[176px] flex justify-center items-center flex-col rounded-xl">
              <h1 className="font-[650] text-xs xl:text-lg text-center text-[#002F6C]">
                Companies Mentoring
              </h1>
              <p className="text-[48px] font-[860]">10</p>
              <p className=" text-gray-600">Years</p>
            </div>
          </section>
        </div>
      </section>

      <section className="hidden md:block  md:mt-20 container mx-auto">
        <div className=" shadow-2xl bg-white w-[1000px] h max-w-full py-5 px-10 text-blue mx-auto rounded-md relative">
          <FaBell size={20} />
          <h1 className="text-[28px] font-[650] max-w-xs">
            How can Revenue Growth benefit me?
          </h1>
          <p className="mb-5 max-w-[250px] lg:max-w-md">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>

          <Link to="/about" className="py-2 px-6 rounded-xl font-[650] text-sm bg-blue text-white">
            Learn More
          </Link>

          {/* <div className=" relative  w-[500px]"> */}
          {/* flower img */}
          {/* <img src={flower} alt="" className=" hidden md:block" /> */}
          {/* </div> */}

          <div className="hidden md:block w-[500px] ">
            {/* one */}
            <img
              src={one}
              alt=""
              className="h-[300px] absolute top-0 left-[45%] lg:left-[53%]"
            />
            <img
              src={one}
              alt=""
              className="h-[300px] absolute top-[25%] left-[65%] lg:left-[76%] xl:left-[75%]"
            />
          </div>
        </div>
      </section>

      <div className="hidden md:block stop md:mt-[150px]">
        {/* stop wasting money img */}
        <img
          src={stop}
          alt=""
          className="w-full h-[322px]  object-cover object-left"
        />
      </div>

      <section>
        <div>
          {/* award img */}
          <img src={award} alt="" className="h-[70px] mx-auto mt-20" />
          <h3 className="text-center text-4xl font-[650] text-blue max-w-md mx-auto mt-3">
            Award-winning engagement platform
          </h3>
          <p className="text-center text-[#6476BA] text-sm mt-2 max-w-[250px] mx-auto">
            More than 4 million across 100,000 businesses are boosted by Revenue
            Growth
          </p>
        </div>
      </section>

      <div className=" overflow-hidden">
        <section className="my-5">
          <Sliders />
        </section>
      </div>

      <div className="mb-32 mt-20">
        <h1 className="text-center text-3xl md:text-4xl font-[650] text-blue">
          A bunch of our FAQ’s
        </h1>
        <p className="text-xs md:text-sm text-center my-4 question">
          Some answers of the most often asked questions
        </p>
        <Accordions />
      </div>
    </main>
  );
};
