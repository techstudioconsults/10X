import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { award } from "../../data/award";
import mark from "../../assets/mark.png";

export const Sliders = () => {
  // const sliderRef = useRef(null);
  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };

  const settings = {
    dots: true,
    infinite: true,

    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <main className=" container mx-auto">
      <Slider {...settings} className=" overflow-hidden">
        {award.map((a) => {
          const { name, job, msg, id } = a;

          return (
            <section key={id} className=" ">
              <div className="slider w-fit p-5 mx-auto justify-center items-center flex-col">
                <img src={mark} alt="" />
                <p className="max-w-md text-mark mx-auto text-md mt-3">{msg}</p>
                <div className="flex items-center gap-2 mt-5 justify-start">
                  <div className="slider-text">
                    <p className=" text-sm font-[650]">{name}</p>
                    <p className=" text-xs">{job}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
      {/* <div className="flex justify-center gap-10">
        <button  onClick={previous}>
          Previous
        </button>
        <button  onClick={next}>
          Next
        </button>
      </div> */}
    </main>
  );
};
