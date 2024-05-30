import React, { useState } from "react";
import useUserContext from "../../../../hooks/useUserContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import { formatCurrency } from "../../../../utils/Currency";
import axios from "axios";

const BuyAgain = () => {
  const { userInfo, API_URL, userToken } = useUserContext();
  // console.log(userInfo);
  // console.log(API_URL);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);
  // console.log(single);

  const buyAgain = async () => {
    try {
      setIsLoading(true);
      const formData = {
        userId: userInfo?.data._id,
        email: userInfo?.data.email,
        amount: single?.price,
        fullname: userInfo?.data.fullname,
        courseId: id,
      };
      console.log(formData);
      const res = await axios.post(
        `${API_URL}/api/v1/payment/purchasecourse`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if(res.status === 200){
      setIsLoading(false);
      console.log(res.data.data.message);
      console.log(res.data.data.data.authorization_url);
      const authorizationUrl = res.data.data.data.authorization_url
      window.open(authorizationUrl, "_blank");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="pt-5 lg:pt-32 ">
      <div className="w-[400px] flex flex-col justify-center  shadow-md pb-9 rounded-b-lg">
        <img
          className="w-full min-w-[400px] min-h-56 rounded-t-lg"
          src={single?.thumbnail}
          alt=""
        />
        <div className="bg-white ">
          <h1 className="text-4xl text-center font-bold text-blue py-6">
            {formatCurrency(`${single?.price}`)}
          </h1>
          <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
            <button
              type="submit"
              onClick={buyAgain}
              className="bg-[#032BF2] text-white hover:bg-blue-600 rounded-md p-2 w-full transition duration-300 font-bold"
            >
              {isLoading ? "loading...." : "Buy Now"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAgain;
