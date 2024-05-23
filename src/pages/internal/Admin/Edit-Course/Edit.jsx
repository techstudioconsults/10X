import React, { useState } from "react";
import CourseContent from "./content/CourseContent";
import CreateCourseDetails from "./content/CreateCourseDetails";
import { useForm, FormProvider, } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../../hooks/useAdminContext";
import CreateCourseSuccess from "../../../../components/Modal/CreateCourseSuccess";
import { CiCamera } from "react-icons/ci";
// import { useForm } from "react-hook-form";
import EditComponent from "./content/Edit"

const Edit = () => {
  const { API_URL, token } = useAdminContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
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
  const [showNext, setShowNext] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [images, setImages] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  const handleEditCourse = (data) => {
    const formData = new FormData()
  }

  const onSubmit = async (data) => {
    console.log("Form data:", data);
  
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
      if (data.thumbnail instanceof File) {
        formData.append("thumbnail", data.thumbnail);
      } else {
        console.error("Thumbnail is not a file");
      }
      
    // Append content array data
    formData.append("content", JSON.stringify(data.content));

    data.content.forEach((contentItem, index) => {
      formData.append(`content[${index}].title`, contentItem.title);
      if (contentItem.file instanceof File) {
        formData.append(`content[${index}].file`, contentItem.file);
      } else {
        console.error(`Content item at index ${index} is missing a file`);
      }
    });

      console.log(data.content);
  
      const res = await axios.post(`${API_URL}/api/v1/course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API response:", res);

      if(res.status == 201){
        setIsLoading(false)
        setOpenModal(true)
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

  return (
    <main className=" container mx-auto w-11/12">
      {/* <EditComponent /> */}

      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            {!showNext && <CreateCourseDetails setShowNext={setShowNext} />}
          </div>
          <div className="">
            {showNext && <CourseContent loading={isLoading} onSubmit={methods.handleSubmit(onSubmit)}  />}
          </div>
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
