import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { award } from "../../../../data/award";
import mark from "../../../../assets/mark.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const NewSliders = () => { // Renamed the component to NewSliders

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
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
    <main className="slider">
      <Slider {...settings} className="container mx-auto my-10 w-11/12" style={{ padding: "0 20px" }}>
        {award.map((a) => {
          const { name, job, msg, id } = a;

          return (
            <section key={id} className="ha">
              <div className="w-[350px] p-5 mx-auto flex justify-start items-start flex-col gap-4">
                <img src={mark} alt="" />
                <p className="text-mark mx-auto text-md mt-3">{msg}</p>
                <div className="flex items-center gap-2 mt-5 justify-start">
                  <div className="slider-text">
                    <p className="text-sm font-[650]">{name}</p>
                    <p className="text-xs">{job}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
    </main>
  );
};
