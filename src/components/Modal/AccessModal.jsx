import { Button, Dialog } from "@material-tailwind/react";
import successIcon from "../../assets/Success Icon.svg";
import { useState } from "react";
import ThanyouModal from "./ThanyouModal";
import RegistrationModal from "./RegistrationModal";

const AccessModal = ({ open, setOpen }) => {
  const [thankYou, setThankYou]= useState(false)
  const [openReg, setOpenReg] = useState(false)
  
  const closeModal = () => {
    setOpen(false);
  };

  const notInterested = ()=>{
    setOpen(false)
    setThankYou(true)
  }
  const interested = ()=>{
    setOpen(false)
    setOpenReg(true)
    // setThankYou(true)
  }
  return (
    <div>
      <div>
        <ThanyouModal thankYou={thankYou} setThankYou={setThankYou}/>
        <RegistrationModal openReg={openReg} setOpenReg={setOpenReg}  />
      </div>
      <Dialog
        size="lg md:sm"
        open={open}
        handler={open}
        className="flex py-7 px-4 lg:px-6 xl:px-10 flex-col items-center justify-center gap-2"
      >
        <span className="w-24 lg:w-36 h-24 lg:h-36">
          <img className="w-full" src={successIcon} alt="" />
        </span>
        <h2 className="text-blue font-semibold lg:font-bold text-lg lg:text-xl xl:text-2xl text-center">
        Your Document is on its way!
        </h2>
        <p className="text-fadedBlue text-[15px] lg:text-base xl:text-xl text-center">
        In the mean time, we have a <span className="text-red-600 font-bold text-[15px] lg:text-base xl:text-xl" >ONE TIME OFFER</span> for you, for just <span className="text-red-600 font-bold text-[15px] lg:text-base xl:text-xl" >N10,000</span>
        </p>

       <div className="flex flex-col justify-start w-full ps-0 ">
       <h2 className="text-blue font-semibold text-left text-lg lg:text-xl xl:text-2xl" >Offer Details</h2>
       </div>
      <p className="text-[#6072AC] text-xs lg:text-lg xl:text-xl">
      In this workshop, I lay bare the strategies and tactics I used to 10X my business revenue while working less than 2hrs a day
      </p>
      <li className="text-[#6072AC] text-xs lg:text-lg xl:text-xl">
      The 3-STEP FORMULAR you need to grow your annual revenue to ₦100m in under 3 years without investors funding.
      </li>
      <li className="text-[#6072AC] text-xs lg:text-lg xl:text-xl" >How you can spend less than 10hours/week on your business while it makes you millions every single month.</li>
       
        <div className="flex flex-row items-center px-0 lg:px-8 justify-center w-full gap-3 lg:gap-5 pt-4">
          <Button
            onClick={interested}
            className="bg-blue w-full mx-auto text-center text-white p-3 flex items-center justify-center gap-3 "
          >
            {" "}
            Interested
          </Button>
          <Button
            onClick={notInterested}
            className="border-[#032BF2]  border-2 bg-transparent w-full mx-auto text-center text-[#032BF2] p-3 flex items-center justify-center gap-3 "
          >
            {" "}
            Not Interested
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AccessModal;
