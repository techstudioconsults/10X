import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import one from "../../assets/one.png";

export const FirstCardSlider = () => {
  const settings = {
    dots: true,
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
    <div className="mt-7 overflow-hidden">
      <Slider {...settings} className="w-[300px] h-[371px] mx-auto">
        <img src={one} alt="" />
        <img src={one} alt="" />
      </Slider>
    </div>
  );
};
