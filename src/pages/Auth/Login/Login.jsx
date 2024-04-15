// import React from 'react'
import  signinImg from "../../../assets/signInImg.svg"
import  loginMobile from "../../../assets/login-mobile.svg"
import  logo from "../../../assets/10X LOGO.png"
import person from "../../../assets/purchase-fullname.svg"
import emailIcon from "../../../assets/purchase-email.svg"
import lock from "../../../assets/purchase-lock.svg"

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState("")
  const [showPassword, setShowPassword] = useState(false);

    console.log(checked);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
    <div>
        <div className="flex lg:flex-row flex-col items-center gap-4 h-screen">
            <div className="h-full lg:self-start">
                <img src={signinImg} alt="" className="h-full w-full object-cover hidden lg:block" />
                <img src={loginMobile} alt="" className="h-full w-full object-cover lg:hidden block" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-between h-full p-4 self-center items-center" style={{maxWidth: "720px", margin: "auto", maxHeight: "827px"}}>
                <div className="flex flex-col gap-3 justify-between h-full self-center items-center">
                <span className="self-center lg:self-start"><Link to="/"><img src={logo} alt="" className="w-[110px] h-[44px] object-contain md:w-[140px] md:h-[54.22px]" /></Link></span>
                <form className="flex flex-col mx-auto gap-3">
                    <div>
                    <h2 className="font-[1000] text-xl md:text-2xl text-center lg:text-start  text-blue">Welcome Back</h2>
                    <p className="text-grey text-sm md:text-base text-center lg:text-start  my-2 md:my-4">Please enter your details to continue to 10x Revenue Growth</p>
                    </div>

                        <div className="flex flex-col gap-8 my-4">
                            <div className="relative w-full  flex items-center"> 
                            <img src={emailIcon} className=" absolute h-5  left-4" alt="" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 px-10 border-grey outline-none h-12 rounded-lg text-grey text-base " placeholder="Email Address" />
                            </div>
                    <div className="relative w-full  flex items-center">
                    <img src={lock} className=" absolute h-[18px]  left-4" alt="" />
                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-grey outline-none h-12 rounded-lg px-10 text-grey text-base " placeholder="Password" />
                        <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
                    </div>
                    </div>
                    <div className="w-full flex justify-between items-center text-grey mt-4">
                        <label className="font-semibold text-xs flex items-center gap-1 cursor-pointer "><input type="checkbox" onClick={(e) => setChecked(e.target.checked)} className="size-4 rounded-md cursor-pointer" name="" id="" /> Remember Me</label>
                        <p className="font-semibold text-xs underline"><Link>Forgot password?</Link></p>
                    </div>

                    <button className="w-full bg-blue font-bold text-white h-[45px] rounded-xl ">Log In</button>
                </form>

                <div className="flex flex-col 2xl:flex-row justify-center mx-auto w-full gap-1 md:gap-4 text-xs lg:text-xs xl:text-base text-grey">
                    <p className="text-center lg:block hidden 2xl:text-start">{new Date().getFullYear()} Revenue Growth. All Rights Reserved</p>

                    <div className="flex gap-2 justify-center cursor-pointer"><p className=" underline">Terms of Use</p>

                    <p className="underline cursor-pointer">Privacy Policy</p></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login