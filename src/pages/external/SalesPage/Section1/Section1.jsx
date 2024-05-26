import dotIcon from "../../../../assets/Vector123.png";
import PropTypes from "prop-types";
import { NewSliders } from "../Carousel/NewSlider";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { NewAccordions } from "../accordion/NewAccordion";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";

const Section1 = () => {
  const { id } = useParams();
  //  console.log(id);
  const { single, error, loading } = useFetch(`/api/v1/course/${id}`);

  console.log(single?.content?.length);

  return (
    <div className="flex justify-center container mx-auto carousel-class mb-7 w-full">
      <div className="w-11/12 mx-auto container ">
        <div className="flex flex-col-reverse md:flex-row mx-auto w-full">
          <div className="flex flex-col-reverse lg:flex-row gap-20 w-full xl:gap-40 items-stretch">
            <div className="flex flex-col gap-5 lg:pt-36 lg:w-1/2 w-full">
              <div className="flex flex-col items-start gap-3">
                <SectionHeading title="Description" color="#0027BA" />
                <p className="max-w-xl text-[#6476BA]">{single?.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <SectionHeading title="Course content" color="#0027BA" />
                <div className="flex items-center gap-2">
                  <p className="text-[#6476BA]">
                    {single?.content?.length} sections
                  </p>
                  <img src={dotIcon} alt="dot icon" />
                  <p className="text-[#6476BA]">1h 17m total length</p>
                </div>
              </div>
              <NewAccordions single={single} />
              <SectionHeading
                title={`Why people choose the ${single?.title}`}
                color="#0027BA"
                responsive={"text-center lg:text-start"}
              />
              <NewSliders />
            </div>
            <div className="lg:w-1/2" id="form">
              <PurchaseForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title, color, responsive }) => {
  return (
    <h2 className={`text-2xl font-semibold text-[${color}] ${responsive} my-3`}>
      {title}
    </h2>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Section1;
