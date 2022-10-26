import React from "react";
import Logo from "../assets/images/gwe logo 1.png";
import Phone from "../assets/images/Vector.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-around">
        <div>
          <div>
            <img src={Logo} alt="logo" className="w-[148px] h-auto" />
          </div>
        </div>
        <div>
          <h4 className="font-Poppins-Medium text-[24px]">Address</h4>
          <p className="font-Poppins-Regular text-[14px] w-[318px] h-[232px] mt-2 leading-5">
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
          <h4 className="font-Poppins-Medium text-[24px]">Main Links</h4>
          <ul className="mt-2">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Event</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-Poppins-Medium text-[24px]">Contact</h4>
          <ul>
            <li>addressline xxxxxxxxxxxxxxx</li>
            <li>addressline xxxxxxxxxxxxxxx</li>
            <li>addressline xxxxxxxxxxxxxxx</li>
          </ul>
          <div className="flex items-center">
            <div>
              <img src={Phone} alt="phone" />
            </div>
            <div className="flex flex-col">
              <p className="font-Poppins-Medium text-[15px]">+2349077601790</p>
              <p className="font-Poppins-Medium text-[15px]">+2349067543521</p>
            </div>
          </div>
          <p className="font-Poppins-Regular text-[13px] leading-4">
            Mail us on
            <br /> gospelwealthembassyint
            <br /> @gmail.com
          </p>
        </div>
      </div>
      <div className="bg-[#B83A3A] text-white font-Poppins-Regular text-center p-6">
        Designed by <span className="font-Poppins-Semibold">ICOWEB AGENCY</span>
      </div>
    </footer>
  );
};

export default Footer;
