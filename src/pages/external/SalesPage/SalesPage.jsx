
import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Section1 from "./Section1/Section1";
import { useLocation, useParams } from "react-router";
import { useFetch } from "../../../hooks/useFetch";


const SalesPage = () => {
  const {id}= useParams()
  const {content} = useFetch(`/api/v1/course/${id}`)
console.log(content);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="pt-10">
    <HeroSection content={content}/>
      <Section1 content={content} />
     
    </div>
  );
};

export default SalesPage;
