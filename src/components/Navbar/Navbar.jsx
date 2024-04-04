import React, { useState } from "react";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../Navbar/navbar.css";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className=" flex justify-around items-center h-[80px]  w-full fixed top-0 bg-white z-10 ">
      <div>
        <Link>
          {" "}
          <img
            src={revenueLogo}
            className="w-[140px] h-[54px] md:w-[140px] md:h-[54.22px]"
            alt="company-logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-5 items-center font-semibold text-[18px] w-[350px]">
        <Link to="/" className=" text-blue nav__link">Home</Link>
        <Link to="/about" className=" text-blue nav__link">What We Do</Link>
        <Link to="/resource" className=" text-blue nav__link">Resources Hub</Link>
      </div>

      <Link to="/login" className=" border border-blue w-[90px] h-[45px] md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 hidden ">
        Sign In
      </Link>

      <div className="text-blue font-bold md:hidden ">
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
      </div>
    </nav>
  );
};
