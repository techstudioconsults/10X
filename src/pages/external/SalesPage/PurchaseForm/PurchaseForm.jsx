import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import arrowDown from "../../../../assets/special-arrow-down.svg";
import arrowUp from "../../../../assets/special-arrow-up.svg";
import person from "../../../../assets/purchase-fullname.svg";
import emailIcon from "../../../../assets/purchase-email.svg";
import closePurchase from "../../../../assets/close-purchaseform.svg"
import lock from "../../../../assets/purchase-lock.svg";
import Cookies from "js-cookie";
import "./PurchaseForm.css";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Bars } from "react-loader-spinner";
import axiosInstance from "../../../../utils/axiosConfig";
import useUserContext from "../../../../hooks/useUserContext";
import { useFetch } from "../../../../hooks/useFetch";

// eslint-disable-next-line react/prop-types
function PurchaseForm() {
  const {id} = useParams()
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);
  const { getUserInfo } = useUserContext();

console.log(single);

  console.log(single.price);
  const navigate = useNavigate();

  const amount = single.price
  console.log(amount);
  const [registrationError, setRegistrationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const email = watch("email");
  const fullName = watch("fullName");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const subscribe = watch("subscribe");
  const agreeTerms = watch("agreeTerms");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isValidPassword = (password) => {
    if (password.length < 8) {
      return false;
    }

    const pattern = /[0-9!@#$%^&*(),.?":{}|<>]/;
    if (!pattern.test(password)) {
      return false;
    }

    return true;
  };

  const onSubmit = async (data) => {
    try {
      const formData = {
        fullname: data.fullName,
        email: data.email,
        password: data.password,
        amount,
        courseId: id,
      };
      console.log(formData);

      const registerRes = await axiosInstance.post(
        "/api/v1/auth/register",
        formData
      );
      setIsLoading(true);
      console.log(registerRes);
    

      if (registerRes.status === 201) {
        setIsLoading(false);
        const authorizationUrl =
          registerRes.data.paymentData.data.authorization_url;
        window.open(authorizationUrl, "_blank");

        const loginData = {
          email: data.email,
          password: data.password,
        };

        const loginRes = await axiosInstance.post(
          "/api/v1/auth/login",
          loginData
        );

        if (loginRes.status === 200) {
          Cookies.set("userToken", loginRes.data.token);
          getUserInfo();
          // navigate("/mycourses");
          console.log("User logged in successfully");
        } else {
          console.error("Failed to log in the user");
        }
      }
    } catch (error) {
      setIsLoading(false);
      setRegistrationError(error.response.data.error);
    }
  };



  useEffect(() => {
    if (email !== "" && errors.email) {
      errors.email.message = "Please enter a valid email address";
    }
  }, [email, errors.email]);

  useEffect(() => {
    if (password !== confirmPassword && errors.confirmPassword) {
      errors.confirmPassword.message = "Passwords do not match";
    }
  }, [password, confirmPassword, errors.confirmPassword]);

  return (
    <div 
      className="flex flex-col items-center container mx-auto w-full lg:my-0 my-7"
      id="form"
    >
      {/* <img className="" src={closePurchase} alt="" /> */}
      {/* <img
        src={arrowDown}
        className="self-end translate-y-5 xl:w-auto w-[101px] lg:block hidden"
        alt=""
      /> */}
      <div className="rounded-md p-4  w-full mx-auto bg-[#FAFBFF] ">
        <h2 className="text-xl text-center font-[800] mb-4 text-[#032BF2]">
          Begin your Journey
        </h2>
        <hr className="mb-4 border-[#0027BA4D]" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
          <div>
            <div className="flex relative items-center">
              <img src={emailIcon} className="absolute h-5 left-4" alt="" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Email Address"
                className={`border-2 border-[#787878] rounded-lg py-3 pl-12 pr-4 h-[56px] w-full bg-[#FAFBFF] ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 pt-2">{errors.email.message}</p>
            )}
          </div>

          <div className="flex relative  flex-col  ">
            <div className="flex items-center w-full">
              <img src={person} className="absolute h-5  left-4" alt="" />
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Full Name"
                className={`border border-[#787878] rounded-md py-3 pl-12 pr-4 h-[56px] w-full bg-[#FAFBFF] ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 pt-2">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <div className="relative flex flex-col">
              <div className="flex items-center w-full">
                <img src={lock} className="absolute h-5 left-4" alt="" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    validate: {
                      isValidPassword: (value) =>
                        isValidPassword(value) ||
                        "Password must be at least 8 characters long and contain at least one number or special character",
                    },
                  })}
                  placeholder="Create Password"
                  className={`border border-[#787878] rounded-md py-3 pl-12 w-full bg-[#FAFBFF] pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="pt-2 text-red-500 ">{errors.password.message}</p>
            )}
          </div>

          <div>
            {/* <div className="relative flex items-center">
              <img src={lock} className="absolute h-5 left-4" alt="" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirm Password", {
                  required: "Confirm Password is required",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match";
                    },
                  },
                })}
                placeholder="Confirm Password"
                className={`border border-[#787878] rounded-md py-3 pl-12 pr-10 w-full bg-[#FAFBFF] ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )} */}
            <div className="relative flex flex-col">
              <div className="flex items-center w-full">
                <img src={lock} className="absolute h-5 left-4" alt="" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match";
                      },
                    },
                  })}
                  placeholder="Confirm Password"
                  className={`border border-[#787878] rounded-md py-3 pl-12 pr-10 w-full bg-[#FAFBFF] ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                {/* {showConfirmPassword ? <FiEye /> : <FiEyeOff />} */}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 py-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="">
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("subscribe")}
                className="mr-2"
              />
              <span
                style={{ color: subscribe ? "#032BF2" : "#787878" }}
                className="font-semibold"
              >
                Subscribe to our newsletter
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("agreeTerms", {
                  required: "You must agree to the terms and conditions",
                })}
                className="mr-2"
              />
              <span
                style={{ color: agreeTerms ? "#032BF2" : "#787878" }}
                className="font-semibold"
              >
                Agree to <u>terms and conditions</u>
              </span>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500">{errors.agreeTerms.message}</p>
            )}
          </div>

          {registrationError && (
            <p className="text-red-500 mt-2">{registrationError}</p>
          )}

          <button
            onClick={() => setIsLoading(true)}
            type="submit"
            className={`rounded-md p-2 w-full transition duration-300 ${
              isValid
                ? "bg-[#032BF2] text-white hover:bg-blue-600"
                : "bg-[#EBEFFF] text-white cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
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
              " Continue Payment"
            )}
          </button>
        </form>
      </div>
      {/* <img
        src={arrowUp}
        className="self-start -translate-y-5 xl:w-auto w-[101px] lg:block hidden"
        alt=""
      /> */}
    </div>
  );
}

export default PurchaseForm;