import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { award } from "../../data/award";

export const SlidersRight = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 4000,
    screenLeft,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {award.map((a) => {
        const { name, img, job, msg, id } = a;

        return (
          <section key={id} className=" ">
            <div className="slider w-fit p-5 mx-auto  rounded-xl  justify-center items-center flex-col ms-4">
              <p className="max-w-md text-blue mx-auto text-xs">{msg}</p>
              <div className="flex items-center gap-2 mt-5 justify-start">
                <img
                  src={img}
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div className="slider-text">
                  <p className=" text-sm">{name}</p>
                  <p className=" text-xs">{job}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Slider>
  );
};
