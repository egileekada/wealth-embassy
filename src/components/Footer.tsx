import React from "react";
import Logo from "../assets/images/gwe logo 1.png";
import Phone from "../assets/images/Vector.png";

const Footer = () => {
  return (
    <footer className=" w-full pt-[90px] ">
      <div className="flex lg:flex-row flex-col lg:justify-around  lg:px-0 px-6 pb-[42px]  ">
        <div>
          <div className=" lg:h-[90px] " > 
            <img src={Logo} alt="logo" className=" w-[148px] lg:mx-0 lg:-ml-10 mx-auto lg:my-auto h-auto" />
          </div>
          <h4 className="font-Poppins-Bold text-center lg:text-left text-[24px] lg:mt-0 mt-8 ">Address</h4>
          <p className="font-Poppins-Regular  text-justify text-[14px] lg:w-[318px] lg:h-[232px] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget
            rhoncus volutpat faucibus enim vitae ac egestas. Nisl a vitae ornare
            dictum a ut purus felis. Est id odio at ac in elementum non. Est
            scelerisque adipiscing volutpat, lectus at turpis pharetra. Arcu
            eget adipiscing a sociis mi nec at pellentesque ante. Nam
            pellentesque viverra fringilla turpis. Faucibus penatibus amet lacus
            sit nisl. Nulla diam egestas lectus donec lacus odio dapibus sem.
            Tempus.
          </p>
        </div>
        <div>
          <h4 className="font-Poppins-Medium text-[24px]  lg:mt-[90px] mt-4 ">Main Links</h4>
          <ul className="mt-2 text-sm ">
            <li>Home</li>
            <li className=" my-3 ">About</li>
            <li className=" my-3 ">Gallery</li>
            <li className=" my-3 ">Event</li>
            <li className=" my-3 ">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-Poppins-Medium text-[24px] lg:mt-[90px] mt-4 ">Contact</h4>
          <ul>
            <li className=" text-sm my-3 ">addressline xxxxxxxxxxxxxxx</li>
            <li className=" text-sm my-3 ">addressline xxxxxxxxxxxxxxx</li>
            <li className=" text-sm my-3 ">addressline xxxxxxxxxxxxxxx</li>
          </ul>
          <div className="flex items-center mb-3">
            <div>
              <img src={Phone} alt="phone" />
            </div>
            <div className="flex flex-col ml-4">
              <p className="font-Poppins-Medium mb-2 text-sm ">
                +2349077601790
              </p>
              <p className="font-Poppins-Medium text-sm ">+2349067543521</p>
            </div>
          </div>
          <p className="font-Poppins-Regular text-[13px] leading-4">
            Mail us on
            <br /> gospelwealthembassyint@gmail.com
          </p>
        </div>
      </div>
      <div className="bg-[#B83A3A] text-white font-Poppins-Regular text-xs lg:text-sm text-center py-3">
        Designed by <span className="font-Poppins-SemiBold">ICOWEB AGENCY</span>
      </div>
    </footer>
  );
};

export default Footer;
