import React from "react";
import Logo from "../assets/images/gwe logo 1.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" absolute left-0 right-0 z-10 top-0 w-full text-white flex py-6 text-[15px] items-center justify-around">
        <div className="mx-10">
          <img src={Logo} alt="logo" />
        </div>

        <div className="mr-6">
          <ul className="flex">
            <li className="mr-6">
              <a href="/">HOME</a>
            </li>
            <li className="mr-6">
              <a href="/sermon">SERMONS</a>
            </li>
            <li className="mr-6 flex items-center ">
              <a href="#">LIVE STREAM</a>
              <div className=" w-[6px] h-[6px] bg-[#FF0000] rounded-full ml-2 " />
            </li>
            <li className="mr-6">
              <a href="/about">ABOUT US</a>
            </li>
            <li className="mr-6">
              <a href="/gallery">GALLERY</a>
            </li>
            <li className="mr-6">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="items-stretch">
          <button
            className="rounded w-[94px] h-[27px] text-black"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            GIVE
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
