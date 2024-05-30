import React from 'react'

export const Lesson = ({singleCourse}) => {
  console.log(singleCourse);
  return (
    <main className="w-11/12 container mx-auto my-4">
      <p className="text-[#33414B] font-[400] text-lg">
       {singleCourse?.description}
      </p>
    </main>
  );
}
