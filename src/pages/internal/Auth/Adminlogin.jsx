import React from "react";
import logo from "../../../assets/10X LOGO.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import emailIcon from "../../../assets/purchase-email.svg";
import lock from "../../../assets/purchase-lock.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../hooks/useAdminContext";
import Cookies from "js-cookie";
import { Bars } from "react-loader-spinner";

const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState({ password: "", email: "", network: "" });
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()
  // const {getUser} = useAdminContext()
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("password", data.password)
    formData.append("role", "admin")
    try {
        const {data} = await axios.post(`${API_URL}/api/v1/auth/login`, formData)
        console.log(data);

        if (data.success) {
          setIsLoading(false)
            Cookies.set("token", data.token)
            // getUser()
            navigate("/admin/home")
           
        }
    } catch (error) {
        console.log(error);
        setIsLoading(false)

        if (error.message === "Network Error") {
          setError({...Error, network: "Check your internet connection"})
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
  }


  return (
    <div>
      <div className="h-screen grid place-items-center w-full">
        <form className="flex flex-col gap-20 items-center px-3 " onSubmit={handleSubmit(onSubmit)}>
         <div >
         <Link>
            <img src={logo} alt="" />
          </Link>
          </div>

          <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-center text-blue font-[800]">
              Welcome Back, Administrator
            </h2>
            <p className="text-center text-xl font-medium text-grey">
              Please enter your details to continue{" "}
            </p>
          </div>
          <p className="text-red-500">{Error.network}</p>
          <div className="flex w-full flex-col gap-8 my-4">
            <div>
            <div className="relative w-full  flex items-center">
              <img src={emailIcon} className=" absolute h-[18px]  left-4" alt="" />
              <input
                type="email"
                className="w-full border px-11 border-grey outline-none h-12 rounded-lg text-grey text-[15px] "
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Enter a valid email address"
                    },
                  
                })}
              />
            </div>
            <p className="text-red-500">{Error.email}</p>
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
            <div className="relative w-full  flex items-center">
              <img src={lock} className=" absolute h-[17px]  left-4" alt="" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-grey outline-none h-12  rounded-lg px-11 text-grey text-[15px] "
                placeholder="Password"
                {...register("password", {
                  required: "Password is required"
                })}
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
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            
          </div>
    <div className="w-full space-y-3">
    <div className="w-full flex justify-between items-center text-grey mt-4">
            <label className="font-semibold text-xs flex items-center gap-1 cursor-pointer ">
              <input
                type="checkbox"
                className="size-4 rounded-md cursor-pointer"
                name=""
                id=""
              />{" "}
              Remember Me
            </label>
            <p className="font-semibold text-xs underline">
              <Link>Forgot password?</Link>
            </p>
          </div>

          <button className="w-full bg-blue font-bold flex items-center justify-center text-white h-[45px] rounded-xl ">
            {isLoading ? <div><Bars
  height="30"
  width="100"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /></div> :"Log In"}
          </button>
    </div>
         
          </div> 
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
