import { useEffect, useState, useRef } from "react";
// import admin from "../../../../assets/admin-img.svg";
import deleteIcon from "../../../../assets/delete-icon.svg";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAdminContext from "../../../../hooks/useAdminContext";
import { Bars } from "react-loader-spinner";
import Cookies from "js-cookie";

const Settings = () => {
  const { API_URL, getUser, userInfo, token } = useAdminContext();
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  console.log(user);
  const [infoLoading, setInfoLoading] = useState(false);
  const [securityLoading, setSecurityLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    info: "",
    security: "",
  });

  // const [email, setEmail] = useState("")
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    register: registerSecurity,
    handleSubmit: submitSecurity,
    setValue: setSecurity,
    formState: { errors: securityErrors },
  } = useForm();
  // const password = watch("newPassword");
  // console.log(password);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserInfoDiscard = () => {
    setValue("email", user.email);
    setValue("fullname", user.fullname);
    setImage(user.photo);
  };
  const handleUserSecurityDiscard = () => {
    setSecurity("currentPassword", "");
    setSecurity("newPassword", "");
    // setImage(user.photo)
  };

  const handlePhotoDelete = () => {
    setImage(user.photo);
    setValue("photo", "");
  };

  const updatePassword = async (data) => {
    setSecurityLoading(true);

    if (data.confirmPassword != data.newPassword) {
      setPasswordError("Password does not match");
      setSecurityLoading(false);
      return;
    } else {
      setPasswordError("");
    }
    const formData = new FormData();
    formData.append("currentPassword", data?.currentPassword);
    formData.append("newPassword", data?.newPassword);

    try {
      const { data } = await axios.put(
        `${API_URL}/api/v1/auth/updatepassword`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        Cookies.set("token", data.token);
        setSuccessMessage({
          ...successMessage,
          security: "Password Updated successfully",
        });
        setSecurityLoading(false);
      }

      setTimeout(() => {
        setSuccessMessage({ ...successMessage, security: "" });
      }, 3000);
      console.log(data);
    } catch (error) {
      console.log(error);
      setSecurityLoading(false);
    }
  };

  const updateDetails = async (data) => {
    setInfoLoading(true);
    console.log(data);
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);

    if (!data.photo) {
      formData.append("photo", userInfo?.data.photo);
    } else {
      formData.append("photo", data.photo[0]);
    }
    // formData.append("role", data.role)

    // console.log(formData);

    try {
      const res = await axios.put(
        `${API_URL}/api/v1/auth/updatedetails`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      if (res.data.success) {
        setSuccessMessage({
          ...successMessage,
          info: "Info Updated successfully",
        });

        getUser();
        setInfoLoading(false);
      }

      setTimeout(() => {
        setSuccessMessage({ ...successMessage, info: "" });
      }, 3000);
    } catch (error) {
      console.log(error);
      setInfoLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo?.data);
      setImage(userInfo?.data.photo);
      setValue("email", userInfo?.data.email);
      setValue("fullname", userInfo?.data.fullname);
    }
  }, [userInfo]);

  return (
    <div className=" container px-6 mx-auto my-2">
      <div className="my-7 text-center md:text-left">
        <h2 className="text-[#0027BA] font-semibold md:text-2xl text-xl">
          Profile Settings
        </h2>
        <p className="text-[#818181] font-medium">
          Update your profile and personal information
        </p>
      </div>

      <div className="flex lg:flex-row  flex-col items-start gap-10">
        <div className="xl:w-[637px] lg:w-2/3 w-full p-6 border-[rgba(0,0,0,0.1)] shadow-sm border-2 rounded-xl">
          <form>
            <h2 className="text-[#0027BA] font-semibold text-lg my-3">
              Personal Information
            </h2>

            <hr className="bg-grey bg-opacity-40 mb-4 h-[1.5px] " />
            <div className="flex md:flex-row flex-col my-3 items-center gap-2">
              <img
                src={!image ? userInfo?.data.photo : image}
                className=" w-20 h-20 object-cover rounded-lg"
                alt=""
              />
              <div className="flex gap-2">
                <button
                  className="h-[41px] bg-blue rounded-lg px-3 text-white font-semibold text-xs relative cursor-pointer"
                  type="button"
                >
                  <input
                    type="file"
                    accept="image/*"
                    {...register("photo")}
                    onChange={handleImageChange}
                    onMouseOver={(e) => (e.target.title = "")}
                    className="w-full h-full opacity-0 absolute inset-0   cursor-pointer"
                  />
                  Upload new picture
                </button>
                <button
                  className="h-[41px] flex items-center justify-center px-5 gap-2 border-[#F87171] border-2 rounded-lg text-[#F87171] font-semibold"
                  type="button"
                  onClick={() => handlePhotoDelete()}
                >
                  <img src={deleteIcon} alt="" />
                  Delete
                </button>
              </div>
            </div>

            <hr className="bg-grey bg-opacity-40 h-[1.5px] mt-4 " />

            <p className="text-sm text-green-600">{successMessage.info}</p>
            <div className="flex md:flex-row flex-col my-6 gap-3 w-full">
              <div className="flex flex-col xl:w-full w-full gap-1">
                <label className="text-[#0027BA] font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname", {
                    required: "Fullname is required",
                  })}
                  defaultValue={userInfo?.data.fullname}
                  className=" w-full px-4 placeholder:text-[#6476BA] text-[#6476BA] h-12 rounded-md border-2 border-[#0000001A]  bg-transparent "
                />
                {errors.fullname && (
                  <p className="text-sm text-red-600">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              {/* <div className='flex flex-col xl:w-1/2 w-full gap-1'>
                <label className='text-[#0027BA] font-medium'>Last Name</label>
                <input type="text" placeholder='Last Name' className='w-full text-[#6476BA] placeholder:text-[#6476BA]  px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent ' />
              </div> */}
            </div>
            <div className="flex flex-col mb-6 gap-1">
              <label className="text-[#0027BA] font-medium">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Enter a valid email address",
                  },
                })}
                defaultValue={userInfo?.data.email}
                className=" h-12 px-4 text-[#6476BA] placeholder:text-[#6476BA] rounded-md border-2 border-[#0000001A]  bg-transparent "
              />

              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="flex gap-3 md:justify-end justify-center">
              <button
                className="h-[41px] border-blue border-2 rounded-lg px-5 text-blue font-semibold text-sm hover:bg-blue hover:text-white duration-700"
                type="button"
                onClick={() => handleUserInfoDiscard()}
              >
                Discard
              </button>
              <button
                className="h-[41px] bg-blue rounded-lg px-5 flex items-center justify-center text-white font-semibold text-xs"
                type="button"
                onClick={handleSubmit(updateDetails)}
              >
                {infoLoading ? (
                  <div>
                    <Bars
                      height="28"
                      width="82"
                      color="#fff"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />{" "}
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className=" lg:max-w-[401px] lg:w-1/2 w-full h-full border-[#0000001A] border-2 shadow-sm rounded-xl">
          <form className="flex flex-col p-6  gap-3">
            <h2 className="text-[#0027BA] font-semibold text-lg mt-3">
              Security
            </h2>
            <hr className="bg-grey h-[1.5px]" />
            <p className="text-sm text-green-600">{successMessage.security}</p>
            <div className="flex flex-col gap-1">
              <label className="text-[#0027BA] font-medium">
                Current Password
              </label>
              <input
                type="password"
                {...registerSecurity("currentPassword", {
                  required: "Field is required",
                })}
                className=" px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent "
              />
              {securityErrors.currentPassword && (
                <p className="text-red-600 text-sm">
                  {securityErrors.currentPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#0027BA] font-medium">New Password</label>
              <input
                type="password"
                {...registerSecurity("newPassword", {
                  required: "New Password required",
                })}
                className=" px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent "
              />
              {securityErrors.newPassword && (
                <p className="text-red-600 text-sm">
                  {securityErrors.newPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#0027BA] font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                {...registerSecurity("confirmPassword", {
                  validate: {},
                })}
                className=" px-4 h-12 rounded-md border-2 border-[#0000001A]  bg-transparent "
              />
              {<p className="text-red-600 text-sm">{passwordError}</p>}
            </div>
            <div className="flex gap-3 md:justify-end justify-center my-3">
              <button
                className="h-[41px] border-blue border-2 rounded-lg px-5 text-blue font-semibold text-sm hover:bg-blue hover:text-white duration-700"
                type="button"
                onClick={() => handleUserSecurityDiscard()}
              >
                Discard
              </button>
              <button
                className="h-[41px] bg-blue rounded-lg px-5 text-white font-semibold text-xs"
                type="button"
                onClick={submitSecurity(updatePassword)}
              >
                {securityLoading ? (
                  <div>
                    <Bars
                      height="28"
                      width="82"
                      color="#fff"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />{" "}
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
