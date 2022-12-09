import React from "react";
import calendar from "../../../assets/images/calendar.png";

const UpcomingEvents = () => {
  return (
    <section className="relative w-full hidden lg:flex justify-center ">
      <div style={{boxShadow: "1px 15px 21px 4px rgba(0, 0, 0, 0.25)"}}  className=" absolute -bottom-20 z-40  flex items-center w-[902px] h-[144px] bg-white rounded ">
        <div className="flex bg-[#F0F0F0] w-fit px-8 h-full rounded-tl rounded-bl items-center">
          <img src={calendar} alt="calender" className="" />
          <div className=" ml-1 " >
            <h4 className="  font-Poppins-Regular text-[20px]">
              Upcoming event
            </h4>
            <p className="text-[15px] font-Poppins-Regular">
              Next
            </p>
          </div>
        </div>
        <div className=" mx-auto " >
          <h4 className=" font-Poppins-Bold text-[#B83A3A] text-[35px]">
            Bible Study
          </h4>
          <p className="font-Poppins-Regular font-[12px]">14 October, 2022</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto">
          <div className="flex flex-col">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-[2px] bg-black" />
            <p className="font-Poppins-Regular font-[20px]">Days</p>
          </div>
          <div className="flex flex-col">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-[2px] bg-black" />
            <p className="font-Poppins-Regular font-[20px]">Hrs</p>
          </div>
          <div className="flex flex-col">
            <p className="font-Poppins-Regular font-[20px]">02</p>
            <hr className="h-[2px] bg-black" />
            <p className="font-Poppins-Regular font-[20px]">Min</p>
          </div>
        </div>
        <div className=" mx-auto pr-8 " >
          <button className="text-white bg-[#B83A3A] w-[135px] h-[45px] font-Poppins-Regular rounded">
            All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
