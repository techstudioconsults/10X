import React from 'react'
import totalOrders from "../../../../../assets/total-orders.png"
import totalClients from "../../../../../assets/total-client.png"
import totalEarnings from "../../../../../assets/total-earnings.png"
import { useFetch } from '../../../../../hooks/useFetch'
import DetailsLoader from '../../../../../components/loader/DetailsLoader'

// eslint-disable-next-line react/prop-types
const Overview = ({courseId}) => {
  console.log(courseId)
  const { single, error, loading } = useFetch(`api/v1/paystack/${courseId}`)
console.log(single);
 const numbers = [1,2,3,4,5,6,7,8,9];

  return (
<div>
  <div className='w-3/4'>
  <div className=' grid grid-cols-1  md:grid-cols-3 gap-5 '>
      <div className='p-5 shadow-md  flex items-center   gap-2'>
        <img src={totalEarnings} alt="" />
        <div>
        <p>Total Earning</p>
        <p className='text-blue font-bold text-lg'>- - -</p>
        </div>
          </div>
      <div className='p-5 shadow-md flex  items-center  gap-2'>  <img src={totalClients} alt="" />  <div><p>Total Clients</p> <p className='text-blue font-bold text-lg'>- - -</p></div>  </div>
      <div className='p-5 shadow-md flex  items-center  gap-2'>  <img src={totalOrders} alt="" /> <div><p>Total Orders</p> <p className='text-blue font-bold text-lg'>- - -</p></div>  </div>
    </div>
  </div>

  <div className="overflow-x-auto pt-7">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
                {/* <th className="px-4 py-3 min-w-36 md:min-w-52 min-w-lg-60">Course Name</th> */}
                <th className="px-4 py-3 min-w-14">No</th>
                <th className="px-4 py-3 min-w-36">Clients</th>
                <th className="px-4 py-3 min-w-36">Email</th>
                <th className="px-4 py-3 min-w-36 md:min-w-52">Date</th>
                <th className="px-4 py-3 min-w-36">Total</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <React.Fragment>
                  <DetailsLoader />
                  <DetailsLoader />
                  <DetailsLoader />
                  <DetailsLoader />
                  <DetailsLoader />
                  {/* <SkeletonRow /> */}
                  {/* Add more SkeletonRow components as needed */}
                </React.Fragment>
          ) : (

            <>
            {
              single < 1 ? numbers.map((i) => (
                <tr
             key={i}
              
                className="border-b my-2 cursor-pointer"
              >
                <td className="px-3 py-3 min-w-36 md:min-w-52">
                  <span className="text-base text-[#0027BA] border-b border-1 border-[#0027BA] font-semibold">
                  {i}
                  </span>
                </td>
                
                <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]"> <span className="text-blue font-bold text-lg">
                    - - -
                  </span></td>
                <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                <span className="text-blue font-bold text-lg">
                    - - -
                  </span>
                </td>
                <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]"> <span className="text-blue font-bold text-lg">
                    - - -
                  </span></td>
                <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                <span className="text-blue font-bold text-lg">
                    - - -
                  </span>
                </td>
              </tr>
              ))   : single.map((datum) => (
                <tr
                  key={datum._id}
                  
                  className="border-b my-2 cursor-pointer"
                >
                  <td className="px-3 py-3 min-w-36 md:min-w-52">
                    <span className="text-base text-[#0027BA] border-b border-1 border-[#0027BA] font-semibold">
                      {datum.title}
                    </span>
                  </td>
                  
                  <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">Nill</td>
                  <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                    {new Date(datum.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">Nill</td>
                  <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                    {datum.price}
                  </td>
                </tr>
              ))
            }
            </>
            
            
          )}
            </tbody>
          </table>
        </div>
</div>
  )
}

export default Overview