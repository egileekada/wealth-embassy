import React from "react";
import Footer from "../../components/Footer";
import FormComponent from "./components/FormComponent";
import HeroSection from "../../components/HeroSection";
import map from "../../assets/images/Rectangle35.png";
import Bible from "../../assets/images/Rectangle 27.png";
import phone from "../../assets/images/phone.png";
const index = () => {
  return (
    <section>
      <HeroSection title="GOD GIVES US POWER" />

      <FormComponent />
      <div className=" w-full flex ">
        <div className="flex lg:flex-row flex-col max-w-[1200px] lg:mx-auto lg:justify-around pt-[80px]">
          <div className=" lg:px-0 px-6 " >
            <h4 className="font-Poppins-Medium  text-center lg:mt-0 mt-8 lg:text-left text-[24px]">Address:</h4>
            <p className="font-Poppins-Regular text-justify text-[14px] lg:w-[318px] lg:h-[232px] mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              porttitor suspendisse dui lacus pellentesque purus eu risus in.
              Quis volutpat et pellentesque ut purus.
            </p>
          </div>
          <div>
            <h4 className="font-Poppins-Medium text-center lg:mt-0 mt-8 text-[24px]">
              Email:
            </h4>
            <p className="font-Poppins-Regular text-center text-[14px] lg:w-[318px] lg:h-[232px] mt-2">
              gospelwealthembassyint@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-Poppins-Medium text-center lg:mt-0 mt-8 lg:text-right text-[24px]">
              Phone:
            </h4>
            <p className="font-Poppins-Regular text-center lg:text-right text-[14px] lg:w-[318px] lg:h-[232px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              ullamcorper eu phasellus fringilla scelerisque metus tempus eu.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-0 h-[60vh] lg:[80vh] lg:mb-36">
        <div className="lg:-mt-16 mt-8 h-[60vh] lg:[80vh] object-cover ">
          <img src={map} alt="map" className="lg:[80vh] h-[60vh]  object-cover w-full" />
        </div>
        <p className="font-Poppins-SemiBold absolute text-[24px] bottom-5 pl-8 text-white">
          PORT HACOURT,<span className="text-[#EAA904]"> RIVERS</span>.
        </p>
      </div>
      <div className="bg-[#B83A3A] w-full h-[400px] text-white items-center justify-center lg:hidden flex flex-col lg:rounded-xl">
        <img src={phone} alt="phone" />
        <p className="font-Poppins-SemiBold text-[32px] my-4">Call Us</p>
        <p className="font-Poppins-Regular text-[15px] mb-4">
          684 west College St. Sun City, USA.
        </p>
        <p className="font-Poppins-Regular text-[15px] mb-4">
          +2349077601780
        </p>
        <p className="font-Poppins-Regular text-[15px]">
          gospelwealthembassyint@gmail.com
        </p>
      </div>
      <div className="relative h-[80vh] w-full lg:mt-0 mt-0">
        <img src={Bible} className="h-[80vh] w-full object-cover " alt="bible" />
        <div className="bg-[#B83A3A] lg:absolute w-[339px] h-[400px] text-white items-center justify-center hidden lg:flex flex-col rounded-xl -top-24 ml-20">
          <img src={phone} alt="phone" />
          <p className="font-Poppins-SemiBold text-[32px] my-4">Call Us</p>
          <p className="font-Poppins-Regular text-[15px] mb-4">
            684 west College St. Sun City, USA.
          </p>
          <p className="font-Poppins-Regular text-[15px] mb-4">
            +2349077601780
          </p>
          <p className="font-Poppins-Regular text-[15px]">
            gospelwealthembassyint@gmail.com
          </p>
        </div>
        <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center lg:ml-20 absolute lg:left-96 lg:top-32 inset-0 ">
          <p className="lg:text-[35px] text-2xl text-[#B83A3A] font-Poppins-SemiBold text-left">
            GET IN TOUCH
          </p>
          <p className="text-white lg:text-[25px] font-Poppins-Regular text-left">
            Don't hesistate to contact us
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default index;
