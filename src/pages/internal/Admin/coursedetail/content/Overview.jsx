import React from 'react'
import totalOrders from "../../../../../assets/total-orders.png"
import totalClients from "../../../../../assets/total-client.png"
import totalEarnings from "../../../../../assets/total-earnings.png"
import { useFetch } from '../../../../../hooks/useFetch'

const Overview = ({courseId}) => {
  console.log(courseId)
  const { single, error, loading } = useFetch(`api/v1/paystack/${courseId}`)
console.log(single);

  return (
<div>
  <div className='w-3/4'>
  <div className=' grid grid-cols-1  md:grid-cols-3 gap-5 '>
      <div className='p-5 shadow-md  flex items-center   gap-2'>
        <img src={totalEarnings} alt="" />
         <p>Total Earning</p> </div>
      <div className='p-5 shadow-md flex  items-center  gap-2'>  <img src={totalClients} alt="" /> <p>Total Clients</p> </div>
      <div className='p-5 shadow-md flex  items-center  gap-2'>  <img src={totalOrders} alt="" /> <p>Total Orders</p> </div>
    </div>
  </div>
</div>
  )
}

export default Overview