import React from "react";
import { formatCurrency } from "../../../../utils/Currency";
import { FaHeart } from "react-icons/fa";

const WishList = () => {
  const courses = [
    {
      id: crypto.randomUUID(),
      image:
        "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Secrets Of The Irresistible Offer",
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
      title: "47 Facebook Ad Templates",
      description:
        "Close 40% Of Prospects Without Phone Calls The Zero Call Close offers you a game changing solution for life.",
      category: "book",
      star: "⭐⭐⭐⭐⭐",
      price: 35000,
    },
  ];

  return (
    <main className="flex items-center gap-3 my-5 ">
      {courses.map((w) => (
        <div key={w.id} className="w-40  md:w-[200px] lg:w-[295px] relative">
          <div className=" relative">
            <img
              src={w.image}
              alt={w.title}
              className="w-40 h-32  object-cover rounded-tl -md rounded-tr-md  md:w-[200px] md:h-[150px] lg:w-[300px] lg:h-[200px]"
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
          <div className="p-2 h-30 rounded-bl-md rounded-br-md pb-4 shadow-xl shadow-[#032BF214]md:w-[200px] lg:w-[295px] space-y-1">
            <h2 className="text-[11px] md:text-[16px] max-w-[130px] md:max-w-[250px] text-darkBlue font-[650]">
              {w.title}
            </h2>
            <p className="font-semibold text-sm text-darkBlue md:text-lg">
              {formatCurrency(w.price)}
            </p>
            <div className="flex items-center mv-2">
              <p className="text-[10px] md:text-[13px]">({w.star.length})</p>
              <p className="text-[10px] md:text-[13px]">{w.star}</p>
            </div>

            <button className="text-xs border border-darkBlue w-full py-1.5  rounded hover:bg-darkBlue hover:text-white font-[650] md:py-3 text-darkBlue">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default WishList;
