import React from "react";
import Mail from "../assets/images/icon/mail.svg"
import FaceBook from "../assets/images/icon/facebook.svg"
import Instagram from "../assets/images/icon/instagram.svg"
import Twitter from "../assets/images/icon/twitter.svg"
import Youtube from "../assets/images/icon/youtube.svg"

const Newsletter = () => {
  return (
    <div className="bg-[#B83A3A] flex lg:flex-row flex-col text-white font-Poppins-Regular px-12 lg:px-0 text-sm text-center py-8 items-center relative">
      <p className=" text-2xl lg:pb-0 pb-8 lg:text-[32px] font-Poppins-SemiBold lg:l-40 lg:pr-5">
        Newsletter Sign Up
      </p>
      <div className=" flex items-center " > 
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-2 h-[45px] "
        />
        <button className=" bg-[#510B0B] w-[59px] h-[45px] ml-1 flex justify-center items-center rounded " >
          <img src={Mail}  className="w-[25px]" alt="mail" />
        </button>
      </div>
      <div className=" lg:mt-0 mt-8 lg:ml-0  lg:absolute right-12 flex items-center " >
        <img src={FaceBook}  className="w-[15px] mx-1" alt="mail" />
        <img src={Twitter}  className="w-[25px] mx-1" alt="mail" />
        <img src={Youtube}  className="w-[25px] mx-1" alt="mail" />
        <img src={Instagram}  className="w-[25px] mx-1" alt="mail" />
      </div>
    </div>
  );
};

export default Newsletter;
