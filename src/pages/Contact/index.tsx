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
        <div className="flex max-w-[1200px] mx-auto justify-around pt-[80px]">
          <div>
            <h4 className="font-Poppins-Medium text-[24px]">Address:</h4>
            <p className="font-Poppins-Regular text-justify text-[14px] w-[318px] h-[232px] mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              porttitor suspendisse dui lacus pellentesque purus eu risus in.
              Quis volutpat et pellentesque ut purus.
            </p>
          </div>
          <div>
            <h4 className="font-Poppins-Medium text-center text-[24px]">
              Email:
            </h4>
            <p className="font-Poppins-Regular text-center text-[14px] w-[318px] h-[232px] mt-2">
              gospelwealthembassyint@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-Poppins-Medium text-right text-[24px]">
              Phone:
            </h4>
            <p className="font-Poppins-Regular text-right text-[14px] w-[318px] h-[232px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              ullamcorper eu phasellus fringilla scelerisque metus tempus eu.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-36">
        <div className="-mt-16">
          <img src={map} alt="map" />
        </div>
        <p className="font-Poppins-SemiBold absolute text-[24px] bottom-5 pl-8 text-white">
          PORT HACOURT,<span className="text-[#EAA904]"> RIVERS</span>.
        </p>
      </div>
      <div className="relative">
        <img src={Bible} alt="bible" />
        <div className="bg-[#B83A3A] absolute w-[339px] h-[400px] text-white items-center justify-center flex flex-col rounded-xl bottom-1/2 ml-20">
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
        <div className="flex flex-col ml-20 absolute left-96 bottom-96">
          <p className="text-[35px] text-[#B83A3A] font-Poppins-SemiBold text-left">
            GET IN TOUCH
          </p>
          <p className="text-white text-[25px] font-Poppins-Regular text-left">
            Don't hesistate to contact us
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default index;
