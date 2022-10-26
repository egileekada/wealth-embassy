import React from "react";
import Giveimage from "../../../assets/images/Give section.png";

const GiveSection = () => {
  return (
    <div className="bg-black py-[146px] px-[201px] w-full">
      <div className="text-left">
        <h3 className="text-white text-[20px] font-Poppins-Medium">
          <span className="bg-[#FF8049] text-black">GIVING</span> IS LIVING
        </h3>
        <h2 className="text-white font-Poppins-Medium py-4 leading-snug w-[533px] text-[36px]">
          Try the practice of giving, The universe will thank you!
        </h2>
        <div className="text-white bg-transparent border w-36 border-inherit flex justify-center items-center h-12 text-center">
          GIVE NOW
        </div>
      </div>
    </div>
  );
};

export default GiveSection;
