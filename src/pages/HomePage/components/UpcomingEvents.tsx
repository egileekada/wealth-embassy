import React from "react";
import calendar from "../../../assets/images/calendar.png";

const UpcomingEvents = () => {
  return (
    <section className="relative">
      <div className=" absolute flex items-center justify-evenly w-[1102px] h-[174px] rounded top-[-1.9] bg-slate-600 left-28">
        <div className="flex bg-[#F0F0F0] w-[204px] h-[87px] items-center">
          <img src={calendar} alt="calender" className="w-[33px] h-[36.67px]" />
          <div>
            <h4 className="font-bold font-Poppins-Regular font-[30px]">
              Upcoming event
            </h4>
            <p className="font-[15px] font-semibold font-Poppins-Regular">
              Next
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold font-Poppins-Regular text-[#B83A3A] font-[40px]">
            Bible Study
          </h4>
          <p className="font-Poppins-Regular font-[12px]">14 October, 2022</p>
        </div>
        <div className="flex">
          <div className="flex flex-col mx-1">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-1" />
            <p className="font-Poppins-Regular font-[20px]">Days</p>
          </div>
          <div className="flex flex-col mx-1">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-1" />
            <p className="font-Poppins-Regular font-[20px]">Hrs</p>
          </div>
          <div className="flex flex-col">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-1" />
            <p className="font-Poppins-Regular font-[20px]">Min</p>
          </div>
        </div>
        <div>
          <button className="text-white bg-[#B83A3A] w-[165px] h-[45px] font-Poppins-Regular rounded">
            All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
