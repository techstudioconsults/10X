// import React from 'react'
import { useState } from "react";
import logo from "../../../assets/10X LOGO.png";
import emailIcon from "../../../assets/purchase-email.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import successIcon from "../../../assets/Success Icon.svg"
import useUserContext from "../../../hooks/useUserContext";

const ForgotPassword = () => {
  const { API_URL } = useUserContext();
  console.log(API_URL);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
//   const [formError, setFormError] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await axios.post(`${API_URL}/api/v1/auth/forgotpassword`, data);
      console.log(res);
      if(res.status == 200){
        setShowSuccess(true)
      }
    } catch (error) {
        setIsLoading(false)
        // setFormError(error?.response.data)
      console.log(error);
    }
  };

  return (
   <div>
     {!showSuccess && <div className="container w-11/12 mx-auto flex justify-center flex-col items-center">
      <div className="py-16">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="mt-12 text-center container w-3/4 mx-auto flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-2xl font-extrabold text-blue">Forgot Password</h1>
        <p className="w-full lg:w-1/2 mx-auto text-[#1E2C4F]">
          We Will send an email with verification code. If you don’t see it,
          please check your spam folder.
        </p>
      </div>
      {/* {formError && <p className="text-red-500 text-left">{formError}</p>} */}
      <form
        className="w-full md:w-9/12 lg:w-1/2 xl:w-5/12  mx-auto pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full  flex flex-col gap-3 items-center ">
          <img
            src={emailIcon}
            className=" absolute h-[18px]  left-4 translate-y-4 "
            alt=""
          />
          <input
            type="email"
            className="w-full border px-11 border-grey outline-none h-12 rounded-lg text-grey text-[15px] "
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-left w-full">{errors.email.message}</p>}
          {/* <p className="text-red-500">{Error.email}</p> */}
          <button className="w-full bg-blue font-bold flex items-center justify-center text-white h-[45px] rounded-lg ">
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
              "Submit email"
            )}
          </button>
        </div>
      </form>
    </div>}

    {
        showSuccess && <div className="flex flex-col justify-center items-center ">
              <div className="py-16">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
            <div className="w-32 mt-11">
                <img src={successIcon} alt="" />
            </div>
            <h1 className="text-blue font-bold text-2xl py-5">Link Sent, Check Your Inbox</h1>
            <Link to="/login" className=" underline">Back to Log In</Link>
        </div>
    }
   </div>
  );
};

export default ForgotPassword;

