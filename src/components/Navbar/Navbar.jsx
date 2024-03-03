import React, { useState } from "react";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../Navbar/navbar.css";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className=" flex justify-around items-center h-[110px] w-full fixed top-0 bg-white z-10 ">
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

      <div className="hidden md:flex gap-5 items-center font-semibold text-[18px] w-[320px]">
        <Link className=" text-blue nav__link">Home</Link>
        <Link className=" text-blue nav__link">Services</Link>
        <Link className=" text-blue nav__link">Resource</Link>
      </div>

      <Link className=" border border-blue w-[115px] h-[51px] md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 hidden ">
        Sign In
      </Link>

      <div className="text-blue font-bold md:hidden ">
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
      </div>
    </nav>
  );
};
