import React, { useState } from "react";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../Navbar/navbar.css";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className=" relative">
      <main className=" flex justify-around items-center h-[60px] md:h-[80px]  w-full fixed top-0 bg-white z-20 ">
        <div>
          <Link to={"/"}>
            {" "}
            <img
              src={revenueLogo}
              className="w-[110px] h-[44px] object-contain md:w-[140px] md:h-[54.22px]"
              alt="company-logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-5 items-center font-semibold text-[18px] w-[350px]">
          <Link to="/" className=" text-blue nav__link">
            Home
          </Link>
          <Link to="/about" className=" text-blue nav__link">
            What We Do
          </Link>
          <Link to="/resource" className=" text-blue nav__link">
            Resources Hub
          </Link>
        </div>

        <Link
          to="/login"
          className=" border border-blue w-[90px] h-[45px] md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 hidden "
        >
          Sign In
        </Link>

        <div className="text-blue font-bold md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
        </div>
      </main>

      {/* mobile */}
      {isOpen && (
        <motion.section
          className="bg-white w-[200px] h-full fixed top-0 z-10 right-0"
          initial={{
            x: 200,
          }}
          animate={{ x: 0 }}
          exit={{ x: 200, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex pt-20 flex-col justify-center items-center gap-8 font-semibold text-blue text-md">
            <li>
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClose}>
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/resource" onClick={handleClose}>
                Resource Hub
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className=" border border-blue md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 py-2 px-5"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </motion.section>
      )}
    </nav>
  );
};
