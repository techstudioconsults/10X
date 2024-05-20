import { useState } from "react";
import CourseContent from "./content/CourseContent";
import CreateCourseDetails from "./content/CreateCourseDetails";
import { useForm, FormProvider } from "react-hook-form";
// import { Title } from "chart.js/dist/plugins/plugin.title";

const CreateCourse = () => {
  const [showNext, setShowNext] = useState(false);

  // Define the default form values
  const defaultValues = {
    title: "",
    description: "",
    category: "",
    thumbnail: " ",
    price: 0,
    
  };


  const methods = useForm({ defaultValues });
  const { handleSubmit, register } = methods;

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // You can perform additional actions here, such as sending the form data to the server
  };

  return (
    <div className="w-full px-3 md:px-6 container">
      <FormProvider {...methods}>
        <div>
          {!showNext && <CreateCourseDetails register={register} setShowNext={setShowNext} />}
        </div>
        <div className="">
          {showNext && <CourseContent onSubmit={handleSubmit(onSubmit)} />}
        </div>
      </FormProvider>
    </div>
  );
};

export default CreateCourse;