import React from "react";
import { useNavigate } from "react-router-dom";
import Giveimage from "../../../assets/images/Give section.png";

const GiveSection = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-black py-[146px] lg:px-[201px] px-6 lg:mt-0 mt-10 w-full">
      <div className="text-left">
        <h3 className="text-white text-[18px] font-Poppins-Medium">
          <span className="bg-[#FF8049] text-black">GIVING</span> IS LIVING
        </h3>
        <h2 className="text-white font-Poppins-Medium py-4 leading-snug lg:w-[533px] text-[20px] lg:text-[30px]">
          Try the practice of giving, The universe will thank you!
        </h2>
        <button onClick={()=> navigate("/give")} className="text-white bg-transparent border w-36 border-inherit flex justify-center items-center h-[45px] rounded text-center">
          GIVE NOW
        </button>
      </div>
    </div>
  );
};

export default GiveSection;
