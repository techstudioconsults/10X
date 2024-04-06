import buyNow from "../../../assets/page1.png";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 p-4 md:w-11/12 mx-auto container">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-darkBlue hidden md:block">
            The Zero Call Close
          </h2>
          <p className="text-blue max-w-lg text-xl">
            Close 40% Of Prospects Without Phone Calls "The Zero Call Close"
            offers you a game changing solution for life.
          </p>
          <button className="px-6 py-3 rounded-md bg-blue text-white font-semibold shadow-lg hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
            Get the course
          </button>
        </div>
        <div className="max-w-100 flex flex-col gap">
          <h2 className="text-3xl lg:text-5xl font-bold text-darkBlue  md:hidden">
            The Zero Call Close
          </h2>
          <img src={buyNow} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:w-11/12 py-8 mx-auto container">
        <div className="bg-[#FAFBFF] rounded-lg shadow-xl p-4 mx-4 md:mx-0 md:ml-3 md:mr-3 text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-[#032BF2]">40%</h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0027BA]">
            Conversions
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
        <div className="bg-[#FAFBFF] rounded-lg shadow-xl p-4 mx-4 md:mx-0 md:ml-3 md:mr-3 text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-[#032BF2]">
            NGN 1M+
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0027BA]">
            Value Increment
          </h3>
          <p className="max-w-lg text-[#6476BA]">
            40% of your sales conversations without ever picking up the phone.
          </p>
        </div>
        <div className="bg-[#FAFBFF] rounded-lg shadow-xl p-4 mx-4 md:mx-0 md:ml-3 md:mr-3 text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-[#032BF2]">
            No More
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0027BA]">
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
