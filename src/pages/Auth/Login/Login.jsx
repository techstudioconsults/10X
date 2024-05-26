// import React from 'react'
import signinImg from "../../../assets/signInImg.svg";
import loginMobile from "../../../assets/login-mobile.svg";
import logo from "../../../assets/10X LOGO.png";
import person from "../../../assets/purchase-fullname.svg";
import emailIcon from "../../../assets/purchase-email.svg";
import lock from "../../../assets/purchase-lock.svg";
import Cookies from "js-cookie";
import { Bars } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useUserContext from "../../../hooks/useUserContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Login = () => {
  // const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const {getUserInfo, API_URL} = useUserContext()
  // console.log(API_URL);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState({ password: "", email: "", network: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        formData
      );
      console.log(data);

      if (data.success) {
        Cookies.set("userToken", data.token);
        // getUserInfo();
        navigate("/myCourses");
        window.location.reload();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.message === "Network Error") {
        setError({ ...Error, network: "Check your internet connection" });
        setTimeout(() => {
          setError({ password: "", email: "", network: "" });
        }, 4000);
      }

      if (
        !error.response.data.success &&
        error.response.data.message === "Invalid email"
      ) {
        setError({
          ...Error,
          email: "This email address is unregistered with 10X Revenue",
        });
      }

      if (
        !error.response.data.success &&
        error.response.data.message === "Invalid Password"
      ) {
        setError({
          ...Error,
          password: "Password does not match email address",
        });
      }

      setTimeout(() => {
        setError({ password: "", email: "", network: "" });
      }, 4000);
    }
  };
  return (
    <div>
      <div className="lg:grid grid-cols-2  flex flex-col items-center gap-4 h-screen">
        <div className="h-screen lg:self-start ">
          <LazyLoadImage
            src={signinImg}
            alt=""
            className="h-full w-full object-cover hidden lg:block"
            effect="blur"
          />
          <LazyLoadImage
            src={loginMobile}
            alt=""
            className="h-full w-full object-cover lg:hidden block"
            effect="blur"
          />
        </div>
        <div
          className="w-full flex flex-col justify-between h-full p-4 self-center items-center"
          // style={{ maxWidth, margin: "auto", maxHeight: "827px" }}
        >
          <div className="flex flex-col gap-3 justify-between h-full self-center items-center">
            <span className="self-center lg:self-start">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-[110px] h-[44px] object-contain md:w-[140px] md:h-[54.22px]"
                />
              </Link>
            </span>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mx-auto gap-3"
            >
              <div>
                <h2 className="font-[1000] text-xl md:text-2xl text-center lg:text-start  text-blue">
                  Welcome Back
                </h2>
                <p className="text-grey text-sm md:text-base text-center lg:text-start  my-2 md:my-4">
                  Please enter your details to continue to 10x Revenue Growth
                </p>
              </div>
              <p className="text-red-500">{Error.network}</p>
              <div className="flex flex-col gap-8 my-4">
                <div>
                  <div className="relative w-full  flex items-center">
                    <img
                      src={emailIcon}
                      className=" absolute h-5  left-4"
                      alt=""
                    />
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="w-full border-2 px-10 border-grey outline-none h-12 rounded-lg text-grey text-base "
                      placeholder="Email Address"
                    />
                  </div>

                  <p className="text-red-500">{Error.email}</p>
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <div className="relative w-full  flex items-center">
                    <img
                      src={lock}
                      className=" absolute h-[18px]  left-4"
                      alt=""
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="w-full border-2 border-grey outline-none h-12 rounded-lg px-10 text-grey text-base "
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                  <p className="text-red-500">{Error.password}</p>
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-between items-center text-grey mt-4">
                <label className="font-semibold text-xs flex items-center gap-1 cursor-pointer ">
                  <input
                    {...register("checkbox")}
                    className="size-4 rounded-md cursor-pointer"
                    name=""
                    id=""
                    type="checkbox"
                  />{" "}
                  Remember Me
                </label>
                <p className="font-semibold text-xs underline">
                  <Link>Forgot password?</Link>
                </p>
              </div>

              <button className="w-full flex items-center justify-center bg-blue font-bold text-white h-[45px] rounded-xl ">
                {isLoading ? (
                  <div>
                    <Bars
                      height="30"
                      width="100"
                      color="#fff"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <div className="flex flex-col 2xl:flex-row justify-center mx-auto w-full gap-1 md:gap-4 text-xs lg:text-xs xl:text-base text-grey">
              <p className="text-center lg:block hidden 2xl:text-start">
                {new Date().getFullYear()} Revenue Growth. All Rights Reserved
              </p>

              <div className="flex gap-2 justify-center cursor-pointer">
                <p className=" underline">Terms of Use</p>

                <p className="underline cursor-pointer">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
