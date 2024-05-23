import { useState } from "react";
import CourseContent from "./content/CourseContent";
import CreateCourseDetails from "./content/CreateCourseDetails";
import { useForm, FormProvider, } from "react-hook-form";
import axios from "axios";
import useAdminContext from "../../../../hooks/useAdminContext";

const CreateCourse = () => {
  const { API_URL, token } = useAdminContext();
  const [isLoading, setIsLoading] = useState(false);
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

  // const onSubmit = async (data) => {
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

      if(res.status == 201){
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error:", error);
    }
  };

  
  return (
    <div className="w-full px-3 md:px-6 container">
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
    </div>
  );
};

export default CreateCourse;
