import { useState } from "react";
import CreateCourseDetails from "./content/CreateCourseDetails";
import { useForm, FormProvider, } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../../hooks/useAdminContext";
import CreateCourseSuccess from "../../../../components/Modal/CreateCourseSuccess";


const CreateCourse = () => {
  const { API_URL, token } = useAdminContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [courseId, setCourseId] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: " ",
      category: " ",
      thumbnail: " ",
      url: " ",

    },
  });
       
  // const onSubmit = async (data) => {
  //   console.log("Form data:", data);
  
  //   try {
  //     setIsLoading(true);
  //     const formData = new FormData();
  
  //     // Log the API_URL and token
  //     console.log("API_URL:", API_URL);
  //     console.log("Token:", token);
  
  //     // Append other fields to the form data
  //     formData.append("title", data.title);
  //     formData.append("description", data.description);
  //     formData.append("price", data.price);
  //     formData.append("category", data.category);
  //     formData.append("url", data.url);
  //     // formData.append("content", data.content)
  
  //     // Append thumbnail file
  //     if (data.thumbnail instanceof File) {
  //       formData.append("thumbnail", data.thumbnail);
  //     } else {
  //       console.error("Thumbnail is not a file");
  //     }
  //     console.log(token);
  //     const res = await axios.post(`${API_URL}/api/v1/course`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("API response:", res);

  //     if(res.status == 201){
  //       setIsLoading(false)
  //       setOpenModal(true)
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
 
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.error("Server Error:", error.response.data);
  //       console.error("Status Code:", error.response.status);
  //       console.error("Response Headers:", error.response.headers);
  //       setErrorMessage("Something went wrong, check input fields.");
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // This likely indicates a network error
  //       console.error("Network Error:", error.request);
  //       setErrorMessage("Network error occurred. Please check your internet connection.");
  //     } else {
  //       // Something else happened in making the request that triggered an error
  //       console.error("Error:", error.message);
  //       setErrorMessage("Something went wrong, check input fields.");
  //     }
  //   }
  // };
  
const onSubmit = async (data) => {
  console.log("Form data:", data);

  try {
    setIsLoading(true);
    const formData = new FormData();

    // Append other fields to the form data
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("url", data.url);

    // Append thumbnail file
    if (data.thumbnail instanceof File) {
      formData.append("thumbnail", data.thumbnail);
    } else {
      console.error("Thumbnail is not a file");
    }

    // Log FormData content for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const res = await axios.post(`${API_URL}/api/v1/course`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API response:", res);

    if (res.status === 201) {
      setIsLoading(false);
      setOpenModal(true);
      setCourseId(res.data.data._id)
    }
  } catch (error) {
    setIsLoading(false);
    console.error("Submission error:", error);

    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      console.error("Server Error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Response Headers:", error.response.headers);
      setErrorMessage("Something went wrong, check input fields.");
    } else if (error.request) {
      // No response was received from the server
      console.error("Network Error:", error.request);
      setErrorMessage("Network error occurred. Please check your internet connection.");
    } else {
      // Other errors during the request
      console.error("Error:", error.message);
      setErrorMessage("Something went wrong, check input fields.");
    }
  }
};

  
  
  
  return (
    <div className="w-full px-3 md:px-6 container">
      {/* {errorMessage && <p>{errorMessage}</p>} */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <CreateCourseDetails loading={isLoading} onSubmit={methods.handleSubmit(onSubmit)} />
          </div>
        </form>
      </FormProvider>

      {openModal && <CreateCourseSuccess courseId={courseId} open={openModal}/> }
    </div>
  );
};

export default CreateCourse;
