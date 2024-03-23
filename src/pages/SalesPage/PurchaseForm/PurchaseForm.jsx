import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PurchaseForm() {
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

  return (
    <div className="rounded-md p-4 max-w-[320px] mx-auto bg-[#FAFBFF]  shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-[#032BF2]">
        Begin your Journey
      </h2>
      <hr className="mb-4 border-[#0027BA4D]" />
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="border border-[#787878] rounded-md p-3 w-full bg-[#FAFBFF]"
          required
        />

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="border border-[#787878] rounded-md p-3 w-full bg-[#FAFBFF]"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
            className="border border-[#787878] rounded-md p-3 w-full bg-[#FAFBFF] pr-10"
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
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border border-[#787878] rounded-md p-3 w-full bg-[#FAFBFF]"
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

        <button
          type="submit"
          className={`rounded-md p-2 w-full transition duration-300 ${
            allInputsFilled && allChecked
              ? "bg-[#032BF2] text-white hover:bg-blue-600"
              : "bg-[#EBEFFF] text-white cursor-not-allowed"
          }`}
          disabled={!allInputsFilled || !allChecked}
        >
          Continue Payment
        </button>
      </form>
    </div>
  );
}

export default PurchaseForm;
