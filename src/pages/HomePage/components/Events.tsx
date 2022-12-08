import React from "react";
import flier1 from "../../../assets/images/Rectangle 12 (1).png";
import Date28 from "../../../assets/images/Date.png";
import flier2 from "../../../assets/images/Rectangle 12 (2).png";
import Date20 from "../../../assets/images/Date (1).png";

const Events = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-24 pt-28 bg-slate-500">
      <div className=" mb-8 ">
        <h1 className="text-white font-Poppins-SemiBold text-[45px] text-center ">UPCOMING EVENTS</h1>
        <p className="text-white text-center font-Poppins-Regular font-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nulla
          praesent sem
          <br /> morbi risus at. At etiam molestie vel cras. Mattis lectus lorem
          turpis tincidunt. Amet a.
        </p>
      </div>
      <div className="flex">
        <div className="w-[546px]  bg-white">
          <div className=" relative w-full h-[214px] " > 
            <img src={Date28} className="absolute top-[17px] left-5"  alt="date" />
            <img src={flier1} className="w-full h-full object-cover " alt="date" />
          </div>
          <div className=" p-4 " >
            <p className=" font-Poppins-Bold text-[16px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
               laoreet a sit habitasse maecenas nec scelerisque. Consequat
              tempor.
            </p>

            <p className="text-[14px] mt-2 font-Poppins-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              nisl et ultricies ullamcorper pretium faucibus dictum. Convallis
              nullam ultricies
               ultrices faucibus. Sit
               pellentesque amet ut odio nam sit id turpis sed. Aliquet
              ipsum tellus lacus risus, arcu

              tristique id sit a.
               Bibendum amet in aenean lacus, quis viverra mus. Cursus
              pulvinar aliquet dui enim
               eget sem at sed. Faucibus at in congue aliquam. Tortor,
              cras dignissim integer egestas
               nam eu. Mollis bibendum pharetra condimentum iaculis enim
              neque eu tincidunt.{" "}
            </p>
          </div>
        </div>
        <div className="w-[546px]  bg-white mx-5 relative">
          <div> 
            <img src={Date20} alt="" className="absolute  top-[17px] left-5" />
            <img src={flier2} alt="" className="w-full h-full object-cover "  />
          </div>
          <div className=" p-4 " >
            <p className=" font-Poppins-Bold text-[16px] " >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              laoreet a sit habitasse maecenas nec scelerisque. Consequat
              tempor.
            </p> 
            <p className="text-[14px] mt-2 font-Poppins-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              nisl et ultricies ullamcorper pretium faucibus dictum. Convallis
              nullam ultricies
              ultrices faucibus. Sit
              pellentesque amet ut odio nam sit id turpis sed. Aliquet
              ipsum tellus lacus risus, arcu
                            tristique id sit a.
              Bibendum amet in aenean lacus, quis viverra mus. Cursus
              pulvinar aliquet dui enim
              eget sem at sed. Faucibus at in congue aliquam. Tortor,
              cras dignissim integer egestas
              nam eu. Mollis bibendum pharetra condimentum iaculis enim
              neque eu tincidunt.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
