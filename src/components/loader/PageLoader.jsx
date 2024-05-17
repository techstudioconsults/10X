import React from "react";
import logo from "../../assets/10X LOGO.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Oval } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <main className="bg-white h-screen flex justify-center items-center gap-5">
      <LazyLoadImage src={logo} effect="blur" loading="lazy" />
      <Oval
        visible={true}
        height="40"
        width="40"
        color="blue"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </main>
  );
};

export default PageLoader;
