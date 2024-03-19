import dot from "../../../assets/Vector123.png";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { NewAccordions } from "../accordion/NewAccordion";

const Section1 = () => {
  return (
    <div className="flex justify-center pt-9">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12 max-w-screen-xl">
        <div className=" flex flex-col md:flex-row mx-auto items-center ">
          <div className="flex flex-col-reverse md:flex-row justify-center">
            <div className="flex flex-col-reverse md:flex-row gap-9 lg:gap-48 items-stretch">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-3xl text-[#0027BA] font-semibold">
                    Description
                  </h2>
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
                  <h2 className="text-3xl text-[#0027BA] font-semibold">
                    Course content
                  </h2>
                  <div className="flex items-center gap-2">
                    <p className="text-[#6476BA]">6 sections</p>
                    <img src={dot} alt="" />
                    <p className="text-[#6476BA]">1h 17m total length</p>
                  </div>
                </div>
                <NewAccordions />

                <div className="flex flex-col justify-center gap-4 py-7">
                  <h2 className="text-3xl text-[#0027BA] font-semibold">
                    Why people choose the zero call close
                  </h2>
                </div>
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

export default Section1;
