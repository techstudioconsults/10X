import { formatCurrency } from "../../../../../utils/Currency";
import courseCheck from "../../../../../assets/course-check.png"
import PropTypes from 'prop-types';

const Details = ({ data }) => {
  return (
    // <div> <p>Paystack Details showing clients</p> </div>
    <div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 py-2 ">
        <div>
          {/* // eslint-disable-next-line react/prop-types */}
          <div className=" w-[500px]  rounded-md">
          <img loading="lazy" className="w-full object-cover rounded-xl" src={data.photo} alt="" />
          </div>
          <h1 className="text-2xl py-5">Course Description</h1>
          <p>{data.description}</p>
        </div>
        
        <div  className="grid grid-cols-1 gap-9">
        <div className="border-1 shadow-md border-gray-500 rounded-md p-4 w-[380px]  flex flex-col gap-5">
            <h1 className="text-blue text-2xl font-bold">{formatCurrency(`${data.price}`)}</h1>
            <p>Course Detail</p>
            <div className="grid grid-cols-2 gap-4 py-3 justify-start" >
             <div className="flex justify-start items-center gap-4">
              <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base"> 100 clients</p>
             </div>
             <div className="flex justify-start items-center gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base">9,927 unit sold</p>
             </div>
             <div className="flex justify-start items-center gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base">5 modules </p>
             </div>
             <div className="flex justify-start items-center gap-4">
             <img src={courseCheck} alt="" />
              <p className="text-gray-500 text-base"> 1,567 reviews</p>
             </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <button className=" text-white  bg-blue rounded-md px-10 text-sm  py-3">Edit</button>
              <button className=" border-red-500 border-2 rounded-md py-3 px-10  text-sm text-red-500">Delete Icon</button>
            </div>

          </div>
          <div className="shadow-md border-1 w-[380px] border-gray-500  p-4">
              <h1>Course Module</h1>
              <p className="py-3 text-gray-600">5 Modules </p>
            </div>
        </div>
        
      </div>
    </div>                      
  );
};

Details.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Details;
