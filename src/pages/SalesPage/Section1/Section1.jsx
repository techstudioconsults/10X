import dotIcon from "../../../assets/Vector123.png";
import PropTypes from "prop-types";
import { NewSliders } from "../Carousel/NewSlider";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { NewAccordions } from "../accordion/NewAccordion";

const Section1 = () => {
  return (
    <div className="flex justify-center pt-9">
      <div className="container w-11/12 xl:w-11/12 2xl:w-11/12">
        <div className="flex flex-col md:flex-row mx-auto items-center">
          <div className="flex flex-col-reverse md:flex-row justify-center">
            <div className="flex flex-col-reverse md:flex-row gap-9 lg:gap-72 items-stretch">
              <div className="flex flex-col gap-5">
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
                />
              </div>
              <div>
                <PurchaseForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ title, color }) => {
  return <h2 className={`text-3xl font-semibold text-${color}`}>{title}</h2>;
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Section1;
