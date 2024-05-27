import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../../../utils/Currency";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { MyCourseWishListLoader } from "../../../../components/loader/MyCourseLoader";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const userToken = Cookies.get("userToken");
  const [wishList, setWishList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRemoveFromWishList = async (id) => {
    try {
      const { data } = await axios.delete(
        `${API_URL}/api/v1/wishlist/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (data) {
        localStorage.removeItem(`wishlist_${id}`, "false");
        window.location.reload();
        return data;
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error.message);
      localStorage.setItem(`wishlist_${id}`, "true");
    }
  };

  const getWishList = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${API_URL}/api/v1/wishlist`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setWishList(data?.data);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(`${error?.message} Please check your internet connection ⚠️`);
    }
  };

  useEffect(() => {
    getWishList();
  }, [userToken]);

  if (loading) {
    return <MyCourseWishListLoader />;
  }

  if (wishList.length < 1) return <p className="my-7">No course in wishlist</p>;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 my-7">
      {error && <p className="col-span-full text-center text-red-500">{error}</p>}
      {wishList.map((w) => (
        <div key={w._id} className="w-full md:w-auto lg:w-auto relative">
          <div className="relative">
            <img
              src={w.thumbnail}
              alt={w.title}
              className="w-full h-auto md:h-[150px] lg:h-[200px] mb-2 rounded-tr-xl rounded-tl-xl lg:rounded-lg"
            />
            <div className="absolute top-2 right-3">
              <button onClick={() => handleRemoveFromWishList(w._id)}>
                <FaHeart color="white" size={30} />
              </button>
            </div>
          </div>
          <div className="p-2 h-30 rounded-bl-md rounded-br-md pb-4 shadow-xl shadow-[#032BF214] space-y-1">
            <h2 className="text-[20px] md:max-w-[250px] text-darkBlue font-[650]">
              {w.title.substring(0, 20)}...
            </h2>
            <p className="font-bold text-darkBlue text-xl">
              {formatCurrency(w.price)}
            </p>
            <div className="flex items-center">
              <p className="text-[10px] md:text-[13px]">
                {w.star || "⭐⭐⭐⭐⭐"}
              </p>
            </div>
            <div className="mt-2">
              <button
                className="text-xs border border-darkBlue w-full py-3 rounded hover:bg-darkBlue hover:text-white font-bold md:py-3 text-darkBlue duration-300"
                onClick={() => navigate(`/sales/${w._id}`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default WishList;
