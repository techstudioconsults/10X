import React, { useEffect, useState } from "react";
import revenueLogo from "../../assets/10X LOGO.png";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../Navbar/navbar.css";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import useUserContext from "../../hooks/useUserContext";
import axios from "axios";
import MenuComp from "./menu/Menu";
import { Typography } from "@material-tailwind/react";

export const Navbar = () => {
  const { API_URL, getUserInfo, userInfo } = useUserContext();
  // const [userInfo, setUserInfo] = useState(user)
  const [isOpen, setOpen] = useState(false);
  const userToken = Cookies.get("userToken");

  const handleClose = () => {
    setOpen(false);
  };

  const showSignIn = userToken? 'hidden' : 'block'
  // const getUser = async () => {
  //   try {
  //     const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
  //       headers: {
  //         Authorization: `Bearer ${userToken}`,
  //       },
  //     });
  //     console.log(data);
  //     if (data.success) {
  //       setUserInfo(data);

  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserInfo()
  //   // getUser()
  // }, [userToken])

  return (
    <nav className=" relative">
      <main className="bg-white w-full h-[80px] flex  fixed top-0  z-20 right-0 left-0">
        <section className=" flex justify-between md:gap-6 lg:gap-0 items-center  w-11/12 container mx-auto ">
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

          <div className="hidden lg:flex md:gap-5 lg:gap-10 whitespace-nowrap items-center font-semibold text-[18px] ">
            <Link to="/" className=" text-blue nav__link">
              Home
            </Link>
            <Link to="/about" className=" text-blue nav__link">
              What We Do
            </Link>
            <Link to="/resource" className=" text-blue nav__link">
              Resources Hub
            </Link>
            {userToken ? (
              <Link to="/mycourses" className=" text-blue nav__link">
                My Courses
              </Link>
            ) : null}
          </div>
          <div className="flex items-center gap-1">
            <div className="text-blue font-bold lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
            </div>
            {userToken ? (
              <div className="flex gap-1 items-center">
                <img
                  src={userInfo?.data?.photo}
                  className=" w-8 h-8 bg-[#6072AC] rounded-full object-cover"
                  alt=""
                />
                <div className="hidden md:block">
                  {userInfo ? (
                    <p className=" font-semibold text-blue ">
                      {userInfo?.data?.fullname}
                    </p>
                  ) : (
                    <div className="animate-pulse flex items-center">
                      <Typography
                        as="div"
                        variant="h1"
                        className=" h-3 w-16 rounded-xl bg-gray-600"
                      >
                        &nbsp;
                      </Typography>{" "}
                    </div>
                  )}
                </div>
                {/* <img src={arrowDown} alt="" /> */}
                <MenuComp />
              </div>
            ) : (
              <Link
                to="/login"
                className={`${showSignIn}  border border-blue w-[90px] h-[45px] lg:flex justify-center items-center rounded-lg   text-blue font-semibold hover:bg-blue hover:text-white duration-500 hidden `}
              >
                Sign In
              </Link>
            )}
          </div>
        </section>
      </main>

      {/* mobile */}
      {isOpen && (
        <motion.section
          className="bg-white w-full h-full fixed top-0 z-10 right-0"
          initial={{
            x: 200,
          }}
          animate={{ x: 0 }}
          exit={{ x: 200, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex pt-20 flex-col justify-center items-center gap-8 font-semibold text-blue text-lg">
            <Link to="/" onClick={handleClose}>
              Home
            </Link>

            <Link to="/about" onClick={handleClose}>
              What We Do
            </Link>

            <Link to="/resource" onClick={handleClose}>
              Resource Hub
            </Link>
            {userToken ? (
              <Link
                to="/mycourses"
                className=" text-blue nav__link"
                onClick={handleClose}
              >
                My Courses
              </Link>
            ) : null}

            <Link
              to="/login"
              className={` ${showSignIn} border border-blue md:flex justify-center items-center rounded-lg text-blue font-semibold hover:bg-blue hover:text-white duration-500 py-2 px-5`}
            >
              Sign In
            </Link>
          </div>
        </motion.section>
      )}
    </nav>
  );
};
