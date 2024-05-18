import React from "react";
import notFound from "../../../assets/not-found.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container  w-11/12 mx-auto flex flex-col gap-4 justify-center items-center min-h-screen">
     <span>
     <img src={notFound} alt="" />
     </span>
      <h1 className="text-3xl font-extrabold text-[#032BF2]">Page Not Found</h1>
      <p>The page are looking for doesn’t exist or has been removed</p>
      <Link to="/" className="bg-[#032BF2] text-white px-7 py-3 rounded-md">Return to home</Link>
    </div>
  );
};

export default PageNotFound;
