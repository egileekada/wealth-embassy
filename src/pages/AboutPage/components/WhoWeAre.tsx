import React from "react";
import Rectangle23 from "../../../assets/images/Rectangle 23.png";

const WhoWeAre = () => {
  return (
    <section className="items-center text-center justify-center pt-60">
      <p className="font-Poppins-Regular text-[#B83A3A] text-[24px]">
        ABOUT GOSPEL WEALTH EMBASSY
      </p>
      <p className="pb-24 text-[70px]">Who We Are</p>
      <p className="font-Poppins-Regular text-[24px] pb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, malesuada
        quis sit egestas blandit morbi. Tellus euismod est orci, ornare
        pellentesque facilisi platea pretium in. Pellentesque tortor vehicula
        dignissim ligula dapibus cursus. Nullam aliquam etiam potenti vel. Enim
        platea mattis quis vitae, non rhoncus, praesent nec. Etiam faucibus urna
        elementum aliquam porttitor convallis. Nisi mauris ultrices sit aliquam
        arcu enim, eu quis. Elit lacinia nibh justo, sollicitudin. Iaculis neque
        egestas tellus et. Facilisis nisl, molestie id arcu, dictum hendrerit
        senectus amet. Faucibus quisque mauris, mattis elit, et quis. Leo
        consequat consequat enim donec imperdiet morbi congue tortor aliquet. Id
        cursus sed enim odio volutpat odio sed turpis. Tincidunt porttitor cras
        sed lacus natoque nibh mauris. Mi ipsum, varius diam, aliquam
        ullamcorper orci egestas nunc.
      </p>

      <div className="relative">
        <div>
          <img src={Rectangle23} alt="" />
        </div>
        <div className="absolute flex items-center justify-center flex-col inset-0">
          <p className="text-white text-[48px] h-[183px] w-[1055px] pb-58">
            Mauris accumsan nulla vel diam. Sed in lacus ut enim adipising
            aliquet. nulla venenatis. In pede mi, aliquet sit amet, euismod in.
          </p>
        </div>
        <div className="absolute items-center justify-center">
          <p className=" absolute bottom-[90px] font-Poppins-Semibold text-[30px] text-center">
            Marta Healy
          </p>
          <p className="">Teacher</p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
