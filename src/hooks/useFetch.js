import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

export const useFetch = (url, token) => {
  const [loading, setLoading] = useState(false);
  const [single, setSingle] = useState([])
  const [content, setContent] = useState([]);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState([]);
  const [videos, setVideos] = useState([]);
  const [allResource, setAllResource] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterClicked, setFilterClicked] = useState(false); // New state

  const navigate = useNavigate();

  //

  useEffect(() => {

    const getSingleResource = async ()=>{
      try {
        setLoading(true);
        const res = await axiosInstance.get(url);
        const singleDatum = res.data.data;
        if (res.status == 200) {
          setLoading(false);
        }
        setSingle(singleDatum)
      } catch (error) {
        setError(error)
        console.error
      }
      
    }
    getSingleResource()
    const fetchResource = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(url);
        const resourceData = res.data.data;
        if (res.status == 200) {
          setLoading(false);
        }
        setContent(resourceData);
        setAllResource(resourceData);
        // console.log(resourceData);
        setBooks(resourceData.filter((item) => item.category === "pdf"));
        setVideos(resourceData.filter((item) => item.category === "video"));
      } catch (error) {
        setError(error)
        console.log(error);
      }
    };
    fetchResource();

    if (searchTerm.trim() === "") {
      setSearchResults([]);
    }
  }, [url, searchTerm, filterClicked]);

  return {
    content,
    setContent,
    books,
    videos,
    allResource,
    setLoading,
    loading,
    filterClicked,
    setFilterClicked,
    error,
    setError,
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    single,
  };
};
