
import { useState } from "react";
import CourseContent from "./content/CourseContent";
import CourseModule from "./content/CourseContent";
import CreateCourseDetails from "./content/CreateCourseDetails";

const CreateCourse = () => {
  const [showNext, setShowNext] = useState(false)
  return (
    <div className="w-full px-3 md:px-6 container">

      <section>
        {!showNext && <CreateCourseDetails setShowNext={setShowNext}/>}
      </section>
      <section className="">
       {showNext &&  <CourseContent/>}
      </section>
    </div>
  );
};

export default CreateCourse;
