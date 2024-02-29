import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { assist } from "../../data/assist";

export const AssistSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 4000,
    screenLeft,
  };

  return (
    <div className="mt-7 overflow-x-hidden">
      <Slider {...settings}>
        {assist.map((a) => {
          const { title, sub, type, num, id } = a;

          return (
            <section key={id} className=" ">
              <div className="slider w-[300px] mx-auto  p-5   rounded-xl   bg-white">
                <p className="text-blue font-[650] text-lg ">{title}</p>

                <p className=" text-sm text-gray-600 font-medium">{sub}</p>
                <div className="flex justify-center gap-3 mt-5">
                  <p className=" text-6xl">{num}</p>
                  <p className=" text-gray-600 mt-8">{type}</p>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
    </div>
  );
};
