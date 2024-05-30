import React, { useEffect, useState } from "react";
import CourseContent from "./content/CourseContent";
import EditCourseDetails from "./content/EditCourseDetails";
import { useForm, FormProvider, } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../../hooks/useAdminContext";
import CreateCourseSuccess from "../../../../components/Modal/CreateCourseSuccess";
import { CiCamera } from "react-icons/ci";
// import { useForm } from "react-hook-form";
import EditComponent from "./content/Edit"
import {useFetch} from "../../../../hooks/useFetch"
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  console.log(id);
  const { API_URL, token } = useAdminContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [courseDetails, setCourseDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  // const { register, handleSubmit, setValue } = useForm();


  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: " ",
      category: " ",
      thumbnail: " ",
      content: [
        {
          title: "",
          file: "",
        },
        {
          title: "",
          file: "",
        },
        {
          title: "",
          file: "",
        },
      ],
    },
  });
 
  const { setValue } = methods;

  const getCourseInfo = async () => {

    try {
      const {data} = await axios.get(`${API_URL}/api/v1/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data.data);
      setCourseDetails(data.data);
      setValue("title", data.data.title);
      setValue("description", data.data.description);
      setValue("price", data.data.price);
      setValue("category", data.data.category);
      setValue("url", data.data.url)
      setValue("thumbnail", data.data.thumbnail);
      // setValue("content", [
      //   {
      //     title: data.data?.content[0]?.title || "",
      //     file: data.data?.content[0]?.file || null,
      //   },
      //   {
      //     title: data.data?.content[1]?.title || "",
      //     file: data.data?.content[1]?.file || null,
      //   },
      //   {
      //     title: data.data?.content[2]?.title || "",
      //     file: data.data?.content[2]?.file || null,
      //   },
      // ]);
      
    } catch (error) {
      console.log(error);
    }
  }


 
  

  const [showNext, setShowNext] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [images, setImages] = useState(null);


  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  const handleEditCourse = (data) => {
    const formData = new FormData()
  }

  const onSubmit = async (data) => {
    console.table("Form data:", data);
  
    try {
      setIsLoading(true);
      const formData = new FormData();
  
      // Log the API_URL and token
      console.log("API_URL:", API_URL);
      console.log("Token:", token);
  
      // Append other fields to the form data
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category", data.category);
      // formData.append("content", data.content)
  
      // Append thumbnail file
      if (data.thumbnail[0] instanceof File) {
        formData.append("thumbnail", data.thumbnail[0]);
      } else if (typeof data.thumbnail === "string") {
        formData.append("thumbnail", courseDetails.thumbnail);  // Assuming backend handles thumbnail URL
      } else {
        console.error("Thumbnail is not a file");
      }

  
      const res = await axios.put(`${API_URL}/api/v1/course/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API response:", res);

      if(res.status == 200){
        setIsLoading(false)
        setOpenModal(true)
        navigate(`/coursedetail/${id}`)
      }
    } catch (error) {
      setIsLoading(false);
      // setErrorMessage("Something went wrong, make sure every input field is filled ")
      // console.log("Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Response Headers:", error.response.headers);
        setErrorMessage("Something went wrong, check input fields.");
      } else if (error.request) {
        // The request was made but no response was received
        // This likely indicates a network error
        console.error("Network Error:", error.request);
        setErrorMessage("Network error occurred. Please check your internet connection.");
      } else {
        // Something else happened in making the request that triggered an error
        console.error("Error:", error.message);
        setErrorMessage("Something went wrong, check input fields.");
      }
    }
  };

  useEffect(() => {
    getCourseInfo()
  }, [])

  return (
    <main className=" container mx-auto w-11/12">
      {/* <EditComponent /> */}

      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
          <EditCourseDetails loading={isLoading}  onSubmit={methods.handleSubmit(onSubmit)} courseDetails={courseDetails} setShowNext={setShowNext} />
          </div>
          {/* <div className="">
            {showNext && <CourseContent courseDetails={courseDetails}   />}
          </div> */}
          {/* {showNext && (
            <button type="submit" className="btn btn-primary">
              Submit form
            </button>
          )} */}
        </form>
      </FormProvider>

    </main>
  );
};

export default Edit;
