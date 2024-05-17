import React from "react";
import { formatCurrency } from "../../../../utils/Currency";
import { FaHeart } from "react-icons/fa";

const WishList = () => {
  const courses = [
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "video",
      star: "⭐⭐⭐⭐⭐",
      price: 35000,
    },
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Zero Call Close",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "book",
      star: "⭐⭐⭐⭐⭐",
      price: 35000,
    },
  ];

  return (
    <main className="md:flex items-center gap-3 my-7 space-y-5 md:space-y-0">
      {courses.map((w) => (
        <div key={w.id} className="w-full  md:w-[200px] lg:w-[295px] relative">
          <div className=" relative">
            <img
              src={w.image}
              alt={w.title}
              className="w-full md:w-[200px] md:h-[150px] lg:w-[400px] lg:h-[200px] mb-2 md:mb-0 rounded-tr-xl rounded-tl-xl lg:rounded-lg"
            />

            <div className=" absolute top-2 right-3">
              <button>
                <FaHeart
                  color="
                white"
                  size={30}
                />
              </button>
            </div>
          </div>
          <div className="p-2 h-30 rounded-bl-md rounded-br-md pb-4 shadow-xl shadow-[#032BF214] md:w-[200px] lg:w-[295px] space-y-1">
            <h2 className="text-[20px] md:max-w-[250px] text-darkBlue font-[650]">
              {w.title}
            </h2>
            <p className="font-bold text-darkBlue text-xl">
              {formatCurrency(w.price)}
            </p>
            <div className="flex items-center">
              <p className="text-[13px] md:text-[15px]">({w.star.length})</p>
              <p className="text-[10px] md:text-[13px]">{w.star}</p>
            </div>

            <div className="mt-2">
              <button className="text-xs border border-darkBlue w-full py-3 rounded hover:bg-darkBlue hover:text-white font-bold md:py-3 text-darkBlue duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default WishList;
