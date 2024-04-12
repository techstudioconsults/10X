import buyNow from "../../../../assets/page1.png";
import specialArrow from "../../../../assets/special-arrow.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="flex my-7 flex-col-reverse lg:flex-row items-center justify-center gap-5 p-4 lg:w-11/12 mx-auto container">
        <div className="flex flex-col items-start lg:w-1/2 w-full lg:justify-center gap-4">
          <h2 className="text-3xl lg:text-[38px] font-[800] text-darkBlue hidden lg:block">
            The Zero Call Close
          </h2>
          <p className="text-blue font-[600] text-[19px]">
            Close 40% Of Prospects Without Phone Calls "The Zero Call Close"
            offers you a game changing solution for life.
          </p>
          <div className="flex gap-9 items-center w-full">
<button className="px-6 py-3 rounded-md bg-blue md:w-48 w-full text-white font-semibold shadow-lg hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
            Get the course
          </button>
          <img src={specialArrow} alt="" className=" w-[75px] h-[75px] translate-y-5 lg:block hidden" />
          </div>
          
        </div>
        <div className="max-w-100 lg:w-1/2 w-full flex flex-col gap">
          <h2 className="text-3xl lg:text-[38px] my-3 font-[800] text-darkBlue  lg:hidden">
            The Zero Call Close
          </h2>
          <img src={buyNow} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:w-11/12 pt-8 mx-auto container">
        <div className="bg-[#FAFBFF] flex flex-col gap-3 rounded-lg shadow-xl border border-[#032BF214] shadow-[#032BF214] max-w-[400px] p-6 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-[1000] text-[#032BF2]">40%</h1>
          <h3 className="text-[28px] font-semibold text-[#0027BA]">
            Conversions
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
        <div className="bg-[#FAFBFF] flex flex-col gap-2  rounded-lg shadow-xl border border-[#032BF214] shadow-[#032BF214] max-w-[400px] p-6  text-center md:text-start">
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
        <div className="bg-[#FAFBFF] flex flex-col lg:col-span-1 md:col-span-2 place-self-center gap-2 rounded-lg shadow-xl border border-[#032BF214]  shadow-[#032BF214] max-w-[400px] p-6 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl tracking-tight font-[1000] text-[#032BF2]">
            No More
          </h1>
          <h3 className="text-[28px] font-semibold  text-[#0027BA]">
            Anxiety
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
