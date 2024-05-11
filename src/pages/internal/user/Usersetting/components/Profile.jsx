import React, { useEffect, useState } from "react";
import name from "../../../../../assets/name.svg";
import mail from "../../../../../assets/mail.svg";
import user from "../../../../../assets/user.svg";
import camera from "../../../../../assets/camera.svg";
import axios from "axios";
import Cookies from "js-cookie";
import useUserContext from "../../../../../hooks/useUserContext";
import { useForm } from "react-hook-form";
import { Bars } from "react-loader-spinner";
import { FaCircleCheck } from "react-icons/fa6";
import DeleteUser from "../../../../../components/Modal/DeleteUser/DeleteUser";

const Profile = () => {
  const { API_URL } = useUserContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState({
    info: "",
    security: "",
  });
  const [image, setImage] = useState("https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png");
  const userToken = Cookies.get("userToken");

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

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(data);
      if (data.success) {
        setUserInfo(data);
        setImage(data.data.photo)
        setValue("email", data.data.email)
        setValue("fullname", data.data.fullname)
      }
    } catch (error) {
      console.log(error);
    }
  };



  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);

    if (!data.photo) {
      formData.append("photo", image);
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
            Authorization: `Bearer ${userToken}`,
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
        setIsLoading(false);
      }

      setTimeout(() => {
        setSuccessMessage({ ...successMessage, info: "" });
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="py-6 space-y-10">
      <div className=" px-5 space-y-8 py-8 shadow-[#032BF214] rounded-3xl shadow-xl border border-[#0000001A]">
        <div>
          <h2 className="text-xl font-extrabold text-blue text-center md:text-left">
            Personal Info
          </h2>
          <p className="text-lg text-fadedBlue text-center md:text-left">
            Update your photo and personal details here
          </p>
        </div>
    
        <form className="md:grid flex md:flex-row flex-col-reverse grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <div className="pt-7 space-y-7">
                <p className="text-green-700 flex items-center gap-2">{successMessage.info && <FaCircleCheck />} {successMessage.info} </p>
                <div className="flex md:flex-row flex-col gap-5 w-full">
                  <div className="space-y-2 w-full">
                    <label className="text-[#0027BA] text-base font-semibold">
                      Full Name
                    </label>
                    <div className="relative flex items-center ">
                      <img src={name} alt="" className="ml-3 absolute " />
                      <input
                        type="text"
                        {...register("fullname", {
                            required: "Fullname is required",
                          })}
                        defaultValue={userInfo?.data?.fullname}
                        className="text-fadedBlue w-full placeholder:text-fadedBlue font-medium placeholder:font-medium pl-10 pr-6 border border-fadedBlue h-14 rounded-lg"
                        placeholder="Full Name"
                      />
                    </div>
                    {errors.fullname && (
                  <p className="text-sm text-red-600">
                    {errors.fullname.message}
                  </p>
                )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#0027BA] text-base font-semibold">
                    Email address
                  </label>
                  <div className="relative flex items-center ">
                    <img src={mail} alt="" className="ml-3 absolute " />
                    <input
                      type="email"
                      className="text-fadedBlue outline-none bg-[#EFEFEF] w-full placeholder:text-fadedBlue font-medium placeholder:font-medium pl-10 pr-6 border border-fadedBlue h-14 rounded-lg"
                      placeholder="Email Address"
                      defaultValue={userInfo?.data?.email}
                      readOnly
                    />
                  </div>
                </div>

                <button className=" flex items-center justify-center bg-blue h-16 md:max-w-52 w-full text-lg font-semibold text-white rounded-xl ">
                {isLoading ? (
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
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="relative">
              <div className="absolute top-1/2 lg:translate-x-14 translate-x-7">
                <button className="h-11 gap-3 lg:w-44 w-32 cursor-pointer -translate-y-4 relative flex items-center justify-center bg-[#000000B2] border-2 border-white rounded-lg">
                  <input
                    type="file"
                    className="absolute cursor-pointer inset-0 opacity-0 w-full h-full"
                    accept="image/*"
                    {...register("photo")}
                    onChange={handleImageChange}
                    onMouseOver={(e) => (e.target.title = "")}
                  />
                  <span>
                    <img src={camera} alt="" />
                  </span>
                  <span className="text-white lg:text-sm text-xs font-bold ">
                    Replace photo
                  </span>
                </button>
              </div>

              <img
                src={image}
                alt=""
                className="lg:w-[294px] md:w-[200px] lg:h-[294px] md:h-[200px]  w-full h-[190px]  rounded-full border border-black object-cover"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex md:flex-row flex-col w-full justify-between gap-5 px-5 py-8 shadow-[#032BF214] rounded-2xl shadow-xl border border-[#0000001A]">
        <div className="w-full max-w-[472px]">
          <h2 className="text-xl text-blue font-extrabold md:text-left text-center">
            Delete Account
          </h2>
          <p className="text-fadedBlue  md:text-left text-center">
            Delete your account. This deletes all your progress and data on 10x
            Revenue
          </p>
        </div>

        <DeleteUser userId={userInfo?.data?._id}/>
      </div>
    </div>
  );
};

export default Profile;
