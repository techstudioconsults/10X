import { useState } from "react";
import logo from "../../../assets/10X LOGO.png";
import emailIcon from "../../../assets/purchase-email.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import lock from "../../../assets/purchase-lock.svg";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await axios.post();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container w-11/12 mx-auto flex justify-center flex-col items-center px-2">
      <div className="py-16">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="mt-12 text-center container w-3/4 mx-auto flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-2xl font-extrabold text-blue">Reset Password</h1>
        <p className=" text-center text-[#1E2C4F]">Create a new password</p>
      </div>
      <form
        className="w-full md:w-9/12 lg:w-1/2  mx-auto pt-5  flex flex-col gap-5 items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full flex items-center">
          <img src={lock} className="absolute h-[18px] left-4" alt="" />
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full border-2 border-grey outline-none h-12 rounded-lg px-10 text-grey text-base"
            placeholder="New Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {errors.password && <span className="text-red-500 w-full">{errors.password.message}</span>}

        <div className="relative w-full flex items-center">
          <img src={lock} className="absolute h-[18px] left-4" alt="" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) => value === watch("password") || "Passwords do not match",
            })}
            className="w-full border-2 border-[#787878c8] outline-none h-12 rounded-lg px-10 text-grey text-base"
            placeholder="Confirm Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        {errors.confirmPassword && <span className="text-red-500 w-full">{errors.confirmPassword.message}</span>}

        <button className="w-full bg-blue font-bold flex items-center justify-center text-white h-[45px] rounded-lg">
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
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
