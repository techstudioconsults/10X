import dotIcon from "../../../../assets/Vector123.png";
import PropTypes from "prop-types";
import { NewSliders } from "../Carousel/NewSlider";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { NewAccordions } from "../accordion/NewAccordion";

const Section1 = () => {
  return (
    <div className="flex justify-center carousel-class mb-7 w-full">
      <div className="w-full">
        
          <div className="flex flex-col-reverse md:flex-row mx-auto w-full">
            <div className="flex flex-col-reverse lg:flex-row gap-20 w-full xl:gap-40 items-stretch">
              <div className="flex flex-col gap-5 lg:pt-36 lg:w-1/2 w-full ">
                <div className="flex flex-col items-start gap-3">
                  <SectionHeading title="Description" color="#0027BA" />
                  <p className="max-w-xl text-[#6476BA]">
                    Are you tired of dealing with time-wasting prospects or
                    uncomfortable with making sales calls? "The Zero Call Close"
                    offers you a game-changing solution. This course is
                    specifically designed to empower you with the skills and
                    knowledge needed to close 40% of your sales conversations
                    without ever picking up the phone. Whether you are a
                    seasoned professional or just starting in sales, this
                    step-by-step framework will guide you through transforming
                    potential clients into premium buyers, even for offers
                    valued between $5,000 and $30,000. Say goodbye to phone call
                    anxiety and hello to increased sales success.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <SectionHeading title="Course content" color="#0027BA" />
                  <div className="flex items-center gap-2">
                    <p className="text-[#6476BA]">6 sections</p>
                    <img src={dotIcon} alt="dot icon" />
                    <p className="text-[#6476BA]">1h 17m total length</p>
                  </div>
                </div>
                <NewAccordions />
                <SectionHeading
                  title="Why people choose the zero call close"
                  color="#0027BA"
                  responsive={"text-center lg:text-start"}
                />
                <NewSliders />
              </div>
              <div className="lg:w-1/2">
                <PurchaseForm />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

const SectionHeading = ({ title, color, responsive }) => {
  return <h2 className={`text-2xl font-semibold text-[${color}] ${responsive} my-3`}>{title}</h2>;
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Section1;
