import React from "react";
import Footer from "../../components/Footer";
import FormComponent from "./components/FormComponent";
import HeroSection from "../../components/HeroSection";
import map from "../../assets/images/Rectangle35.png";
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
      <div className="-mt-16">
        <img src={map} alt="map" />
      </div>
      <Footer />
    </section>
  );
};

export default index;
