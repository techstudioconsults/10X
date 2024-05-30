import React, { useEffect, useState } from "react";
import totalOrders from "../../../../../assets/total-orders.png";
import totalClients from "../../../../../assets/total-client.png";
import totalEarnings from "../../../../../assets/total-earnings.png";
import { useFetch } from "../../../../../hooks/useFetch";
import DetailsLoader from "../../../../../components/loader/DetailsLoader";
import axios from "axios";
import useAdminContext from "../../../../../hooks/useAdminContext";

// eslint-disable-next-line react/prop-types
const Overview = ({ courseId }) => {
  const { API_URL, token } = useAdminContext();
  // console.log(API_URL);
  // console.log(courseId)
  // console.log(token);

  // const { single, error, loading } = useFetch(`api/v1/paystack/${courseId}`)
  // console.log(single);
  const [payment, setPayment] = useState([]);
  const [analytics, setAnalytics] = useState({})
  const [loading, setLoading] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const {count} = payment
  // console.log(count);
  const getPaymentDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/v1/payment/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      console.log(res.data.data);
      setAnalytics(res.data)
      setPayment(res.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentDetails();
  }, [courseId]);

  console.log(payment);
  console.log(analytics);
  return (
    <div>
      <div className="w-full lg:w-3/4">
        <div className=" grid grid-cols-1  md:grid-cols-3 gap-5 ">
          <div className="p-5 shadow-md  flex items-center justify-evenly lg:justify-start  gap-2">
            <img src={totalEarnings} alt="" />
            <div>
              <p>Total Earning</p>
              <p className="text-blue font-bold text-lg">{analytics?.totalAmount || "---"}</p>
            </div>
          </div>
          <div className="p-5 shadow-md flex justify-evenly lg:justify-start  items-center  gap-2">
            {" "}
            <img src={totalClients} alt="" />{" "}
            <div>
              <p>Total Clients</p>{" "}
              <p className="text-blue font-bold text-lg">{analytics?.count || "---"}</p>
            </div>{" "}
          </div>
          <div className="p-5 shadow-md flex justify-evenly lg:justify-start  items-center  gap-2">
            {" "}
            <img src={totalOrders} alt="" />{" "}
            <div>
              <p>Total Orders</p>{" "}
              <p className="text-blue font-bold text-lg">{analytics?.count || "---"} </p>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto pt-7">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-[#F8F8F8] text-[#7C87AC] font-medium">
              {/* <th className="px-4 py-3 min-w-36 md:min-w-52 min-w-lg-60">Course Name</th> */}
              <th className="px-4 py-3 min-w-14"> S/N</th>
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
              // <div></div>
              <>
                {payment < 1
                  ? numbers.map((i) => (
                      <tr key={i} className="border-b my-2 cursor-pointer">
                        <td className="px-3 py-3 min-w-36 md:min-w-52">
                          <span className="text-base text-[#0027BA] border-b border-1 border-[#0027BA] font-semibold">
                            {i}
                          </span>
                        </td>

                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {" "}
                          <span className="text-blue font-bold text-lg">
                            - - -
                          </span>
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          <span className="text-blue font-bold text-lg">
                            - - -
                          </span>
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {" "}
                          <span className="text-blue font-bold text-lg">
                            - - -
                          </span>
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          <span className="text-blue font-bold text-lg">
                            - - -
                          </span>
                        </td>
                      </tr>
                    ))
                  : payment.map((datum, index) => (
                      <tr
                        key={datum._id}
                        className="border-b my-2 cursor-pointer"
                      >
                        <td className="px-3 py-3 min-w-36 md:min-w-52">
                          <span className="text-base text-[#0027BA] border-b border-1 border-[#0027BA] font-medium">
                           {index + 1}
                          </span>
                        </td>

                        <td className="px-5 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                         {datum.fullname}
                        </td>
                        <td className="px-5 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {datum.email}
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {new Date(datum.paymentDate).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {datum.amount}
                        </td>
                        <td className="px-4 py-3 min-w-36 md:min-w-52 text-[#6072AC]">
                          {/* {datum.price} */}
                        </td>
                      </tr>
                    ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
