import { useState } from "react";
import CourseContent from "./content/CourseContent";
import CreateCourseDetails from "./content/CreateCourseDetails";
import { useForm, FormProvider, } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../../hooks/useAdminContext";
import CreateCourseSuccess from "../../../../components/Modal/CreateCourseSuccess";
import CourseContentOne from "./content/CourseContentOne";

const CreateCourse = () => {
  const { API_URL, token } = useAdminContext();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [numContentFields, setNumContentFields] = useState(1);
  const [courseId, setCourseId]= useState("")
  const methods = useForm({
    // defaultValues: {
    //   title: "",
    //   description: "",
    //   price: " ",
    //   category: " ",
    //   thumbnail: " ",
    //   content: [
    //     {
    //       title: "",
    //       file: "",
    //     },
    //     {
    //       title: "",
    //       file: "",
    //     },
    //     {
    //       title: "",
    //       file: "",
    //     },
    //   ],
    // },

    defaultValues: {
      title: "",
      description: "",
      price: " ",
      category: " ",
      thumbnail: " ",
      content: Array.from({ length: numContentFields }, () => ({
        title: "",
        file: "",
      })),
    },
  });
  const [showNext, setShowNext] = useState(false);


  const handleAddContent = () => {
    setNumContentFields((prevNumFields) => prevNumFields + 1);
    methods.setValue("content", [
      ...methods.getValues("content"),
      { title: "", file: "" },
    ]);
  };


  //   console.log(data);
  //   try {
  //     setIsLoading(true);
  //     const formData = new FormData();
  //     // Append other fields to the form data
  //     formData.append("title", data.title);
  //     formData.append("description", data.description);
  //     formData.append("price", data.price);
  //     formData.append("category", data.category);
  //     // Append content array data
  //     data.content.forEach((content, index) => {
  //       formData.append(`content[${index}][title]`, content.title);
  //       formData.append(`content[${index}][file]`, content.file);
  //     });
  //     const res = await axios.post(
  //       `${API_URL}/api/v1/course`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // };
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
  //     formData.append("thumbnail", data.thumbnail)
  
  //     // Append content array data as a JSON string
  //   formData.append("content", JSON.stringify(data.content));

  //     const res = await axios.post(`${API_URL}/api/v1/course`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("API response:", res);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log("Error:", error);
  //   }
  // };

  // formData.append("content", JSON.stringify(data.content))      
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
      console.log(res.data.data._id);
      setCourseId(res.data.data._id)

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
            {!showNext && <CreateCourseDetails setShowNext={setShowNext} />}
          </div>
          <div className="">
            {showNext && <CourseContent  loading={isLoading} onSubmit={methods.handleSubmit(onSubmit)}  />}
            {showNext && <CourseContentOne numContentFields = {numContentFields} handleAddContent={handleAddContent}/>}
          </div>
          {/* {showNext && (
            <button type="submit" className="btn btn-primary">
              Submit form
            </button>
          )} */}
        </form>
      </FormProvider>

      {openModal && <CreateCourseSuccess open={openModal} courseId={courseId} /> }
    </div>
  );
};

export default CreateCourse;
