// import logo from "../../../assets/10X LOGO.png";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import emailIcon from "../../../assets/purchase-email.svg";
// import lock from "../../../assets/purchase-lock.svg";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import useAdminContext from "../../../hooks/useAdminContext";
// import Cookies from "js-cookie";
// import { Bars } from "react-loader-spinner";

// const ForgotPassword = () => {
//     const {register, handleSubmit, formState: {errors}} = useForm()
//   return (
//     <div>
//          <div className="h-screen grid place-items-center w-full">
//         <form className="flex flex-col gap-20 items-center px-3 " >
//          <div >
//          <Link>
//             <img src={logo} alt="" />
//           </Link>
//           </div>

//           <div className="flex flex-col gap-5 items-center">
//           <div className="flex flex-col gap-3">
//             <h2 className="text-3xl text-center text-blue font-[800]">
//             Forgot Password
//             </h2>
//             <p className="text-center text-xl font-medium text-grey">
//             We Will send an email with verification code. If you don’t see it, please check your spam folder.
//             </p>
//           </div>
//           {/* <p className="text-red-500">{Error.network}</p> */}
//           <div className="flex w-full flex-col gap-8 my-4">
//             <div>
//             <div className="relative w-full  flex items-center">
//               <img src={emailIcon} className=" absolute h-[18px]  left-4" alt="" />
//               <input
//                 type="email"
//                 className="w-full border px-11 border-grey outline-none h-12 rounded-lg text-grey text-[15px] "
//                 placeholder="Email Address"
//                 {...register("email", {
//                   required: "Email is required",
//                     pattern: {
//                       value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                       message: "Enter a valid email address"
//                     },
                  
//                 })}
//               />
//             </div>
//             <p className="text-red-500">{Error.email}</p>
//               {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//             </div>

//             <div>
          
            
//           </div>
//     <div className="w-full space-y-3">
//           <button className="w-full bg-blue font-bold flex items-center justify-center text-white h-[45px] rounded-xl ">
//             {isLoading ? <div><Bars
//   height="30"
//   width="100"
//   color="#fff"
//   ariaLabel="bars-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
//   /></div> :"Log In"}
//           </button>
//     </div>
         
//           </div> 
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ForgotPassworda