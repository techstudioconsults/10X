import React, { useState } from "react";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className=" flex justify-around items-center my-3 container mx-auto">
      <div>
        <Link>
          {" "}
          <img
            src={revenueLogo}
            className="w-[120px] h-[44px] md:w-[200px] md:h-[74.22px]"
            alt="company-logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-5 items-center font-semibold text-[18px]">
        <Link className=" text-blue">Home</Link>
        <Link className=" text-blue">Services</Link>
        <Link className=" text-blue">Resource Hub</Link>
      </div>

      <Link className=" border border-blue w-[133px] h-[51px] md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 hidden ">
        Sign In
      </Link>

      <div className="text-blue font-bold md:hidden ">
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
      </div>
    </nav>
  );
};
