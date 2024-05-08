import React from 'react'

const CourseContentCard = () => {
  return (
    <div className='px-7 rounded-md border shadow-md'>
        <h1 className='py-4'>Content 1</h1>
        <hr className=" my-6 border border-gray-400 "/>
        <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Content Name
            </label>
            <input
              type="text"
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Introduction to Zero Call Close"
            />
        <label
              htmlFor="course-title"
              className=" font-semibold text-base text-[#6476BA]"
            >
              {" "}
              Upload content file 
            </label>
            <input
              type="text"
              className="px-3 py-4 border-2 border-gray-400 rounded-md"
              placeholder="Introduction to Zero Call Close"
            />
      
    </div>
  )
}

export default CourseContentCard