import React, { useState } from 'react'
import closeIcon from '../../../../../assets/remove-content.svg'
import plusIcon from '../../../../../assets/plus-icon.png'

const CourseContent = () => {
  const [showTwo, setShowTwo] = useState(false)
  const [showThree, setShowThree] = useState(false)

  const toggleContent = () => {
    setShowTwo(!showTwo)
  }

  const toggleThree = ()=>{
    setShowThree(!showThree)
  }


  return (
    <div>
      {/* Header Section */}
      <div className=" flex flex-col md:flex-row justify-between md:items-center gap-6 ">
        <div>
          <h1 className="text-[#0027BA] text-center md:text-start text-3xl font-bold">
            Fill in course content
          </h1>
          <p className="text-[#818181] text-center md:text-start pt-1 md:pt-2 text-base md:text-lg ">
            Please fill in all the details of your course.
          </p>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <button
            className="text-[#032BF2] text- font-bold border-[#032BF2] border-2 bg-white w-32 h-12 rounded-lg "
          >
            Save as Draft
          </button>
          <button
            className="text-white bg-[#032BF2] w-32 h-12 rounded-lg "
          >
            Publish
          </button>
        </div>
      </div>

      <hr className=" my-6 border border-gray-400 " />

      {/* Content Section */}
      <div className='relative pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center'>
        {/* Content 1 */}
        <div className='p-7 rounded-md border shadow-md w-full xl:max-w-[500px]'>
          <h1 className='py-4 text-[#A5A5A5] font-medium '>CONTENT 1</h1>
          <hr className=" my-6 border border-gray-400 " />
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor="course-title"
                className=" font-semibold text-base text-[#6476BA]"
              >
                Content Name
              </label>
              <input
                type="text"
                className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
                placeholder="Introduction to Zero Call Close"
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label
                htmlFor="course-title"
                className=" font-semibold text-base text-[#6476BA]"
              >
                Upload content file
              </label>
              <div className='flex w-full '>
                <input
                  type="text"
                  className="px-3 w-[65%] py-2 h-[48px] border-2 border-gray-400 border-r-0 rounded-l-md"
                  placeholder="Browser files or drag and drop here"
                />
              <button className='w-[35%] bg-[#032BF2] text-white rounded-r-md flex justify-center items-center gap-4'> <img src={plusIcon} alt="" /> <span>Add</span></button>
              </div>
              <p className='text-[#969BAC] font-medium text-sm pt-3'>Files Uploaded will appear here</p>
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className='flex flex-col justify-center items-center'>
          {showTwo && (
            <div className='p-7 rounded-md border shadow-md w-full xl:max-w-[500px]'>
              <div className='flex justify-between' > <h1 className='py-4 text-[#A5A5A5] font-medium '>CONTENT 2</h1>
              <img className='cursor-pointer' onClick={toggleContent} src={closeIcon} alt="" /> </div>
              <hr className=" my-6 border border-gray-400 " />
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="course-title"
                    className=" font-semibold text-base text-[#6476BA]"
                  >
                    Content Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
                    placeholder="Introduction to Zero Call Close"
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="course-title"
                    className=" font-semibold text-base text-[#6476BA]"
                  >
                    Upload content file
                  </label>
                  <div className='flex w-full '>
                    <input
                      type="text"
                      className="px-3 w-[65%] py-2 h-[48px] border-2 border-gray-400 border-r-0 rounded-l-md"
                      placeholder="Browser files or drag and drop here"
                    />
                    <button className='w-[35%] bg-[#032BF2] text-white rounded-r-md flex justify-center items-center gap-4'> <img src={plusIcon} alt="" /> <span>Add</span></button>
                  </div>
                  <p className='text-[#969BAC] font-medium text-sm pt-3'>Files Uploaded will appear here</p>
                </div>
              </div>
            </div>
          )}
          {!showTwo && (
            <button
              onClick={toggleContent}
              className='text-white bg-[#032BF2] w-[191px] rounded-lg py-2'
            >
              Add Content
            </button>
          )}
        </div>
        {/* Content 3 */}
        
          {showThree && (
            <div className='p-7 rounded-md border shadow-md w-full xl:max-w-[500px]'>
              <div className='flex justify-between' > <h1 className='py-4 text-[#A5A5A5] font-medium '>CONTENT 3</h1>
              <img className='cursor-pointer' onClick={toggleThree} src={closeIcon} alt="" /> </div>
              <hr className=" my-6 border border-gray-400 " />
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="course-title"
                    className=" font-semibold text-base text-[#6476BA]"
                  >
                    Content Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 h-[48px] border-2 border-gray-400 rounded-md"
                    placeholder="Introduction to Zero Call Close"
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor="course-title"
                    className=" font-semibold text-base text-[#6476BA]"
                  >
                    Upload content file
                  </label>
                  <div className='flex w-full '>
                    <input
                      type="text"
                      className="px-3 w-[65%] py-2 h-[48px] border-2 border-gray-400 border-r-0 rounded-l-md"
                      placeholder="Browser files or drag and drop here"
                    />
                    <button className='w-[35%] bg-[#032BF2] text-white rounded-r-md flex justify-center items-center gap-4'> <img src={plusIcon} alt="" /> <span>Add</span></button>
                  </div>
                  <p className='text-[#969BAC] font-medium text-sm pt-3'>Files Uploaded will appear here</p>
                </div>
              </div>
            </div>
          )}
          {showTwo && !showThree && (
          <div className='absolute bottom-0 w-full flex justify-around'>
              <button
              onClick={toggleThree}
              className='text-white bg-[#032BF2] mb-4 md:mb-1 w-[191px] rounded-lg py-2 flex justify-center items-center gap-4  '
            > <img src={plusIcon} alt="" />
             <span> Add Content</span>
            </button>
          </div>
          )}
        

      </div>
    </div>
  )
}

export default CourseContent