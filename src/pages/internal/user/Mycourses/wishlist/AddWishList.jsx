import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const AddWishList = ({ id }) => {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [show, setShow] = useState(false);
  const userToken = Cookies.get("userToken");

  useEffect(() => {
    const isInWishlist = localStorage.getItem(`wishlist_${id}`);
    setShow(isInWishlist === "true");
  }, [id]);

  const handleAddToWishList = async () => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/wishlist/add/${id}`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(data);
      if (data) {
        // alert("Added to wishlist");
        setShow(true);
        localStorage.setItem(`wishlist_${id}`, "true");
        return data;
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
      // alert("Failed to add to wishlist");
      setShow(false);
      localStorage.removeItem(`wishlist_${id}`, "false");
    }
  };

  const handleRemoveFromWishList = async () => {
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
        // alert("Removed from wishlist");
        setShow(false);
        localStorage.removeItem(`wishlist_${id}`, "false");
        return data;
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error.message);
      // alert("Failed to remove from wishlist");
      setShow(true);
      localStorage.setItem(`wishlist_${id}`, "true");
    }
  };

  return (
    <main>
      {show ? (
        <button
          onClick={handleRemoveFromWishList}
          className="h-16 px-3 whitespace-nowrap md:m-0 mx-auto border rounded-lg text-lg font-semibold"
        >
          Remove from wishlist
        </button>
      ) : (
        <button
          onClick={handleAddToWishList}
          className="h-16 lg:w-56 w-40 md:m-0 mx-auto border rounded-lg text-lg font-semibold"
        >
          Add to wishlist
        </button>
      )}
    </main>
  );
};
