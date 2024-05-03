
import { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Section1 from "./Section1/Section1";
import { useLocation } from "react-router";

const SalesPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="pt-20">
    <HeroSection/>
      <Section1 />
     
    </div>
  );
};

export default SalesPage;
