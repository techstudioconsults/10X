import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import arrowDown from "../../../../assets/special-arrow-down.svg";
import arrowUp from "../../../../assets/special-arrow-up.svg";
import person from "../../../../assets/purchase-fullname.svg";
import emailIcon from "../../../../assets/purchase-email.svg";
import lock from "../../../../assets/purchase-lock.svg";
import "./PurchaseForm.css";
import { useParams } from "react-router-dom";
import {useForm} from "react-hook-form";

function PurchaseForm() {
  const { id } = useParams();
  console.log(id);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    // Check if all input fields are filled
    const inputsFilled =
      email !== "" &&
      fullName !== "" &&
      password !== "" &&
      confirmPassword !== "";
    setAllInputsFilled(inputsFilled);

    // Check if both checkboxes are checked
    setAllChecked(subscribe && agreeTerms);
  }, [email, fullName, password, confirmPassword, subscribe, agreeTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = () => {
    // Email validation logic
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    // Password validation logic
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    if (email !== "") {
      validateEmail();
    }
  }, [email]);

  useEffect(() => {
    if (confirmPassword !== "") {
      validatePassword();
    }
  }, [confirmPassword]);

  return (
    <div className="flex flex-col items-center container mx-auto w-full lg:my-0 my-7 ">
      <img
        src={arrowDown}
        className="self-end translate-y-5 xl:w-auto w-[101px] lg:block hidden"
        alt=""
      />
      <div className="rounded-md p-4 space-y-6 2xl:w-[440px] lg:max-w-[440px] w-full mx-auto bg-[#FAFBFF]  shadow-lg">
        <h2 className="text-xl font-[800] mb-4 text-[#032BF2]">
          Begin your Journey
        </h2>
        <hr className="mb-4 border-[#0027BA4D]" />
        <form onSubmit={handleSubmit} className="space-y-8 w-full ">
          <div>
            <div className="flex relative items-center">
              <img src={emailIcon} className=" absolute h-5  left-4" alt="" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                placeholder="Email Address"
                className="border-2 border-[#787878] rounded-lg py-3 pl-12 pr-4 h-[56px] w-full bg-[#FAFBFF]"
                required
              />
            </div>
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>

          <div className="flex relative items-center">
            <img src={person} className=" absolute h-5  left-4" alt="" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="border border-[#787878] rounded-md py-3 pl-12 pr-4 h-[56px]  w-full bg-[#FAFBFF]"
              required
            />
          </div>

          <div className="relative flex items-center">
            <img src={lock} className=" absolute h-5  left-4" alt="" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="border border-[#787878] rounded-md py-3 pl-12 w-full bg-[#FAFBFF] pr-10"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <div>
            <div className="relative flex items-center">
              <img src={lock} className=" absolute h-5  left-4" alt="" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={validatePassword}
                placeholder="Confirm Password"
                className="border border-[#787878] rounded-md  py-3 pl-12 pr-10 w-full bg-[#FAFBFF]"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={subscribe}
                onChange={() => setSubscribe(!subscribe)}
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
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mr-2"
                required
              />
              <span
                style={{ color: agreeTerms ? "#032BF2" : "#787878" }}
                className="font-semibold"
              >
                Agree to <u>terms and conditions</u>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className={`rounded-md p-2 w-full transition duration-300 ${
              allInputsFilled && allChecked && password === confirmPassword
                ? "bg-[#032BF2] text-white hover:bg-blue-600"
                : "bg-[#EBEFFF] text-white cursor-not-allowed"
            }`}
            disabled={
              !allInputsFilled ||
              !allChecked ||
              password !== confirmPassword ||
              !!emailError ||
              !!passwordError
            }
          >
            Continue Payment
          </button>
        </form>
      </div>
      <img
        src={arrowUp}
        className="self-start -translate-y-5 xl:w-auto w-[101px] lg:block hidden"
        alt=""
      />
    </div>
  );
}

export default PurchaseForm;
