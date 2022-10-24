import React from "react";
import Logo from "../assets/images/gwe logo 1.png";

const Navbar = () => {
  return (
    <div>
      <nav className="container flex py-8 justify-around">
        <div className="mx-10">
          <img src={Logo} alt="logo" />
        </div>

        <div className="mr-6">
          <ul className="flex">
            <li className="mr-6">
              <a href="/">HOME</a>
            </li>
            <li className="mr-6">
              <a href="#">SERMONS</a>
            </li>
            <li className="mr-6">
              <a href="#">LIVE STREAM</a>
            </li>
            <li className="mr-6">
              <a href="#">ABOUT US</a>
            </li>
            <li className="mr-6">
              <a href="#">GALLERY</a>
            </li>
            <li className="mr-6">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="items-stretch">
          <button
            className="rounded p-2 text-black"
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
