import dotIcon from "../../../../assets/Vector123.png";
import PropTypes from "prop-types";
import { NewSliders } from "../Carousel/NewSlider";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { NewAccordions } from "../accordion/NewAccordion";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import useUserContext from "../../../../hooks/useUserContext";
import BuyAgain from "../Buyagain/BuyAgain";

const Section1 = () => {
  const {userInfo} = useUserContext()
  console.log(userInfo);
  const { id } = useParams();
  //  console.log(id);
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);

  console.log(single?.content?.length);

  return (
    <div className="flex justify-center container mx-auto carousel-class mb-7 w-full">
      <div className="w-11/12 mx-auto container ">
        <div className="flex flex-col-reverse md:flex-row mx-auto w-full">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 w-full xl:gap-40 items-stretch">
            <div className="flex flex-col gap-5 lg:pt-10 lg:w-1/2 w-full">
              <div className="flex flex-col items-start gap-3">
                <SectionHeading title="Description" color="#0027BA" />
                <h1 className="max-w-xl text-xl text-[#6476BA]">
                  {/* {single?.description} */}
                  In this workshop, I lay bare the strategies and tactics I used to 10X my business revenue while working less than 2hrs a day.
                  
                  </h1>
                  <li className="text-[#6476BA]  text-base">
                  The 3-STEP FORMULAR you need to grow your annual revenue to ₦100m in under 3 years without investors funding.
                  </li>
                  <li className="text-[#6476BA] text-lg">
                  How you can spend less than 10hours/week on your business while it makes you millions every single month.
                  </li>
                  <li className="text-[#6476BA] text-lg">How I started with less than ₦50k and made ₦10m in the first year of running my business</li>
              </div>
  
              <NewAccordions single={single} />

              {/* show when user is authenticated */}
            { userInfo &&   <div className="lg:w-full" id="form pt-6">
              <h1 className="text-2xl lg:text-left font-semibold text-center mt-10 py-3 lg:py-0 text-[#0027BA]">
              Why people choose this 
              </h1>
              <NewSliders />
              {/* <PurchaseForm /> */}
            </div>}
            </div>

            {/* authenticated user purchased form  */}

            {/* <div className="lg:w-1/2" id="form pt-6">
              <h1 className="text-2xl font-semibold mt-10 py-3 lg:py-0 text-[#0027BA]">
              Why people choose this
              </h1>
      
            </div> */}
              {/* <PurchaseForm /> */}

            {/* show when user is unauthenticated */}
        {!userInfo &&     
            <div className="lg:w-1/2 pt-10" id="form ">
              <h1 className="text-2xl font-semibold text-center mt-10 py-3 lg:py-0 text-[#0027BA]">
              Why people choose this
              </h1>
              <NewSliders />
              {/* <PurchaseForm /> */}
            </div>}

            {userInfo && <BuyAgain/>}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title, color, responsive,  }) => {
  return (
    <h2 className={`text-2xl font-semibold text-[${color}]  ${responsive} my-5`}>
      {title}
    </h2>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Section1;
