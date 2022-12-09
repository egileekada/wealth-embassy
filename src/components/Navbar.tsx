import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/gwe logo 1.png";

const Navbar = () => {

  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <nav className=" absolute left-0 right-0 z-10 top-0 lg:px-0 px-6 w-full text-white flex py-6 text-[15px] items-center justify-between lg:justify-around">
        <div className="lg:mx-10">
          <img src={Logo} className="w-20 "  alt="logo" />
        </div>

        <div className="mr-6 lg:flex hidden">
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

        <div className="items-stretch lg:flex hidden">
          <button
          onClick={()=> navigate("/give")}
            className="rounded w-[94px] h-[27px] text-black"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            GIVE
          </button>
        </div>
          <button className=" lg:hidden " onClick={onOpen} >
            <div className=" w-[25px] h-[3px] bg-white " />
            <div className=" w-[25px] h-[3px] mt-[3px] bg-white " />
            <div className=" w-[25px] h-[3px] mt-[3px] bg-white " /> 
          </button>
      </nav>

      <Drawer
      
          isOpen={isOpen}
          placement='left'

          onClose={onClose}  >
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
              <DrawerBody >  

                <div className="flex flex-col font-Poppins-Medium px-8 pt-6 bg-white text-black ">
                  
                    <img src={Logo} className="w-20 -mt-5 "  alt="logo" />
                    <a className=" my-3 mt-10 " href="/">HOME</a>
                  
                    <a className=" my-3  " href="/sermon">SERMONS</a>
                    <div className="my-3 flex items-center ">
                      <a href="#">LIVE STREAM</a>
                      <div className=" w-[6px] h-[6px] bg-[#FF0000] rounded-full ml-2 " />
                    </div>
                  
                    <a className=" my-3  "  href="/about">ABOUT US</a>
                  
                    <a className=" my-3  "  href="/gallery">GALLERY</a>
                  
                    <a className=" my-3  "  href="/contact">CONTACT</a>
                      <button
                      onClick={()=> navigate("/give")}
                        className="rounded w-full h-[45px] my-3 text-black"
                        style={{ backgroundColor: "#D9D9D9" }}
                      >
                        GIVE
                      </button>
                </div>
              </DrawerBody>
          </DrawerContent>
      </Drawer>   
    </div>
  );
};

export default Navbar;
